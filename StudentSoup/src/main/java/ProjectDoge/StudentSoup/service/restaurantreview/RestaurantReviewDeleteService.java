package ProjectDoge.StudentSoup.service.restaurantreview;

import ProjectDoge.StudentSoup.entity.member.MemberClassification;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantReview;
import ProjectDoge.StudentSoup.exception.member.MemberNotFoundException;
import ProjectDoge.StudentSoup.exception.restaurant.RestaurantReviewNotOwnException;
import ProjectDoge.StudentSoup.repository.restaurantreview.RestaurantReviewRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@RequiredArgsConstructor
@Service
public class RestaurantReviewDeleteService {

    private final RestaurantReviewFindService restaurantReviewFindService;
    private final RestaurantReviewRepository restaurantReviewRepository;

    @Transactional
    public ConcurrentHashMap<String, String> deleteRestaurantReview(Long restaurantReviewId, Long memberId){
        checkLoginStatus(memberId);
        ConcurrentHashMap<String, String> resultMap = new ConcurrentHashMap<>();
        RestaurantReview findRestaurantReview = restaurantReviewFindService.findOne(restaurantReviewId);
        if(!findRestaurantReview.getMember().getMemberId().equals(memberId) && findRestaurantReview.getMember().getMemberClassification() != MemberClassification.ADMIN){
            throw new RestaurantReviewNotOwnException("해당 리뷰는 해당 회원이 작성한 리뷰가 아닙니다.");
        }
        restaurantReviewRepository.delete(findRestaurantReview);
        resultMap.put("result", "ok");
        return resultMap;
    }

    private void checkLoginStatus(Long memberId){
        log.info("회원의 로그인 상태를 확인합니다. [{}]", memberId);
        if(memberId == null){
            throw new MemberNotFoundException("기본키가 전달되지 않았거나, 로그인 되지 않은 상태에서 리뷰 삭제는 불가능합니다.");
        }
        log.info("회원의 로그인 상태 확인이 완료되었습니다.");
    }
}
