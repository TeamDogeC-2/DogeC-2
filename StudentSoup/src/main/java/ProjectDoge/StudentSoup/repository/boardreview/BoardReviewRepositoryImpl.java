package ProjectDoge.StudentSoup.repository.boardreview;


import ProjectDoge.StudentSoup.dto.board.BoardReviewDto;
import ProjectDoge.StudentSoup.dto.member.MemberMyPageBoardReviewDto;
import ProjectDoge.StudentSoup.dto.member.QMemberMyPageBoardReviewDto;
import ProjectDoge.StudentSoup.entity.board.BoardReview;
import ProjectDoge.StudentSoup.entity.board.QBoardReview;
import com.querydsl.core.Tuple;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;

import java.util.List;

import static ProjectDoge.StudentSoup.entity.board.QBoard.board;
import static ProjectDoge.StudentSoup.entity.board.QBoardReview.boardReview;

@RequiredArgsConstructor
public class BoardReviewRepositoryImpl implements BoardReviewRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public Page<MemberMyPageBoardReviewDto> findByMemberIdForMyPage(Long memberId, Pageable pageable) {

        List<MemberMyPageBoardReviewDto> content = queryFactory.select(new QMemberMyPageBoardReviewDto(
                        boardReview.board.id, boardReview.content, boardReview.writeDate, boardReview.likedCount))
                .from(boardReview)
                .where(boardReview.member.memberId.eq(memberId))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .orderBy(boardReview.writeDate.desc())
                .fetch();

        JPAQuery<Long> count = queryFactory.select(boardReview.count())
                .from(boardReview)
                .where(boardReview.member.memberId.eq(memberId));

        return PageableExecutionUtils.getPage(content, pageable, count::fetchOne);
    }

    @Override
    public Long countByMemberId(Long memberId) {
        return queryFactory.select(boardReview.count())
                .from(boardReview)
                .where(boardReview.member.memberId.eq(memberId))
                .fetchOne();
    }
    @Override
    public List<BoardReview> findByBoardId(Long boardId,Pageable pageable){
        List<BoardReview> query= queryFactory
                .select(boardReview)
                .from(boardReview)
                .leftJoin(boardReview.board,board)
                .fetchJoin()
                .where(boardReview.board.id.eq(boardId))
                .orderBy(boardReview.seq.asc(),boardReview.depth.asc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

                return  query;
    }

    @Override
    public JPAQuery<Long> pagingCountByBoardId(Long boardId){
        return  queryFactory
                .select(boardReview.count())
                .from(boardReview)
                .where(boardReview.board.id.eq(boardId));
    }
    @Override
    public List<BoardReview> findBestReview(Long boardId){
        List<BoardReview> query= queryFactory
                .select(boardReview)
                .from(boardReview)
                .leftJoin(boardReview.board,board)
                .fetchJoin()
                .where(boardReview.board.id.eq(boardId),boardReview.likedCount.gt(10))
                .orderBy(boardReview.writeDate.desc())
                .offset(0)
                .limit(3)
                .fetch();

        return query;
    }
    @Override
    public List<BoardReview> findBySeq(int seq){
        List<BoardReview> query = queryFactory
                .select(boardReview)
                .from(boardReview)
                .where(boardReview.seq.eq(seq))
                .orderBy(boardReview.depth.desc())
                .fetch();
        return query;
    }
}
