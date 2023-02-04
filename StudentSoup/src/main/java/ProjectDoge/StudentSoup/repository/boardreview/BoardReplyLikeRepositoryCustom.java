package ProjectDoge.StudentSoup.repository.boardreview;

import ProjectDoge.StudentSoup.entity.board.BoardReplyLike;

import java.util.Optional;

public interface BoardReplyLikeRepositoryCustom {

    Optional<BoardReplyLike> findBoardReplyLikeByReplyIdAndMemberId(Long memberId, Long boardReplyId);

}
