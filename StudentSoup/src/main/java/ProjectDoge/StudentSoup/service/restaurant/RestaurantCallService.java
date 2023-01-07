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

    public List<RestaurantDto> getByRestaurant(Long schoolId, Long memberId) {

        List<Restaurant> restaurants = restaurantRepository.findBySchoolId(schoolId);
        List<RestaurantDto> restaurantDtos = new ArrayList<>();

        if (isHaveMemberId(memberId)) {
            return getLoginRestaurantList(memberId, restaurants, restaurantDtos);
        }
        return getNotLoginRestaurantList(restaurants, restaurantDtos);
    }

    /**
     * @param memberId 유저가 로그인이 되어있는가
     * @return
     */
    private boolean isHaveMemberId(Long memberId) {
        if (memberId == null)
            return false;
        return true;
    }

    private List<RestaurantDto> getLoginRestaurantList(Long memberId,
                                                       List<Restaurant> restaurants,
                                                       List<RestaurantDto> restaurantDtos) {
        for (Restaurant restaurant : restaurants) {
            restaurantDtos.add(addLoginRestaurantDtos(memberId, restaurantDtos, restaurant));
        }
        return restaurantDtos;
    }

    private RestaurantDto addLoginRestaurantDtos(Long memberId, List<RestaurantDto> restaurantDtos, Restaurant restaurant) {
        RestaurantLike restaurantLike = restaurantLikeRepository.findRestaurantLikeByRestaurantIdAndMemberId(restaurant.getId(), memberId)
                .orElse(null);
        if (restaurantLike == null) {
            return new RestaurantDto().createRestaurantDto(restaurant, getDistance(restaurant), restaurantNotLiked);
        }
        return new RestaurantDto().createRestaurantDto(restaurant, getDistance(restaurant), restaurantLiked);
    }

    private List<RestaurantDto> getNotLoginRestaurantList(List<Restaurant> restaurants, List<RestaurantDto> restaurantDtos) {
        for (Restaurant restaurant : restaurants) {
            restaurantDtos.add(new RestaurantDto().createRestaurantDto(
                    restaurant,
                    getDistance(restaurant),
                    restaurantNotLiked));
        }
        return restaurantDtos;
    }

    // 학교로 부터 음식점까지 거리좌표 계산
    private String getDistance(Restaurant restaurant) {
        String[] schoolCoordinate = restaurant.getSchool().getSchoolCoordinate().split(",");
        String[] restaurantCoordinate = restaurant.getCoordinate().split(",");
        double schoolLatitude = Double.parseDouble(schoolCoordinate[0]);
        double schoolLongitude = Double.parseDouble(schoolCoordinate[1]);
        double restaurantLatitude = Double.parseDouble(restaurantCoordinate[0]);
        double restaurantLongitude = Double.parseDouble(restaurantCoordinate[1]);

        double theta = schoolLongitude - restaurantLongitude;
        double dist = Math.sin(degToRad(schoolLatitude)) * Math.sin(degToRad(restaurantLatitude)) + Math.cos(degToRad(schoolLatitude)) * Math.cos(degToRad(restaurantLatitude)) * Math.cos(degToRad(theta));

        dist = Math.acos(dist);
        dist = radToDeg(dist);
        dist = dist * 60 * 1.1515;

        dist *= 1609.344;

        return round(dist) + "M";
    }

    private double degToRad(double deg) {
        return (deg * Math.PI / 180.0);
    }

    private double radToDeg(double rad) {
        return (rad * 180 / Math.PI);
    }


}
