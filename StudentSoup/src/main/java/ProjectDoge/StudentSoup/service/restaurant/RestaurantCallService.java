package ProjectDoge.StudentSoup.service.restaurant;


import ProjectDoge.StudentSoup.dto.restaurant.RestaurantDto;
import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantLike;
import ProjectDoge.StudentSoup.repository.restaurant.RestaurantLikeRepository;
import ProjectDoge.StudentSoup.repository.restaurant.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static java.lang.Math.round;

@Slf4j
@RequiredArgsConstructor
@Service
public class RestaurantCallService {

    private final RestaurantRepository restaurantRepository;
    private final RestaurantLikeRepository restaurantLikeRepository;

    boolean restaurantLiked = true;
    boolean restaurantNotLiked = false;

    public List<RestaurantDto> getRestaurantsInSchool(Long schoolId, Long memberId) {

        List<Restaurant> restaurants = restaurantRepository.findBySchoolId(schoolId);
        List<RestaurantDto> restaurantDtoList = new ArrayList<>();

        if (isHaveMemberId(memberId)) {
            return getLoginRestaurantList(memberId, restaurants, restaurantDtoList);
        }
        return getNotLoginRestaurantList(restaurants, restaurantDtoList);
    }

    /**
     * @param memberId 유저가 로그인이 되어있는가
     * @return
     */
    private boolean isHaveMemberId(Long memberId) {
        return memberId != null;
    }

    private List<RestaurantDto> getLoginRestaurantList(Long memberId,
                                                       List<Restaurant> restaurants,
                                                       List<RestaurantDto> restaurantDtoList) {
        for (Restaurant restaurant : restaurants) {
            restaurantDtoList.add(getLoginRestaurantDto(memberId, restaurant));
        }
        return restaurantDtoList;
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

    private List<RestaurantDto> getNotLoginRestaurantList(List<Restaurant> restaurants, List<RestaurantDto> restaurantDtoList) {
        for (Restaurant restaurant : restaurants) {
            restaurantDtoList.add(getNotLikeRestaurantDto(restaurant));
        }
        return restaurantDtoList;
    }
}
