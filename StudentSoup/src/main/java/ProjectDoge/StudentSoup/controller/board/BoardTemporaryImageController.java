package ProjectDoge.StudentSoup.controller.board;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class BoardTemporaryImageController {

    private final BoardTemporaryFileResisterService boardTemporaryFileResisterService;

    @PostMapping("boards/image/{memberId}")
    public String registerImage(List<MultipartFile> multipartFileList, @PathVariable Long memberId){
       return boardTemporaryFileResisterService.join(memberId,multipartFileList);
    }
}
