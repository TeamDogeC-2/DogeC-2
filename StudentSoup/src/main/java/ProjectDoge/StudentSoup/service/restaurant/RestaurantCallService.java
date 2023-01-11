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

        if (isLoginMember(memberId)) {
            return getLoginRestaurantList(memberId, restaurants, restaurantDtoList);
        }
        return getNotLoginRestaurantList(restaurants, restaurantDtoList);
    }

    public List<RestaurantDto> restaurantSortedCall(Long schoolId, Long memberId, String category, int sorted){

        /**
         * TODO category 가 enum 에 없을 경우 예외 추가, 그런데 이런 일은 최대한 없어야 할듯? 아니 있을 수가 있나?
         */
        List<Restaurant> sortedRestaurants = restaurantRepository.
                findBySchoolIdAndCategoryAndSorted(schoolId, category, sorted);
        List<RestaurantDto> restaurantDtoList = new ArrayList<>();

        if(isLoginMember(memberId)) {
            return getLoginRestaurantList(memberId, sortedRestaurants, restaurantDtoList);
        }

        return getNotLoginRestaurantList(sortedRestaurants, restaurantDtoList);
    }


    /**
     * @param memberId 유저가 로그인이 되어있는가
     * @return
     */
    private boolean isLoginMember(Long memberId) {
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
