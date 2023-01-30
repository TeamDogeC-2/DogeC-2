package ProjectDoge.StudentSoup.repository.boardreview;

import ProjectDoge.StudentSoup.entity.board.BoardReviewLike;

import java.util.Optional;

public interface BoardReviewLikeRepositoryCustom {

    Optional<BoardReviewLike> findBoardReviewLikeByReviewIdAndMemberId(Long memberId, Long boardReviewId);

}
