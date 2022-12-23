package ProjectDoge.StudentSoup.init;

import ProjectDoge.StudentSoup.dto.department.DepartmentFormDto;
import ProjectDoge.StudentSoup.dto.member.MemberFormBDto;
import ProjectDoge.StudentSoup.entity.member.GenderType;
import ProjectDoge.StudentSoup.entity.school.Department;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.repository.department.DepartmentRepository;
import ProjectDoge.StudentSoup.repository.school.SchoolRepository;
import ProjectDoge.StudentSoup.service.DepartmentService;
import ProjectDoge.StudentSoup.service.MemberService;
import ProjectDoge.StudentSoup.service.SchoolService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;

@Component
@RequiredArgsConstructor
public class TestDataInit {
    private final MemberService memberService;
    private final SchoolRepository schoolRepository;
    private final SchoolService schoolService;
    private final DepartmentRepository departmentRepository;
    private final DepartmentService departmentService;


    @PostConstruct
    public void init(){
        initSchoolAndDepartment();
        initMember();
    }

    private void initSchoolAndDepartment(){
        initSchool();
        initDepartment();
    }

    private void initSchool(){
        School school1 = new School();
        school1.setSchoolName("더미테스트1 학교");
        school1.setSchoolCoordinate("더미테스트1 좌표");

        School school2 = new School();
        school2.setSchoolName("더미테스트2 학교");
        school2.setSchoolCoordinate("더미테스트2 좌표");
        schoolService.join(school1);
        schoolService.join(school2);
    }

    private void initDepartment(){
        School school1 = schoolRepository.findBySchoolName("더미테스트1 학교");
        School school2 = schoolRepository.findBySchoolName("더미테스트2 학교");
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

        departmentService.join(school1.getId(), dto1);
        departmentService.join(school1.getId(), dto2);
        departmentService.join(school2.getId(), dto3);
        departmentService.join(school2.getId(), dto4);
    }

    private void initMember(){
        School school1 = schoolRepository.findBySchoolName("더미테스트1 학교");
        School school2 = schoolRepository.findBySchoolName("더미테스트2 학교");

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

        memberService.join(dto1);
        memberService.join(dto2);
        memberService.join(dto3);
        memberService.join(dto4);
        memberService.join(dto5);
        memberService.join(dto6);
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
