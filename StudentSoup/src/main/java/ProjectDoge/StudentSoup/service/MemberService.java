package ProjectDoge.StudentSoup.service;

import ProjectDoge.StudentSoup.dto.member.MemberFormADto;
import ProjectDoge.StudentSoup.dto.member.MemberFormBDto;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.entity.member.MemberClassification;
import ProjectDoge.StudentSoup.entity.school.Department;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.exception.member.MemberValidationException;
import ProjectDoge.StudentSoup.repository.department.DepartmentRepository;
import ProjectDoge.StudentSoup.repository.member.MemberRepository;
import ProjectDoge.StudentSoup.repository.school.SchoolRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final SchoolRepository schoolRepository;
    private final DepartmentRepository departmentRepository;

    @Transactional
    public Long join(MemberFormBDto dto){
        log.info("회원 생성 메서드가 실행되었습니다.");
        School school = getMemberDtoSchool(dto.getSchoolId());
        Department department = getMemberDtoDepartment(dto.getDepartmentId());
        log.info("회원의 학교는 : {}, 회원의 학과는 : {}", school.getSchoolName(), department.getDepartmentName());
        Member member = new Member().createMember(dto, school, department);
        validateDuplicateMember(member.getId());
        memberRepository.save(member);
        log.info("회원이 생성되었습니다. [{}][{}] ",member.getId(), member.getNickname());
        return member.getMemberId();
    }

    public Member setMemberEntity(MemberFormBDto form){
        Member member = new Member();
        member.setId(form.getId());
        member.setPwd(form.getPwd());
        member.setNickname(form.getNickname());
        member.setFile(null);
        member.setMemberClassification(MemberClassification.STUDENT);
        return member;
    }

    public School getMemberDtoSchool(Long schoolId){
        Optional<School> school = schoolRepository.findById(schoolId);
        return school.get();
    }

    public Department getMemberDtoDepartment(Long departmentId){
        Optional<Department> department = departmentRepository.findById(departmentId);
        return department.get();
    }

    public void validateDuplicateMember(String memberId) {
        log.info("회원 중복 검증 메소드가 실행되었습니다.");
        // EXCEPTION
        Member findMembers = memberRepository.findById(memberId);
        if (findMembers != null) {
            log.info("회원이 존재하는 예외가 발생했습니다.");
            throw new MemberValidationException("중복된 아이디 입니다.");
        }
        log.info("회원 중복 검증이 완료되었습니다.");
    }

    public Member findOne(Long memberId){
        Optional<Member> member = memberRepository.findById(memberId);
        return member.get();
    }
}
