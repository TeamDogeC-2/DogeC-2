package ProjectDoge.StudentSoup.controller.admin;


import ProjectDoge.StudentSoup.dto.restaurant.RestaurantFormDto;
import ProjectDoge.StudentSoup.dto.restaurant.RestaurantSearch;
import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantCategory;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.repository.restaurant.RestaurantRepository;
import ProjectDoge.StudentSoup.repository.school.SchoolRepository;
import ProjectDoge.StudentSoup.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class AdminRestaurantController {

    private final RestaurantService restaurantService;

    private final SchoolRepository schoolRepository;

    private final RestaurantRepository restaurantRepository;



    @GetMapping("admin/restaurant/new")
    public String createRestaurant(Model model){
        List<School> schools = schoolRepository.findAll();
        model.addAttribute("restaurantForm",new RestaurantFormDto());
        model.addAttribute("schools",schools);
        model.addAttribute("restaurantCategory", RestaurantCategory.values());
        return "/admin/restaurant/createRestaurant";
    }
    @PostMapping("admin/restaurant/new")
    public String createRestaurant(RestaurantFormDto restaurantFormDto,@RequestPart MultipartFile multipartFile){
        restaurantService.join(restaurantFormDto,multipartFile);
        return "redirect:/admin/restaurants";
    }

    @GetMapping("admin/restaurants")
    public  String restaurantList(@ModelAttribute RestaurantSearch restaurantSearch,Model model){
        List<Restaurant> restaurants = restaurantRepository.findAll();
        model.addAttribute("restaurants",restaurants);

        List<Restaurant> findRestaurants = restaurantService.AdminSearchSchools(restaurantSearch.getColumn(),restaurantSearch.getFind_value());
        model.addAttribute("findRestaurants",findRestaurants);

        return "admin/restaurant/restaurantList";
    }
}
