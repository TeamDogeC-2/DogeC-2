package ProjectDoge.StudentSoup.dto.member;

import ProjectDoge.StudentSoup.entity.board.QBoardReview;
import com.querydsl.core.Tuple;
import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;

import java.util.List;

@Data
public class MemberMyPageBoardReviewDto {

    private String content;
    private String writeDate;
    private int likedCount;

    public MemberMyPageBoardReviewDto(){
    }

    @QueryProjection
    public MemberMyPageBoardReviewDto(String content, String writeDate, int likedCount){
        this.content = content;
        this.writeDate = writeDate;
        this.likedCount = likedCount;
    }
}
