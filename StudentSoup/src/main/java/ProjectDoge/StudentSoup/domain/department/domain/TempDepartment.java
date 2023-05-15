package ProjectDoge.StudentSoup.domain.department.domain;

import ProjectDoge.StudentSoup.domain.model.DateBaseEntity;
import ProjectDoge.StudentSoup.domain.school.domain.TempSchool;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class TempDepartment extends DateBaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "school_id")
    private TempSchool tempSchool;

    protected TempDepartment() {
    }

    public TempDepartment(String name) {
        this.name = name;
    }

    //== 생성 메서드 ==//
    public static TempDepartment createDepartment(TempSchool tempSchool, String name) {
        TempDepartment department = new TempDepartment();
        department.setTempSchool(tempSchool);
        department.name = name;
        return department;
    }

    public void setTempSchool(TempSchool tempSchool) {
        this.tempSchool = tempSchool;
    }

    public void changeSchool(TempSchool tempSchool) {
        if (this.tempSchool == null) {
            setTempSchool(tempSchool);
            return;
        }
        this.tempSchool = tempSchool;
    }
}
