package ProjectDoge.StudentSoup.service.member;

import ProjectDoge.StudentSoup.dto.member.MemberMyPageBoardReviewDto;
import ProjectDoge.StudentSoup.exception.member.MemberIdNotSentException;
import ProjectDoge.StudentSoup.repository.board.BoardRepository;
import ProjectDoge.StudentSoup.repository.boardreview.BoardReviewRepository;
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


    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public Page<MemberMyPageBoardReviewDto> callMyPageBoardReview(Long memberId, Pageable pageable){
        isNotNullMemberId(memberId);
        return boardReviewRepository.callByMemberIdForMyPage(memberId, pageable);
    }

    private void isNotNullMemberId(Long memberId) {
        if(memberId == null){
            throw new MemberIdNotSentException("회원의 기본키가 전달되지 않았습니다.");
        }
    }
}
