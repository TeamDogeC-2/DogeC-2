package ProjectDoge.StudentSoup.controller.restaurantreview;

import ProjectDoge.StudentSoup.dto.restaurantreview.RestaurantReviewUpdateDto;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantReview;
import ProjectDoge.StudentSoup.service.restaurantreview.RestaurantReviewFindService;
import ProjectDoge.StudentSoup.service.restaurantreview.RestaurantReviewUpdateService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/restaurantReview/{restaurantReviewId}")
public class RestaurantReviewUpdateController {

    private final RestaurantReviewUpdateService restaurantReviewUpdateService;
    private final RestaurantReviewFindService restaurantReviewFindService;

    @GetMapping
    public RestaurantReviewUpdateDto restaurantReviewUpdateForm(@PathVariable Long restaurantReviewId){
        RestaurantReview review = restaurantReviewFindService.findOne(restaurantReviewId);
        return new RestaurantReviewUpdateDto(review);
    }
}
