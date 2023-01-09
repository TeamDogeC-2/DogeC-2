package ProjectDoge.StudentSoup.controller.restaurant;

import ProjectDoge.StudentSoup.dto.restaurant.RestaurantSort;
import ProjectDoge.StudentSoup.service.restaurant.RestaurantSortService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/restaurants")
public class RestaurantSortController {

    private final RestaurantSortService restaurantSortService;

    /**
     *
     * @param category
     * @param sorted 0 normal(등록 순), 1(별점), 2(좋아요), 3(리뷰), 4(거리)
     * @return
     */
    @GetMapping("/{category}/{sorted}")
    public String sortByRestaurants(@PathVariable("category") String category, @PathVariable("sorted") int sorted, @RequestBody RestaurantSort restaurantSort){

        log.info("category : [{}], sorted : [{}], memberId : [{}], schoolId : [{}]",
                category,
                sorted,
                restaurantSort.getMemberId(),
                restaurantSort.getSchoolId());

        return "ok";
    }
}
