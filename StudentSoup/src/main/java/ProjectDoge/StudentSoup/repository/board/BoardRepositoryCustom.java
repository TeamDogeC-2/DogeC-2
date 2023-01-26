package ProjectDoge.StudentSoup.repository.board;

import ProjectDoge.StudentSoup.dto.board.BoardMainDto;
import ProjectDoge.StudentSoup.dto.member.MemberMyPageBoardDto;
import ProjectDoge.StudentSoup.entity.board.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface BoardRepositoryCustom {

    List<Board> findBySchoolId(Long schoolId);

    Board findByTitle(String title);

    Page<BoardMainDto> orderByCategory(Long schoolId, Long departmentId, String category, int sorted, Pageable pageable,String column,String value);

    Optional<BoardMainDto>  findAnnouncement();

    List<BoardMainDto> findLiveBestAndHotBoards(Long schoolId, LocalDateTime searchTime,LocalDateTime endDateTime);

    List<BoardMainDto> findBestTipBoards(Long schoolId);

    Page<MemberMyPageBoardDto> findByMemberIdForMyPage(Long memberId, Pageable pageable);

    Long countByMemberId(Long memberId);
}
