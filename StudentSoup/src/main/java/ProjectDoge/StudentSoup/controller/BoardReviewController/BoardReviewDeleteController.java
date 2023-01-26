package ProjectDoge.StudentSoup.controller.BoardReviewController;

import ProjectDoge.StudentSoup.service.BoardReview.BoardReviewDeleteService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@RestController
@RequiredArgsConstructor
public class BoardReviewDeleteController {
    private  final BoardReviewDeleteService boardReviewDeleteService;

    @DeleteMapping("/boardReview/{boardReviewId}/{memberId}")
    public ConcurrentHashMap<String,Object> deleteBoardReview(@PathVariable Long boardReviewId,@PathVariable Long memberId){
        ConcurrentHashMap<String, Object> resultMap = boardReviewDeleteService.deleteBoardReview(boardReviewId, memberId);
        return resultMap;
    }
}
