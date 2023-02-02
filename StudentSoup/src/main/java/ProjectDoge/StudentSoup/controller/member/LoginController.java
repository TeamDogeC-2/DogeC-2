package ProjectDoge.StudentSoup.controller.member;

import ProjectDoge.StudentSoup.dto.member.MemberDto;
import ProjectDoge.StudentSoup.dto.member.MemberLoginRequestDto;
import ProjectDoge.StudentSoup.interceptor.SessionConst;
import ProjectDoge.StudentSoup.service.member.MemberLoginService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Slf4j
@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class LoginController {

    private final MemberLoginService memberLoginService;

    @PostMapping("/login")
    public MemberDto login(@RequestBody MemberLoginRequestDto dto, HttpServletRequest request){

        MemberDto loginDto = memberLoginService.login(dto.getId(), dto.getPwd());
        HttpSession session = request.getSession();
        session.setAttribute(SessionConst.LOGIN_MEMBER, loginDto.getMemberClassification());
        return loginDto;
    }
}
