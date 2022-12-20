package ProjectDoge.StudentSoup.entity.member;

import ProjectDoge.StudentSoup.dto.member.MemberFormDto;
import ProjectDoge.StudentSoup.entity.school.Department;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.board.BoardLike;
import ProjectDoge.StudentSoup.entity.board.BoardReview;
import ProjectDoge.StudentSoup.entity.board.BoardReviewLike;
import ProjectDoge.StudentSoup.entity.file.File;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantLike;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantReview;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "MEMBER", uniqueConstraints = {@UniqueConstraint(
        name = "MEMBER_UNIQUE_CONSTRAINT",
        columnNames = {"STUDENT_ID", "NICKNAME", "ID", "PHONE", "EMAIL"}
)})
@Setter
@Getter
@ToString
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "MEMBER_ID")
    private Long memberId;

    @Column(name = "STUDENT_ID")
    @NotNull
    private String studentId;

    @NotNull
    private String nickname;

    @NotNull
    private String id;

    @NotNull
    private String pwd;

    @NotNull
    private String name;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "IMAGE_FILE_ID")
    private File file;

    @NotNull
    private String phone;

    @Enumerated(EnumType.STRING)
    private GenderType gender;

    private String email;

    @Temporal(TemporalType.DATE)
    @Column(name = "BIRTH_DATE")
    private Date birth;

    @Column(name = "MEMBER_CLASSIFICATION")
    @Enumerated(EnumType.STRING)
    private MemberClassification memberClassification;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SCHOOL_ID", nullable = false)
    private School school;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "DEPARTMENT_ID", nullable = false)
    private Department department;

    private Integer departmentPriority;

    @OneToMany(mappedBy = "member")
    private List<Board> boards = new ArrayList<>();
    @OneToMany(mappedBy = "member")
    private List<RestaurantLike> restaurantLikes = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<RestaurantReview> restaurantReviews = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BoardLike> boardLikes = new ArrayList<>();


    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BoardReviewLike> boardReviewLikes = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BoardReview> boardReviews = new ArrayList<>();

    //== 연관관계 메서드 ==//
    public void setSchool(School school){
        if(this.school != null){
            this.school.getMembers().remove(this);
        }
        this.school = school;
        school.getMembers().add(this);
    }
    public void setDepartment(School school, Department department){
        List<Department> departmentList = school.getDepartments();
        for(Department findDepartment : departmentList){
            if(department.getDepartmentName().equals(findDepartment.getDepartmentName())){
                this.department = findDepartment;
                department.getMembers().add(this);
            }
        }
        if(this.department == null){
            // 예외처리
        }
    }

    //== 생성 메서드 ==//
    public Member createTestMember(){
        Member member = new Member();
        member.setStudentId("20170218");
        member.setId("admin");
        member.setPwd("123456");
        member.setName("문종운");
        member.setNickname("봄보");
        member.setPhone("01068000708");
        member.setGender(GenderType.MAN);
        member.setEmail("bombo96@naver.com");
        try {
            member.setBirth(new SimpleDateFormat("yyyy-MM-dd").parse("1996-01-11"));
        } catch(ParseException e){
            System.out.println(e.getMessage());
        }
        member.setMemberClassification(MemberClassification.STUDENT);

        return member;
    }
    public Member createMember(MemberFormDto form, School school, Department department, File file) {
        this.setStudentId(form.getStudentId());
        this.setId(form.getId());
        this.setPwd(form.getPwd());
        this.setName(form.getName());
        this.setNickname(form.getNickname());
        this.setPhone(form.getPhone());
        this.setGender(form.getGender());
        this.setEmail(form.getEmail());
        this.setSchool(school);
        this.setDepartment(school, department);
        this.setFile(file);
        try {
            this.setBirth(new SimpleDateFormat("yyyy-MM-dd").parse(dateFormat(form.getBirth().toString())));
        } catch (ParseException e) {
            System.out.println(e.getMessage());
        }
        this.setMemberClassification(MemberClassification.STUDENT);
        return this;
    }

}
