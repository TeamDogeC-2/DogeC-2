package ProjectDoge.StudentSoup.service.restaurant;


import ProjectDoge.StudentSoup.dto.restaurant.RestaurantDto;
import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantLike;
import ProjectDoge.StudentSoup.repository.restaurant.RestaurantLikeRepository;
import ProjectDoge.StudentSoup.repository.restaurant.RestaurantRepository;
import com.querydsl.jpa.impl.JPAQuery;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class RestaurantPageCallService {

    private final RestaurantRepository restaurantRepository;
    private final RestaurantLikeRepository restaurantLikeRepository;

    boolean restaurantLiked = true;
    boolean restaurantNotLiked = false;

    public Page<RestaurantDto> getRestaurantsInSchool(Long schoolId, Long memberId, Pageable pageable){

        List<Restaurant> restaurants = restaurantRepository.findBySchoolId(schoolId, pageable);
        JPAQuery<Long> queryCount = restaurantRepository.countBySchoolId();
        List<RestaurantDto> restaurantDtoList = new ArrayList<>();

        if(isLoginMember(memberId)){
            return getLoginRestaurantList(memberId, restaurants, restaurantDtoList, pageable, queryCount);
        }

        return getNotLoginRestaurantList(restaurants, restaurantDtoList, pageable, queryCount);
    }

    private boolean isLoginMember(Long memberId) {
        return memberId != null;
    }

    private Page<RestaurantDto> getLoginRestaurantList(Long memberId,
                                                       List<Restaurant> restaurants,
                                                       List<RestaurantDto> restaurantDtoList,
                                                       Pageable pageable,
                                                       JPAQuery<Long> count) {
        for (Restaurant restaurant : restaurants) {
            restaurantDtoList.add(getLoginRestaurantDto(memberId, restaurant));
        }

        int start = (int)pageable.getOffset();
        int end = Math.min((start + pageable.getPageSize()), restaurantDtoList.size());

//        return new PageImpl<>(restaurantDtoList.subList(start, end), pageable, restaurantDtoList.size());
        return PageableExecutionUtils.getPage(restaurantDtoList.subList(start, end), pageable, count::fetchOne);
    }

    private RestaurantDto getLoginRestaurantDto(Long memberId, Restaurant restaurant) {
        RestaurantLike restaurantLike = restaurantLikeRepository.findRestaurantLikeByRestaurantIdAndMemberId(restaurant.getId(), memberId)
                .orElse(null);
        if (restaurantLike == null) {
            return getNotLikeRestaurantDto(restaurant);
        }
        return getLikeRestaurantDto(restaurant);
    }

    private RestaurantDto getLikeRestaurantDto(Restaurant restaurant) {
        return new RestaurantDto().createRestaurantDto(restaurant, restaurantLiked);
    }

    private RestaurantDto getNotLikeRestaurantDto(Restaurant restaurant) {
        return new RestaurantDto().createRestaurantDto(restaurant, restaurantNotLiked);
    }

    private Page<RestaurantDto> getNotLoginRestaurantList(List<Restaurant> restaurants,
                                                          List<RestaurantDto> restaurantDtoList,
                                                          Pageable pageable,
                                                          JPAQuery<Long> count) {
        for (Restaurant restaurant : restaurants) {
            restaurantDtoList.add(getNotLikeRestaurantDto(restaurant));
        }
        int start = (int)pageable.getOffset();
        int end = Math.min((start + pageable.getPageSize()), restaurantDtoList.size());

//        return new PageImpl<>(restaurantDtoList.subList(start, end), pageable, restaurantDtoList.size());
        return PageableExecutionUtils.getPage(restaurantDtoList.subList(start, end), pageable, count::fetchOne);
    }
}
