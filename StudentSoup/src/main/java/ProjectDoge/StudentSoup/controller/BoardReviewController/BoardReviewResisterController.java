package ProjectDoge.StudentSoup.controller.BoardReviewController;

import ProjectDoge.StudentSoup.dto.board.BoardReviewResDto;
import ProjectDoge.StudentSoup.service.BoardReview.BoardReviewRegisterService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@RestController
@RequiredArgsConstructor
public class BoardReviewResisterController {

    private final BoardReviewRegisterService boardReviewRegisterService;

    @PutMapping("/boardReview")
    public ResponseEntity<ConcurrentHashMap<String, String>> registerBoardReview(BoardReviewResDto boardReviewResDto){
        ConcurrentHashMap<String,String> resultMap = new ConcurrentHashMap<String,String>();
        boardReviewRegisterService.join(boardReviewResDto);
        resultMap.put("result","ok");
        return  ResponseEntity.ok(resultMap);

    }
}
