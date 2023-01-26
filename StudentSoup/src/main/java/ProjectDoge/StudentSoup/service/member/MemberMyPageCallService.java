package ProjectDoge.StudentSoup.service.member;

import ProjectDoge.StudentSoup.dto.member.*;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.exception.member.MemberIdNotSentException;
import ProjectDoge.StudentSoup.repository.board.BoardRepository;
import ProjectDoge.StudentSoup.repository.boardreview.BoardReviewRepository;
import ProjectDoge.StudentSoup.repository.restaurantreview.RestaurantReviewRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@RequiredArgsConstructor
@Service
public class MemberMyPageCallService {
    private final BoardRepository boardRepository;
    private final BoardReviewRepository boardReviewRepository;
    private final RestaurantReviewRepository restaurantReviewRepository;
    private final MemberFindService memberFindService;

    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public MemberMyPageDto callMyPageMain(Long memberId){
        isNotNullMemberId(memberId);
        Member member = memberFindService.findOne(memberId);
        return new MemberMyPageDto(member);
    }

    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public MemberMyPageDetailDto callMyPageDetail(Long memberId){
        isNotNullMemberId(memberId);
        Long boardCount = boardRepository.countByMemberId(memberId);
        Long boardReviewCount = boardReviewRepository.countByMemberId(memberId);

        return new MemberMyPageDetailDto(boardCount, boardReviewCount);
    }


    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public Page<MemberMyPageBoardReviewDto> callMyPageBoardReview(Long memberId, Pageable pageable){
        isNotNullMemberId(memberId);
        return boardReviewRepository.findByMemberIdForMyPage(memberId, pageable);
    }

    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public Page<MemberMyPageBoardDto> callMyPageBoard(Long memberId, Pageable pageable){
        isNotNullMemberId(memberId);
        return boardRepository.findByMemberIdForMyPage(memberId, pageable);
    }

    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public Page<MemberMyPageRestaurantReviewDto> callMyRestaurantReview(Long memberId, String cond, Pageable pageable){
        isNotNullMemberId(memberId);
        return restaurantReviewRepository.findByMemberIdForMyPage(memberId, cond, pageable);
    }

    private void isNotNullMemberId(Long memberId) {
        if(memberId == null){
            throw new MemberIdNotSentException("회원의 기본키가 전달되지 않았습니다.");
        }
    }
}
