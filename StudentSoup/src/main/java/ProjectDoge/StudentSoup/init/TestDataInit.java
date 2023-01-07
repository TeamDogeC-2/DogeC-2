package ProjectDoge.StudentSoup.init;

import ProjectDoge.StudentSoup.dto.department.DepartmentFormDto;
import ProjectDoge.StudentSoup.dto.member.MemberFormBDto;
import ProjectDoge.StudentSoup.dto.restaurant.RestaurantFormDto;
import ProjectDoge.StudentSoup.dto.school.SchoolFormDto;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.member.GenderType;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantCategory;
import ProjectDoge.StudentSoup.entity.school.Department;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.repository.department.DepartmentRepository;
import ProjectDoge.StudentSoup.repository.school.SchoolRepository;
import ProjectDoge.StudentSoup.service.department.DepartmentRegisterService;
import ProjectDoge.StudentSoup.service.member.MemberRegisterService;
import ProjectDoge.StudentSoup.service.restaurant.RestaurantRegisterService;
import ProjectDoge.StudentSoup.service.school.SchoolRegisterService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Profile;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.time.LocalTime;
import java.util.List;

@Component
@Profile("local")
@RequiredArgsConstructor
public class TestDataInit {
    private final MemberRegisterService memberRegisterService;
    private final SchoolRepository schoolRepository;
    private final SchoolRegisterService schoolRegisterService;
    private final DepartmentRepository departmentRepository;
    private final DepartmentRegisterService departmentRegisterService;
    private final RestaurantRegisterService restaurantRegisterService;

    @EventListener(ApplicationReadyEvent.class)
    public void init(){
        initSchoolAndDepartment();
        initMember();
        initRestaurant();
    }

    private void initSchoolAndDepartment(){
        initSchool();
        initDepartment();
    }

    private void initSchool(){
        SchoolFormDto school1 = new SchoolFormDto();
        school1.setSchoolName("인천대학교 송도캠퍼스");
        school1.setSchoolCoordinate("37.3768067201,126.6347662307");

        SchoolFormDto school2 = new SchoolFormDto();
        school2.setSchoolName("연세대학교 송도캠퍼스");
        school2.setSchoolCoordinate("37.3768067201,126.6347662307");
        schoolRegisterService.join(school1);
        schoolRegisterService.join(school2);
    }

    private void initDepartment(){
        School school1 = schoolRepository.findBySchoolName("인천대학교 송도캠퍼스");
        School school2 = schoolRepository.findBySchoolName("연세대학교 송도캠퍼스");
        DepartmentFormDto dto1 = new DepartmentFormDto();
        dto1.setDepartmentName("더미테스트1 학과1");
        dto1.setSchoolId(school1.getId());

        DepartmentFormDto dto2 = new DepartmentFormDto();
        dto2.setDepartmentName("더미테스트1 학과2");
        dto2.setSchoolId(school1.getId());

        DepartmentFormDto dto3 = new DepartmentFormDto();
        dto3.setDepartmentName("더미테스트2 학과1");
        dto3.setSchoolId(school2.getId());

        DepartmentFormDto dto4 = new DepartmentFormDto();
        dto4.setDepartmentName("더미테스트2 학과2");
        dto4.setSchoolId(school2.getId());

        departmentRegisterService.join(school1.getId(), dto1);
        departmentRegisterService.join(school1.getId(), dto2);
        departmentRegisterService.join(school2.getId(), dto3);
        departmentRegisterService.join(school2.getId(), dto4);
    }

    private void initMember(){
        School school1 = schoolRepository.findBySchoolName("인천대학교 송도캠퍼스");
        School school2 = schoolRepository.findBySchoolName("연세대학교 송도캠퍼스");

        List<Department> departments1 = departmentRepository.findBySchool_Id(school1.getId());
        List<Department> departments2 = departmentRepository.findBySchool_Id(school2.getId());

        MemberFormBDto dto1 = createMemberFormDto("dummyTest1", "test123!", "더미테스트1", "dummytest1@naver.com",
                GenderType.MAN, school1.getId(), departments1.get(0).getId());
        MemberFormBDto dto2 = createMemberFormDto("dummyTest2", "test123!", "더미테스트2", "dummytest2@naver.com",
                GenderType.MAN, school1.getId(), departments1.get(0).getId());
        MemberFormBDto dto3 = createMemberFormDto("dummyTest3", "test123!", "더미테스트3", "dummytest3@naver.com",
                GenderType.MAN, school1.getId(), departments1.get(1).getId());
        MemberFormBDto dto4 = createMemberFormDto("dummyTest4", "test123!", "더미테스트4", "dummytest4@naver.com",
                GenderType.WOMAN, school2.getId(), departments2.get(0).getId());
        MemberFormBDto dto5 = createMemberFormDto("dummyTest5", "test123!", "더미테스트5", "dummytest5@naver.com",
                GenderType.WOMAN, school2.getId(), departments2.get(1).getId());
        MemberFormBDto dto6 = createMemberFormDto("dummyTest6", "test123!", "더미테스트6", "dummytest6@naver.com",
                GenderType.WOMAN, school2.getId(), departments2.get(1).getId());

        memberRegisterService.join(dto1);
        memberRegisterService.join(dto2);
        memberRegisterService.join(dto3);
        memberRegisterService.join(dto4);
        memberRegisterService.join(dto5);
        memberRegisterService.join(dto6);
    }

    private void initRestaurant(){
        School school1 = schoolRepository.findBySchoolName("인천대학교 송도캠퍼스");
        School school2 = schoolRepository.findBySchoolName("연세대학교 송도캠퍼스");

        RestaurantFormDto dto = new RestaurantFormDto().createRestaurantFormDto("스노우폭스 송도점",
                "주소",
                RestaurantCategory.ASIAN,
                LocalTime.now(),
                LocalTime.now(),
                school1.getId(),
                "37.3738948150,126.6364371486",
                null,
                "전화번호",
                "태그",
                "디테일");

        RestaurantFormDto dto2 = new RestaurantFormDto().createRestaurantFormDto("청기와 송도점",
                "주소",
                RestaurantCategory.ASIAN,
                LocalTime.now(),
                LocalTime.now(),
                school2.getId(),
                "37.3874120913,126.6637521009",
                null,
                "전화번호",
                "태그",
                "디테일");
        restaurantRegisterService.join(dto);
        restaurantRegisterService.join(dto2);
    }

    private MemberFormBDto createMemberFormDto(String id, String pwd, String nickname, String email,
                                               GenderType gender, Long schoolId, Long departmentId){
        MemberFormBDto dto = new MemberFormBDto();
        dto.setId(id);
        dto.setPwd(pwd);
        dto.setNickname(nickname);
        dto.setEmail(email);
        dto.setGender(gender);
        dto.setSchoolId(schoolId);
        dto.setDepartmentId(departmentId);
        return dto;
    }
}
