package ProjectDoge.StudentSoup.repository.restaurant;

import ProjectDoge.StudentSoup.entity.restaurant.RestaurantMenu;

import java.util.List;

public interface RestaurantMenuRepositoryCustom {

    RestaurantMenu findByRestaurantMenuNameAndRestaurant_RestaurantId(String menuName,Long restaurantId);

    List<RestaurantMenu> findByRestaurantId(Long restaurantId);
}
