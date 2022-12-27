package ProjectDoge.StudentSoup.repository.restaurant;

import ProjectDoge.StudentSoup.entity.restaurant.RestaurantMenu;

public interface RestaurantMenuRepositoryCustom {

    RestaurantMenu validateMenuNameUsingRestaurantId(String menuName,Long restaurantId);
}
