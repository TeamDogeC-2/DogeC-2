package ProjectDoge.StudentSoup.repository.restaurant;

import ProjectDoge.StudentSoup.entity.restaurant.RestaurantLike;

import java.util.Optional;

public interface RestaurantLikeCustom {

    Optional<RestaurantLike> findRestaurantLikeByRestaurantIdAndMemberId(Long restaurantId, Long memberId);
}
