package ProjectDoge.StudentSoup.repository.restaurantreview;

import ProjectDoge.StudentSoup.entity.restaurant.RestaurantReview;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;

import java.util.List;

import static ProjectDoge.StudentSoup.entity.member.QMember.member;
import static ProjectDoge.StudentSoup.entity.restaurant.QRestaurant.restaurant;
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

    @Override
    public Long countByRestaurantId(Long restaurantId) {

        List<Long> result = queryFactory
                .select(restaurantReview.count())
                .from(restaurantReview)
                .where(restaurantReview.restaurant.id.eq(restaurantId))
                .fetch();

        return result.get(0);
    }

    @Override
    public List<RestaurantReview> findByRestaurantIdSorted(Long restaurantId, String sorted, Pageable pageable) {

        return queryFactory
                .select(restaurantReview)
                .from(restaurantReview)
                .leftJoin(restaurantReview.member, member)
                .fetchJoin()
                .leftJoin(restaurantReview.restaurant, restaurant)
                .fetchJoin()
                .where(restaurantReview.restaurant.id.eq(restaurantId))
                .orderBy(checkSortedRestaurantReviewCondition(sorted))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();
    }

    private OrderSpecifier<?> checkSortedRestaurantReviewCondition(String sorted){
        if(sorted.equals("newest"))
            return restaurantReview.writeDate.desc();
        else if(sorted.equals("liked"))
            return restaurantReview.likedCount.desc();

        return restaurantReview.writeDate.desc();
    }

    @Override
    public JPAQuery<Long> pagingCountByRestaurantId(Long restaurantId) {
        return queryFactory
                .select(restaurantReview.count())
                .from(restaurantReview)
                .where(restaurantReview.restaurant.id.eq(restaurantId));
    }
}
