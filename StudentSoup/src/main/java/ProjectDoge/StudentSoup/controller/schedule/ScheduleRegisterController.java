package ProjectDoge.StudentSoup.controller.schedule;

import ProjectDoge.StudentSoup.dto.schedule.ScheduleDto;
import ProjectDoge.StudentSoup.service.schedule.ScheduleRegisterService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class ScheduleRegisterController {

    private final ScheduleRegisterService scheduleRegisterService;

    @PutMapping("schedule/{memberId}")
    public Long createSchedule(ScheduleDto scheduleDto, @PathVariable Long memberId){
        return scheduleRegisterService.join(scheduleDto, memberId);
    }

}
