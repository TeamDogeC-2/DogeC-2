package ProjectDoge.StudentSoup.entity.board;

import ProjectDoge.StudentSoup.entity.member.Member;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Entity
@Table(name = "BOARD_REVIEW")
@Getter
@Setter
public class BoardReview {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private Long reviewId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BOARD_ID")
    private Board board;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
    private String writeDate;

    private String updateDate;

    private String content;

    private int likedCount;

    // 댓글 달린 순서(댓글 인덱스) default 1
    private int seq;

    // 댓글의 대댓글 깊이 default 0
    private int depth;

    // 댓글, 대댓글 여부 확인 0 == 댓글, 1 == 대댓글
    private int level;

    //댓글 삭제 여부
    private boolean active;


    @OnDelete(action = OnDeleteAction.CASCADE)
    @OneToMany(mappedBy = "boardReview", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BoardReviewLike> boardReviewLikes;


    //== 연관 관계 메서드 ==//
    public void setMember(Member member){
        if(this.member != null){
            this.member.getBoardReviews().remove(this);
        }
        this.member = member;
        member.getBoardReviews().add(this);
    }


    //== 생성 메서드 ==//
    public BoardReview createBoardReview(){
        this.setWriteDate(dateFormat(LocalDateTime.now()));
        this.setUpdateDate(dateFormat(LocalDateTime.now()));
        this.setLikedCount(0);
        this.setDepth(0);
        this.setLevel(0);
        this.setActive(true);
        return this;
    }

    public BoardReview createBoardNestedReply() {
        this.setWriteDate(dateFormat(LocalDateTime.now()));
        this.setUpdateDate(dateFormat(LocalDateTime.now()));
        this.setLikedCount(0);
        this.setLevel(1);
        this.setActive(true);
        return this;
    }
    private String dateFormat(LocalDateTime time){
        String formatTime = time.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));
        return formatTime;
    }
    public BoardReview editBoardReviewDate(){
        this.setWriteDate(dateFormat(LocalDateTime.now()));
        this.setUpdateDate(dateFormat(LocalDateTime.now()));
        return this;
    }
}
