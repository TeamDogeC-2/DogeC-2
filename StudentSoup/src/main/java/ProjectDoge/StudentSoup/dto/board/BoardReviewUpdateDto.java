package ProjectDoge.StudentSoup.dto.board;


import ProjectDoge.StudentSoup.entity.board.BoardReview;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardReviewUpdateDto {


    private Long boardId;

    private Long memberId;

    private  String content;

    private int seq;

    private int depth;

    private int level;

    public BoardReviewUpdateDto createBoardReviewUpdateDto(BoardReview boardReview) {
        this.boardId = boardReview.getBoard().getId();
        this.memberId = boardReview.getMember().getMemberId();
        this.content = boardReview.getContent();
        this.seq = boardReview.getSeq();
        this.depth = boardReview.getDepth();
        this.level = boardReview.getLevel();
    return  this;
    }
}
