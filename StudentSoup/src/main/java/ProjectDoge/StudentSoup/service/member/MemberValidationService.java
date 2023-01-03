package ProjectDoge.StudentSoup.service.member;

import ProjectDoge.StudentSoup.dto.member.MemberFormBDto;
import ProjectDoge.StudentSoup.dto.member.MemberUpdateDto;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.exception.member.MemberNotFoundException;
import ProjectDoge.StudentSoup.exception.member.MemberNotMatchIdPwdException;
import ProjectDoge.StudentSoup.exception.member.MemberValidationException;
import ProjectDoge.StudentSoup.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberValidationService {

    private final MemberRepository memberRepository;
    public void validateDuplicateMember(MemberFormBDto dto) {
        validateDuplicateMemberNickname(dto.getNickname());
        validateDuplicateMemberEmail(dto.getEmail());
    }

    public void validateDuplicateMemberNickname(String nickname) {
        log.info("회원 닉네임 중복 검증 메소드가 실행되었습니다.");

        Member findMember = memberRepository.findByNickname(nickname);
        if (findMember != null) {
            log.info("회원 닉네임이 중복 예외가 발생했습니다.");
            throw new MemberValidationException("중복된 닉네임입니다.");
        }
        log.info("회원 닉네임 중복 검증이 완료되었습니다.");
    }

    public void validateDuplicateMemberEmail(String email) {
        log.info("회원 이메일 중복 검증 메소드가 실행되었습니다.");

        Member findMember = memberRepository.findByEmail(email);
        if (findMember != null) {
            log.info("회원 이메일 중복 예외가 발생했습니다.");
            throw new MemberValidationException("중복된 이메일입니다.");
        }
        log.info("회원 이메일 중복 검증이 완료되었습니다.");
    }

    public void validateDuplicateMemberId(String memberId) {
        log.info("회원 아이디 중복 검증 메소드가 실행되었습니다.");

        Member findMember = memberRepository.findById(memberId)
                .orElse(null);

        if (findMember != null) {
            log.info("회원이 존재하는 예외가 발생했습니다.");
            throw new MemberValidationException("중복된 아이디 입니다.");
        }
        log.info("회원 중복 검증이 완료되었습니다.");
    }

    public Member validationExistLoginId(String id) {
        log.info("로그인 아이디 존재 검증 메소드가 실행되었습니다.");
        log.info("입력 된 회원 아이디 : {}", id);
        Member member = memberRepository.findById(id)
                .orElseThrow(() -> {
                    log.info("로그인 하는 아이디 존재하지 않는 예외 발생");
                    return new MemberNotFoundException("회원이 존재하지 않습니다.");
                });
        return member;
    }

    public void validationCoincideMemberIdPwd(Member member, String pwd) {
        log.info("아이디와 비밀번호를 체크하는 검증 로직 실행, 아이디 : [{}], 비밀번호 : [{}]", member.getId(), pwd);
        if(notSameMemberIdPwd(member, pwd)) {
            log.info("아이디와 패스워드가 일치하지 않는 예외 발생");
            throw new MemberNotMatchIdPwdException("아이디 또는 패스워드가 일치하지 않습니다.");
        }
    }

    private boolean notSameMemberIdPwd(Member member, String pwd) {
        return !member.getPwd().equals(pwd);
    }

}
