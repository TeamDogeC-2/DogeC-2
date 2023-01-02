package ProjectDoge.StudentSoup.controller.member;

import ProjectDoge.StudentSoup.dto.member.EmailDto;
import ProjectDoge.StudentSoup.service.member.MemberFindService;
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

    private final MemberFindService memberFindService;

    @PostMapping("/find/id")
    public String findAccountMemberId(@RequestBody Map<String, String> map){
        EmailDto emailDto = memberFindService.createFindMemberIdUsingEmail(map.get("email"));
        if(emailDto == null){
            return "fail";
        } else {
            memberFindService.mailSend(emailDto);
            return "ok";
        }
    }
}
