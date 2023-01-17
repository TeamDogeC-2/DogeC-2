package ProjectDoge.StudentSoup.service.board;

import ProjectDoge.StudentSoup.dto.board.BoardDto;
import ProjectDoge.StudentSoup.dto.board.BoardFormDto;
import ProjectDoge.StudentSoup.dto.board.BoardUpdateDto;
import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.board.BoardLike;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.repository.board.BoardLikeRepository;
import ProjectDoge.StudentSoup.repository.file.FileRepository;
import ProjectDoge.StudentSoup.service.file.FileService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

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
    public BoardDto editBoard(BoardFormDto boardFormDto, Long boardId,Long memberId, MultipartFile multipartFile){
        log.info("게시판 업데이트 서비스가 실행되었습니다.");
        Board board = boardFindService.findOne(boardId);
        deleteImageFile(board);
        Long fileId = fileService.join(multipartFile);
        ImageFile imageFile = fileService.findOne(fileId);
        board.editBoard(boardFormDto,imageFile);
        return checkBoardLike(boardId, memberId, board);
    }

    private void deleteImageFile(Board board) {
        if(board.getImageFile() != null){
            fileRepository.delete(board.getImageFile());
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
