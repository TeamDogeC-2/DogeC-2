package ProjectDoge.StudentSoup.controller.admin;

import ProjectDoge.StudentSoup.dto.restaurantmenu.RestaurantMenuFormDto;
import ProjectDoge.StudentSoup.dto.restaurantmenu.RestaurantMenuUpdateDto;
import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantMenu;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantMenuCategory;
import ProjectDoge.StudentSoup.repository.restaurantmenu.RestaurantMenuRepository;
import ProjectDoge.StudentSoup.service.admin.AdminRestaurantMenuService;
import ProjectDoge.StudentSoup.service.restaurant.RestaurantFindService;
import ProjectDoge.StudentSoup.service.restaurantmenu.RestaurantMenuRegisterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class AdminRestaurantMenuController {

    private final RestaurantFindService restaurantFindService;
    private final RestaurantMenuRegisterService restaurantMenuRegisterService;
    private final RestaurantMenuRepository restaurantMenuRepository;

    private final AdminRestaurantMenuService adminRestaurantMenuService;

    @GetMapping("admin/{restaurantId}/restaurantMenus")
    public List<Object> RestaurantMenuList(@PathVariable Long restaurantId, Model model){
        List<Object> result = new ArrayList<>();
        List<RestaurantMenu> restaurantMenus = restaurantMenuRepository.findByRestaurantId(restaurantId);
        result.add(restaurantMenus);
        result.add(restaurantId);
        return result;
    }


    @GetMapping("admin/restaurantMenu")
    public List<Object> createRestaurantMenu(@RequestParam Long restaurantId,Model model){
        Restaurant restaurant = restaurantFindService.findOne(restaurantId);
        List<Object> result = new ArrayList<>();
        result.add(RestaurantMenuCategory.values());
        result.add(result);
        return result;
    }
    @PostMapping("admin/restaurantMenu")
    public ResponseEntity<String> createRestaurantMenu(@ModelAttribute RestaurantMenuFormDto form , @RequestPart MultipartFile multipartFile, RedirectAttributes redirect){
        restaurantMenuRegisterService.join(form,multipartFile);


        return ResponseEntity.ok("okay");
    }
    @GetMapping("admin/restaurantMenu/edit/{restaurantMenuId}")
    public String editRestaurantMenu(@PathVariable Long restaurantMenuId,Model model){
        RestaurantMenuUpdateDto restaurantMenuUpdateDto = adminRestaurantMenuService.adminFindUpdateRestaurantMenu(restaurantMenuId);
        Restaurant restaurant = restaurantFindService.findOne(restaurantMenuUpdateDto.getRestaurantId());
        model.addAttribute("restaurantMenuForm",restaurantMenuUpdateDto);
        model.addAttribute("restaurant",restaurant);
        model.addAttribute("restaurantMenuId",restaurantMenuId);
        model.addAttribute("menuCategory",RestaurantMenuCategory.values());
        return "admin/restaurant/updateRestaurantMenu";
    }
    @PostMapping ("admin/restaurantMenu/edit/{restaurantMenuId}")
    public String editRestaurantMenu(@PathVariable Long restaurantMenuId,@RequestPart MultipartFile multipartFile,RestaurantMenuUpdateDto restaurantMenuUpdateDto,RedirectAttributes redirect){
        adminRestaurantMenuService.adminUpdateRestaurantMenu(restaurantMenuId,multipartFile,restaurantMenuUpdateDto);
        redirect.addAttribute("restaurantId",restaurantMenuUpdateDto.getRestaurantId());

        return "redirect:/admin/{restaurantId}/restaurantMenus";
    }
    @GetMapping ("admin/restaurantMenu/{restaurantMenuId}/{restaurantId}")
    public String deleteRestaurantMenu(@PathVariable Long restaurantMenuId,@PathVariable Long restaurantId,RedirectAttributes redirect){
        restaurantMenuRepository.deleteById(restaurantMenuId);
        redirect.addAttribute("restaurantId",restaurantId);

        return "redirect:/admin/{restaurantId}/restaurantMenus";
    }

}
