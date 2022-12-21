package ProjectDoge.StudentSoup.repository.department;

import ProjectDoge.StudentSoup.dto.school.SchoolSearch;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.repository.school.SchoolRepositoryCustom;
import com.querydsl.jpa.impl.JPAQueryFactory;

import javax.persistence.EntityManager;
import java.util.List;

public class DepartmentRepositoryImpl implements SchoolRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    public DepartmentRepositoryImpl(EntityManager em){
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public School findBySchoolName(String schoolName) {
        return null;
    }

    @Override
    public List<School> findSchoolDynamicSearch(SchoolSearch schoolSearch) {
        return null;
    }
}
