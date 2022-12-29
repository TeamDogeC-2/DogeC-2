package ProjectDoge.StudentSoup.school;

import ProjectDoge.StudentSoup.dto.school.SchoolFormDto;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.exception.school.SchoolValidationException;
import ProjectDoge.StudentSoup.service.SchoolService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@SpringBootTest
@Transactional
public class SchoolEntityTest {
    @PersistenceContext
    EntityManager em;

    @Autowired
    private SchoolService schoolService;

    @Test
    void 학교등록테스트() throws Exception {
        //given
        SchoolFormDto school = createSchool();
        //when
        Long schoolId = schoolService.join(school);
        //then
        assertThat(schoolId).isEqualTo(schoolService.findOne(schoolId).getId());
    }

    @Test
    void 학교중복검증테스트() throws Exception {
        //given
        SchoolFormDto school1 = createSchool();
        SchoolFormDto school2 = createSchool();
        //when
        schoolService.join(school1);
        //then
        assertThatThrownBy(()-> schoolService.join(school2))
                .isInstanceOf(SchoolValidationException.class);
    }

    private SchoolFormDto createSchool(){
        SchoolFormDto school = new SchoolFormDto();
        school.setSchoolName("테스트 학교 추가");
        school.setSchoolCoordinate("테스트 학교 좌표");

        return school;
    }
}
