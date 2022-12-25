package ProjectDoge.StudentSoup.repository.restaurant;

import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;

public interface RestaurantRepositoryCustom {
    Restaurant findByRestaurantNameAndSchool_SchoolName(String name, String schoolName);

}
