package ProjectDoge.StudentSoup.dto.board;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardReviewDto {
    private String  content;
    private String seq;
    private  String boardReviewId;

    public void setBoarReviewId(String boarReviewId) {
        this.boardReviewId = boarReviewId;
    }


    public void setContent(String content) {
        this.content = content;
    }

    public void setSeq(String seq) {
        this.seq = seq;
    }
}