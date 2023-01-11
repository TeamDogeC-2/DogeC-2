package ProjectDoge.StudentSoup.repository.board;

import ProjectDoge.StudentSoup.dto.board.BoardMainDto;

import java.util.List;

public interface BoardRepositoryCustom {

    List<BoardMainDto> findBySchoolId(Long schoolId);
}
