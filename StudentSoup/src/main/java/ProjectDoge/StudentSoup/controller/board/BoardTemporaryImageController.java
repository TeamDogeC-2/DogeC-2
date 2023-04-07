package ProjectDoge.StudentSoup.controller.board;

import ProjectDoge.StudentSoup.service.board.BoardTemporaryFileService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class BoardTemporaryImageController {

    private final BoardTemporaryFileService boardTemporaryFileResisterService;

    @PostMapping("board/image/{memberId}")
    public String registerImage(List<MultipartFile> multipartFileList, @PathVariable Long memberId){
       return boardTemporaryFileResisterService.join(memberId,multipartFileList);
    }

    @DeleteMapping("board/image/{memberId}")
    public String deleteImage(@PathVariable Long memberId){
       return boardTemporaryFileResisterService.deleteImage(memberId);
    }
}
