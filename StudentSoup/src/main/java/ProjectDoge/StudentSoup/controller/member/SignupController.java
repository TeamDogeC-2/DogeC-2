package ProjectDoge.StudentSoup.controller.member;

import ProjectDoge.StudentSoup.dto.member.MemberFormADto;
import ProjectDoge.StudentSoup.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class SignupController {

    private final MemberService memberService;

    @PostMapping("/signUp/2")
    public MemberFormADto signUpCheck(@RequestBody MemberFormADto dto){
        memberService.validateDuplicateMemberId(dto.getId());
        return dto;
    }



}
