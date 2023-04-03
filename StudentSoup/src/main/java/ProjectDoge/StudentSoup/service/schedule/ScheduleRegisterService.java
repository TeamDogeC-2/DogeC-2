package ProjectDoge.StudentSoup.service.schedule;

import ProjectDoge.StudentSoup.dto.schedule.ScheduleDto;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.entity.schedule.Schedule;
import ProjectDoge.StudentSoup.repository.schedule.ScheduleRepository;
import ProjectDoge.StudentSoup.service.member.MemberFindService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class ScheduleRegisterService {

    private final MemberFindService memberFindService;

    private final ScheduleRepository scheduleRepository;

    @Transactional
    public Long join(ScheduleDto scheduleDto,Long memberId){
        Member member = memberFindService.findOne(memberId);
        Schedule schedule = new Schedule().createSchedule(scheduleDto, member);
        scheduleRepository.save(schedule);
        return schedule.getScheduleId();
    }
}
