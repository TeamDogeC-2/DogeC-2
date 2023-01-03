package ProjectDoge.StudentSoup.service;

import ProjectDoge.StudentSoup.dto.restaurant.RestaurantMenuFormDto;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantMenu;
import ProjectDoge.StudentSoup.exception.restaurant.RestaurantMenuValidationException;
import ProjectDoge.StudentSoup.exception.restaurant.RestaurantNotFoundException;
import ProjectDoge.StudentSoup.repository.restaurant.RestaurantMenuRepository;
import ProjectDoge.StudentSoup.repository.restaurant.RestaurantRepository;
import ProjectDoge.StudentSoup.service.file.FileService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;


@Slf4j
@Service
@RequiredArgsConstructor
public class RestaurantMenuService {

    private final RestaurantRepository restaurantRepository;

    private final RestaurantMenuRepository restaurantMenuRepository;

    private final FileService fileService;

    @Transactional
    public Long join(RestaurantMenuFormDto dto, MultipartFile multipartFile) {
        log.info("음식점 메뉴 생성 메소드가 실행 되었습니다.");
        Restaurant restaurant = validationNotFoundRestaurant(dto.getRestaurantId());
        Long fileId = fileService.join(multipartFile);
        ImageFile imageFile = fileService.findOne(fileId);
        RestaurantMenu restaurantMenu = new RestaurantMenu().createRestaurantMenu(dto, restaurant, imageFile);
        validationDuplicateRestaurantMenu(restaurantMenu);
        restaurantMenuRepository.save(restaurantMenu);
        log.info("메뉴가 생성 되었습니다. [{}][{}]",restaurantMenu.getId(),restaurantMenu.getName());
        return restaurantMenu.getId();
    }

    public void validationDuplicateRestaurantMenu(RestaurantMenu restaurantMenu){
        log.info("음식점 메뉴 생성 검증 로직이 실행되었습니다.");
        restaurantMenuRepository.findByRestaurantMenuNameAndRestaurant_RestaurantId(
                        restaurantMenu.getName(),
                        restaurantMenu.getRestaurant().getId())
                        .ifPresent(value -> {
                            log.info("메뉴가 존재하는 예외가 발생했습니다.");
                            throw new RestaurantMenuValidationException("이미 존재하는 메뉴 입니다.");
                        });
        log.info("메뉴 검증이 완료 되었습니다.");
    }


    private Restaurant validationNotFoundRestaurant(Long restaurantId) {
        log.info("음식점 메뉴 생성 중 음식점 존재 여부 검즘 메소드가 실행되었습니다.");
        Restaurant restaurant = restaurantRepository.findById(restaurantId).orElseThrow(() -> {
            log.info("음식점 메뉴 생성 중 음식점이 존재하지 않는 예외가 발생하였습니다.");
            return new RestaurantNotFoundException("등록되지 않은 음식점 입니다.");
        });
            log.info("메뉴 생성중 등록된 음식점 :{}",restaurant.getName());
        return  restaurant;
    }


}
