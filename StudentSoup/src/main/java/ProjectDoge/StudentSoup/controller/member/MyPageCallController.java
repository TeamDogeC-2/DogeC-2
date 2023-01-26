package ProjectDoge.StudentSoup.controller.member;

import ProjectDoge.StudentSoup.dto.member.*;
import ProjectDoge.StudentSoup.service.member.MemberMyPageCallService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/mypage")
public class MyPageCallController {

    private final MemberMyPageCallService memberMyPageCallService;

    @GetMapping
    public MemberMyPageDto callMyPageMain(@RequestBody Long memberId) {
        return memberMyPageCallService.callMyPageMain(memberId);
    }

    @GetMapping("/detail")
    public MemberMyPageDetailDto callMyPageDetail(@RequestBody Long memberId){
        return memberMyPageCallService.callMyPageDetail(memberId);
    }

    @PostMapping("/board")
    public Page<MemberMyPageBoardDto> callMyPageBoard(
            @RequestBody Long memberId,
            @PageableDefault(size = 6) Pageable pageable
    ) {
        return memberMyPageCallService.callMyPageBoard(memberId, pageable);
    }

    @PostMapping("/boardReview")
    public Page<MemberMyPageBoardReviewDto> callMyPageBoardReview(
            @RequestBody Long memberId,
            @PageableDefault(size = 6) Pageable pageable
    ) {
        return memberMyPageCallService.callMyPageBoardReview(memberId, pageable);
    }

    @PostMapping("/restaurantReview")
    public Page<MemberMyPageRestaurantReviewDto> callMyPageRestaurantReview(
            @RequestBody Long memberId,
            @PageableDefault(size = 6) Pageable pageable,
            @RequestParam("filter") String cond
    ) {
        return memberMyPageCallService.callMyRestaurantReview(memberId, cond, pageable);
    }
}
