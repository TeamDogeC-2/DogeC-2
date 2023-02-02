package ProjectDoge.StudentSoup.service.board;

import ProjectDoge.StudentSoup.dto.board.BoardFormDto;
import ProjectDoge.StudentSoup.dto.file.UploadFileDto;
import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.board.BoardCategory;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.entity.member.MemberClassification;
import ProjectDoge.StudentSoup.entity.school.Department;
import ProjectDoge.StudentSoup.exception.board.BoardNotQualifiedException;
import ProjectDoge.StudentSoup.repository.board.BoardRepository;
import ProjectDoge.StudentSoup.repository.file.FileRepository;
import ProjectDoge.StudentSoup.service.department.DepartmentFindService;
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

    private final DepartmentFindService departmentFindService;
    @Transactional
    public Long join(Long memberId,BoardFormDto boardFormDto, List<MultipartFile> multipartFiles){
        log.info("게시글 생성 메소드가 실행되었습니다.");
        Member member = memberFindService.findOne(memberId);
        checkQualification(boardFormDto,member);
        List<UploadFileDto> uploadFileDtoList = fileService.createUploadFileDtoList(multipartFiles);
        Board board = createBoard(boardFormDto.getDepartmentId(), boardFormDto, member);
        uploadBoardImage(uploadFileDtoList, board);
        boardRepository.save(board);
        log.info("게시글이 저장되었습니다.[{}]",board.getId());
        return board.getId();
    }

    public List<String> getMemberClassification(Long memberId) {
        Member member = memberFindService.findOne(memberId);
        List<String> boardCategory = new ArrayList<>();
        for (BoardCategory category : BoardCategory.values()){
            boardCategory.add(category.getBoardCategory());
            log.info("boardCategory [{}], boardCategory [{}]",category.getBoardCategory(),category.name());
    }
        if(!member.getMemberClassification().equals(MemberClassification.ADMIN))
            boardCategory.remove("공지사항");
        return boardCategory;
    }

    private Board createBoard(Long departmentId, BoardFormDto boardFormDto, Member member) {
        if(departmentId == null) {
            Board board = new Board().createBoard(boardFormDto, member, member.getSchool());
            return board;
        }
        else {
            Department department = departmentFindService.findOne(departmentId);
            Board board = new Board().createBoard(boardFormDto, member, member.getSchool(),department);
            return board;
        }
    }

    private void checkQualification(BoardFormDto boardFormDto, Member member) {
        if(boardFormDto.getBoardCategory() == BoardCategory.ANNOUNCEMENT && member.getMemberClassification()!= MemberClassification.ADMIN){
            throw new BoardNotQualifiedException("공지사항은 관리자만 작성 가능합니다.");
        }
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
