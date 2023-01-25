package ProjectDoge.StudentSoup.dto.board;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.nio.channels.MulticastChannel;
import java.util.List;

@Getter
@Setter
public class BoardReviewResDto {

    private Long boardId;

    private Long memberId;

    private  String content;

    private int seq;

    private int depth;

    private int level;

    private List<MultipartFile> multipartFileList;



}
