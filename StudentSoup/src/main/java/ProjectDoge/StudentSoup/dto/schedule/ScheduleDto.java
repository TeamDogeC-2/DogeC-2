package ProjectDoge.StudentSoup.dto.schedule;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class ScheduleDto {

    private String DayOfWeek;

    private int startTime;

    private int endTime;

    private String color;

    private String subject;
}
