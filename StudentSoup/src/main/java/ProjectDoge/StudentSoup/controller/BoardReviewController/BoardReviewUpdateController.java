package ProjectDoge.StudentSoup.controller.BoardReviewController;

import ProjectDoge.StudentSoup.dto.board.BoardReviewUpdateDto;
import ProjectDoge.StudentSoup.service.BoardReview.BoardReviewEditService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
public class BoardReviewUpdateController {
    public final BoardReviewEditService boardReviewEditService;

    @PostMapping("boardReview")
    public BoardReviewUpdateDto editBoardReview(@PathVariable Long boardReviewId,@PathVariable Long memberId){
        BoardReviewUpdateDto editBoardReview = boardReviewEditService.findEditBoardReview(boardReviewId, memberId);
        return editBoardReview;
    }

}
