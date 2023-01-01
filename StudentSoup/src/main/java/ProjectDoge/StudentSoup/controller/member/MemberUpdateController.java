package ProjectDoge.StudentSoup.controller.member;

import ProjectDoge.StudentSoup.dto.member.MemberFormADto;
import ProjectDoge.StudentSoup.dto.member.MemberUpdateValidationDto;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberUpdateController {

    private final MemberService memberService;

    @PostMapping("/edit/{memberId}/validation")
    public String editIdCheck(@PathVariable("memberId") Long memberId,
                              @Validated @RequestBody MemberUpdateValidationDto dto,
                              BindingResult bindingResult){
        Member member = memberService.findOne(dto.getMemberId());
        memberService.validationCoincideMemberIdPwd(member, dto.getPwd());

        return "ok";
    }
}
