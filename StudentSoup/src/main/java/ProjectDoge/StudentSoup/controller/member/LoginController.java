package ProjectDoge.StudentSoup.controller.member;

import ProjectDoge.StudentSoup.dto.member.MemberDto;
import ProjectDoge.StudentSoup.dto.member.MemberLoginRequestDto;
import ProjectDoge.StudentSoup.interceptor.SessionConst;
import ProjectDoge.StudentSoup.service.member.MemberLoginService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class LoginController {

    private final MemberLoginService memberLoginService;

    @PostMapping("/login")
    public ResponseEntity<Map<String,String>> login(@RequestBody MemberLoginRequestDto dto, HttpServletRequest request){

        Map<String,String> token = memberLoginService.login(dto.getId(), dto.getPwd());
        HttpSession session = request.getSession();
        return ResponseEntity.ok().body(token);
    }

    @PostMapping("/logout")
    public ResponseEntity<Result<String>> logout(HttpServletRequest request){
        HttpSession session = request.getSession(false);
        if(session != null) {
            session.invalidate();
        }
        return ResponseEntity.ok(new Result<String>("ok"));
    }

    @Getter
    static class Result<T> {
        private final T data;

        public Result(T data){
            this.data = data;
        }
    }
}
