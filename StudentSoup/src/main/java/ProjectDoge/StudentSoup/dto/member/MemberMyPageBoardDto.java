package ProjectDoge.StudentSoup.dto.member;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;

@Data
public class MemberMyPageBoardDto {

    private Long boardId;
    private String writeDate;
    private int likedCount;
    private int viewCount;


    public MemberMyPageBoardDto(){
    }

    @QueryProjection
    public MemberMyPageBoardDto(Long boardId, String writeDate, int likedCount, int viewCount){
        this.boardId = boardId;
        this.writeDate = writeDate;
        this.likedCount = likedCount;
        this.viewCount = viewCount;
    }
}
