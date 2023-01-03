package ProjectDoge.StudentSoup.service.member;

import ProjectDoge.StudentSoup.dto.member.MemberDto;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.member.Member;
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
    @Transactional
    public MemberDto memberProfileUpdate(Long memberId, MultipartFile multipartFile){
        log.info("멤버 프로필이미지 업데이트가 시작되었습니다.");
        Long fileId = fileService.join(multipartFile);
        Member member = memberFindService.findOne(memberId);
        return createProfileUpdateMemberDto(fileId, member);
    }

    private MemberDto createProfileUpdateMemberDto(Long fileId, Member member) {
        if(fileId != null){
            ImageFile imageFile = fileService.findOne(fileId);
            member.setImageFile(imageFile);
            log.info("멤버 프로필이미지가 업데이트 되었습니다. fileName : [{}]", imageFile.getFileOriginalName());
            return new MemberDto().getMemberDto(member);
        } else {
            log.info("전송된 프로필 이미지가 없으므로, 프로필 이미지가 업데이트되지 않았습니다.");
            return new MemberDto().getMemberDto(member);
        }
    }
}
