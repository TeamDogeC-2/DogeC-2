package ProjectDoge.StudentSoup.dto.board;

import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.board.BoardCategory;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class BoardFormDto {
    private String title;
    private BoardCategory boardCategory;
    private String content;


    //== 생성 메서드 ==//
    private void setBoard(Board board){
        this.setTitle(board.getTitle());
        this.setBoardCategory(board.getBoardCategory());
        this.setContent(board.getContent());

    }
    public BoardFormDto createBoardFormDto(String title,BoardCategory category,String content){
        this.title = title;
        this.boardCategory = category;
        this.content = content;
        return this;
    }
}
