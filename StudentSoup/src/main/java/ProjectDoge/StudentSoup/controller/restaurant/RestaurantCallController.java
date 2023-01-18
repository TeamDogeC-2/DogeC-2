package ProjectDoge.StudentSoup.controller.restaurant;

import ProjectDoge.StudentSoup.dto.board.BoardCallDto;
import ProjectDoge.StudentSoup.dto.restaurant.RestaurantDto;
import ProjectDoge.StudentSoup.dto.restaurant.RestaurantSort;
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
    public List<RestaurantDto> firstCallRestaurant(@RequestBody BoardCallDto boardCallDto){
        return restaurantCallService.getRestaurantsInSchool(boardCallDto.getSchoolId(), boardCallDto.getMemberId());
    }

    /**
     * @param category
     * @param sorted   0 normal(등록 순), 1(별점), 2(좋아요), 3(리뷰), 4(거리)
     * @return
     */
    @GetMapping("/restaurants/{category}/{sorted}")
    public List<RestaurantDto> sortByRestaurants(@PathVariable("category") String category,
                                                 @PathVariable("sorted") int sorted,
                                                 @RequestBody RestaurantSort restaurantSort) {

        log.info("category : [{}], sorted : [{}], memberId : [{}], schoolId : [{}]",
                category,
                sorted,
                restaurantSort.getMemberId(),
                restaurantSort.getSchoolId());

        List<RestaurantDto> dto = restaurantCallService.
                restaurantSortedCall(restaurantSort.getSchoolId(),
                        restaurantSort.getMemberId(),
                        category,
                        sorted);

        return dto;
    }
}
