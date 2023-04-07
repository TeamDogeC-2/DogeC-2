package ProjectDoge.StudentSoup.controller.board;

import ProjectDoge.StudentSoup.dto.file.UploadFileDto;
import ProjectDoge.StudentSoup.entity.file.TemporaryImageFile;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.repository.file.TemporaryFileRepository;
import ProjectDoge.StudentSoup.service.file.FileService;
import ProjectDoge.StudentSoup.service.member.MemberFindService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

@Service
@RequiredArgsConstructor
@Slf4j
public class BoardTemporaryFileResisterService {

    private final FileService fileService;

    private final MemberFindService memberFindService;

    private final TemporaryFileRepository temporaryFileRepository;

    @Transactional
    public  String join(Long memberId,List<MultipartFile> multipartFileList){
        Member member = memberFindService.findOne(memberId);
        List<UploadFileDto> uploadFileDtoList = fileService.createUploadFileDtoList(multipartFileList);
        uploadTemporaryImage(member,uploadFileDtoList);

        return "ok";
    }

    private void uploadTemporaryImage(Member member, List<UploadFileDto> uploadFileDtoList) {
        for (UploadFileDto uploadFileDto : uploadFileDtoList) {
            TemporaryImageFile file = new TemporaryImageFile().createFile(uploadFileDto);
            member.addImageFile(temporaryFileRepository.save(file));
        }
    }
}
