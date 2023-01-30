package ProjectDoge.StudentSoup.controller.board;

import ProjectDoge.StudentSoup.dto.board.BoardDto;
import ProjectDoge.StudentSoup.dto.board.BoardFormDto;
import ProjectDoge.StudentSoup.service.board.BoardCallService;
import ProjectDoge.StudentSoup.service.board.BoardResisterService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@RestController
@RequiredArgsConstructor
public class BoardCreateController {

    private  final BoardResisterService boardResisterService;

    private final BoardCallService boardCallService;

    @PutMapping(value = "board/{memberId}",consumes = {MediaType.APPLICATION_JSON_VALUE,MediaType.MULTIPART_FORM_DATA_VALUE})
    public ConcurrentHashMap<String,Object> createBoard(@PathVariable Long memberId,
                                         BoardFormDto boardFormDto){
        ConcurrentHashMap<String,Object> resultMap = new ConcurrentHashMap<>();
        Long boardId = boardResisterService.join(memberId, boardFormDto, boardFormDto.getMultipartFiles());
        resultMap.put("boardId",boardId);
        resultMap.put("result","ok");
        return resultMap;
    }
}
