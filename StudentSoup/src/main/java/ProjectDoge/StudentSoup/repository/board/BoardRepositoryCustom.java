package ProjectDoge.StudentSoup.repository.board;

import ProjectDoge.StudentSoup.dto.board.BoardMainDto;
import ProjectDoge.StudentSoup.entity.board.Board;

import java.util.List;

public interface BoardRepositoryCustom {

    List<Board> findBySchoolId(Long schoolId);

    Board findByTitle(String title);
}
