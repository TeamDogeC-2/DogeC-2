package ProjectDoge.StudentSoup.controller.boardreview;

import ProjectDoge.StudentSoup.service.BoardReview.BoardReviewLikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequiredArgsConstructor
public class BoardReviewLikeController {

    private final BoardReviewLikeService boardReviewLikeService;

    @PostMapping("/boardReviewLike/{boardReviewId}/{memberId}/like")
    public ConcurrentHashMap<String,Object> getBoardReviewLike(@PathVariable Long memberId,@PathVariable Long boardReviewId){
        ConcurrentHashMap<String, Object> resultMap = boardReviewLikeService.boardReviewLike(memberId, boardReviewId);
        return resultMap;
    }
}
