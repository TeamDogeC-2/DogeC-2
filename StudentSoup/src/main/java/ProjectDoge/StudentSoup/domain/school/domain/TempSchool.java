package ProjectDoge.StudentSoup.domain.school.domain;

import ProjectDoge.StudentSoup.domain.department.domain.TempDepartment;
import ProjectDoge.StudentSoup.domain.model.Coordinate;
import ProjectDoge.StudentSoup.domain.model.DateBaseEntity;
import ProjectDoge.StudentSoup.domain.school.controller.dto.RequestSchoolDto;
import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class TempSchool extends DateBaseEntity {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @Embedded
    private Coordinate coordinate;
    private String schoolEmail;

    @OneToMany(mappedBy = "school")
    private List<TempDepartment> departments = new ArrayList<>();

    protected TempSchool() {}

    public TempSchool(RequestSchoolDto dto) {
        this.name = dto.getName();
        this.coordinate = dto.getCoordinate();
        this.schoolEmail = dto.getSchoolEmail();
    }

    //== 생성 편의 메서드 ==//
    public void addDepartment(TempDepartment department) {
        if(departments.contains(department))
            return;

        departments.add(department);
        department.setTempSchool(this);
    }
}
