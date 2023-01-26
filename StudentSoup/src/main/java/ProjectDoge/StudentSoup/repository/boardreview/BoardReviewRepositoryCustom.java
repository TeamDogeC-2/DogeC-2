package ProjectDoge.StudentSoup.repository.boardreview;

import ProjectDoge.StudentSoup.dto.member.MemberMyPageBoardReviewDto;
import ProjectDoge.StudentSoup.entity.board.BoardReview;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface BoardReviewRepositoryCustom {

    List<MemberMyPageBoardReviewDto> callByMemberIdForMyPage(Long memberId, Pageable pageable);
}
