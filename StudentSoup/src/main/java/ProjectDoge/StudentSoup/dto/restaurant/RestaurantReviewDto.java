package ProjectDoge.StudentSoup.dto.restaurant;

import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import lombok.Data;

import java.util.List;

@Data
public class RestaurantReviewDto {
    private Long restaurantReviewId;
    private Long restaurantId;
    private String restaurantName;
    private Long memberId;
    private String nickName;
    private String content;
    private String menuName;
    private int starLiked;
    private List<String> imageFileNameList;

}
