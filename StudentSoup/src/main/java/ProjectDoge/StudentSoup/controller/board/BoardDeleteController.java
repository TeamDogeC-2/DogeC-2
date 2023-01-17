package ProjectDoge.StudentSoup.controller.board;

import ProjectDoge.StudentSoup.repository.board.BoardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class BoardDeleteController {
    private final BoardRepository boardRepository;

    @DeleteMapping("board/{boardId}")
    public void deleteBoard(@PathVariable Long boardId){
        boardRepository.deleteById(boardId);
    }
}
