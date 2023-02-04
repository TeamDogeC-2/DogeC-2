package ProjectDoge.StudentSoup.controller.boardreview;

import ProjectDoge.StudentSoup.dto.board.BoardReviewUpdateDto;
import ProjectDoge.StudentSoup.service.BoardReview.BoardReviewEditService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@RestController
@RequiredArgsConstructor
public class BoardReviewUpdateController {
    public final BoardReviewEditService boardReviewEditService;

    @GetMapping("boardReview/{boardReviewId}/{memberId}")
    public BoardReviewUpdateDto editBoardReview(@PathVariable Long boardReviewId,@PathVariable Long memberId){
        BoardReviewUpdateDto editBoardReview = boardReviewEditService.findEditBoardReview(boardReviewId, memberId);
        return editBoardReview;
    }

    @PatchMapping("/boardReview/{boardReviewId}")
    public ConcurrentHashMap<String, Object> editBoardReview(@PathVariable Long boardReviewId, BoardReviewUpdateDto boardReviewUpdateDto){
        ConcurrentHashMap<String,Object> resultMap = new ConcurrentHashMap<>();
        Long reviewId = boardReviewEditService.editBoardReview(boardReviewUpdateDto, boardReviewId);
        resultMap.put("boardReviewId",reviewId);
        resultMap.put("result","ok");
        return resultMap;
    }

}
