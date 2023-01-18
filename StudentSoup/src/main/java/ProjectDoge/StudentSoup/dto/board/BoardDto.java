package ProjectDoge.StudentSoup.dto.board;

import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.board.BoardCategory;
import ProjectDoge.StudentSoup.entity.board.BoardLike;
import ProjectDoge.StudentSoup.entity.board.BoardReview;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import lombok.Getter;
import lombok.Setter;


import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class BoardDto {

    private Long id;

    private BoardCategory boardCategory;

    private String title;

    private String content;

    private String ip;

    private String fileName;

    private int view;

    private String writeDate;

    private String updateDate;

    private int likedCount;


    private boolean like;
    public BoardDto(Board board,Boolean like) {
        this.id = board.getId();
        this.boardCategory = board.getBoardCategory();
        this.title = board.getTitle();
        this.content = board.getContent();
        this.ip = board.getIp();
        if(board.getImageFile() == null){
            this.fileName = null;
        }
        else{
            this.fileName = board.getImageFile().getFileName();
        }
        this.view = board.getView();
        this.writeDate = board.getWriteDate();
        this.updateDate = board.getUpdateDate();
        this.likedCount = board.getLikedCount();
        this.like = like;
    }
}
