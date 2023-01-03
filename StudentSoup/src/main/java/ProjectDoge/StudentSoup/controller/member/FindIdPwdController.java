package ProjectDoge.StudentSoup.controller.member;

import ProjectDoge.StudentSoup.dto.member.EmailDto;
import ProjectDoge.StudentSoup.service.member.MemberAccountFindService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Slf4j
@RequestMapping("/members")
@RequiredArgsConstructor
@RestController
public class FindIdPwdController {

    private final MemberAccountFindService memberAccountFindService;

    @PostMapping("/find/id")
    public String findAccountMemberId(@RequestBody Map<String, String> map){
        EmailDto emailDto = memberAccountFindService.createFindMemberIdUsingEmail(map.get("email"));
        memberAccountFindService.mailSend(emailDto);
        return "ok";
    }

    @PostMapping("/find/pwd")
    public String findAccountMemberPwd(@RequestBody Map<String, String> map){
        EmailDto emailDto = memberAccountFindService.createFindPwdUsingEmailAndId(map.get("email"), map.get("id"));
        memberAccountFindService.mailSend(emailDto);
        return "ok";
    }
}
