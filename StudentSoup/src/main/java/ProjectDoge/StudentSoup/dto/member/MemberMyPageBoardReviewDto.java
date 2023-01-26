package ProjectDoge.StudentSoup.dto.member;

import ProjectDoge.StudentSoup.entity.board.QBoardReview;
import com.querydsl.core.Tuple;
import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;

import java.util.List;

@Data
public class MemberMyPageBoardReviewDto {

    private Long boardId;
    private String content;
    private String writeDate;
    private int likedCount;

    public MemberMyPageBoardReviewDto(){
    }

    @QueryProjection
    public MemberMyPageBoardReviewDto(Long boardId, String content, String writeDate, int likedCount){
        this.boardId = boardId;
        this.content = content;
        this.writeDate = writeDate;
        this.likedCount = likedCount;
    }
}
