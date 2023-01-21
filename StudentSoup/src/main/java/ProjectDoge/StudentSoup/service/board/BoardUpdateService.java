package ProjectDoge.StudentSoup.service.board;

import ProjectDoge.StudentSoup.dto.board.BoardDto;
import ProjectDoge.StudentSoup.dto.board.BoardFormDto;
import ProjectDoge.StudentSoup.dto.board.BoardUpdateDto;
import ProjectDoge.StudentSoup.dto.file.UploadFileDto;
import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.board.BoardLike;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.exception.board.BoardNotOwnMemberException;
import ProjectDoge.StudentSoup.repository.board.BoardLikeRepository;
import ProjectDoge.StudentSoup.repository.file.FileRepository;
import ProjectDoge.StudentSoup.service.file.FileService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class BoardUpdateService {

    private final BoardFindService boardFindService;

    private final FileService fileService;

    private final FileRepository fileRepository;

    private final BoardLikeRepository boardLikeRepository;


    boolean boardLiked =true;

    boolean boardNotLiked = false;

    public BoardUpdateDto findEditBoard(Long boardId,Long memberId){
        Board board = boardFindService.findOne(boardId);
        checkOwnMember(memberId, board);
        BoardUpdateDto boardFormDto = new BoardUpdateDto().createBoardFormDto(board);
        return boardFormDto;
    }
    @Transactional
    public BoardDto editBoard(BoardFormDto boardFormDto, Long boardId,Long memberId, List<MultipartFile> multipartFiles){
        log.info("게시판 업데이트 서비스가 실행되었습니다.");
        Board board = boardFindService.findOne(boardId);
        updateBoardImage(multipartFiles, board);
        board.editBoard(boardFormDto);
        return getBoardDto(boardId, memberId, board);
    }

    private void checkOwnMember(Long memberId, Board board) {
        if(!board.getMember().getMemberId().equals(memberId)){
            throw new BoardNotOwnMemberException("해당 게시글의 작성자가 아닙니다.");
        }
    }

    private void updateBoardImage(List<MultipartFile> multipartFiles, Board board) {
        if(!multipartFiles.isEmpty()){
            deleteImageFile(board);
            uploadBoardImage(board, multipartFiles);
        }
    }

    private void deleteImageFile(Board board) {
            for(ImageFile imageFile : board.getImageFiles()){
                fileRepository.delete(imageFile);
        }
    }

    private void uploadBoardImage(Board board,List<MultipartFile> multipartFiles) {
        List<UploadFileDto> uploadFileDtoList = fileService.createUploadFileDtoList(multipartFiles);
        for(UploadFileDto fileDto : uploadFileDtoList){
            ImageFile imageFile = new ImageFile().createFile(fileDto);
            fileRepository.save(imageFile);
            board.addImageFile(imageFile);
        }
    }


    private BoardDto getBoardDto(Long boardId, Long memberId, Board board) {
        BoardLike boardLike = boardLikeRepository.findByBoardIdAndMemberId(boardId, memberId).orElse(null);
        if(boardLike == null) {
            return new BoardDto(board, boardNotLiked);
        }
        return new BoardDto(board, boardLiked);
    }

}
