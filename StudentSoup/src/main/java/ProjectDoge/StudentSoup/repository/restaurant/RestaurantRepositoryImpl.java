package ProjectDoge.StudentSoup.repository.restaurant;

import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import static ProjectDoge.StudentSoup.entity.restaurant.QRestaurant.restaurant;
import static ProjectDoge.StudentSoup.entity.school.QSchool.school;

@RequiredArgsConstructor
public class RestaurantRepositoryImpl implements RestaurantRepositoryCustom{
    private final JPAQueryFactory queryFactory;

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
