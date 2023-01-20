package ProjectDoge.StudentSoup.service.restaurant;


import ProjectDoge.StudentSoup.dto.restaurant.RestaurantDto;
import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantLike;
import ProjectDoge.StudentSoup.repository.restaurant.RestaurantLikeRepository;
import ProjectDoge.StudentSoup.repository.restaurant.RestaurantRepository;
import ProjectDoge.StudentSoup.service.school.SchoolFindService;
import com.querydsl.jpa.impl.JPAQuery;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class RestaurantPageCallService {

    private final SchoolFindService schoolFindService;
    private final RestaurantRepository restaurantRepository;
    private final RestaurantLikeRepository restaurantLikeRepository;

    boolean restaurantLiked = true;
    boolean restaurantNotLiked = false;

    public Slice<RestaurantDto> getRestaurantsInSchool(String schoolName, Long memberId, Pageable pageable) {
        log.info("======= 페이지 처리 음식점 조회가 시작되었습니다. ========");
        Long schoolId = schoolFindService.findOne(schoolName);
        List<Restaurant> restaurants = restaurantRepository.findBySchoolId(schoolId, pageable);
        JPAQuery<Long> queryCount = restaurantRepository.countBySchoolId(schoolId);

        List<RestaurantDto> restaurantDtoList = new ArrayList<>();

        if (isLoginMember(memberId)) {
            return getLoginRestaurantList(memberId, restaurants, restaurantDtoList, pageable, queryCount);
        }

        return getNotLoginRestaurantList(restaurants, restaurantDtoList, pageable, queryCount);
    }


    private boolean isLoginMember(Long memberId) {
        return memberId != null;
    }

    private Slice<RestaurantDto> getLoginRestaurantList(Long memberId,
                                                       List<Restaurant> restaurants,
                                                       List<RestaurantDto> restaurantDtoList,
                                                       Pageable pageable,
                                                       JPAQuery<Long> count) {
        for (Restaurant restaurant : restaurants) {
            restaurantDtoList.add(getLoginRestaurantDto(memberId, restaurant));
        }

        return PageableExecutionUtils.getPage(restaurantDtoList, pageable, count::fetchOne);
    }

    private RestaurantDto getLoginRestaurantDto(Long memberId, Restaurant restaurant) {
        for(RestaurantLike restaurantLike : restaurant.getRestaurantLikes()){
            if(restaurantLike.getMember().getMemberId().equals(memberId))
                return getLikeRestaurantDto(restaurant);
        }
        return getNotLikeRestaurantDto(restaurant);
    }

    private RestaurantDto getLikeRestaurantDto(Restaurant restaurant) {
        return new RestaurantDto().createRestaurantDto(restaurant, restaurantLiked);
    }

    private RestaurantDto getNotLikeRestaurantDto(Restaurant restaurant) {
        return new RestaurantDto().createRestaurantDto(restaurant, restaurantNotLiked);
    }

    private Slice<RestaurantDto> getNotLoginRestaurantList(List<Restaurant> restaurants,
                                                          List<RestaurantDto> restaurantDtoList,
                                                          Pageable pageable,
                                                          JPAQuery<Long> count) {
        for (Restaurant restaurant : restaurants) {
            restaurantDtoList.add(getNotLikeRestaurantDto(restaurant));
        }

        log.info("offset : [{}], last : [{}]", pageable.getOffset(), pageable.getOffset() + pageable.getPageSize());

        return PageableExecutionUtils.getPage(restaurantDtoList, pageable, count::fetchOne);
    }
}
