package ProjectDoge.StudentSoup.service.BoardReview;

import ProjectDoge.StudentSoup.commonmodule.ConstField;
import ProjectDoge.StudentSoup.dto.board.BoardReviewDto;
import ProjectDoge.StudentSoup.entity.board.BoardReview;
import ProjectDoge.StudentSoup.entity.board.BoardReviewLike;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.repository.boardreview.BoardReviewLikeRepository;
import ProjectDoge.StudentSoup.service.member.MemberFindService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Service
@RequiredArgsConstructor
public class BoardReviewLikeService {
        private final BoardReviewLikeRepository boardReviewLikeRepository;
        private final BoardReviewFindService boardReviewFindService;
        private final MemberFindService memberFindService;

    @Transactional
    public ConcurrentHashMap<String,Object> boardReviewLike(Long memberId,Long boardReviewId){
        ConcurrentHashMap<String,Object> resultMap = new ConcurrentHashMap<>();
        BoardReviewLike boardReviewLike = boardReviewLikeRepository.findBoardReviewLikeByReviewIdAndMemberId(memberId, boardReviewId).orElse(null);
        BoardReview boardReview = boardReviewFindService.findOne(boardReviewId);
        Member member = memberFindService.findOne(memberId);

        if(boardReviewLike == null){
            likeBoardReview(boardReview,member,resultMap);
        }
        else{
            unlikeBoardReview(boardReview,boardReviewLike,resultMap);
        }

        return  resultMap;
    }

    private void unlikeBoardReview(BoardReview boardReview,BoardReviewLike boardReviewLike, ConcurrentHashMap<String, Object> resultMap) {
        boardReviewLikeRepository.delete(boardReviewLike);
        boardReview.minusLikeCount();
        BoardReviewDto boardReviewDto = new BoardReviewDto().createBoardReviewDto(boardReview, ConstField.NOT_LIKED);
        resultMap.put("data",boardReviewDto);
        resultMap.put("result","cancel");
    }

    private void likeBoardReview(BoardReview boardReview, Member member, ConcurrentHashMap<String, Object> resultMap) {
        BoardReviewLike boardReviewLike = new BoardReviewLike().createBoardReviewLike(boardReview,member);
        boardReviewLikeRepository.save(boardReviewLike);
        boardReview.addLikeCount();
        BoardReviewDto boardReviewDto = new BoardReviewDto().createBoardReviewDto(boardReview, ConstField.LIKED);
        resultMap.put("data",boardReviewDto);
        resultMap.put("result","like");
    }
}
