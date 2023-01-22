package ProjectDoge.StudentSoup.repository.restaurantreview;

public interface RestaurantReviewRepositoryCustom {

    Double avgByRestaurantId(Long restaurantId);

    Long countByRestaurantId(Long restaurantId);
}
