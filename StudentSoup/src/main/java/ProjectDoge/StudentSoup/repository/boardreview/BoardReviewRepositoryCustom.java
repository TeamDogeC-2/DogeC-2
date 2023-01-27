package ProjectDoge.StudentSoup.repository.boardreview;

import ProjectDoge.StudentSoup.dto.board.BoardReviewDto;
import ProjectDoge.StudentSoup.dto.member.MemberMyPageBoardReviewDto;
import ProjectDoge.StudentSoup.entity.board.BoardReview;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface BoardReviewRepositoryCustom {

    Page<MemberMyPageBoardReviewDto> findByMemberIdForMyPage(Long memberId, Pageable pageable);

    Long countByMemberId(Long memberId);
    List<BoardReview> findByBoardId(Long boardId, Pageable pageable);

    JPAQuery<Long> pagingCountByBoardId(Long boardId);
    List<BoardReviewDto> findBestReview(Long boardId);
}
