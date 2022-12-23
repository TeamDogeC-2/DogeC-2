package ProjectDoge.StudentSoup.repository.school;

import ProjectDoge.StudentSoup.dto.school.SchoolSearch;
import ProjectDoge.StudentSoup.entity.school.School;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;

import javax.persistence.EntityManager;
import java.util.List;

import static ProjectDoge.StudentSoup.entity.school.QSchool.school;


public class SchoolRepositoryImpl implements SchoolRepositoryCustom{

    private final JPAQueryFactory queryFactory;

    public SchoolRepositoryImpl(EntityManager em){
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public School findBySchoolName(String schoolName) {
        JPQLQuery<School> query = queryFactory.select(school)
                .from(school)
                .where(school.schoolName.eq(schoolName));
        return query.fetchOne();
    }

    @Override
    public List<School> findSchoolDynamicSearch(SchoolSearch schoolSearch) {
        return null;
    }
}
