package ProjectDoge.StudentSoup.repository.department;

import ProjectDoge.StudentSoup.entity.school.Department;

import java.util.List;

public interface DepartmentRepositoryCustom {
    List<Department> findBySchool_Id(Long schoolId);
    Department findByDepartmentNameAndSchool_SchoolName(String departmentName, String schoolName);
}
