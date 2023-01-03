package ProjectDoge.StudentSoup.service.member;

import ProjectDoge.StudentSoup.dto.member.MemberDto;
import ProjectDoge.StudentSoup.entity.member.Member;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberLoginService {

    private final MemberValidationService memberValidationService;

    public MemberDto login(String id, String pwd) {
        log.info("로그인 서비스 로직 실행");
        Member member = memberValidationService.validationExistLoginId(id);
        memberValidationService.validationCoincideMemberIdPwd(member, pwd);
        MemberDto memberDto = new MemberDto();
        log.info("로그인이 완료되었습니다. 현재 로그인 된 회원의 아이디[{}], 닉네임[{}]", member.getId(), member.getNickname());
        return memberDto.getMemberDto(member);
    }


}
