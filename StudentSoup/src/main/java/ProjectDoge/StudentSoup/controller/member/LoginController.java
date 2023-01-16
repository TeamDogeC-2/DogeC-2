package ProjectDoge.StudentSoup.controller.member;

import ProjectDoge.StudentSoup.dto.member.MemberDto;
import ProjectDoge.StudentSoup.dto.member.MemberLoginRequestDto;
import ProjectDoge.StudentSoup.service.member.MemberLoginService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class LoginController {

    private final MemberLoginService memberLoginService;

    @PostMapping("/login")
    public MemberDto login(@RequestBody MemberLoginRequestDto dto){
        return memberLoginService.login(dto.getId(), dto.getPwd());
    }
}
