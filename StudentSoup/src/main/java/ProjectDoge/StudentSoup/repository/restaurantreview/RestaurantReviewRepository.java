package ProjectDoge.StudentSoup.repository.restaurantreview;

import ProjectDoge.StudentSoup.entity.restaurant.RestaurantReview;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantReviewRepository extends JpaRepository<RestaurantReview, Long>, RestaurantReviewRepositoryCustom {
}
