package ProjectDoge.StudentSoup.controller.admin;

import ProjectDoge.StudentSoup.dto.restaurant.RestaurantMenuFormDto;
import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantMenu;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantMenuCategory;
import ProjectDoge.StudentSoup.repository.restaurant.RestaurantMenuRepository;
import ProjectDoge.StudentSoup.service.RestaurantMenuService;
import ProjectDoge.StudentSoup.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class AdminRestaurantMenuController {

    private final RestaurantService restaurantService;

    private final RestaurantMenuService restaurantMenuService;

    private final RestaurantMenuRepository restaurantMenuRepository;

    @GetMapping("admin/restaurantMenus")
    public String RestaurantMenuList(@RequestParam(value = "restaurantId")Long restaurantId, Model model){
        List<RestaurantMenu> restaurantMenus =restaurantMenuRepository.findByRestaurantId(restaurantId);
        model.addAttribute("restaurantMenus",restaurantMenus);

        return "/admin/restaurant/restaurantMenuList";
    }


    @GetMapping("admin/restaurantMenu/new")
    public String createRestaurantMenu(@RequestParam(value = "restaurantId",required = false)Long restaurantId,Model model){
        Restaurant restaurant = restaurantService.findOne(restaurantId);
        model.addAttribute("restaurantMenuForm",new RestaurantMenuFormDto());
        model.addAttribute("restaurant",restaurant);
        model.addAttribute("menuCategory", RestaurantMenuCategory.values());
        return "/admin/restaurant/createRestaurantMenu";
    }
    @PostMapping("admin/restaurantMenu/new")
    public String createRestaurantMenu(RestaurantMenuFormDto form , @RequestPart MultipartFile multipartFile, RedirectAttributes redirect){
        restaurantMenuService.join(form,multipartFile);
        redirect.addAttribute("restaurantId",form.getRestaurantId());

        return "redirect:/admin/restaurantMenus";
    }

}
