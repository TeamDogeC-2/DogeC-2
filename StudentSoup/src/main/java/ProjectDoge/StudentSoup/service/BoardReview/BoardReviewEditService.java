package ProjectDoge.StudentSoup.service.BoardReview;


import ProjectDoge.StudentSoup.dto.board.BoardReviewUpdateDto;
import ProjectDoge.StudentSoup.entity.board.BoardReview;
import ProjectDoge.StudentSoup.exception.boardreview.BoardReviewContentNullException;
import ProjectDoge.StudentSoup.exception.boardreview.BoardReviewNotOwnException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
public class BoardReviewEditService {

    private final  BoardReviewFindService boardReviewFindService;

    public BoardReviewUpdateDto findEditBoardReview(Long boardReviewId,Long memberId){
        BoardReview boardReview = boardReviewFindService.findOne(boardReviewId);
        checkBoardReviewOwn(memberId, boardReview);
        BoardReviewUpdateDto boardReviewUpdateDto = new BoardReviewUpdateDto().createBoardReviewUpdateDto(boardReview);
        return  boardReviewUpdateDto;
    }

    @Transactional
    public Long editBoardReview(BoardReviewUpdateDto boardReviewUpdateDto,Long boardReviewId){
        checkNullContent(boardReviewUpdateDto);
        BoardReview boardReview = boardReviewFindService.findOne(boardReviewId);
        boardReview.editBoardReview(boardReviewUpdateDto.getContent());
        return boardReview.getReviewId();
    }

    private void checkNullContent(BoardReviewUpdateDto dto) {
        if(dto.getContent().strip().length()==0 || dto.getContent().length()==0){
            throw new BoardReviewContentNullException("리뷰 내용이 null 또는 빈칸 입니다.");
        }
    }


    private void checkBoardReviewOwn(Long memberId, BoardReview boardReview) {
        if (boardReview.getMember().getMemberId() != memberId){
            throw  new BoardReviewNotOwnException("해당 리뷰는 해당 회원이 작성한 리뷰가 아닙니다.");
        }
    }

}
