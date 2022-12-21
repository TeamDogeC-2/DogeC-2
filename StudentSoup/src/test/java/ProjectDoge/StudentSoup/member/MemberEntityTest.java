package ProjectDoge.StudentSoup.member;

import ProjectDoge.StudentSoup.entity.file.File;
import ProjectDoge.StudentSoup.entity.member.GenderType;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.entity.member.MemberClassification;
import ProjectDoge.StudentSoup.entity.school.Department;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.service.DepartmentService;
import ProjectDoge.StudentSoup.service.MemberService;
import ProjectDoge.StudentSoup.service.SchoolService;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.Date;

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

    // 고유 키 "STUDENT_ID", "NICKNAME", "ID", "PHONE", "EMAIL"
    @Test
    void 회원가입() throws Exception {
        //given
        School school = createSchool();
        schoolService.join(school);

        Department department = createDepartment(school);
        departmentService.join(department);

        //when
        Member member = createMember("2000","닉네임1", "test", "010-0000-0000", "email@com");
        member.setSchool(school);
        member.setDepartment(school, department);
        Long memberId = memberService.join(member);
        //then
        assertThat(member).isEqualTo(memberService.findOne(member.getMemberId()));
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
     * @param studentId
     * @param nickname
     * @param id
     * @param phone
     * @param email
     * @return
     */
    private Member createMember(String studentId, String nickname, String id, String phone, String email){
        Member member = new Member();
        member.setStudentId(studentId);
        member.setNickname(nickname);
        member.setId(id);
        member.setPwd("test123!");
        member.setName("테스트");
        member.setFile(new File());
        member.setPhone(phone);
        member.setGender(GenderType.MAN);
        member.setEmail(email);
        member.setBirth(new Date());
        member.setMemberClassification(MemberClassification.STUDENT);
        member.setDepartmentPriority(1);
        return member;
    }


}
