package ProjectDoge.StudentSoup.service.admin;

import ProjectDoge.StudentSoup.dto.admin.AdminMemberUpdateForm;
import ProjectDoge.StudentSoup.dto.member.MemberFormBDto;
import ProjectDoge.StudentSoup.dto.member.MemberUpdateDto;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.entity.school.Department;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.exception.member.MemberNotFoundException;
import ProjectDoge.StudentSoup.exception.member.MemberValidationException;
import ProjectDoge.StudentSoup.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class AdminMemberService {

    private final MemberRepository memberRepository;

    @Transactional
    public Long adminMemberUpdate(AdminMemberUpdateForm dto, MultipartFile file) {
        log.info("운영자 페이지 회원 업데이트 메서드가 실행되었습니다.");

        Member member = memberRepository.findById(dto.getMemberId())
                .orElseThrow(() -> {
                    throw new MemberNotFoundException();
                });

        School school = getMemberDtoSchool(dto.getSchoolId());
        Department department = getMemberDtoDepartment(dto.getDepartmentId());

        log.info("현재 가져온 학교와 학과 : [{}] / [{}]", school.getSchoolName(), department.getDepartmentName());
        validationChangedNicknameEmail(dto, member);
        adminUpdateMemberField(dto, member);
        log.info("회원 정보가 새로 갱신되었습니다.");
        Long fileId = fileService.join(file);
        updateMemberProfileImage(member, fileId);

        return member.getMemberId();
    }

    private void adminUpdateMemberField(MemberUpdateDto dto, Member member) {
        member.setPwd(dto.getPwd());
        member.setEmail(dto.getEmail());
        member.setNickname(dto.getNickname());
    }

    private void validationChangedNicknameEmail(MemberUpdateDto dto, Member member) {
        log.info("회원 업데이트 중 닉네임과 이메일 검증을 시작합니다.");
        if(!member.getNickname().equals(dto.getNickname())) {
            validateDuplicateMemberNickname(dto.getNickname());
        }
        if(!member.getEmail().equals(dto.getEmail())) {
            validateDuplicateMemberEmail(dto.getEmail());
        }
        log.info("회원 업데이트 중 닉네임 이메일 검증이 완료되었습니다.");
    }

    private void validateDuplicateMemberNickname(String nickname) {
        log.info("회원 닉네임 중복 검증 메소드가 실행되었습니다.");

        Member findMember = memberRepository.findByNickname(nickname);
        if (findMember != null) {
            log.info("회원 닉네임이 중복 예외가 발생했습니다.");
            throw new MemberValidationException("중복된 닉네임입니다.");
        }
        log.info("회원 닉네임 중복 검증이 완료되었습니다.");
    }

    private void validateDuplicateMemberEmail(String email) {
        log.info("회원 이메일 중복 검증 메소드가 실행되었습니다.");

        Member findMember = memberRepository.findByEmail(email);
        if (findMember != null) {
            log.info("회원 이메일 중복 예외가 발생했습니다.");
            throw new MemberValidationException("중복된 이메일입니다.");
        }
        log.info("회원 이메일 중복 검증이 완료되었습니다.");
    }
}
