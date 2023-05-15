package ProjectDoge.StudentSoup.domain.department.controller.dto;

import ProjectDoge.StudentSoup.domain.department.domain.TempDepartment;
import lombok.Data;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
public class RequestDepartmentDto {

    @NotNull
    private Long id;

    @Min(2)
    @Max(30)
    @NotEmpty
    private String name;

}
