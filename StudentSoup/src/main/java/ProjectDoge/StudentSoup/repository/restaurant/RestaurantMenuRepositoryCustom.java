package ProjectDoge.StudentSoup.repository.restaurant;

import ProjectDoge.StudentSoup.entity.restaurant.RestaurantMenu;

public interface RestaurantMenuRepositoryCustom {

    RestaurantMenu findByRestaurantMenuNameAndRestaurant_RestaurantId(String menuName,Long restaurantId);
}
