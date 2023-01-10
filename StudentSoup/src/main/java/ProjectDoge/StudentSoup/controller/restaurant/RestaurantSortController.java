package ProjectDoge.StudentSoup.controller.restaurant;

import ProjectDoge.StudentSoup.dto.restaurant.RestaurantDto;
import ProjectDoge.StudentSoup.dto.restaurant.RestaurantSort;
import ProjectDoge.StudentSoup.service.restaurant.RestaurantCallService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/restaurants")
public class RestaurantSortController {

    private final RestaurantCallService restaurantCallService;

    /**
     * @param category
     * @param sorted   0 normal(등록 순), 1(별점), 2(좋아요), 3(리뷰), 4(거리)
     * @return
     */
    @GetMapping("/{category}/{sorted}")
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
