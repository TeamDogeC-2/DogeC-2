package ProjectDoge.StudentSoup.dto.member;


import ProjectDoge.StudentSoup.entity.member.Member;

public class MemberMyPageDto {

    private String nickName;
    private String imageName;
    private String schoolName;
    private String departmentName;
    private String registrationDate;

    public MemberMyPageDto(Member member){
        this.nickName = member.getNickname();
        this.imageName = member.getImageFile().getFileName();
        this.schoolName = member.getSchool().getSchoolName();
        this.departmentName = member.getDepartment().getDepartmentName();
        this.registrationDate = member.getRegistrationDate();
    }
}
