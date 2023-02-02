package ProjectDoge.StudentSoup.entity.board;

import ProjectDoge.StudentSoup.dto.board.BoardReviewResDto;
import ProjectDoge.StudentSoup.dto.board.BoardReviewUpdateDto;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.member.Member;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
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

    @Lob
    private String content;

    private int likedCount;

    // 댓글 달린 순서(댓글 인덱스) default 1
    private int seq;

    // 댓글의 대댓글 깊이 default 0
    private int depth;

    // 댓글, 대댓글 여부 확인 0 == 댓글, 1 == 대댓글
    private int level;

    //댓글 삭제 여부
    private String active;


    @OnDelete(action = OnDeleteAction.CASCADE)
    @OneToMany(mappedBy = "boardReview", cascade = CascadeType.ALL, orphanRemoval = true)
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
    public BoardReview createBoardReview(Member member, Board board, BoardReviewResDto dto){
        this.setBoard(board);
        this.setMember(member);
        this.setContent(dto.getContent());
        this.setWriteDate(dateFormat(LocalDateTime.now()));
        this.setUpdateDate(dateFormat(LocalDateTime.now()));
        this.setLikedCount(0);
        this.setSeq(dto.getSeq());
        this.setDepth(dto.getDepth());
        this.setLevel(dto.getLevel());
        this.setActive("Y");
        return this;
    }

    public BoardReview createBoardNestedReply() {
        this.setWriteDate(dateFormat(LocalDateTime.now()));
        this.setUpdateDate(dateFormat(LocalDateTime.now()));
        this.setLikedCount(0);
        this.setLevel(1);
        this.setActive("Y");
        return this;
    }
    private String dateFormat(LocalDateTime time){
        String formatTime = time.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));
        return formatTime;
    }
    public BoardReview editBoardReview(String content){
        this.setContent(content);
        this.setUpdateDate(dateFormat(LocalDateTime.now()));
        return this;
    }


    public void addLikeCount() {
        this.likedCount+=1;
    }

    public void minusLikeCount() {
        this.likedCount-=1;
    }
}
