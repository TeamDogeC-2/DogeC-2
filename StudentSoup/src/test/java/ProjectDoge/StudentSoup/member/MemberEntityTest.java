package ProjectDoge.StudentSoup.member;

import ProjectDoge.StudentSoup.dto.member.MemberFormADto;
import ProjectDoge.StudentSoup.dto.member.MemberFormBDto;
import ProjectDoge.StudentSoup.entity.file.File;
import ProjectDoge.StudentSoup.entity.member.GenderType;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.entity.member.MemberClassification;
import ProjectDoge.StudentSoup.entity.school.Department;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.exception.member.MemberValidationException;
import ProjectDoge.StudentSoup.service.DepartmentService;
import ProjectDoge.StudentSoup.service.MemberService;
import ProjectDoge.StudentSoup.service.SchoolService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import static org.assertj.core.api.Assertions.*;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
public class MemberEntityTest {

    @PersistenceContext
    EntityManager em;

    @Autowired
    MemberService memberService;

    @Autowired
    SchoolService schoolService;

    @Autowired
    DepartmentService departmentService;


    @Nested
    @DisplayName("회원가입 검증")
    class 회원가입{
        School school = createSchool();
        Department department = createDepartment(school);

        @BeforeEach
        void schoolAndDepartment(){
            schoolService.join(school);
            departmentService.join(department);
        }
        @Test
        void 회원가입_A_중복() throws Exception {
            //given
            Member member = createMember("테스트1", "test1", "test@naver.com");
            member.setSchool(school);
            member.setDepartment(department);
            memberService.join(member);
            //when
            MemberFormADto memberFormADto = createMemberFormA("test1", "test123!");
            //then
            assertThatThrownBy(() -> memberService.validateDuplicateMember(memberFormADto.getId()))
                    .isInstanceOf(MemberValidationException.class);
        }

        @Test
        void 회원가입_A성공ToB() throws Exception {
            //given
            MemberFormADto memberFormADto = createMemberFormA("test1", "test123!");
            //when
            MemberFormBDto memberFormBDto = createMemberFormB(memberFormADto);
            memberFormBDto.setSchoolId(school.getId());
            memberFormBDto.setDepartmentId(department.getId());
            //then
            assertThat(memberFormADto.getId()).isEqualTo(memberFormBDto.getId());
            assertThat(memberFormADto.getPwd()).isEqualTo(memberFormBDto.getPwd());
        }

        @Test
        void 회원가입_성공() throws Exception {
            //given
            MemberFormADto memberFormADto = createMemberFormA("test1", "test123!");
            MemberFormBDto memberFormBDto = createMemberFormB(memberFormADto);
            memberFormBDto.setSchoolId(school.getId());
            memberFormBDto.setDepartmentId(department.getId());

            School school1 = schoolService.findOne(memberFormBDto.getSchoolId());
            Department department1 = departmentService.findOne(memberFormBDto.getDepartmentId());
            //when
            Member member = new Member().createMember(memberFormBDto, school1, department1);
            memberService.join(member);
            //then
            assertThat(member.getId()).isEqualTo(memberService.findOne(member.getMemberId()).getId());
            assertThat(school1.getId()).isEqualTo(memberService.findOne(member.getMemberId()).getSchool().getId());
            assertThat(department1.getId()).isEqualTo(memberService.findOne(member.getMemberId()).getDepartment().getId());
        }
    }

    private School createSchool(){
        School school = new School();
        school.setSchoolName("테스트 학교");
        school.setSchoolCoordinate("테스트 학교 좌표");
        return school;
    }

    private Department createDepartment(School school) {
        Department department = new Department();
        department.setDepartmentName("테스트 학과");
        department.setSchool(school);
        return department;
    }

    /**
     *
     * @param nickname
     * @param id
     * @param email
     * @return
     */
    private Member createMember(String nickname, String id, String email){
        Member member = new Member();
        member.setNickname(nickname);
        member.setId(id);
        member.setPwd("test123!");
        member.setFile(new File());
        member.setGender(GenderType.MAN);
        member.setEmail(email);
        member.setMemberClassification(MemberClassification.STUDENT);
        return member;
    }

    private MemberFormADto createMemberFormA(String id, String pwd){
        MemberFormADto formA = new MemberFormADto();
        formA.setId(id);
        formA.setPwd(pwd);
        return formA;
    }

    private MemberFormBDto createMemberFormB(MemberFormADto dto){
        MemberFormBDto formB = new MemberFormBDto();
        formB.setId(dto.getId());
        formB.setPwd(dto.getPwd());
        formB.setNickname("테스트닉네임");
        formB.setEmail("test@naver.com");
        formB.setGender(GenderType.MAN);
        return formB;
    }


}
