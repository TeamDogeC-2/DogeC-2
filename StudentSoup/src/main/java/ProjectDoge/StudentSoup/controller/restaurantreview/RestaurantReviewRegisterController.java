package ProjectDoge.StudentSoup.controller.restaurantreview;


import ProjectDoge.StudentSoup.dto.restaurant.RestaurantReviewRequestDto;
import ProjectDoge.StudentSoup.service.restaurantreview.RestaurantReviewRegisterService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/restaurants")
public class RestaurantReviewRegisterController {

    private final RestaurantReviewRegisterService restaurantReviewRegisterService;

    @PutMapping(value = "/{restaurantId}/review", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<ConcurrentHashMap<String, Object>> registerRestaurantReview(@PathVariable Long restaurantId,
                                                                                      RestaurantReviewRequestDto dto){

        ConcurrentHashMap<String, Object> resultMap = new ConcurrentHashMap<>();
        restaurantReviewRegisterService.join(dto);
        resultMap.put("result", "ok");

        return ResponseEntity.ok(resultMap);
    }
}
