package ProjectDoge.StudentSoup.domain.school.controller.dto;

import ProjectDoge.StudentSoup.domain.model.Coordinate;
import ProjectDoge.StudentSoup.domain.school.domain.TempSchool;
import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;

@Data
public class RequestSchoolDto {

    @Max(30)
    @NotEmpty
    private String name;
    @Max(10)
    @Min(3)
    @NotEmpty
    private String latitude;

    @Max(10)
    @Min(3)
    @NotEmpty
    private String longitude;

    @Email
    @NotEmpty
    private String schoolEmail;

    public Coordinate getCoordinate() {
        return new Coordinate(latitude, longitude);
    }

    public TempSchool toEntity() {
        return new TempSchool(this);
    }
}
