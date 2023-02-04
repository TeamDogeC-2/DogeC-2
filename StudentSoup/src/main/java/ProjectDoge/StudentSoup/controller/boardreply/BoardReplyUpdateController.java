package ProjectDoge.StudentSoup.controller.boardreply;

import ProjectDoge.StudentSoup.dto.boardreview.BoardReplyUpdateDto;
import ProjectDoge.StudentSoup.service.boardreply.BoardReplyEditService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@RestController
@RequiredArgsConstructor
public class BoardReplyUpdateController {
    public final BoardReplyEditService boardReplyEditService;

    @GetMapping("boardReply/{boardReplyId}/{memberId}")
    public BoardReplyUpdateDto editBoardReply(@PathVariable Long boardReplyId, @PathVariable Long memberId){
        BoardReplyUpdateDto editBoardReply = boardReplyEditService.findEditBoardReply(boardReplyId, memberId);
        return editBoardReply;
    }

    @PatchMapping("/boardReply/{boardReplyId}")
    public ConcurrentHashMap<String, Object> editBoardReply(@PathVariable Long boardReplyId, BoardReplyUpdateDto boardReplyUpdateDto){
        ConcurrentHashMap<String,Object> resultMap = new ConcurrentHashMap<>();
        Long replyId = boardReplyEditService.editBoardReply(boardReplyUpdateDto, boardReplyId);
        resultMap.put("boardReplyId", replyId);
        resultMap.put("result", "ok");
        return resultMap;
    }

}
