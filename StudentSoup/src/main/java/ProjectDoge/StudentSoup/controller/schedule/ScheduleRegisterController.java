package ProjectDoge.StudentSoup.controller.schedule;

import ProjectDoge.StudentSoup.dto.schedule.ScheduleDto;
import ProjectDoge.StudentSoup.repository.schedule.ScheduleRepository;
import ProjectDoge.StudentSoup.service.schedule.ScheduleCallService;
import ProjectDoge.StudentSoup.service.schedule.ScheduleRegisterService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class ScheduleRegisterController {

    private final ScheduleRegisterService scheduleRegisterService;

    private final ScheduleRepository scheduleRepository;

    private final ScheduleCallService scheduleCallService;
    @PostMapping("Schedule/{memberId}")
    public List<ScheduleDto> callSchedule(@PathVariable Long memberId){
        List<ScheduleDto> schedules = scheduleCallService.getSchedule(memberId);
        return schedules;
    }

    @PutMapping("schedule/{memberId}")
    public Long createSchedule(ScheduleDto scheduleDto, @PathVariable Long memberId){
        return scheduleRegisterService.join(scheduleDto, memberId);
    }

    @DeleteMapping("schedule/{scheduleId}")
    public ResponseEntity<String> deleteSchedule(@PathVariable Long scheduleId){
        scheduleRepository.deleteById(scheduleId);
    return ResponseEntity.ok("ok");
    }
}
