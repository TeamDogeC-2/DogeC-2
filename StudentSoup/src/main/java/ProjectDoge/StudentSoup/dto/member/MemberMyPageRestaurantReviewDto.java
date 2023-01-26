package ProjectDoge.StudentSoup.dto.member;

import com.querydsl.core.annotations.QueryProjection;

import java.time.LocalDate;

public class MemberMyPageRestaurantReviewDto {

    private Long restaurantReviewId;
    private String imageName;
    private int starLiked;
    private String content;
    private String writeDate;

    public MemberMyPageRestaurantReviewDto(){
    }

    @QueryProjection
    public MemberMyPageRestaurantReviewDto(Long restaurantReviewId, String imageName, int starLiked, String content, LocalDate writeDate){
        this.restaurantReviewId = restaurantReviewId;
        this.imageName = imageName;
        this.starLiked = starLiked;
        this.content = content;
        this.writeDate = writeDate.toString();
    }
}
