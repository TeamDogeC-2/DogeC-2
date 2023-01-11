package ProjectDoge.StudentSoup.dto.board;

import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.board.BoardCategory;
import ProjectDoge.StudentSoup.entity.board.BoardLike;
import ProjectDoge.StudentSoup.entity.board.BoardReview;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.entity.school.Department;
import ProjectDoge.StudentSoup.entity.school.School;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

public class BoardDto {

    private Long id;

    private School school;

    private Department department;

    private BoardCategory boardCategory;

    private String title;

    private Member member;

    private String content;

    private String ip;

    private ImageFile imageFile;

    private int view;

    private String writeDate;

    private String updateDate;

    private int likedCount;

    private List<BoardReview> boardReviews = new ArrayList<>();

    private List<BoardLike> boardLikes = new ArrayList<>();

    private boolean like;
    public BoardDto(Board board,Boolean like) {
        this.id = board.getId();
        this.school = board.getSchool();
        this.department = board.getDepartment();
        this.boardCategory = board.getBoardCategory();
        this.title = board.getTitle();
        this.member = board.getMember();
        this.content = board.getContent();
        this.ip = board.getIp();
        if(board.getImageFile() == null){
            this.imageFile = null;
        }
        else{
            this.imageFile = board.getImageFile();
        }
        this.view = board.getView();
        this.writeDate = board.getWriteDate();
        this.updateDate = board.getUpdateDate();
        this.likedCount = board.getLikedCount();
        this.boardReviews = board.getBoardReviews();
        this.boardLikes = board.getBoardLikes();
        this.like = like;
    }
}
