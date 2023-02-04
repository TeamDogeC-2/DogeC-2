package ProjectDoge.StudentSoup.service.BoardReview;


import ProjectDoge.StudentSoup.dto.board.BoardReviewResDto;
import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.board.BoardReview;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.exception.board.BoardReviewContentNullException;
import ProjectDoge.StudentSoup.repository.boardreview.BoardReviewRepository;
import ProjectDoge.StudentSoup.service.board.BoardFindService;
import ProjectDoge.StudentSoup.service.member.MemberFindService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class BoardReviewRegisterService {

    private final BoardFindService boardFindService;
    private final MemberFindService memberFindService;
    private final BoardReviewRepository boardReviewRepository;

    @Transactional
    public Long join(BoardReviewResDto dto){
        log.info("게시글 리뷰 등록 서비스가 실행됐습니다.");
        checkNullContent(dto);
        BoardReview boardReview = createBoardReview(dto);
        BoardReview review = boardReviewRepository.save(boardReview);
        log.info("게시글 리뷰 등록 서비스가 실행됐습니다.");
        return review.getReviewId();
    }

    private void checkNullContent(BoardReviewResDto dto) {
        if(dto.getContent().strip().length()==0 || dto.getContent().length()==0){
            throw new BoardReviewContentNullException("리뷰 내용이 null 또는 빈칸 입니다.");
        }
    }

    private BoardReview createBoardReview(BoardReviewResDto dto) {
        Board board = boardFindService.findOne(dto.getBoardId());
        Member member = memberFindService.findOne(dto.getMemberId());
        BoardReview boardReview = new BoardReview().createBoardReview(member, board, dto);

        return boardReview;
    }

    @Transactional
    public Long TestJoin(BoardReviewResDto dto){
        log.info("게시글 리뷰 등록 서비스가 실행됐습니다.");
        checkNullContent(dto);
        BoardReview boardReview = createTestBoardReview(dto);
        BoardReview review = boardReviewRepository.save(boardReview);
        log.info("게시글 리뷰 등록 서비스가 실행됐습니다.");
        return review.getReviewId();
    }

    private BoardReview createTestBoardReview(BoardReviewResDto dto) {
        Board board = boardFindService.findOne(dto.getBoardId());
        Member member = memberFindService.findOne(dto.getMemberId());
        BoardReview boardReview = new BoardReview().createTestBoardReview(member, board, dto);

        return boardReview;
    }


}
