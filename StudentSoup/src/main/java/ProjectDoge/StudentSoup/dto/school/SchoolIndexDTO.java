package ProjectDoge.StudentSoup.dto.school;

import ProjectDoge.StudentSoup.entity.school.School;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SchoolIndexDTO {
    private Long schoolId;
    private String schoolName;

    //== 생성 메서드 ==//
    public SchoolIndexDTO(School school){
        this.schoolId = school.getId();
        this.schoolName = school.getSchoolName();
    }
}
