package ProjectDoge.StudentSoup.controller.member;

import ProjectDoge.StudentSoup.dto.member.MemberDto;
import ProjectDoge.StudentSoup.dto.member.MemberUpdateDto;
import ProjectDoge.StudentSoup.dto.member.MemberUpdateValidationDto;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.service.member.MemberFindService;
import ProjectDoge.StudentSoup.service.member.MemberService;
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
    private final MemberFindService memberFindService;

    @PostMapping("/edit/{memberId}/validation")
    public String editIdCheck(@PathVariable("memberId") Long memberId,
                              @Validated @RequestBody MemberUpdateValidationDto dto,
                              BindingResult bindingResult){
        Member member = memberFindService.findOne(dto.getMemberId());
        memberService.validationCoincideMemberIdPwd(member, dto.getPwd());

        return "ok";
    }

    @PostMapping("/edit/{memberId}")
    public MemberDto editMember(@PathVariable("memberId") Long memberId,
                                @RequestBody MemberUpdateDto dto){
        Long updatedMemberId = memberService.updateMember(dto);
        Member member = memberFindService.findOne(updatedMemberId);
        MemberDto memberDto = new MemberDto().getMemberDto(member);
        return memberDto;
    }

}
