package ProjectDoge.StudentSoup.repository.restaurant;

import ProjectDoge.StudentSoup.entity.restaurant.RestaurantMenuLike;

import java.util.Optional;

public interface RestaurantMenuLikeRepositoryCustom {
    Optional<RestaurantMenuLike> findRestaurantMenuLikeByRestaurantMenuIdAndMemberId(Long restaurantMenuId, Long memberId);
}
