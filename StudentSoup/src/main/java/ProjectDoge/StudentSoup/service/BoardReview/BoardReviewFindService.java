package ProjectDoge.StudentSoup.service.BoardReview;


import ProjectDoge.StudentSoup.entity.board.BoardReview;
import ProjectDoge.StudentSoup.exception.boardreview.BoardReviewIdNotSentException;
import ProjectDoge.StudentSoup.exception.boardreview.BoardReviewNotFoundException;
import ProjectDoge.StudentSoup.repository.boardreview.BoardReviewRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class BoardReviewFindService {
    private final BoardReviewRepository boardReviewRepository;

    public BoardReview findOne(Long boardReviewId){
        checkBoardReviewIdSent(boardReviewId);
        return boardReviewRepository.findById(boardReviewId).orElseThrow(() -> {
            return new BoardReviewNotFoundException("등록되지 않은 리뷰 입니다.");
        });
    }

    private void checkBoardReviewIdSent(Long boardReviewId) {
        if (boardReviewId == null){
            log.info("boardReviewId 가 전송되지 않았습니다.");
            throw new BoardReviewIdNotSentException("boardReviewId 가 전송되지 않았습니다.");
        }
    }

}
