package ProjectDoge.StudentSoup.dto.member;

public class MemberMyPageDetailDto {

    private long boardViewCount;
    private long boardReviewCount;

    public MemberMyPageDetailDto(long boardViewCount, long boardReviewCount){
        this.boardViewCount = boardViewCount;
        this.boardReviewCount = boardReviewCount;
    }
}
