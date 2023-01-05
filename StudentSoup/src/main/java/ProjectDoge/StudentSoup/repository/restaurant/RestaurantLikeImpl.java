package ProjectDoge.StudentSoup.repository.restaurant;

import ProjectDoge.StudentSoup.entity.restaurant.RestaurantLike;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.Optional;

import static ProjectDoge.StudentSoup.entity.member.QMember.member;
import static ProjectDoge.StudentSoup.entity.restaurant.QRestaurant.restaurant;
import static ProjectDoge.StudentSoup.entity.restaurant.QRestaurantLike.restaurantLike;

@RequiredArgsConstructor
public class RestaurantLikeImpl implements RestaurantLikeCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public Optional<RestaurantLike> findRestaurantLikeByRestaurantIdAndMemberId(Long restaurantId, Long memberId) {

        RestaurantLike query = queryFactory.select(restaurantLike)
                .from(restaurantLike)
                .leftJoin(restaurantLike.restaurant, restaurant)
                .fetchJoin()
                .leftJoin(restaurantLike.member, member)
                .fetchJoin()
                .where(restaurant.id.eq(restaurantId), member.memberId.eq(memberId))
                .fetchOne();

        return Optional.ofNullable(query);
    }
}
