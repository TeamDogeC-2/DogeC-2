package ProjectDoge.StudentSoup.controller.restaurant;

import ProjectDoge.StudentSoup.dto.restaurant.RestaurantDto;
import ProjectDoge.StudentSoup.service.restaurant.RestaurantCallService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
public class RestaurantCallController {

    private final RestaurantCallService restaurantCallService;

    @GetMapping("/restaurants")
    public List<RestaurantDto> firstCallRestaurant(@RequestBody Map<String, Long> map){
        return restaurantCallService.getRestaurantsInSchool(map.get("schoolId"), map.get("memberId"));
    }
}
