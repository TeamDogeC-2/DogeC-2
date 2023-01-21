package ProjectDoge.StudentSoup.repository.restaurantreview;

import ProjectDoge.StudentSoup.entity.restaurant.RestaurantReview;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface RestaurantReviewRepositoryCustom {

    Double avgByRestaurantId(Long restaurantId);

    Long countByRestaurantId(Long restaurantId);

    List<RestaurantReview> findByRestaurantIdSorted(Long restaurantId, String sorted, Pageable pageable);

    JPAQuery<Long> pagingCountByRestaurantId(Long restaurantId);
}
