package ProjectDoge.StudentSoup.service.board;

import ProjectDoge.StudentSoup.dto.board.BoardDto;
import ProjectDoge.StudentSoup.dto.board.BoardMainDto;
import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.board.BoardLike;
import ProjectDoge.StudentSoup.exception.member.MemberIdNotSentException;
import ProjectDoge.StudentSoup.exception.member.MemberNotFoundException;
import ProjectDoge.StudentSoup.repository.board.BoardLikeRepository;
import ProjectDoge.StudentSoup.repository.board.BoardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class BoardCallService {
    private final BoardFindService boardFindService;
    private final BoardRepository boardRepository;
    private  final BoardLikeRepository boardLikeRepository;
    boolean boardLiked =true;
    boolean boardNotLiked = false;

    public List<BoardMainDto> getBoardInSchool(Long schoolId,Long memberId){
        log.info("게시판 클릭시 게시글 호출 로직이 실행되었습니다.");
        isLoginMember(memberId);
        List<BoardMainDto> boardMainDtoList = new ArrayList<>();
        List<Board> boards = boardRepository.findBySchoolId(schoolId);
        for(Board board : boards){
            boardMainDtoList.add(new BoardMainDto(board));
        }
        return boardMainDtoList;
    }

    public BoardDto getBoardDetail(Long boardId,Long memberId){
        log.info("게시글 클릭시 게시글 호출 로직이 실행되었습니다.");
        Board board = boardFindService.findOne(boardId);
        BoardLike boardLike = boardLikeRepository.findByBoardIdAndMemberId(boardId, memberId).orElse(null);
        if(boardLike==null){
            return getNotLikeBoardDto(board);
        }
        return getLikeBoardDto(board);

    }
    private void isLoginMember(Long memberId){
        log.info("회원이 로그인이 되었는지 확인하는 로직이 실행되었습니다.");
        if(memberId == null){
            log.info("회원의 기본키가 전달이 되지 않았거나 로그인이 되어있지 않은 상태입니다.");
            throw new MemberNotFoundException("회원이 로그인이 되어있지 않은 상태이거나, 기본키가 전달 되지 않았습니다.");
        }
        log.info("회원이 로그인이 되어있는 상태입니다.");
    }

    private BoardDto getLikeBoardDto(Board board) {
        return new BoardDto(board,boardLiked);
    }

    private BoardDto getNotLikeBoardDto(Board board) {
        return new BoardDto(board,boardNotLiked);
    }

}
