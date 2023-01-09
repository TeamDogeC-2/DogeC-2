package ProjectDoge.StudentSoup.service.restaurant;

import ProjectDoge.StudentSoup.dto.restaurant.RestaurantDto;
import ProjectDoge.StudentSoup.repository.restaurant.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class RestaurantSortService {

    private final RestaurantRepository restaurantRepository;

    public List<RestaurantDto> restaurantSortedCall(Long schoolId, Long memberId, String category, int sorted){
        List<RestaurantDto> restaurantDtoList = new ArrayList<>();

        if(isHaveMemberId(memberId)){

        }
    }

    private boolean isHaveMemberId(Long memberId) {
        return memberId != null;
    }
}
