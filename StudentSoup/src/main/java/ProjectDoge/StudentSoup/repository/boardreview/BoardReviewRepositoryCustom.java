package ProjectDoge.StudentSoup.repository.boardreview;

import ProjectDoge.StudentSoup.dto.member.MemberMyPageBoardReviewDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BoardReviewRepositoryCustom {

    Page<MemberMyPageBoardReviewDto> findByMemberIdForMyPage(Long memberId, Pageable pageable);

    Long countByMemberId(Long memberId);
}
