package ProjectDoge.StudentSoup.dto.member;

import ProjectDoge.StudentSoup.entity.member.GenderType;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

@Getter
@Setter
public class MemberFormDto {

    @NotEmpty(message = "아이디 입력은 필수입니다.")
    private String id;

    @NotEmpty(message = "패스워드 입력은 필수입니다.")
    private String pwd;

    @NotEmpty(message = "패스워드 확인은 필수입니다.")
    private String pwd_confirm;

    @NotEmpty(message = "닉네임 입력은 필수입니다.")
    private String nickname;

    private GenderType gender;

    @Email(message = "이메일 입력은 필수입니다.")
    private String email;

    private Long school;

    private Long department;

    private Long subDepartment;

}
