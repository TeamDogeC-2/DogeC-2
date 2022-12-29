package ProjectDoge.StudentSoup.repository.school;

import ProjectDoge.StudentSoup.dto.school.SchoolSearch;
import ProjectDoge.StudentSoup.entity.school.School;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import java.util.Collections;
import java.util.List;

import static ProjectDoge.StudentSoup.entity.school.QSchool.school;

@RequiredArgsConstructor
public class SchoolRepositoryImpl implements SchoolRepositoryCustom{

    private final JPAQueryFactory queryFactory;

    @Override
    public School findBySchoolName(String schoolName) {
        JPQLQuery<School> query = queryFactory.select(school)
                .from(school)
                .where(school.schoolName.eq(schoolName));
        return query.fetchOne();
    }

    @Override
    public List<School> findSchoolDynamicSearch(SchoolSearch schoolSearch) {
        if(schoolSearch.getField() != null && schoolSearch.getField().equals("schoolName") && schoolSearch.getValue() != null) {
            JPQLQuery<School> query = queryFactory
                    .selectFrom(school)
                    .where(school.schoolName.eq(schoolSearch.getValue()));
            return query.fetch();
        }
        return Collections.emptyList();
    }
}
