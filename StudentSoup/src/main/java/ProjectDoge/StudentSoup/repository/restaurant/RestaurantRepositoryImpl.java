package ProjectDoge.StudentSoup.repository.restaurant;

import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantCategory;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.yaml.snakeyaml.util.EnumUtils;

import java.util.List;

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

    @Override
    public List<Restaurant> findRestaurantDynamicSearch(String column,String find_value){
        JPQLQuery<Restaurant> query = queryFactory
                .selectFrom(restaurant)
                .where(checkRestaurantCategoryEq(column,find_value),
                        (checkRestaurantNameEq(column,find_value)),
                        (checkRestaurantSchoolNameEq(column,find_value)),
                       (checkRestaurantTagContains(column,find_value)));

        return query.fetch();

    }

    private BooleanExpression checkRestaurantCategoryEq(String column,String category){
        if(column.equals("category")) {
            for (RestaurantCategory restaurantCategory : RestaurantCategory.values()) {
                if (restaurantCategory.getRestaurantCategory().equals(category))
                    return restaurant.restaurantCategory.eq(RestaurantCategory.valueOf(restaurantCategory.name()));
            }
        }
        return null;
    }
    private BooleanExpression checkRestaurantNameEq(String column,String restaurantName){
        if(column.equals("name") && restaurantName != null){
            return restaurant.name.eq(restaurantName);
        }
        return null;
    }
    private BooleanExpression checkRestaurantSchoolNameEq(String column,String schoolName){
        if(column.equals("schoolName") && schoolName != null){
            return restaurant.school.schoolName.eq(schoolName);
        }
        return null;
    }
    private BooleanExpression checkRestaurantTagContains(String column,String tag){
        if(column.equals("tag") && tag != null){
            return restaurant.tag.contains(tag);
        }
        return null;
    }

}
