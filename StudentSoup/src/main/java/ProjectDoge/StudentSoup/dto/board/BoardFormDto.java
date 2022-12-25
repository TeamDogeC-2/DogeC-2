package ProjectDoge.StudentSoup.dto.board;

import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.board.BoardCategory;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardFormDto {
    private String title;
    private BoardCategory boardCategory;
    private String content;
    private ImageFile imageFile;

    //== 생성 메서드 ==//
    private void setBoard(Board board){
        this.setTitle(board.getTitle());
        this.setBoardCategory(board.getBoardCategory());
        this.setContent(board.getContent());
        this.setImageFile(board.getImageFile());
    }
}
