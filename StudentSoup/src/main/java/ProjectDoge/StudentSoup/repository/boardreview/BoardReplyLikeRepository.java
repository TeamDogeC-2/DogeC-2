package ProjectDoge.StudentSoup.repository.boardreview;

import ProjectDoge.StudentSoup.entity.board.BoardReplyLike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardReplyLikeRepository extends JpaRepository<BoardReplyLike,Long>, BoardReplyLikeRepositoryCustom {


}
