package ProjectDoge.StudentSoup.controller.board;

import ProjectDoge.StudentSoup.dto.board.BoardDto;
import ProjectDoge.StudentSoup.dto.board.BoardFormDto;
import ProjectDoge.StudentSoup.dto.board.BoardUpdateDto;
import ProjectDoge.StudentSoup.service.board.BoardUpdateService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@RestController
@RequiredArgsConstructor
public class BoardUpdateController {
    private final BoardUpdateService boardUpdateService;

    @GetMapping("board/update/{boardId}")
    public BoardUpdateDto updateBoard(@PathVariable Long boardId){
        BoardUpdateDto boardUpdateDto = boardUpdateService.editBoard(boardId);
        return boardUpdateDto;
    }
    @PutMapping("board/{boardId}/{memberId}")
    public BoardDto updateBoard(@PathVariable Long boardId,
                                @PathVariable Long memberId,
                                @RequestPart BoardFormDto boardFormDto,
                                @RequestPart MultipartFile multipartFile){
        BoardDto boardDto = boardUpdateService.editBoard(boardFormDto, boardId, memberId, multipartFile);
        return boardDto;
    }
}
