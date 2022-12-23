package ProjectDoge.StudentSoup.service;

import ProjectDoge.StudentSoup.dto.restaurant.RestaurantFormDto;
import ProjectDoge.StudentSoup.entity.file.File;
import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.exception.school.NotFoundSchoolException;
import ProjectDoge.StudentSoup.repository.restaurant.RestaurantRepository;
import ProjectDoge.StudentSoup.repository.school.SchoolRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@Service
@RequiredArgsConstructor
public class RestaurantService {

    private final SchoolRepository schoolRepository;
    private final RestaurantRepository restaurantRepository;

    @Transactional
    public Long join(RestaurantFormDto dto){
        log.info("음식점 생성 메서드가 실행되었습니다.");
        School school = validateNotFoundSchool(dto.getSchool());
        File file = new File();
        Restaurant restaurant = new Restaurant().createRestaurant(dto,school,file);
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
            throw  new IllegalStateException("이미 존재하는 음식점 입니다");
        }
        log.info("음식점 검증이 완료되었습니다.");
    }

    private School validateNotFoundSchool(Long schoolId){
        log.info("음식점 생성 중 학교 존재 여부 검증 메소드가 실행되었습니다.");
        School school = schoolRepository.findById(schoolId)
                .orElseThrow(() -> {
                    log.info("음식점 등록 중 학교가 존재하지 않는 예외가 발생했습니다.");
                    return new NotFoundSchoolException("등록되지 않은 학교입니다.");
                });
        log.info("음식점 생성 중 등록 된 학교 : {}", school.getSchoolName());
        return school;
    }
    public Restaurant findByRestaurantNameAndSchoolName(String restaurantName,String schoolName){
        Restaurant restaurant = restaurantRepository.findByRestaurantNameAndSchool_SchoolName(restaurantName, schoolName);
        return restaurant;
    }


}
