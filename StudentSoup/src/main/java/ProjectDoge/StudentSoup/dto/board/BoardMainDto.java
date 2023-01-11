package ProjectDoge.StudentSoup.dto.board;

import ProjectDoge.StudentSoup.entity.board.BoardCategory;
import com.querydsl.core.annotations.QueryProjection;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardMainDto {
    private Long boardId;

    private BoardCategory boardCategory;

    private String title;

    private String updateDate;

    private int likedCount;

    public BoardMainDto(Long boardId, BoardCategory boardCategory, String title, String updateDate, int likedCount) {
        this.boardId = boardId;
        this.boardCategory = boardCategory;
        this.title = title;
        this.updateDate = updateDate;
        this.likedCount = likedCount;
    }
}
