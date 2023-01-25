package ProjectDoge.StudentSoup.dto.board;

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


}