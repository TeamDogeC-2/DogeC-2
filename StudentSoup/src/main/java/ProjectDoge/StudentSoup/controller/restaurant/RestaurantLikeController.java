package ProjectDoge.StudentSoup.controller.restaurant;

import ProjectDoge.StudentSoup.dto.restaurant.RestaurantLikeDto;
import ProjectDoge.StudentSoup.service.restaurant.RestaurantLikeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/restaurants")
public class RestaurantLikeController {

    private final RestaurantLikeService restaurantLikeService;

    @PostMapping("/{restaurantId}/like")
    public String restaurantLike(@PathVariable Long restaurantId, @RequestBody RestaurantLikeDto dto){
        return restaurantLikeService.restaurantLike(dto.getRestaurantId(), dto.getMemberId());
    }
}
