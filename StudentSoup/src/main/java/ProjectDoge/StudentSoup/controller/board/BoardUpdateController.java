package ProjectDoge.StudentSoup.controller.board;

import ProjectDoge.StudentSoup.dto.board.BoardDto;
import ProjectDoge.StudentSoup.dto.board.BoardFormDto;
import ProjectDoge.StudentSoup.dto.board.BoardUpdateDto;
import ProjectDoge.StudentSoup.service.board.BoardUpdateService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@RestController
@RequiredArgsConstructor
public class BoardUpdateController {
    private final BoardUpdateService boardUpdateService;

    @GetMapping("board/update/{boardId}")
    public BoardUpdateDto updateBoard(@PathVariable Long boardId){
        BoardUpdateDto boardUpdateDto = boardUpdateService.findEditBoard(boardId);
        return boardUpdateDto;
    }
    @PutMapping("board/{boardId}/{memberId}")
    public ConcurrentHashMap<String,Object> updateBoard(@PathVariable Long boardId,
                                         @PathVariable Long memberId,
                                         BoardFormDto boardFormDto
                            ){
        ConcurrentHashMap<String,Object> resultMap = new ConcurrentHashMap<>();
        boardUpdateService.editBoard(boardFormDto, boardId, memberId, boardFormDto.getMultipartFiles());
        resultMap.put("boardId",boardId);
        resultMap.put("result","ok");
        return resultMap;
    }
}
