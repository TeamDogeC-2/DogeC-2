package ProjectDoge.StudentSoup.service.schedule;

import ProjectDoge.StudentSoup.dto.schedule.ScheduleDto;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.entity.schedule.Schedule;
import ProjectDoge.StudentSoup.exception.Schedule.ScheduleDuplicateException;
import ProjectDoge.StudentSoup.repository.schedule.ScheduleRepository;
import ProjectDoge.StudentSoup.service.member.MemberFindService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ScheduleRegisterService {

    private final MemberFindService memberFindService;

    private final ScheduleRepository scheduleRepository;

    @Transactional
    public Long join(ScheduleDto scheduleDto,Long memberId){
        Member member = memberFindService.findOne(memberId);
        List<Schedule> schedules = scheduleRepository.findByMemberId(memberId, scheduleDto.getDayOfWeek());
        checkDuplicateTime(schedules,scheduleDto);
        checkDuplicateSubject(scheduleDto);
        Schedule schedule = new Schedule().createSchedule(scheduleDto, member);
        scheduleRepository.save(schedule);
        return schedule.getScheduleId();
    }

    private void checkDuplicateSubject(ScheduleDto scheduleDto) {
        Schedule schedule = scheduleRepository.findBySubject(scheduleDto.getSubject()).orElse(null);
        if(schedule != null){
            throw new ScheduleDuplicateException("중복된 강의가 있습니다.");
        }
    }

    private void checkDuplicateTime(List<Schedule> schedules, ScheduleDto scheduleDto) {
        for (Schedule schedule : schedules) {
            if(scheduleDto.getStartTime() >= schedule.getStartTime() && scheduleDto.getStartTime() <=schedule.getEndTime()
            || scheduleDto.getEndTime() >= schedule.getStartTime() && scheduleDto.getEndTime() <= schedule.getEndTime()){
                throw new ScheduleDuplicateException("중복된 시간이 있습니다.");
            }
        }
    }
}
