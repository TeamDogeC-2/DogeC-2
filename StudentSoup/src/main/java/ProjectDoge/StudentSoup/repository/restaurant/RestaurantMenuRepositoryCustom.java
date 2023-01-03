package ProjectDoge.StudentSoup.repository.restaurant;

import ProjectDoge.StudentSoup.entity.restaurant.RestaurantMenu;

import java.util.List;
import java.util.Optional;

public interface RestaurantMenuRepositoryCustom {

    Optional<RestaurantMenu> findByRestaurantMenuNameAndRestaurant_RestaurantId(String menuName, Long restaurantId);

    List<RestaurantMenu> findByRestaurantId(Long restaurantId);
}
