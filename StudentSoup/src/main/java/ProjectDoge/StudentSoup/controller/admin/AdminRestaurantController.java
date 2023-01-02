package ProjectDoge.StudentSoup.controller.admin;


import ProjectDoge.StudentSoup.dto.restaurant.RestaurantFormDto;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantCategory;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.repository.school.SchoolRepository;
import ProjectDoge.StudentSoup.service.FileService;
import ProjectDoge.StudentSoup.service.RestaurantService;
import ProjectDoge.StudentSoup.service.SchoolService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class AdminRestaurantController {

    private final RestaurantService restaurantService;

    private final SchoolRepository schoolRepository;

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

}
