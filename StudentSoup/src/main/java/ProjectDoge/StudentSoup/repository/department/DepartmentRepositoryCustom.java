package ProjectDoge.StudentSoup.repository.department;

import ProjectDoge.StudentSoup.entity.school.Department;

import java.util.List;

public interface DepartmentRepositoryCustom {
    List<Department> findByDepartmentName(String departmentName);
    List<Department> findBySchool_Id(Long SchoolId);
    Department findByDepartmentNameAndSchool_SchoolName(String departmentName, String schoolName);
}
