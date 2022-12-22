package ProjectDoge.StudentSoup.repository.department;

import ProjectDoge.StudentSoup.dto.school.SchoolSearch;
import ProjectDoge.StudentSoup.entity.school.Department;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.repository.school.SchoolRepositoryCustom;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;

import javax.persistence.EntityManager;
import java.util.List;

import static ProjectDoge.StudentSoup.entity.school.QDepartment.department;
import static ProjectDoge.StudentSoup.entity.school.QSchool.school;

public class DepartmentRepositoryImpl implements DepartmentRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    public DepartmentRepositoryImpl(EntityManager em){
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public List<Department> findBySchool_Id(Long schoolId) {
        JPQLQuery<Department> query = queryFactory
                .select(department).distinct()
                .from(department)
                .leftJoin(department.school, school)
                .fetchJoin()
                .where(department.school.id.eq(schoolId));

        return query.fetch();
    }

    @Override
    public Department findByDepartmentNameAndSchool_SchoolName(String departmentName, String schoolName) {
        JPQLQuery<Department> query = queryFactory
                .select(department)
                .from(department)
                .leftJoin(department.school, school)
                .fetchJoin()
                .where(department.departmentName.eq(departmentName), department.school.schoolName.eq(schoolName));
        return query.fetchOne();
    }
}
