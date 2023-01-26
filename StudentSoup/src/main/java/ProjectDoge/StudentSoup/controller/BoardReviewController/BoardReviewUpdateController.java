package ProjectDoge.StudentSoup.controller.BoardReviewController;

import ProjectDoge.StudentSoup.dto.board.BoardReviewDto;
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

    @PostMapping("boardReview/{boardReviewId}/{memberId}")
    public BoardReviewUpdateDto editBoardReview(@PathVariable Long boardReviewId,@PathVariable Long memberId){
        BoardReviewUpdateDto editBoardReview = boardReviewEditService.findEditBoardReview(boardReviewId, memberId);
        return editBoardReview;
    }

    @PatchMapping("/boardReview/{boardReviewId}")
    public BoardReviewDto editBoardReview(@PathVariable Long boardReviewId, BoardReviewUpdateDto boardReviewUpdateDto){
        BoardReviewDto boardReviewDto = boardReviewEditService.editBoardReview(boardReviewUpdateDto, boardReviewId);
        return boardReviewDto;
    }

}
