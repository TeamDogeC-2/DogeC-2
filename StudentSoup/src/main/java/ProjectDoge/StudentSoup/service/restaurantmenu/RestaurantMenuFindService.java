package ProjectDoge.StudentSoup.service.restaurantmenu;

import ProjectDoge.StudentSoup.entity.restaurant.RestaurantMenu;
import ProjectDoge.StudentSoup.exception.restaurant.RestaurantMenuNotFoundException;
import ProjectDoge.StudentSoup.repository.restaurant.RestaurantMenuRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RestaurantMenuFindService {
    private final RestaurantMenuRepository restaurantMenuRepository;

    public RestaurantMenu findOne(Long restaurantMenuId){
        RestaurantMenu restaurantMenu = restaurantMenuRepository.findById(restaurantMenuId).orElseThrow(() -> {
            return new RestaurantMenuNotFoundException("등록되지 않음 메뉴 입니다.");
        });
        return restaurantMenu;
    }
}
