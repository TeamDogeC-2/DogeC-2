package ProjectDoge.StudentSoup.dto.boardreply;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardReplyReqDto {

    private Long boardId;
    private Long memberId;
    private String content;
    private int level;

    public BoardReplyReqDto createBoardReply(Long boardId, Long memberId, String content, int level) {
        this.boardId = boardId;
        this.memberId = memberId;
        this.content = content;
        this.level = level;

        return this;
    }

}
