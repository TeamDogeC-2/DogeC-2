package ProjectDoge.StudentSoup.service;

import ProjectDoge.StudentSoup.dto.restaurant.RestaurantFormDto;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.exception.restaurant.RestaurantNotFoundException;
import ProjectDoge.StudentSoup.exception.restaurant.RestaurantValidationException;
import ProjectDoge.StudentSoup.exception.school.SchoolNotFoundException;
import ProjectDoge.StudentSoup.repository.restaurant.RestaurantRepository;
import ProjectDoge.StudentSoup.repository.school.SchoolRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


@Slf4j
@Service
@RequiredArgsConstructor
public class RestaurantService {

    private final SchoolRepository schoolRepository;
    private final RestaurantRepository restaurantRepository;
    private final FileService fileService;

    @Transactional
    public Long join(RestaurantFormDto dto, MultipartFile multipartFile) throws IOException {
        log.info("음식점 생성 메서드가 실행되었습니다.");
        School school = validateNotFoundSchool(dto.getSchool());
        //== TODO 이미지 파일 수정 필요 ==//
        Long fileId = fileService.join(multipartFile);
        ImageFile imageFile = fileService.findOne(fileId);
        Restaurant restaurant = new Restaurant().createRestaurant(dto,school, imageFile);
        validateDuplicateRestaurant(restaurant);
        restaurantRepository.save(restaurant);
        log.info("음식점이 생성되었습니다.[{}][{}]",restaurant.getId(),restaurant.getName());
        return restaurant.getId();
    }

    private void validateDuplicateRestaurant(Restaurant restaurant) {
        log.info("음식점 생성 검증 메소드가 실행되었습니다.");
        Restaurant findRestaurant = restaurantRepository.findByRestaurantNameAndSchool_SchoolName(restaurant.getName(),restaurant.getSchool().getSchoolName());
        if(findRestaurant != null){
            log.info("음식점이 존재하는 예외가 발생했습니다");
            throw  new RestaurantValidationException("이미 존재하는 음식점 입니다");
        }
        log.info("음식점 검증이 완료되었습니다.");
    }

    private School validateNotFoundSchool(Long schoolId){
        log.info("음식점 생성 중 학교 존재 여부 검증 메소드가 실행되었습니다.");
        School school = schoolRepository.findById(schoolId)
                .orElseThrow(() -> {
                    log.info("음식점 등록 중 학교가 존재하지 않는 예외가 발생했습니다.");
                    return new SchoolNotFoundException("등록되지 않은 학교입니다.");
                });
        log.info("음식점 생성 중 등록 된 학교 : {}", school.getSchoolName());
        return school;
    }
    public Restaurant findByRestaurantNameAndSchoolName(String restaurantName,String schoolName){
        Restaurant restaurant = restaurantRepository.findByRestaurantNameAndSchool_SchoolName(restaurantName, schoolName);
        return restaurant;
    }
    public Restaurant findOne(Long restaurantId){
        Restaurant restaurant = restaurantRepository.findById(restaurantId).orElseThrow(() -> {
            return new RestaurantNotFoundException("등록되지 않은 음식점 입니다.");
        });
        return restaurant;
    }


}
