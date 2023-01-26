package ProjectDoge.StudentSoup.service.BoardReview;


import ProjectDoge.StudentSoup.dto.board.BoardReviewDto;
import ProjectDoge.StudentSoup.dto.board.BoardReviewResDto;
import ProjectDoge.StudentSoup.dto.board.BoardReviewUpdateDto;
import ProjectDoge.StudentSoup.entity.board.BoardReview;
import ProjectDoge.StudentSoup.exception.board.BoardReviewNotOwnException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class BoardReviewEditService {

    private final  BoardReviewFindService boardReviewFindService;

    public BoardReviewUpdateDto findEditBoardReview(Long boardReviewId,Long memberId){
        BoardReview boardReview = boardReviewFindService.findOne(boardReviewId);
        checkBoardReviewOwn(memberId, boardReview);
        BoardReviewUpdateDto boardReviewUpdateDto = new BoardReviewUpdateDto().createBoardReviewUpdateDto(boardReview);
        return  boardReviewUpdateDto;
    }

    private void checkBoardReviewOwn(Long memberId, BoardReview boardReview) {
        if (boardReview.getMember().getMemberId() != memberId){
            throw  new BoardReviewNotOwnException("해당 리뷰는 해당 회원이 작성한 리뷰가 아닙니다.");
        }
    }

}
