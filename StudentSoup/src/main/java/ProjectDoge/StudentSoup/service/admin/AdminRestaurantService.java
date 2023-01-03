package ProjectDoge.StudentSoup.service.admin;

import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import ProjectDoge.StudentSoup.repository.restaurant.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class AdminRestaurantService {

    private final RestaurantRepository restaurantRepository;

    public List<Restaurant> AdminSearchSchools(String column, String find_value) {
        if(column == null || find_value == null) return Collections.emptyList();
        List<Restaurant> findRestaurants = restaurantRepository.findRestaurantDynamicSearch(column,find_value);

        return findRestaurants;
    }

}
