package ProjectDoge.StudentSoup.service.board;

import ProjectDoge.StudentSoup.dto.board.BoardFormDto;
import ProjectDoge.StudentSoup.dto.file.UploadFileDto;
import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.repository.board.BoardRepository;
import ProjectDoge.StudentSoup.repository.file.FileRepository;
import ProjectDoge.StudentSoup.service.file.FileService;
import ProjectDoge.StudentSoup.service.member.MemberFindService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class BoardResisterService {

    private final MemberFindService memberFindService;

    private final FileService fileService;

    private final BoardRepository boardRepository;

    private final FileRepository fileRepository;
    @Transactional
    public Long join(Long memberId,BoardFormDto boardFormDto, List<MultipartFile> multipartFiles){
        log.info("게시글 생성 메소드가 실행되었습니다.");
        Member member = memberFindService.findOne(memberId);
        List<UploadFileDto> uploadFileDtoList = fileService.createUploadFileDtoList(multipartFiles);
        Board board = new Board().createBoard(boardFormDto, member, member.getSchool(), member.getDepartment());
        uploadBoardImage(uploadFileDtoList, board);
        boardRepository.save(board);
        log.info("게시글이 저장되었습니다.[{}]",board.getId());
        return board.getId();
    }

    private void uploadBoardImage(List<UploadFileDto> uploadFileDtoList,Board board) {
        for(UploadFileDto fileDto : uploadFileDtoList){
            ImageFile imageFile = new ImageFile().createFile(fileDto);
            fileRepository.save(imageFile);
            board.addImageFile(imageFile);
        }
    }

    @Transactional
    public  Long join(Long memberId,BoardFormDto boardFormDto){
        log.info("게시글 생성 메소드가 실행되었습니다");
        Member member = memberFindService.findOne(memberId);
        Board board = new Board().createBoard(boardFormDto,member, member.getSchool(),member.getDepartment());
        boardRepository.save(board);
        log.info("게시글이 저장되었습니다.[{}]",board.getId());
        return board.getId();
    }
}
