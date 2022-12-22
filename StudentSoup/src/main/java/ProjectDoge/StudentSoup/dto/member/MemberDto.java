package ProjectDoge.StudentSoup.dto.member;

import ProjectDoge.StudentSoup.entity.member.GenderType;
import ProjectDoge.StudentSoup.entity.member.Member;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
public class MemberDto {
    private Long memberId;

    private String id;

    private String nickname;

    private GenderType gender;

    private String email;

    private Long schoolId;
    private String schoolName;

    private Long departmentId;
    private String departmentName;

    private MemberDto getLoginMemberDto(Member member){
        this.memberId = member.getMemberId();
        this.schoolId = member.getSchool().getId();
        this.schoolName = member.getSchool().getSchoolName();
        this.departmentId = member.getDepartment().getId();
        this.departmentName = member.getDepartment().getDepartmentName();
        this.id = member.getId();
        this.nickname = member.getNickname();
        this.gender = member.getGender();
        this.email = member.getEmail();
        return this;
    }
}
