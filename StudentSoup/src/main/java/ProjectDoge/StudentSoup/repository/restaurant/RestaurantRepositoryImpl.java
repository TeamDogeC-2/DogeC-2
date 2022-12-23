package ProjectDoge.StudentSoup.repository.restaurant;

import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;

import javax.persistence.EntityManager;

import static ProjectDoge.StudentSoup.entity.restaurant.QRestaurant.restaurant;
import static ProjectDoge.StudentSoup.entity.school.QSchool.school;

public class RestaurantRepositoryImpl implements RestaurantRepositoryCustom{
    private final JPAQueryFactory queryFactory;

    public RestaurantRepositoryImpl(EntityManager em){
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public Restaurant findByRestaurantNameAndSchool_SchoolName(String restaurantName,String schoolName){
        JPQLQuery<Restaurant> query = queryFactory
                .selectFrom(restaurant)
                .leftJoin(restaurant.school,school)
                .fetchJoin()
                .where(restaurant.name.eq(restaurantName),restaurant.school.schoolName.eq(schoolName));

        return query.fetchOne();
    }

}
