package ProjectDoge.StudentSoup.repository.school;

import ProjectDoge.StudentSoup.dto.school.SchoolSearch;
import ProjectDoge.StudentSoup.entity.school.School;

import java.util.List;

public interface SchoolRepositoryCustom {
    School findBySchoolName(String schoolName);

    List<School> findSchoolDynamicSearch(SchoolSearch schoolSearch);
}
