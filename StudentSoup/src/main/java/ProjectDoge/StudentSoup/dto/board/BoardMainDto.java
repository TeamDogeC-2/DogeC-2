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

    private String writeDate;

    private String nickname;
    private int view;
    private int likedCount;

    public BoardMainDto(Board board) {
        this.boardId = board.getId();
        this.boardCategory = board.getBoardCategory();
        this.title = board.getTitle();
        this.writeDate = board.getWriteDate();
        this.likedCount = board.getLikedCount();
        this.view = board.getView();
        this.nickname = board.getMember().getNickname();
    }
    @QueryProjection
    public BoardMainDto(Long boardId, BoardCategory boardCategory, String title, String writeDate, String nickname, int view, int likedCount) {
        this.boardId = boardId;
        this.boardCategory = boardCategory;
        this.title = title;
        this.writeDate = writeDate;
        this.nickname = nickname;
        this.view = view;
        this.likedCount = likedCount;
    }

}
