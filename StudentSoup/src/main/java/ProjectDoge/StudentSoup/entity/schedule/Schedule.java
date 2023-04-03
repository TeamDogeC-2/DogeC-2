package ProjectDoge.StudentSoup.entity.schedule;

import ProjectDoge.StudentSoup.dto.schedule.ScheduleDto;
import ProjectDoge.StudentSoup.entity.member.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter

public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "SCHEDULE_ID")
    private Long scheduleId;

    private String DayOfWeek;


    private int startTime;

    private int endTime;

    private String color;

    private String subject;

    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;

    public Schedule createSchedule(ScheduleDto scheduleDto, Member member) {
        DayOfWeek = scheduleDto.getDayOfWeek();
        this.startTime = scheduleDto.getStartTime();
        this.endTime = scheduleDto.getEndTime();
        this.color = scheduleDto.getColor();
        this.subject = scheduleDto.getSubject();
        this.member = member;
        return  this;
    }
}
