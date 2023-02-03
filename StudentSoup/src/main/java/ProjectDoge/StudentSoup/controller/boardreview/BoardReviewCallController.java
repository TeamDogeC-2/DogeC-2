package ProjectDoge.StudentSoup.controller.boardreview;

import ProjectDoge.StudentSoup.service.BoardReview.BoardReviewCallService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@RestController
@RequiredArgsConstructor
public class BoardReviewCallController {

    private final BoardReviewCallService boardReviewCallService;

    @GetMapping("/boardReviews/{boardId}/{memberId}")
    public ConcurrentHashMap<String,Object> callBoard(@PathVariable Long memberId, @PathVariable Long boardId){
        ConcurrentHashMap<String, Object> resultMap = boardReviewCallService.callBoardReview(memberId, boardId);
        return resultMap;
    }

}
