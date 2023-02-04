package ProjectDoge.StudentSoup.service.BoardReview;


import ProjectDoge.StudentSoup.entity.board.BoardReview;
import ProjectDoge.StudentSoup.exception.boardreview.BoardReviewNotOwnException;
import ProjectDoge.StudentSoup.repository.boardreview.BoardReviewRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Service
@RequiredArgsConstructor
public class BoardReviewDeleteService {

    private final BoardReviewFindService boardReviewFindService;

    private final BoardReviewRepository boardReviewRepository;

    @Transactional
    public ConcurrentHashMap<String,Object> deleteBoardReview(Long boardReviewId, Long memberId){
        ConcurrentHashMap<String,Object> resultMap = new ConcurrentHashMap<>();
        BoardReview boardReview = boardReviewFindService.findOne(boardReviewId);
        checkBoardReviewOwn(memberId,boardReview);
        checkReviewLevel(boardReview);
        resultMap.put("result","ok");
        resultMap.put("boardReviewId",boardReviewId);
        return resultMap;
    }

    private void checkReviewLevel(BoardReview boardReview) {
        if(boardReview.getLevel() == 0){
            List<BoardReview> boardReviewList = boardReviewRepository.findBySeq(boardReview.getSeq());
            deleteReply(boardReview, boardReviewList);

        }
        else{
            List<BoardReview> boardReviewList = boardReviewRepository.findBySeq(boardReview.getSeq());
            deleteNestedReply(boardReview, boardReviewList);
        }
    }

    private void  deleteNestedReply(BoardReview boardReview, List<BoardReview> boardReviewList) {
        if(boardReviewList.size() == 2 && boardReviewList.get(0).getActive().equals("N")){
            boardReviewRepository.delete(boardReview);
            boardReviewRepository.delete(boardReviewList.get(0));
        }
        else{
            boardReviewRepository.delete(boardReview);
        }
    }

    private void deleteReply(BoardReview boardReview, List<BoardReview> boardReviewList) {
        if (boardReviewList.size() == 1) {
            boardReviewRepository.delete(boardReview);
        }
        else{
            boardReview.setActive("N");
        }
    }

    private void checkBoardReviewOwn(Long memberId, BoardReview boardReview) {
        if (boardReview.getMember().getMemberId() != memberId){
            throw new BoardReviewNotOwnException("해당 리뷰는 해당 회원이 작성한 리뷰가 아닙니다.");
        }
    }
}
