package ProjectDoge.StudentSoup.dto.board;

import ProjectDoge.StudentSoup.entity.board.BoardReview;
import ProjectDoge.StudentSoup.entity.member.Member;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardReviewDto {

    private Long boardReviewId;

    private String content;

    private int likeCount;

    private String nickname;

    private String writeDate;

    private String memberProfileImageName;

    private int seq;

    private int depth;

    private int level;

    private String active;

    private boolean like;

    public BoardReviewDto createBoardReviewDto(BoardReview boardReview, Boolean like) {
        this.boardReviewId = boardReview.getReviewId();
        this.content = boardReview.getContent();
        this.likeCount = boardReview.getLikedCount();
        this.nickname = boardReview.getMember().getNickname();
        this.writeDate = boardReview.getWriteDate();
        this.memberProfileImageName = setProfileImageFileName(boardReview.getMember());
        this.seq = boardReview.getSeq();
        this.depth = boardReview.getDepth();
        this.level = boardReview.getLevel();
        this.active = boardReview.getActive();
        this.like = like;
        return this;
    }

    private String setProfileImageFileName(Member member){
        if(member.getImageFile() != null){
            return member.getImageFile().getFileName();
        }
        return null;
    }

}
