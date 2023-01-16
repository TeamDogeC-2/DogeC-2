package ProjectDoge.StudentSoup.controller.restaurant;

import ProjectDoge.StudentSoup.dto.restaurant.RestaurantMenuLikeRequestDto;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantMenuLike;
import ProjectDoge.StudentSoup.service.restaurantmenu.RestaurantMenuLikeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/restaurants")
public class RestaurantMenuLikeController {

    private final RestaurantMenuLikeService restaurantMenuLikeService;

    @PostMapping("/{restaurantId}/{restaurantMenuId}/like")
    public ResponseEntity<ConcurrentHashMap<String, Object>> restaurantMenuLike(@PathVariable Long restaurantId, @PathVariable Long restaurantMenuId, @RequestBody RestaurantMenuLikeRequestDto dto){
        return ResponseEntity.ok(restaurantMenuLikeService.restaurantMenuLike(dto.getRestaurantMenuId(), dto.getMemberId()));
    }
}
