package ProjectDoge.StudentSoup.dto.boardreview;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardReplyReqDto {

    private Long boardId;
    private Long memberId;
    private String content;
    private int seq;
    private int depth;
    private int level;

    public BoardReplyReqDto createBoardReply(Long boardId, Long memberId, String content, int seq, int depth, int level) {
        this.boardId = boardId;
        this.memberId = memberId;
        this.content = content;
        this.seq = seq;
        this.depth = depth;
        this.level = level;

        return this;
    }

}
