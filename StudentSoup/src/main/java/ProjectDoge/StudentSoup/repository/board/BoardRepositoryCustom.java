package ProjectDoge.StudentSoup.repository.board;

import ProjectDoge.StudentSoup.dto.board.BoardMainDto;
import ProjectDoge.StudentSoup.entity.board.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface BoardRepositoryCustom {

    List<Board> findBySchoolId(Long schoolId);

    Board findByTitle(String title);

    Page<BoardMainDto> orderByCategory(Long schoolId, Long departmentId, String category, int sorted, Pageable pageable);

    List<Board> findByDynamicSearch(Long schoolId,String category,String column, String value);
}
