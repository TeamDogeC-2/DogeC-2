package ProjectDoge.StudentSoup.controller.restaurant;

import ProjectDoge.StudentSoup.dto.board.BoardCallDto;
import ProjectDoge.StudentSoup.dto.restaurant.RestaurantCallDto;
import ProjectDoge.StudentSoup.dto.restaurant.RestaurantDto;
import ProjectDoge.StudentSoup.dto.restaurant.RestaurantSort;
import ProjectDoge.StudentSoup.exception.page.PagingLimitEqualsZeroException;
import ProjectDoge.StudentSoup.service.restaurant.RestaurantCallService;
import ProjectDoge.StudentSoup.service.restaurant.RestaurantPageCallService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class RestaurantCallController {

    private final RestaurantCallService restaurantCallService;
    private final RestaurantPageCallService restaurantPageCallService;

    @PostMapping("/restaurants")
    public Slice<RestaurantDto> firstCallRestaurantPaging(@RequestBody RestaurantCallDto restaurantCallDto, @PageableDefault(size = 6) Pageable pageable) {

        checkPagingSize(pageable.getPageSize());

        log.info("Page 시작점 : [{}], 현재 페이지 넘버 : [{}], 페이지 limit 크기 : [{}]",
                pageable.getOffset(),
                pageable.getPageNumber(),
                pageable.getPageSize());

        return restaurantCallService.getRestaurantsInSchool(
                restaurantCallDto.getSchoolName(),
                restaurantCallDto.getMemberId(),
                pageable
        );
    }

    private void checkPagingSize(Integer limit) {
        if(limit == 0){
            throw new PagingLimitEqualsZeroException("limit 의 개수는 1 이상이여야 합니다.");
        }
    }

    /**
     * @param category
     * @param sorted   0 normal(등록 순), 1(별점), 2(좋아요), 3(리뷰), 4(거리)
     * @return
     */
    @PostMapping("/restaurants/{category}/{sorted}")
    public Slice<RestaurantDto> sortByRestaurants(@PathVariable("category") String category,
                                                 @PathVariable("sorted") int sorted,
                                                 @RequestBody RestaurantCallDto restaurantCallDto,
                                                 @PageableDefault(size = 6) Pageable pageable) {

        checkPagingSize(pageable.getPageSize());

        log.info("category : [{}], sorted : [{}], memberId : [{}], schoolId : [{}]",
                category,
                sorted,
                restaurantCallDto.getMemberId(),
                restaurantCallDto.getSchoolId());

        Slice<RestaurantDto> dto = restaurantCallService.
                restaurantSortedCall(
                        restaurantCallDto.getSchoolId(),
                        restaurantCallDto.getSchoolName(),
                        restaurantCallDto.getMemberId(),
                        category,
                        sorted,
                        pageable);

        return dto;
    }
}
