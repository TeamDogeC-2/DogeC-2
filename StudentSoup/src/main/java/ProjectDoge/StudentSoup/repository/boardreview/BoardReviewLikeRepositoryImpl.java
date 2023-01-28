package ProjectDoge.StudentSoup.repository.boardreview;

import ProjectDoge.StudentSoup.entity.board.BoardReviewLike;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.Optional;

import static ProjectDoge.StudentSoup.entity.board.QBoardReviewLike.boardReviewLike;

@RequiredArgsConstructor
public class BoardReviewLikeRepositoryImpl implements BoardReviewLikeRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public Optional<BoardReviewLike> findBoardReviewLikeByReviewIdAndMemberId(Long memberId,Long boardReviewId){
        BoardReviewLike query= queryFactory
                .select(boardReviewLike)
                .from(boardReviewLike)
                .where(boardReviewLike.member.memberId.eq(memberId),boardReviewLike.boardReview.reviewId.eq(boardReviewId))
                .fetchOne();

        return Optional.ofNullable(query);
    }

}
