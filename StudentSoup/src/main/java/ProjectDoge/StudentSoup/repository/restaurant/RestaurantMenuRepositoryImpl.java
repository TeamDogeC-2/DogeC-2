package ProjectDoge.StudentSoup.repository.restaurant;

import ProjectDoge.StudentSoup.entity.restaurant.RestaurantMenu;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;

import javax.persistence.EntityManager;

import static ProjectDoge.StudentSoup.entity.restaurant.QRestaurant.restaurant;
import static ProjectDoge.StudentSoup.entity.restaurant.QRestaurantMenu.restaurantMenu;

public class RestaurantMenuRepositoryImpl implements RestaurantMenuRepositoryCustom{

    private final JPAQueryFactory queryFactory;

    public RestaurantMenuRepositoryImpl(EntityManager em){this.queryFactory = new JPAQueryFactory(em);}

    @Override
    public RestaurantMenu findByRestaurantMenuNameAndRestaurant_RestaurantId(String MenuName,Long restaurantId){
        JPAQuery<RestaurantMenu> query = queryFactory
                .selectFrom(restaurantMenu)
                .leftJoin(restaurantMenu.restaurant,restaurant)
                .fetchJoin()
                .where(restaurantMenu.name.eq(MenuName),restaurantMenu.restaurant.id.eq(restaurantId));

        return query.fetchOne();

    }

}

