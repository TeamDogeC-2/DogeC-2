package ProjectDoge.StudentSoup.service.restaurant;

import ProjectDoge.StudentSoup.dto.restaurant.RestaurantFormDto;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.repository.restaurant.RestaurantRepository;
import ProjectDoge.StudentSoup.service.file.FileService;
import ProjectDoge.StudentSoup.service.school.SchoolFindService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@Service
@RequiredArgsConstructor
public class RestaurantRegisterService {

    private final SchoolFindService schoolFindService;
    private final FileService fileService;
    private final RestaurantValidationService restaurantValidationService;

    private final RestaurantRepository restaurantRepository;

    @Transactional
    public Long join(RestaurantFormDto dto, MultipartFile multipartFile) {
        log.info("음식점 생성 메서드가 실행되었습니다.");
        School school = schoolFindService.findOne(dto.getSchoolId());
        Long fileId = fileService.join(multipartFile);
        ImageFile imageFile = fileService.findOne(fileId);
        Restaurant restaurant = new Restaurant().createRestaurant(dto,school, imageFile);
        restaurantValidationService.validateDuplicateRestaurant(restaurant);
        restaurantRepository.save(restaurant);
        log.info("음식점이 생성되었습니다.[{}][{}]",restaurant.getId(),restaurant.getName());
        return restaurant.getId();
    }

    @Transactional
    public Long join(RestaurantFormDto dto) {
        log.info("음식점 테스트 생성 메서드가 실행되었습니다.");
        School school = schoolFindService.findOne(dto.getSchoolId());
        Restaurant restaurant = new Restaurant().createRestaurant(dto, school);
        restaurantValidationService.validateDuplicateRestaurant(restaurant);
        restaurantRepository.save(restaurant);
        log.info("테스트 음식점이 생성되었습니다.[{}][{}]",restaurant.getId(),restaurant.getName());
        return restaurant.getId();
    }

}
