package ProjectDoge.StudentSoup.controller.restaurant;


import ProjectDoge.StudentSoup.dto.restaurant.RestaurantDetailRequestDto;
import ProjectDoge.StudentSoup.service.restaurantmenu.RestaurantMenuCallService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/restaurant")
@RestController
public class RestaurantDetailCallController {

    private final RestaurantMenuCallService restaurantMenuCallService;

    @PostMapping("/{restaurantId}")
    public ConcurrentHashMap<String, Object> callRestaurantDetail(@PathVariable Long restaurantId,
                                                                  @RequestBody RestaurantDetailRequestDto dto,
                                                                  @PageableDefault(size = 4) Pageable pageable){
        return restaurantMenuCallService.restaurantDetailCall(dto.getRestaurantId(), dto.getMemberId(), pageable);
    }
}
