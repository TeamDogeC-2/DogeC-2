package ProjectDoge.StudentSoup.dto.board;

import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.board.BoardCategory;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class BoardUpdateDto {
        private String title;
        private BoardCategory boardCategory;
        private String content;


        //== 생성 메서드 ==//
        private void setBoard(Board board) {
            this.setTitle(board.getTitle());
            this.setBoardCategory(board.getBoardCategory());
            this.setContent(board.getContent());
        }

        public BoardUpdateDto createBoardFormDto(Board board) {
            this.title = board.getTitle();
            this.boardCategory = board.getBoardCategory();
            this.content = board.getContent();
            return this;
        }
    }