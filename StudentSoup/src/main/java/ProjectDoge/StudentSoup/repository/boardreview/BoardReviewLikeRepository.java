package ProjectDoge.StudentSoup.repository.boardreview;

import ProjectDoge.StudentSoup.entity.board.BoardReviewLike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardReviewLikeRepository extends JpaRepository<BoardReviewLike,Long>, BoardReviewLikeRepositoryCustom {


}
