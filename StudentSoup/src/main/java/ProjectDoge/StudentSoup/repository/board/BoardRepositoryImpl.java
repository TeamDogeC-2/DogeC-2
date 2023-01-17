package ProjectDoge.StudentSoup.repository.board;



import ProjectDoge.StudentSoup.dto.board.BoardSortedCase;
import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.board.BoardCategory;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static ProjectDoge.StudentSoup.entity.board.QBoard.board;
import static ProjectDoge.StudentSoup.entity.member.QMember.member;
import static ProjectDoge.StudentSoup.entity.school.QDepartment.department;
import static ProjectDoge.StudentSoup.entity.school.QSchool.school;

@RequiredArgsConstructor
public class BoardRepositoryImpl implements BoardRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    @Override
    public List<Board> findBySchoolId(Long schoolId){
        List<Board> query= queryFactory.
                select(board)
                .from(board)
                .leftJoin(board.school,school)
                .fetchJoin()
                .leftJoin(board.member,member)
                .fetchJoin()
                .where(board.school.id.eq(schoolId))
                .fetch();

    return query;
    }

    //더미 데이터용
    //추후에 카테고리별 검색 쿼리로 리팩토링
    @Override
    public Board findByTitle(String title){
        Board query = queryFactory.
                select(board)
                .from(board)
                .where(board.title.eq(title))
                .fetchOne();
        return query;
    }
    @Override
    public List<Board> orderByCategory(Long schoolId,Long departmentId,String category,int sorted){
        List<Board> query = queryFactory
                .select(board)
                .from(board)
                .leftJoin(board.school,school)
                .fetchJoin()
                .leftJoin(board.department,department)
                .fetchJoin()
                .where(board.school.id.eq(schoolId),
                        checkDepartment(departmentId),
                        checkSortedBoard(category),
                        checkSortedLiked(sorted))
                .orderBy(checkSortedCondition(sorted))
                .fetch();
        return query;
    }

    private BooleanExpression checkDepartment(Long departmentId) {
        if(departmentId == null){
            return null;
        }
        return board.department.id.eq(departmentId);
    }

    private BooleanExpression checkSortedBoard(String category) {
        if(category.equals("ALL")){
            return null;
        }
        return board.boardCategory.eq(BoardCategory.valueOf(category));
    }

    private BooleanExpression checkSortedLiked(int sorted) {
        if(BoardSortedCase.MORETHANFIVELIKED.getValue() == sorted){
            return board.likedCount.gt(5);
        }
        return null;
    }


    private OrderSpecifier<?> checkSortedCondition(int sorted) {
        if(BoardSortedCase.LIKED.getValue() == sorted){
            return board.likedCount.desc();
        }
        return board.updateDate.asc();
    }



}
