package ProjectDoge.StudentSoup.entity.board;

import ProjectDoge.StudentSoup.entity.member.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "BOARD_REVIEW_LIKE")
@Getter
@Setter
public class BoardReviewLike {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BOARD_REVIEW_ID")
    private BoardReview boardReview;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BOARD_REVIEW_LIKED_ID")
    private Member member;

//    == 연관 관계 메서드 ==//
    public void setMember(Member member){
        if(this.member != null){
            this.member.getBoardReviewLikes().remove(this);
        }
        this.member = member;
        member.getBoardReviewLikes().add(this);
    }
    public void setBoardReview(BoardReview boardReview){
        if(this.boardReview != null){
            this.boardReview.getBoardReviewLikes().remove(this);
        }
        this.boardReview = boardReview;
        boardReview.getBoardReviewLikes().add(this);
    }


}
