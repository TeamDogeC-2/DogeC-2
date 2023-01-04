package ProjectDoge.StudentSoup.service.admin;

import ProjectDoge.StudentSoup.dto.restaurant.RestaurantFormDto;
import ProjectDoge.StudentSoup.dto.restaurant.RestaurantUpdateDto;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.repository.file.FileRepository;
import ProjectDoge.StudentSoup.repository.restaurant.RestaurantRepository;
import ProjectDoge.StudentSoup.repository.school.SchoolRepository;
import ProjectDoge.StudentSoup.service.file.FileService;
import ProjectDoge.StudentSoup.service.restaurant.RestaurantFindService;
import ProjectDoge.StudentSoup.service.school.SchoolFindService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.Collections;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class AdminRestaurantService {

    private final RestaurantRepository restaurantRepository;
    private final RestaurantFindService restaurantFindService;
    private final SchoolFindService schoolFindService;
    private final FileService fileService;

    private final FileRepository fileRepository;


    public List<Restaurant> adminSearchRestaurants(String column, String find_value) {
        if(column == null || find_value == null) return Collections.emptyList();
        List<Restaurant> findRestaurants = restaurantRepository.findRestaurantDynamicSearch(column,find_value);

        return findRestaurants;
    }

    public RestaurantUpdateDto adminFindUpdateRestaurant(Long restaurantId) {
        Restaurant restaurant = restaurantFindService.findOne(restaurantId);
        RestaurantUpdateDto restaurantUpdateDto = new RestaurantUpdateDto();
        restaurantUpdateDto.setRestaurant(restaurant);

        return restaurantUpdateDto;
    }
    @Transactional
    public void adminUpdateRestaurant(Long restaurantId,RestaurantUpdateDto restaurantUpdateDto,MultipartFile multipartFile){
        Restaurant restaurant = restaurantFindService.findOne(restaurantId);
        fileRepository.delete(restaurant.getImageFile());
        School school = schoolFindService.findOne(restaurantUpdateDto.getSchool().getId());
        Long fileId = fileService.join(multipartFile);
        ImageFile file = fileService.findOne(fileId);
        restaurant.updateRestaurant(restaurantUpdateDto,school,file);
    }
}
