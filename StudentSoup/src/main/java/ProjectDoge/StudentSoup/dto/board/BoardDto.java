package ProjectDoge.StudentSoup.dto.board;

import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.board.BoardCategory;
import ProjectDoge.StudentSoup.entity.board.BoardLike;
import ProjectDoge.StudentSoup.entity.board.BoardReview;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import lombok.Getter;
import lombok.Setter;
import nonapi.io.github.classgraph.json.JSONUtils;


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

    private List<String> fileNames = new ArrayList<>();

    private int view;

    private String writeDate;

    private String updateDate;

    private int likedCount;


    private boolean like;

    public BoardDto(Board board, Boolean like) {
        this.id = board.getId();
        this.boardCategory = board.getBoardCategory();
        this.title = board.getTitle();
        this.content = board.getContent();
        this.ip = board.getIp();
        if (board.getImageFiles().isEmpty()) {
            this.fileNames = null;
        } else {

            for (ImageFile imageFile : board.getImageFiles()) {
                this.fileNames.add(imageFile.getFileName());
                System.out.println("fileName = " + imageFile.getFileName());
            }
            this.view = board.getView();
            this.writeDate = board.getWriteDate();
            this.updateDate = board.getUpdateDate();
            this.likedCount = board.getLikedCount();
            this.like = like;
        }
    }
}
