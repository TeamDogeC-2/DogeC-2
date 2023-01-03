package ProjectDoge.StudentSoup.repository.restaurant;

import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;

import java.util.List;
import java.util.Optional;

public interface RestaurantRepositoryCustom {
    Restaurant findByRestaurantNameAndSchool_SchoolName(String name, String schoolName);

    List<Restaurant> findRestaurantDynamicSearch(String column, String find_value);
}
