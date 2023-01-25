package ProjectDoge.StudentSoup.service.BoardReview;


import ProjectDoge.StudentSoup.dto.board.BoardReviewResDto;
import ProjectDoge.StudentSoup.dto.file.UploadFileDto;
import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.board.BoardReview;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.repository.boardreview.BoardReviewRepository;
import ProjectDoge.StudentSoup.repository.file.FileRepository;
import ProjectDoge.StudentSoup.service.board.BoardFindService;
import ProjectDoge.StudentSoup.service.file.FileService;
import ProjectDoge.StudentSoup.service.member.MemberFindService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class BoardReviewRegisterService {

    private  final BoardFindService boardFindService;

    private final MemberFindService memberFindService;

    private final FileService fileService;

    private final FileRepository fileRepository;

    private final BoardReviewRepository boardReviewRepository;

    @Transactional(readOnly = false)
    public Long join(BoardReviewResDto dto){
        log.info("게시글 리뷰 등록 서비스가 실행됐습니다.");
        BoardReview boardReview = createBoardReview(dto);
        BoardReview review = boardReviewRepository.save(boardReview);
        log.info("게시글 리뷰 등록 서비스가 실행됐습니다.");
        return review.getReviewId();
    }


    private BoardReview createBoardReview(BoardReviewResDto dto) {
        Board board = boardFindService.findOne(dto.getBoardId());
        Member member = memberFindService.findOne(dto.getMemberId());
        BoardReview boardReview = new BoardReview().createBoardReview(member,board,dto);

        return boardReview;
    }



}
