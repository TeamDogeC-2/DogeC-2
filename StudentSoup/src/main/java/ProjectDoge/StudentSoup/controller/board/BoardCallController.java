package ProjectDoge.StudentSoup.controller.board;

import ProjectDoge.StudentSoup.dto.board.BoardDto;
import ProjectDoge.StudentSoup.dto.board.BoardMainDto;
import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.service.board.BoardCallService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@Slf4j
@RestController
@RequiredArgsConstructor
public class BoardCallController {
    private final BoardCallService boardCallService;

    @GetMapping("/boards")
    public List<BoardMainDto> firstCallBoard(@RequestBody Map<String,Long> map){
        return  boardCallService.getBoardInSchool(map.get("schoolId"),map.get("memberId"));
    }

    @PostMapping("/board/{boardId}/{memberId}")
    public BoardDto clickBoard(@PathVariable Long boardId,@PathVariable Long memberId){
        return  boardCallService.getBoardDetail(boardId,memberId);
    }
}
