package ProjectDoge.StudentSoup.restaurant;

import ProjectDoge.StudentSoup.dto.restaurant.RestaurantFormDto;
import ProjectDoge.StudentSoup.dto.restaurant.RestaurantMenuFormDto;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantCategory;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantMenuCategory;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.exception.restaurant.RestaurantMenuValidationException;
import ProjectDoge.StudentSoup.exception.restaurant.RestaurantNotFoundException;
import ProjectDoge.StudentSoup.service.RestaurantMenuService;
import ProjectDoge.StudentSoup.service.RestaurantService;
import ProjectDoge.StudentSoup.service.SchoolService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalTime;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
@Transactional
public class RestaurantMenuEntityTest {
    @PersistenceContext
    EntityManager em;

    @Autowired
    RestaurantService restaurantService;

    @Autowired
    RestaurantMenuService restaurantMenuService;

    @Autowired
    SchoolService schoolService;

    Long restaurantId = 0L;

    Long schoolId = 0L;

    @BeforeEach
    void 학교등록And음식점등록(){
        School school = createSchool();
        schoolId = schoolService.join(school);
        RestaurantFormDto restaurantDto = createRestaurant();
        restaurantId = restaurantService.join(restaurantDto);
    }

    @Test
    void 메뉴등록테스트() throws Exception{
        //given
        RestaurantMenuFormDto restaurantMenuFormDto = createRestaurantMenuDto(restaurantId,"메뉴1", RestaurantMenuCategory.Main,10000);
        //when
        Long restaurantMenuId = restaurantMenuService.join(restaurantMenuFormDto);
        Restaurant restaurant = restaurantService.findOne(restaurantId);
        //then
        assertThat(restaurantMenuId).isEqualTo(restaurantMenuService.validateMenuNameUsingRestaurantId(restaurantMenuFormDto.getName(),restaurant.getId()).getId());
    }
    @Test
    void 메뉴등록시_음식점없음(){
        //given
        Long errorRestaurantId = 0L;
        RestaurantMenuFormDto restaurantMenuFormDto = createRestaurantMenuDto(errorRestaurantId,"메뉴1", RestaurantMenuCategory.Main,10000);
        //then
        assertThatThrownBy(()->restaurantMenuService.join(restaurantMenuFormDto))
                .isInstanceOf(RestaurantNotFoundException.class);
    }

    @Test
    void 메뉴중복테스트(){
        //given
        RestaurantMenuFormDto restaurantMenuFormDto = createRestaurantMenuDto(restaurantId,"메뉴1", RestaurantMenuCategory.Main,10000);
        restaurantMenuService.join(restaurantMenuFormDto);
        RestaurantMenuFormDto duplicateRestaurantMenuFormDto = createRestaurantMenuDto(restaurantId,"메뉴1", RestaurantMenuCategory.Main,10000);
        //then
        assertThatThrownBy(()->restaurantMenuService.join(duplicateRestaurantMenuFormDto))
                .isInstanceOf(RestaurantMenuValidationException.class);
    }

    private RestaurantMenuFormDto createRestaurantMenuDto(Long restaurantId, String name, RestaurantMenuCategory category, int cost) {
       RestaurantMenuFormDto restaurantMenuFormDto = new RestaurantMenuFormDto();
       restaurantMenuFormDto.createRestaurantMenuDto(restaurantId,name,category,cost);
       return restaurantMenuFormDto;
    }

    private School createSchool(){
        School school = new School();
        school.setSchoolName("테스트 학교");
        school.setSchoolCoordinate("테스트 학교 좌표");
        return school;
    }


    private RestaurantFormDto createRestaurant() {
        RestaurantFormDto dto = createRestaurantDto("음식점1","주소", RestaurantCategory.ASIAN,LocalTime.now(),LocalTime.now(),schoolId,"좌표값",new ImageFile(),"전화번호","태그","디테일");
        return  dto;
    }

    private RestaurantFormDto createRestaurantDto(String name, String address, RestaurantCategory category , LocalTime startTime, LocalTime endTime, Long schoolId, String coordinate, ImageFile file, String tel, String tag, String detail) {
        RestaurantFormDto dto = new RestaurantFormDto();
        dto.createRestaurantFormDto(name,address,category,startTime,endTime,schoolId,coordinate,file,tel,tag,detail);
        return dto;
    }
}
