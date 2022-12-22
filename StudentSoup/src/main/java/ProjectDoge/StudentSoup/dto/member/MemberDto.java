package ProjectDoge.StudentSoup.dto.member;

import ProjectDoge.StudentSoup.entity.member.GenderType;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.validation.constraints.Email;


@ToString
@Getter
@Setter
public class MemberDto {

    private String id;

    private String nickname;

    private GenderType gender;

    @Email(message = "이메일 입력은 필수입니다.")
    private String email;

    private Long school;
    private String schoolName;

    private Long department;
    private String departmentName;
}
