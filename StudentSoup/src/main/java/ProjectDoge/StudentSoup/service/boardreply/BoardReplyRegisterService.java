package ProjectDoge.StudentSoup.service.boardreply;


import ProjectDoge.StudentSoup.dto.boardreply.BoardReplyReqDto;
import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.board.BoardReply;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.repository.boardreply.BoardReplyRepository;
import ProjectDoge.StudentSoup.service.board.BoardFindService;
import ProjectDoge.StudentSoup.service.member.MemberFindService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class BoardReplyRegisterService {

    private final BoardFindService boardFindService;
    private final MemberFindService memberFindService;
    private final BoardReplyRepository boardReplyRepository;
    private final BoardReplyValidationService boardReplyValidationService;

    @Transactional
    public Long join(BoardReplyReqDto dto){
        log.info("게시글 댓글 등록 서비스가 실행됐습니다.");
        boardReplyValidationService.checkContent(dto.getContent());
        BoardReply boardReply = createBoardReply(dto);
        BoardReply review = boardReplyRepository.save(boardReply);
        log.info("게시글 댓글 등록 서비스가 실행됐습니다.");
        return review.getReplyId();
    }

    private BoardReply createBoardReply(BoardReplyReqDto dto) {
        Board board = boardFindService.findOne(dto.getBoardId());
        Member member = memberFindService.findOne(dto.getMemberId());
        BoardReply boardReply = new BoardReply().createBoardReply(member, board, dto);

        return boardReply;
    }

    @Transactional
    public Long TestJoin(BoardReplyReqDto dto){
        log.info("게시글 댓글 등록 서비스가 실행됐습니다.");
        boardReplyValidationService.checkContent(dto.getContent());
        BoardReply boardReply = createTestBoardReply(dto);
        BoardReply review = boardReplyRepository.save(boardReply);
        log.info("게시글 댓글 등록 서비스가 실행됐습니다.");
        return review.getReplyId();
    }

    private BoardReply createTestBoardReply(BoardReplyReqDto dto) {
        Board board = boardFindService.findOne(dto.getBoardId());
        Member member = memberFindService.findOne(dto.getMemberId());
        BoardReply boardReply = new BoardReply().createTestBoardReply(member, board, dto);

        return boardReply;
    }
}
