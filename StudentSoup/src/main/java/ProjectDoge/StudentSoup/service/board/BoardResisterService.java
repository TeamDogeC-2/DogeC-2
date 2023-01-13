package ProjectDoge.StudentSoup.service.board;

import ProjectDoge.StudentSoup.dto.board.BoardFormDto;
import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.repository.board.BoardRepository;
import ProjectDoge.StudentSoup.service.file.FileService;
import ProjectDoge.StudentSoup.service.member.MemberFindService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@Service
@RequiredArgsConstructor
public class BoardResisterService {

    private final MemberFindService memberFindService;

    private final FileService fileService;

    private final BoardRepository boardRepository;
    @Transactional
    public Long join(Long memberId,BoardFormDto boardFormDto, MultipartFile multipartFile){
        log.info("게시글 생성 메소드가 실행되었습니다.");
        Member member = memberFindService.findOne(memberId);
        Long fileId = fileService.join(multipartFile);
        ImageFile file = fileService.findOne(fileId);
        Board board = new Board().createBoard(boardFormDto, member, member.getSchool(), file, member.getDepartment());
        boardRepository.save(board);
        log.info("게시글이 저장되었습니다.[{}]",board.getId());
        return board.getId();
    }

    @Transactional
    public  Long join(Long memberId,BoardFormDto boardFormDto){
        log.info("게시글 생성 메소드가 실행되었습니다");
        Member member = memberFindService.findOne(memberId);
        Board board = new Board().createBoard(boardFormDto,member, member.getSchool(),boardFormDto.getImageFile(),member.getDepartment());
        boardRepository.save(board);
        log.info("게시글이 저장되었습니다.[{}]",board.getId());
        return board.getId();
    }
}
