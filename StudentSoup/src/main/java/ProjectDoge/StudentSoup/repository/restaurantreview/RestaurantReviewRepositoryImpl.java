package ProjectDoge.StudentSoup.repository.restaurantreview;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static ProjectDoge.StudentSoup.entity.restaurant.QRestaurantReview.restaurantReview;

@RequiredArgsConstructor
public class RestaurantReviewRepositoryImpl implements RestaurantReviewRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public Double avgByRestaurantId(Long restaurantId) {
        List<Double> result = queryFactory
                .select(restaurantReview.starLiked.avg())
                .from(restaurantReview)
                .where(restaurantReview.restaurant.id.eq(restaurantId))
                .fetch();


        return result.get(0);
    }
}
