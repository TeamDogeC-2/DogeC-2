package ProjectDoge.StudentSoup.entity.board;

import ProjectDoge.StudentSoup.dto.board.BoardFormDto;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.school.Department;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.entity.member.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "BOARD")
@Getter
@Setter
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SCHOOL_ID")
    private School school;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "DEPARTMENT_ID")
    private Department department;

    @Enumerated(EnumType.STRING)
    private BoardCategory boardCategory;

    private String title;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "WRITER_NICKNAME")
    private Member member;

    @Lob
    private String content;

    private String ip;

    @OneToMany(mappedBy = "board" ,fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<ImageFile> imageFiles = new ArrayList<>();

    private int view;

    private String writeDate;

    private String updateDate;

    private int likedCount;


    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BoardReview> boardReviews = new ArrayList<>();

    @OneToMany(mappedBy = "board" , cascade = CascadeType.REMOVE)
    private List<BoardLike> boardLikes = new ArrayList<>();

    //== 연관관계 메서드 ==//
    public void setSchool(School school){
        this.school = school;
        school.getBoards().add(this);
    }
    public void setDepartment(Department department){
        this.department = department;
        department.getBoards().add(this);
    }

    //== 생성 메서드 ==//
    public Board createBoard(BoardFormDto form, Member member, School school, Department department) {
        this.setTitle(form.getTitle());
        this.setBoardCategory(form.getBoardCategory());
        this.setWriteDate(dateFormat(LocalDateTime.now()));
        this.setUpdateDate(dateFormat(LocalDateTime.now()));
        this.setContent(form.getContent());
        this.setView(0);
        this.setLikedCount(0);
        this.setMember(member);
        this.setSchool(school);
        this.setDepartment(department);
        return this;
    }
    public Board editBoard(BoardFormDto boardFormDto){
        this.setTitle(boardFormDto.getTitle());
        this.setContent(boardFormDto.getContent());
        this.setUpdateDate(dateFormat(LocalDateTime.now()));
        return this;
    }

    private String dateFormat(LocalDateTime time){
        String formatTime = time.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));
        return formatTime;
    }

    public Board createTestBoard(){
        this.setTitle("제목");
        this.setContent("내용");
        this.setIp("ip");
        this.setView(0);
        this.setWriteDate(dateFormat(LocalDateTime.now()));
        this.setUpdateDate(dateFormat(LocalDateTime.now()));
        this.setLikedCount(0);
        return this;
    }

    //== 비즈니스 로직 ==//
    public void addViewCount(){
        this.view++;
    }

    public void addLikeCount() {
        this.likedCount+=1;
    }

    public void minusLikeCount() {
        if(this.likedCount > 0) {
            this.likedCount -= 1;
        }
    }
    public void addImageFile(ImageFile imageFile){
        this.getImageFiles().add(imageFile);

        if(imageFile.getBoard() != this)
             imageFile.setBoard(this);
    }
}
