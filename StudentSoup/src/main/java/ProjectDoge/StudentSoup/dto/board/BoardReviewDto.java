package ProjectDoge.StudentSoup.dto.board;

import ProjectDoge.StudentSoup.entity.board.BoardReview;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardReviewDto {

    private Long boardReviewId;

    private String  content;

    private int likeCount;

    private int seq;

    private int depth;

    private int level;

    public BoardReviewDto createBoardReviewDto(BoardReview boardReview) {
        this.boardReviewId = boardReview.getReviewId();
        this.content = boardReview.getContent();
        this.likeCount = boardReview.getLikedCount();
        this.seq = boardReview.getSeq();
        this.depth = boardReview.getDepth();
        this.level = boardReview.getLevel();
        return this;
    }

}