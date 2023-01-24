package ProjectDoge.StudentSoup.dto.board;

import ProjectDoge.StudentSoup.entity.board.Board;
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

    private String nickName;
    private int view;
    private int likedCount;

    public BoardMainDto(Board board) {
        this.boardId = board.getId();
        this.boardCategory = board.getBoardCategory();
        this.title = board.getTitle();
        this.updateDate = board.getUpdateDate();
        this.likedCount = board.getLikedCount();
        this.view = board.getView();
        this.nickName = board.getMember().getNickname();
    }
    @QueryProjection
    public BoardMainDto(Long boardId, BoardCategory boardCategory, String title, String updateDate, String nickName, int view, int likedCount) {
        this.boardId = boardId;
        this.boardCategory = boardCategory;
        this.title = title;
        this.updateDate = updateDate;
        this.nickName = nickName;
        this.view = view;
        this.likedCount = likedCount;
    }

}
