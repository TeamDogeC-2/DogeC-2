package ProjectDoge.StudentSoup.controller.admin;


import ProjectDoge.StudentSoup.dto.restaurant.RestaurantFormDto;
import ProjectDoge.StudentSoup.dto.restaurant.RestaurantMenuFormDto;
import ProjectDoge.StudentSoup.dto.restaurant.RestaurantSearch;
import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantCategory;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantMenu;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantMenuCategory;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.repository.restaurant.RestaurantMenuRepository;
import ProjectDoge.StudentSoup.repository.restaurant.RestaurantRepository;
import ProjectDoge.StudentSoup.repository.school.SchoolRepository;
import ProjectDoge.StudentSoup.service.FileService;
import ProjectDoge.StudentSoup.service.RestaurantMenuService;
import ProjectDoge.StudentSoup.service.RestaurantService;
import ProjectDoge.StudentSoup.service.SchoolService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class AdminRestaurantController {

    private final RestaurantService restaurantService;

    private final RestaurantMenuService restaurantMenuService;

    private final SchoolRepository schoolRepository;

    private final RestaurantRepository restaurantRepository;

    private final RestaurantMenuRepository restaurantMenuRepository;

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
    @GetMapping("admin/restaurantMenus")
    public String RestaurantMenuList(@RequestParam(value = "restaurantId")Long restaurantId,Model model){
        List<RestaurantMenu> restaurantMenus =restaurantMenuRepository.findByRestaurantId(restaurantId);
        model.addAttribute("restaurantMenus",restaurantMenus);

        return "/admin/restaurant/restaurantMenuList";
    }


    @GetMapping("admin/restaurantMenu/new")
    public String createRestaurantMenu(@RequestParam(value = "restaurantId",required = false)Long restaurantId,Model model){
        Restaurant restaurant = restaurantService.findOne(restaurantId);
        model.addAttribute("restaurantMenuForm",new RestaurantMenuFormDto());
        model.addAttribute("restaurant",restaurant);
        model.addAttribute("menuCategory",RestaurantMenuCategory.values());
        return "/admin/restaurant/createRestaurantMenu";
    }
    @PostMapping("admin/restaurantMenu/new")
    public String createRestaurantMenu(RestaurantMenuFormDto form , @RequestPart MultipartFile multipartFile, RedirectAttributes redirect){
        restaurantMenuService.join(form,multipartFile);
        redirect.addAttribute("restaurantId",form.getRestaurantId());

        return "redirect:/admin/restaurantMenus";
    }

}
