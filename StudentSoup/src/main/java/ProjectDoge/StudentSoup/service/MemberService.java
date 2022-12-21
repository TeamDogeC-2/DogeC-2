package ProjectDoge.StudentSoup.service;

import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.exception.member.MemberValidationException;
import ProjectDoge.StudentSoup.repository.member.MemberRepository;
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

    @Transactional
    public Long join(Member member){
        log.info("회원 생성 메서드가 실행되었습니다.");
        validateDuplicateMember(member);
        memberRepository.save(member);
        log.info("회원이 생성되었습니다. [{}][{}] ",member.getId(), member.getName());
        return member.getMemberId();
    }

    private void validateDuplicateMember(Member member) {
        log.info("회원 생성 검증 메소드가 실행되었습니다.");
        // EXCEPTION
        Member findMembers = memberRepository.findById(member.getId());
        if (findMembers != null) {
            log.info("회원이 존재하는 예외가 발생했습니다.");
            throw new MemberValidationException("이미 존재하는 회원입니다.");
        }
        log.info("회원 검증이 완료되었습니다.");
    }

    public Member findOne(Long memberId){
        Optional<Member> member = memberRepository.findById(memberId);
        return member.get();
    }
}
