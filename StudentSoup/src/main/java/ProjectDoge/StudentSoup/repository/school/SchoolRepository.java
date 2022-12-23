package ProjectDoge.StudentSoup.repository.school;

import ProjectDoge.StudentSoup.entity.school.School;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SchoolRepository extends JpaRepository<School, Long>, SchoolRepositoryCustom {
}
