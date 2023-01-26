package ProjectDoge.StudentSoup.dto.board;


import ProjectDoge.StudentSoup.entity.board.BoardReview;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardReviewUpdateDto {

    private Long boardReviewId;
    private Long boardId;

    private Long memberId;

    private  String content;


    public BoardReviewUpdateDto createBoardReviewUpdateDto(BoardReview boardReview) {
        this.boardReviewId = boardReview.getReviewId();
        this.boardId = boardReview.getBoard().getId();
        this.memberId = boardReview.getMember().getMemberId();
        this.content = boardReview.getContent();
    return  this;
    }
}
