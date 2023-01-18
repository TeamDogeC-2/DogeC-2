package ProjectDoge.StudentSoup.controller.board;

import ProjectDoge.StudentSoup.dto.board.BoardDto;
import ProjectDoge.StudentSoup.dto.board.BoardFormDto;
import ProjectDoge.StudentSoup.service.board.BoardCallService;
import ProjectDoge.StudentSoup.service.board.BoardResisterService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@RestController
@RequiredArgsConstructor
public class BoardCreateController {

    private  final BoardResisterService boardResisterService;

    private final BoardCallService boardCallService;

    @PostMapping("board/{memberId}")
    public BoardDto createBoard(@PathVariable Long memberId,
                                          @RequestPart(value = "boardFormDto") BoardFormDto boardFormDto,
                                          @RequestPart(value = "multipartFile") MultipartFile multipartFile){
        Long boardId = boardResisterService.join(memberId, boardFormDto, multipartFile);
        return boardCallService.getBoardDetail(boardId,memberId);
    }
}
