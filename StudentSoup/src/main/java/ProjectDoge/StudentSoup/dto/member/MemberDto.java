package ProjectDoge.StudentSoup.dto.member;

import ProjectDoge.StudentSoup.entity.member.Member;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
public class MemberDto {
    private Long memberId;
    private Long schoolId;
    private String schoolName;
    private Long departmentId;
    private String departmentName;
    private String fileName;
    private String id;
    private String nickname;
    private String email;


    // 생성 메소드
    public MemberDto getMemberDto(Member member){
        this.memberId = member.getMemberId();
        this.schoolId = member.getSchool().getId();
        this.schoolName = member.getSchool().getSchoolName();
        this.departmentId = member.getDepartment().getId();
        this.departmentName = member.getDepartment().getDepartmentName();
        this.id = member.getId();
        this.nickname = member.getNickname();
        this.email = member.getEmail();
        if(member.getImageFile() == null){
            this.fileName = null;
        } else{
            this.fileName = member.getImageFile().getFileName();
        }
        return this;
    }
}
