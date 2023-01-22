package ProjectDoge.StudentSoup.repository.board;

import ProjectDoge.StudentSoup.dto.board.BoardMainDto;
import ProjectDoge.StudentSoup.entity.board.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface BoardRepositoryCustom {

    List<Board> findBySchoolId(Long schoolId);

    Board findByTitle(String title);

    Page<BoardMainDto> orderByCategory(Long schoolId, Long departmentId, String category, int sorted, Pageable pageable);

    Page<BoardMainDto> findByDynamicSearch(Long schoolId,String category,String column, String value,Pageable pageable);

    Optional<BoardMainDto>  findAnnouncement();

    List<BoardMainDto> findLiveBestBoards(Long schoolId, LocalDateTime searchTime,LocalDateTime endDateTime);


}
