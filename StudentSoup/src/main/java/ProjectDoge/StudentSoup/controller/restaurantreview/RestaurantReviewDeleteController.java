package ProjectDoge.StudentSoup.controller.restaurantreview;

import ProjectDoge.StudentSoup.dto.restaurantreview.RestaurantReviewDeleteDto;
import ProjectDoge.StudentSoup.dto.restaurantreview.RestaurantReviewRegRespDto;
import ProjectDoge.StudentSoup.service.restaurantreview.RestaurantReviewDeleteService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@RestController
@RequestMapping("/restaurant/{restaurantId}")
@RequiredArgsConstructor
public class RestaurantReviewDeleteController {

    private final RestaurantReviewDeleteService restaurantReviewDeleteService;

    @DeleteMapping("/review")
    public ResponseEntity<ConcurrentHashMap<String, Object>> deleteRestaurantReview(
            @PathVariable Long restaurantId,
            @RequestBody RestaurantReviewDeleteDto dto){
        log.info("리뷰 삭제가 호출되었습니다.");
        ConcurrentHashMap<String, Object> resultMap = restaurantReviewDeleteService.deleteRestaurantReview(
                dto.getRestaurantReviewId(),
                dto.getMemberId());

        RestaurantReviewRegRespDto respDto = restaurantReviewDeleteService.starUpdate(restaurantId);
        resultMap.put("data", respDto);

        return ResponseEntity.ok(resultMap);
    }
}
