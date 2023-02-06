package ProjectDoge.StudentSoup.service.member;

import ProjectDoge.StudentSoup.dto.member.MemberDto;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.repository.file.FileRepository;
import ProjectDoge.StudentSoup.repository.member.MemberRepository;
import ProjectDoge.StudentSoup.service.file.FileFindService;
import ProjectDoge.StudentSoup.service.file.FileService;
import ProjectDoge.StudentSoup.service.file.FileService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberProfileImageUpdateService {
    private final MemberFindService memberFindService;
    private final FileService fileService;
    private final FileRepository fileRepository;
    private final FileFindService fileFindService;
    private final MemberRepository memberRepository;
    @Transactional
    public MemberDto memberProfileUpdate(Long memberId, MultipartFile multipartFile){
        log.info("멤버 프로필이미지 업데이트가 시작되었습니다.");
        Member member = memberFindService.findOne(memberId);
        return createProfileUpdateMemberDto(member, multipartFile);
    }

    private MemberDto createProfileUpdateMemberDto(Member member, MultipartFile multipartFile) {
        if(member.getImageFile() != null){
            fileService.deleteFile(member.getImageFile());
            fileRepository.delete(member.getImageFile());
        }

        Long fileId = fileService.join(multipartFile);

        if(fileId != null){
            ImageFile imageFile = fileFindService.findOne(fileId);
            member.setImageFile(imageFile);
            log.info("멤버 프로필이미지가 업데이트 되었습니다. fileName : [{}]", imageFile.getFileOriginalName());
        } else {
            log.info("전송된 프로필 이미지가 없으므로, 프로필 이미지가 업데이트되지 않았습니다.");
        }
        memberRepository.save(member);
        return new MemberDto().getMemberDto(member);
    }
}
