package ProjectDoge.StudentSoup.controller.image;

import ProjectDoge.StudentSoup.service.file.LocalFileService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.net.MalformedURLException;

@Slf4j
@RestController
@RequiredArgsConstructor

public class ImageResponseController {

    private final LocalFileService localFileService;

    @GetMapping("/image/{fileName}")
    public Resource responseImage(@PathVariable String fileName) throws MalformedURLException {
        log.info("이미지 호출이 시작되었습니다. 해당 이미지의 이름 : [{}], 저장 위치 : [{}]", fileName, localFileService.getFullPath(fileName));
        return new UrlResource("file:" + localFileService.getFullPath(fileName));
    }
}
