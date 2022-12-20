package ProjectDoge.StudentSoup.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "DEPARTMENT")
@Getter
@Setter
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "DEPARTMENT_ID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SCHOOL_ID")
    private School school;

    @Column(name = "DEPARTMENT_NAME")
    private String departmentName;
    @OneToMany(mappedBy = "department")
    private List<Member> members = new ArrayList<>();

    @OneToMany(mappedBy = "department")
    private List<Board> boards = new ArrayList<>();

    //== 연관관계 메서드 ==//
    public void setSchool(School school){
        if(this.school != null){
            school.getDepartments().remove(this);
        }
        this.school = school;
        school.getDepartments().add(this);
    }

    public void setMember(Member member){
        if(!this.members.contains(member)){
            this.members.add(member);
        }
    }

    //== 생성 메서드 ==//
    public Department createTestDepartment(){
        this.setDepartmentName("우리학과");
        return this;
    }

    public Department createTestDepartmentUsingName(String departmentName){
        this.setDepartmentName(departmentName);
        return this;
    }

    public Department createDepartmentForm(DepartmentForm form, School school){
        this.setDepartmentName(form.getDepartmentName());
        this.setSchool(school);
        return this;
    }
}
