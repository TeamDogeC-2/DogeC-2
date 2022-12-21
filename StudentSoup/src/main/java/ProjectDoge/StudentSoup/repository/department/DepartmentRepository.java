package ProjectDoge.StudentSoup.repository.department;

import ProjectDoge.StudentSoup.entity.school.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long>, DepartmentRepositoryCustom {
}
