package ProjectDoge.StudentSoup.dto.school;

import ProjectDoge.StudentSoup.entity.school.School;
import lombok.Data;

@Data
public class SchoolResponseDto {
    private Long schoolId;
    private String schoolName;
    private String schoolCoordinate;


    public SchoolResponseDto(School school){
        this.schoolId = school.getId();
        this.schoolName = school.getSchoolName();
        this.schoolCoordinate = school.getSchoolCoordinate();
    }
}

