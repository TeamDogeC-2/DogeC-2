package ProjectDoge.StudentSoup.restaurant;

import ProjectDoge.StudentSoup.dto.restaurant.RestaurantFormDto;
import ProjectDoge.StudentSoup.dto.school.SchoolFormDto;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantCategory;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.exception.restaurant.RestaurantValidationException;
import ProjectDoge.StudentSoup.exception.school.SchoolNotFoundException;
import ProjectDoge.StudentSoup.service.RestaurantService;
import ProjectDoge.StudentSoup.service.SchoolService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalTime;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@SpringBootTest
@Transactional
public class RestaurantEntityTest {

    @PersistenceContext
    EntityManager em;

    @Autowired
    SchoolService schoolService;

    @Autowired
    RestaurantService restaurantService;

    @Autowired
    WebApplicationContext webApplicationContext;

    MockMultipartFile multipartFile = new MockMultipartFile("mockFile",
            "",
            "",
            "".getBytes());



    Long schoolId = 0L;

    @BeforeEach
    void 학교등록() throws Exception {
        SchoolFormDto dto = createSchool();
        schoolId = schoolService.join(dto);

        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
        mockMvc.perform(MockMvcRequestBuilders
                .multipart("/api/uri/send")
                .file(multipartFile));
    }

    @Test
    void 음식점등록테스트() throws Exception{
        //given
        RestaurantFormDto dto = createRestaurantDto("음식점1","주소", RestaurantCategory.ASIAN,LocalTime.now(),LocalTime.now(), schoolId,"좌표값",new ImageFile(),"전화번호","태그","디테일");
        //when
        Long restaurantId = restaurantService.join(dto, multipartFile);
        School school = schoolService.findOne(schoolId);
        //then
        assertThat(restaurantId).isEqualTo(restaurantService.findByRestaurantNameAndSchoolName(dto.getName(),school.getSchoolName()).getId());
    }
    @Test
    void 음식점등록시_학교없음() throws Exception{
        //given
        Long errorSchoolId = 0L;
        RestaurantFormDto dto = createRestaurantDto("음식점1","주소", RestaurantCategory.ASIAN,LocalTime.now(),LocalTime.now(),errorSchoolId,"좌표값",new ImageFile(),"전화번호","태그","디테일");
        //then
        assertThatThrownBy(() -> restaurantService.join(dto, multipartFile))
                .isInstanceOf(SchoolNotFoundException.class);
    }
    @Test
    void 음식점중복() throws Exception{
        //given
        RestaurantFormDto dto = createRestaurantDto("음식점1","주소", RestaurantCategory.ASIAN,LocalTime.now(),LocalTime.now(),schoolId,"좌표값",new ImageFile(),"전화번호","태그","디테일");
        restaurantService.join(dto, multipartFile);
        RestaurantFormDto dto1 = createRestaurantDto("음식점1","주소", RestaurantCategory.ASIAN,LocalTime.now(),LocalTime.now(),schoolId,"좌표값",new ImageFile(),"전화번호","태그","디테일");
        //then
        assertThatThrownBy(() -> restaurantService.join(dto1, multipartFile))
                .isInstanceOf(RestaurantValidationException.class);
    }

    private RestaurantFormDto createRestaurantDto(String name, String address, RestaurantCategory category , LocalTime startTime, LocalTime endTime, Long schoolId, String coordinate, ImageFile imageFile, String tel, String tag, String detail) {
        RestaurantFormDto dto = new RestaurantFormDto();
        dto.createRestaurantFormDto(name,address,category,startTime,endTime,schoolId,coordinate, imageFile,tel,tag,detail);
        return dto;
    }

    private SchoolFormDto createSchool(){
        SchoolFormDto dto = new SchoolFormDto();
        dto.setSchoolName("테스트 학교");
        dto.setSchoolCoordinate("테스트 학교 좌표");
        return dto;
    }
}
