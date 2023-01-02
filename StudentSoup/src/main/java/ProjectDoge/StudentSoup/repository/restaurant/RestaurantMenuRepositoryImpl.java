package ProjectDoge.StudentSoup.repository.restaurant;

import ProjectDoge.StudentSoup.entity.restaurant.RestaurantMenu;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static ProjectDoge.StudentSoup.entity.restaurant.QRestaurant.restaurant;
import static ProjectDoge.StudentSoup.entity.restaurant.QRestaurantMenu.restaurantMenu;

@RequiredArgsConstructor
public class RestaurantMenuRepositoryImpl implements RestaurantMenuRepositoryCustom{

    private final JPAQueryFactory queryFactory;

    @Override
    public RestaurantMenu findByRestaurantMenuNameAndRestaurant_RestaurantId(String MenuName,Long restaurantId){
        JPAQuery<RestaurantMenu> query = queryFactory
                .selectFrom(restaurantMenu)
                .leftJoin(restaurantMenu.restaurant,restaurant)
                .fetchJoin()
                .where(restaurantMenu.name.eq(MenuName),restaurantMenu.restaurant.id.eq(restaurantId));

        return query.fetchOne();

    }

    @Override
    public List<RestaurantMenu> findByRestaurantId(Long restaurantId){
        JPAQuery<RestaurantMenu> query = queryFactory
                .selectFrom(restaurantMenu)
                .leftJoin(restaurantMenu.restaurant,restaurant)
                .fetchJoin()
                .where(restaurantMenu.restaurant.id.eq(restaurantId));

        return query.fetch();
    }

}

