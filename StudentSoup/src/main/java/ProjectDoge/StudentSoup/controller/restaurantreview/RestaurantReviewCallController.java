package ProjectDoge.StudentSoup.controller.restaurantreview;

import ProjectDoge.StudentSoup.dto.restaurantreview.RestaurantReviewCallReqDto;
import ProjectDoge.StudentSoup.dto.restaurantreview.RestaurantReviewDto;
import ProjectDoge.StudentSoup.exception.page.PagingLimitEqualsZeroException;
import ProjectDoge.StudentSoup.service.restaurantreview.RestaurantReviewCallService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/restaurant/{restaurantId}")
public class RestaurantReviewCallController {

    private final RestaurantReviewCallService restaurantReviewCallService;

    /**
     * @param sorted (newest : 최신순, liked : 좋아요 순)
     */
    @PostMapping("/reviews")
    public Page<RestaurantReviewDto> callRestaurantReviews(@PathVariable Long restaurantId,
                                                           @RequestParam(required = false, defaultValue = "newest") String sorted,
                                                           @RequestBody RestaurantReviewCallReqDto dto,
                                                           @PageableDefault(size = 3) Pageable pageable){
        checkPagingSize(pageable.getPageSize());

        log.info("restaurantId : [{}], memberId : [{}], sorted : [{}]", dto.getRestaurantId(), dto.getMemberId(), sorted);

        return restaurantReviewCallService.getRestaurantReviewCall(
                restaurantId,
                dto.getMemberId(),
                sorted,
                pageable);
    }

    private void checkPagingSize(Integer limit) {
        if(limit == 0){
            throw new PagingLimitEqualsZeroException("limit 의 개수는 1 이상이여야 합니다.");
        }
    }
}
