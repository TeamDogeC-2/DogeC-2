package ProjectDoge.StudentSoup.repository.boardreview;

import ProjectDoge.StudentSoup.entity.board.BoardReview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardReviewRepository extends JpaRepository<BoardReview,Long>,BoardReviewRepositoryCustom {
}
