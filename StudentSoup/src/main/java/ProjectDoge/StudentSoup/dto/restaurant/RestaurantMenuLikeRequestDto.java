package ProjectDoge.StudentSoup.dto.restaurant;

import lombok.Data;

@Data
public class RestaurantMenuLikeRequestDto {

    private final Long restaurantMenuId;
    private final Long memberId;
}
