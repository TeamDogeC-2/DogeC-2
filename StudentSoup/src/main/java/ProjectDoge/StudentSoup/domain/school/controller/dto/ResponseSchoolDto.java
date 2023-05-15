package ProjectDoge.StudentSoup.domain.school.controller.dto;

import ProjectDoge.StudentSoup.domain.model.Coordinate;
import ProjectDoge.StudentSoup.domain.school.domain.TempSchool;
import lombok.Data;

@Data
public class ResponseSchoolDto {

    private Long id;
    private String schoolName;
    private Coordinate coordinate;

    public ResponseSchoolDto(TempSchool tempSchool) {
        this.id = tempSchool.getId();
        this.schoolName = tempSchool.getName();
        this.coordinate = tempSchool.getCoordinate();
    }
}
