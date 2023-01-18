package ProjectDoge.StudentSoup.service.board;

import ProjectDoge.StudentSoup.dto.board.BoardDto;
import ProjectDoge.StudentSoup.dto.board.BoardFormDto;
import ProjectDoge.StudentSoup.dto.board.BoardUpdateDto;
import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.board.BoardLike;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.exception.board.NotOwnMemberException;
import ProjectDoge.StudentSoup.repository.board.BoardLikeRepository;
import ProjectDoge.StudentSoup.repository.file.FileRepository;
import ProjectDoge.StudentSoup.service.file.FileService;
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
public class BoardUpdateService {

    private final BoardFindService boardFindService;

    private final FileService fileService;

    private final FileRepository fileRepository;

    private final BoardLikeRepository boardLikeRepository;

    boolean boardLiked =true;

    boolean boardNotLiked = false;

    public BoardUpdateDto findEditBoard(Long boardId){
        Board board = boardFindService.findOne(boardId);
        BoardUpdateDto boardFormDto = new BoardUpdateDto().createBoardFormDto(board);
        return boardFormDto;
    }
    @Transactional
    public BoardDto editBoard(BoardFormDto boardFormDto, Long boardId,Long memberId, List<MultipartFile> multipartFiles){
        log.info("게시판 업데이트 서비스가 실행되었습니다.");
        Board board = boardFindService.findOne(boardId);
        if(board.getMember().getMemberId() != memberId){
            throw new NotOwnMemberException("게시글 작성자와 수정자가 일치하지 않습니다.");
        }
        deleteImageFile(multipartFiles, board);
        List<ImageFile> imageFiles = new ArrayList<>();
        createImageFiles(multipartFiles,imageFiles);
        return checkBoardLike(boardId, memberId, board);
    }

    private void deleteImageFile(List<MultipartFile> multipartFile, Board board) {
        if(!multipartFile.isEmpty()){
            for(ImageFile imageFile : board.getImageFiles()){
                fileRepository.delete(imageFile);
            }
        }
    }

    private void createImageFiles(List<MultipartFile> multipartFiles, List<ImageFile> imageFiles) {
        for(MultipartFile multipartFile : multipartFiles){
            Long fileId = fileService.join(multipartFile);
            ImageFile file = fileService.findOne(fileId);
            imageFiles.add(file);
        }
    }


    private BoardDto checkBoardLike(Long boardId, Long memberId, Board board) {
        BoardLike boardLike = boardLikeRepository.findByBoardIdAndMemberId(boardId, memberId).orElse(null);
        if(boardLike == null) {
            return new BoardDto(board, boardNotLiked);
        }
        return new BoardDto(board, boardLiked);
    }

}
