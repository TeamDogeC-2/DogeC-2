package ProjectDoge.StudentSoup.repository.board;

import ProjectDoge.StudentSoup.dto.board.BoardMainDto;
import ProjectDoge.StudentSoup.dto.board.BoardSortedCase;
import ProjectDoge.StudentSoup.dto.board.QBoardMainDto;
import ProjectDoge.StudentSoup.dto.member.MemberMyPageBoardDto;
import ProjectDoge.StudentSoup.dto.member.QMemberMyPageBoardDto;
import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.board.BoardCategory;
import com.querydsl.core.types.Expression;
import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.CaseBuilder;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.NumberExpression;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import static ProjectDoge.StudentSoup.entity.board.QBoard.board;
import static ProjectDoge.StudentSoup.entity.member.QMember.member;
import static ProjectDoge.StudentSoup.entity.school.QSchool.school;

@RequiredArgsConstructor
public class BoardRepositoryImpl implements BoardRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    @Override
    public List<Board> findBySchoolId(Long schoolId) {
        List<Board> query = queryFactory.
                select(board)
                .from(board)
                .leftJoin(board.school, school)
                .fetchJoin()
                .leftJoin(board.member, member)
                .fetchJoin()
                .where(board.school.id.eq(schoolId))
                .fetch();

        return query;
    }

    //더미 데이터용
    //추후에 카테고리별 검색 쿼리로 리팩토링
    @Override
    public Board findByTitle(String title) {
        Board query = queryFactory.
                select(board)
                .from(board)
                .where(board.title.eq(title))
                .fetchOne();
        return query;
    }

    @Override
    public Page<BoardMainDto> orderByCategory(Long schoolId,
                                              Long departmentId,
                                              String category,
                                              int sorted,
                                              Pageable pageable,
                                              String column,
                                              String value) {
        List<BoardMainDto> query = queryFactory
                .select(new QBoardMainDto(board.id,
                        board.boardCategory,
                        board.title,
                        board.writeDate,
                        board.member.nickname,
                        board.view,
                        board.likedCount,
                        board.authentication))
                .from(board)
                .where(
                        checkAnnouncement().or(checkSortedBoard(category))
                                .and(checkTypeOfBoard(schoolId, departmentId))
                                .and(checkSortedLiked(sorted))
                                .and(searchColumnContainsTitle(column, value))
                                .and(searchColumnContainsContent(column, value))
                                .and(searchColumnContainsNickname(column, value))
                )
                .orderBy(priorOrderAnnouncement(), priorTipBest(), checkSortedCondition(sorted))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        JPQLQuery<Long> count = queryFactory
                .select(board.count())
                .from(board)
                .where(checkAnnouncement().or(checkSortedBoard(category))
                        .and(checkTypeOfBoard(schoolId, departmentId))
                        .and(checkSortedLiked(sorted))
                        .and(searchColumnContainsTitle(column, value))
                        .and(searchColumnContainsContent(column, value))
                        .and(searchColumnContainsNickname(column, value)));

        return PageableExecutionUtils.getPage(query, pageable, count::fetchOne);
    }

    @Override
    public List<BoardMainDto> findLiveBestAndHotBoards(Long schoolId, LocalDateTime searchDate, LocalDateTime EndDate) {
        List<BoardMainDto> query = queryFactory
                .select(new QBoardMainDto(board.id,
                        board.boardCategory,
                        board.title,
                        board.writeDate,
                        board.member.nickname,
                        board.view,
                        board.likedCount,
                        board.authentication))
                .from(board)
                .where(board.school.id.eq(schoolId),
                        board.likedCount.goe(10),
                        board.writeDate.between(searchDate.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm")),
                                EndDate.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"))))
                .offset(0)
                .limit(5)
                .fetch();
        return query;
    }

    @Override
    public List<BoardMainDto> findBestTipBoards(Long schoolId) {
        List<BoardMainDto> query = queryFactory
                .select(new QBoardMainDto(board.id,
                        board.boardCategory,
                        board.title,
                        board.writeDate,
                        board.member.nickname,
                        board.view,
                        board.likedCount,
                        board.authentication))
                .from(board)
                .where(board.school.id.eq(schoolId),
                        board.boardCategory.eq(BoardCategory.TIP))
                .orderBy(board.likedCount.desc(), board.writeDate.desc())
                .offset(0)
                .limit(4)
                .fetch();
        return query;
    }

    private BooleanExpression searchColumnContainsTitle(String column, String value) {
        if (column != null && column.equals("title")) {
            return board.title.contains(value);
        }
        return null;
    }

    private BooleanExpression searchColumnContainsContent(String column, String value) {
        if (column != null && column.equals("content")) {
            return board.content.contains(value);
        }
        return null;
    }

    private BooleanExpression searchColumnContainsNickname(String column, String value) {
        if (column != null && column.equals("nickname")) {
            return board.member.nickname.contains(value);
        }
        return null;
    }


    private BooleanExpression checkTypeOfBoard(Long schoolId, Long departmentId) {
        BooleanExpression findBySchool = board.school.id.eq(schoolId);
        BooleanExpression findByDepartment = board.department.id.eq(departmentId);
        if (departmentId == null) {
            return findBySchool;
        }

        return Expressions.allOf(findBySchool, findByDepartment);
    }

    private BooleanExpression checkSortedBoard(String category) {
        if (category.equals("ALL")) {
            return board.boardCategory.ne(BoardCategory.ANNOUNCEMENT);
        } else if (category.equals("CONSULTING") || category.equals("EMPLOYMENT")) {
            BooleanExpression searchCategory = board.boardCategory.eq(BoardCategory.CONSULTING);
            BooleanExpression searchCategory1 = board.boardCategory.eq(BoardCategory.EMPLOYMENT);
            return Expressions.anyOf(searchCategory, searchCategory1);
        }
        return board.boardCategory.eq(BoardCategory.valueOf(category));
    }

    private BooleanExpression checkAnnouncement() {
        BooleanExpression categoryCond1 = board.boardCategory.eq(BoardCategory.ANNOUNCEMENT);
        BooleanExpression categoryCond2 = board.isView.eq("Y");
        return Expressions.allOf(categoryCond1, categoryCond2);
    }

    private BooleanExpression checkSortedLiked(int sorted) {
        if (BoardSortedCase.MORETHANFIVELIKED.getValue() == sorted) {
            return board.likedCount.goe(5);
        }
        return null;
    }


    private OrderSpecifier<?> checkSortedCondition(int sorted) {
        if (BoardSortedCase.LIKED.getValue() == sorted) {
            return board.likedCount.desc();
        } else if (BoardSortedCase.REVIEW.getValue() == sorted) {
            return board.boardReviews.size().desc();
        } else if (BoardSortedCase.VIEW.getValue() == sorted) {
            return board.view.desc();
        }
        return board.writeDate.desc();
    }

    private OrderSpecifier<?> priorOrderAnnouncement() {
        NumberExpression<Integer> cases = new CaseBuilder()
                .when(board.boardCategory.eq(BoardCategory.ANNOUNCEMENT))
                .then(1)
                .otherwise(2);

        return new OrderSpecifier<>(Order.ASC, cases);
    }

    private OrderSpecifier<?> priorTipBest() {
        NumberExpression<Integer> cases = new CaseBuilder()
                .when(board.authentication.eq("Y"))
                .then(1)
                .otherwise(2);

        return new OrderSpecifier<>(Order.ASC, cases);
    }

    @Override
    public Page<MemberMyPageBoardDto> findByMemberIdForMyPage(Long memberId, Pageable pageable) {

        List<MemberMyPageBoardDto> content = queryFactory.select(new QMemberMyPageBoardDto(board.id, board.writeDate, board.likedCount, board.view))
                .from(board)
                .where(board.member.memberId.eq(memberId))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .orderBy(board.writeDate.desc())
                .fetch();

        JPAQuery<Long> count = queryFactory
                .select(board.count())
                .from(board)
                .where(board.member.memberId.eq(memberId));

        return PageableExecutionUtils.getPage(content, pageable, count::fetchOne);
    }

    @Override
    public Long countByMemberId(Long memberId) {
        return queryFactory.select(board.count())
                .from(board)
                .where(board.member.memberId.eq(memberId))
                .fetchOne();

    }


}
