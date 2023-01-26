package ProjectDoge.StudentSoup.dto.member;

public class MemberMyPageDetailDto {

    private long boardWriteCount;
    private long boardReviewWriteCount;

    public MemberMyPageDetailDto(long boardWriteCount, long boardReviewWriteCount){
        this.boardWriteCount = boardWriteCount;
        this.boardReviewWriteCount = boardReviewWriteCount;
    }
}
