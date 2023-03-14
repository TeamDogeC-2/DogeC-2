package ProjectDoge.StudentSoup.service.member;

import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class MemberDuplicateCheckService {

    private final MemberRepository memberRepository;

    public String checkMemberId(String memberId){
        Member member = memberRepository.findById(memberId).orElse(null);
        if(member == null){
            return "OK";
        }
        return "NO";
    }


}
