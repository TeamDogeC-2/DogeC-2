package ProjectDoge.StudentSoup.dto.member;

import ProjectDoge.StudentSoup.entity.file.File;
import ProjectDoge.StudentSoup.entity.member.GenderType;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

public class MemberFormDto {

    @NotEmpty(message = "아이디 입력은 필수입니다.")
    private String id;

    @NotEmpty(message = "패스워드 입력은 필수입니다.")
    private String pwd;

    @NotEmpty(message = "패스워드 확인은 필수입니다.")
    private String pwd_confirm;

    @NotEmpty(message = "학번 입력은 필수입니다.")
    private String studentId;

    @NotEmpty(message = "이름 입력은 필수입니다.")
    private String name;

    @NotEmpty(message = "닉네임 입력은 필수입니다.")
    private String nickname;

    private String phone;

    private GenderType gender;

    private File file;

    @NotNull(message = "생년월일은 필수입니다.")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date birth;

    @NotEmpty(message = "이메일 입력은 필수입니다.")
    private String email;

    private Long school;

    private Long department;

    private Long subDepartment;

    //== 생성 메서드 ==//
    public void setMember(Member member){
        this.setId(member.getId());
        this.setPwd(member.getPwd());
        this.setPwd_confirm(member.getPwd());
        this.setStudentId(member.getStudentId());
        this.setName(member.getName());
        this.setNickname(member.getNickname());
        this.setPhone(member.getPhone());
        this.setGender(member.getGender());
        this.setFile(member.getFile());
        this.setBirth(member.getBirth());
        this.setEmail(member.getEmail());
        this.setSchool(member.getSchool().getId());
        this.setDepartment(member.getDepartment().getId());
    }
}
