package ProjectDoge.StudentSoup.controller.boardreview;

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
    public ResponseEntity<ConcurrentHashMap<String, Object>> registerBoardReview(BoardReviewResDto boardReviewResDto){
        ConcurrentHashMap<String,Object> resultMap = new ConcurrentHashMap<String,Object>();
        Long boardReviewId = boardReviewRegisterService.join(boardReviewResDto);
        resultMap.put("result","ok");
        resultMap.put("boardReviewId",boardReviewId);
        return  ResponseEntity.ok(resultMap);

    }
}
