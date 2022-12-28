package ProjectDoge.StudentSoup.repository.school;

import ProjectDoge.StudentSoup.dto.school.SchoolFormDto;
import ProjectDoge.StudentSoup.dto.school.SchoolSearch;
import ProjectDoge.StudentSoup.entity.school.School;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.EntityManager;
import java.util.Collections;
import java.util.List;

import static ProjectDoge.StudentSoup.entity.board.QBoard.board;
import static ProjectDoge.StudentSoup.entity.member.QMember.member;
import static ProjectDoge.StudentSoup.entity.restaurant.QRestaurant.restaurant;
import static ProjectDoge.StudentSoup.entity.school.QDepartment.department;
import static ProjectDoge.StudentSoup.entity.school.QSchool.school;

@Slf4j
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
        if(schoolSearch.getField() != null && schoolSearch.getField().equals("schoolName") && schoolSearch.getValue() != null) {
            JPQLQuery<School> query = queryFactory
                    .selectFrom(school)
                    .where(school.schoolName.eq(schoolSearch.getValue()));
            return query.fetch();
        }
        return Collections.emptyList();
    }
}
