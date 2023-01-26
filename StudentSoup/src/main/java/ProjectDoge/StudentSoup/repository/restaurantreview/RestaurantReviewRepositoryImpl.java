package ProjectDoge.StudentSoup.repository.restaurantreview;

import ProjectDoge.StudentSoup.dto.member.MemberMyPageRestaurantReviewDto;
import ProjectDoge.StudentSoup.dto.member.QMemberMyPageRestaurantReviewDto;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantReview;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;

import java.time.LocalDate;
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

    @Override
    public Page<RestaurantReview> findByMemberIdForMyPage(Long memberId, String cond, Pageable pageable) {

        List<RestaurantReview> content = queryFactory.select(restaurantReview)
                .from(restaurantReview)
                .where(restaurantReview.member.memberId.eq(memberId), checkMyPageSortCond(cond))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .orderBy(restaurantReview.writeDate.desc())
                .fetch();

        JPAQuery<Long> count = queryFactory.select(restaurantReview.count())
                .from(restaurantReview)
                .where(restaurantReview.member.memberId.eq(memberId));

        return PageableExecutionUtils.getPage(content, pageable, count::fetchOne);
    }

    private BooleanExpression checkMyPageSortCond(String cond){
        if(cond == null)
            return null;
        else if(cond.equals("today"))
            return restaurantReview.writeDate.eq(LocalDate.now());
        else if(cond.equals("month"))
            return restaurantReview.writeDate.between(LocalDate.now().minusMonths(1), LocalDate.now());
        else if(cond.equals("halfYear"))
            return restaurantReview.writeDate.between(LocalDate.now().minusMonths(6), LocalDate.now());
        else if(cond.equals("year"))
            return restaurantReview.writeDate.between(LocalDate.now().minusYears(1), LocalDate.now());
        else
            return null;
    }
}
