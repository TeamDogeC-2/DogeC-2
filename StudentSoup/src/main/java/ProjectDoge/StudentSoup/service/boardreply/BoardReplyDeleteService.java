package ProjectDoge.StudentSoup.service.boardreply;


import ProjectDoge.StudentSoup.entity.board.BoardReply;
import ProjectDoge.StudentSoup.exception.boardreview.BoardReplyNotOwnException;
import ProjectDoge.StudentSoup.repository.boardreview.BoardReplyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Service
@RequiredArgsConstructor
public class BoardReplyDeleteService {

    private final BoardReplyFindService boardReplyFindService;

    private final BoardReplyRepository boardReplyRepository;

    @Transactional
    public ConcurrentHashMap<String,Object> deleteBoardReply(Long boardReplyId, Long memberId){
        ConcurrentHashMap<String,Object> resultMap = new ConcurrentHashMap<>();
        BoardReply boardReply = boardReplyFindService.findOne(boardReplyId);
        checkBoardReplyOwn(memberId, boardReply);
        checkReplyLevel(boardReply);
        resultMap.put("result", "ok");
        resultMap.put("boardReplyId", boardReplyId);
        return resultMap;
    }

    private void checkReplyLevel(BoardReply boardReply) {
        if(boardReply.getLevel() == 0){
            List<BoardReply> boardReplyList = boardReplyRepository.findBySeq(boardReply.getSeq());
            deleteReply(boardReply, boardReplyList);

        }
        else{
            List<BoardReply> boardReplyList = boardReplyRepository.findBySeq(boardReply.getSeq());
            deleteNestedReply(boardReply, boardReplyList);
        }
    }

    private void deleteNestedReply(BoardReply boardReply, List<BoardReply> boardReplyList) {
        if(boardReplyList.size() == 2 && boardReplyList.get(0).getActive().equals("N")){
            boardReplyRepository.delete(boardReply);
            boardReplyRepository.delete(boardReplyList.get(0));
        }
        else{
            boardReplyRepository.delete(boardReply);
        }
    }

    private void deleteReply(BoardReply boardReply, List<BoardReply> boardReplyList) {
        if (boardReplyList.size() == 1) {
            boardReplyRepository.delete(boardReply);
        }
        else{
            boardReply.setActive("N");
        }
    }

    private void checkBoardReplyOwn(Long memberId, BoardReply boardReply) {
        if (!boardReply.getMember().getMemberId().equals(memberId)){
            throw new BoardReplyNotOwnException("해당 댓글은 해당 회원이 작성한 리뷰가 아닙니다.");
        }
    }
}
