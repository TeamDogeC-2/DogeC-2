package ProjectDoge.StudentSoup.service.BoardReview;


import ProjectDoge.StudentSoup.entity.board.BoardReview;
import ProjectDoge.StudentSoup.exception.board.BoardReviewNotOwnException;
import ProjectDoge.StudentSoup.repository.boardreview.BoardReviewRepository;
import ProjectDoge.StudentSoup.service.board.BoardFindService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Service
@RequiredArgsConstructor
public class BoardReviewDeleteService {

    private final BoardReviewFindService boardReviewFindService;

    private final BoardReviewRepository boardReviewRepository;

    @Transactional
    public ConcurrentHashMap<String,Object> deleteBoardReview(Long boardReviewId,Long memberId){
        ConcurrentHashMap<String,Object> resultMap = new ConcurrentHashMap<>();
        BoardReview boardReview = boardReviewFindService.findOne(boardReviewId);
        checkBoardReviewOwn(memberId,boardReview);
        boardReviewRepository.delete(boardReview);
        resultMap.put("result","ok");
        resultMap.put("boardReviewId",boardReviewId);
        return  resultMap;
    }

    private void checkBoardReviewOwn(Long memberId, BoardReview boardReview) {
        if (boardReview.getMember().getMemberId() != memberId){
            throw  new BoardReviewNotOwnException("해당 리뷰는 해당 회원이 작성한 리뷰가 아닙니다.");
        }
    }
}
