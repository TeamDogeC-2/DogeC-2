package ProjectDoge.StudentSoup.controller.admin;


import ProjectDoge.StudentSoup.dto.restaurant.RestaurantFormDto;
import ProjectDoge.StudentSoup.dto.restaurant.RestaurantSearch;
import ProjectDoge.StudentSoup.dto.restaurant.RestaurantUpdateDto;
import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantCategory;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.repository.restaurant.RestaurantRepository;
import ProjectDoge.StudentSoup.repository.school.SchoolRepository;
import ProjectDoge.StudentSoup.service.admin.AdminRestaurantService;
import ProjectDoge.StudentSoup.service.restaurant.RestaurantRegisterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class AdminRestaurantController {

    private final RestaurantRegisterService restaurantRegisterService;
    private final AdminRestaurantService adminRestaurantService;
    private final SchoolRepository schoolRepository;

    private final RestaurantRepository restaurantRepository;


    @GetMapping("admin/restaurant")
    public List<Object> createRestaurant(Model model) {
        List<Object> result = new ArrayList<>();
        List<School> schools = schoolRepository.findAll();
        RestaurantCategory[] values = RestaurantCategory.values();
        result.add(schools);
        result.add(values);
        return result;
    }

    @PostMapping("admin/restaurant")
    public String createRestaurant(@ModelAttribute RestaurantFormDto restaurantFormDto) {
        Long restaurantId = restaurantRegisterService.join(restaurantFormDto);
        return ResponseEntity.ok().body(restaurantId).toString();
    }

    @GetMapping("admin/restaurants")
    public ResponseEntity<Map<String,List<Restaurant>>> restaurantList(@ModelAttribute RestaurantSearch restaurantSearch, Model model) {
        Map<String,List<Restaurant>> result = new HashMap<>();
        List<Restaurant> restaurants = restaurantRepository.findAll();
        result.put("restaurants",restaurants);

        List<Restaurant> findRestaurants = adminRestaurantService.adminSearchRestaurants(restaurantSearch.getColumn(), restaurantSearch.getFind_value());
        result.put("searchRestaurants",findRestaurants);
        return ResponseEntity.ok(result);
    }

    @GetMapping("admin/restaurant/edit/{restaurantId}")
    public List<Object> editRestaurant(@PathVariable Long restaurantId, Model model) {
        RestaurantUpdateDto restaurantFormDto = adminRestaurantService.adminFindUpdateRestaurant(restaurantId);
        List<School> schools = schoolRepository.findAll();
        List<Object> result = new ArrayList<>();
        result.add(restaurantId);
        result.add(restaurantFormDto);
        result.add(schools);
        result.add(RestaurantCategory.values());

        return result;
    }

    @PostMapping("admin/restaurant/edit/{restaurantId}")
    public ResponseEntity<Long> editRestaurant(@PathVariable Long restaurantId,
                                 RestaurantUpdateDto restaurantUpdateDto) {
        adminRestaurantService.adminUpdateRestaurant(restaurantId, restaurantUpdateDto);
        return ResponseEntity.ok(restaurantId);
    }
    @GetMapping("admin/restaurant/{restaurantId}")
    public ResponseEntity<Long> deleteRestaurant(@PathVariable Long restaurantId){
        adminRestaurantService.adminDeleteRestaurant(restaurantId);
        return ResponseEntity.ok(restaurantId);
    }
}
