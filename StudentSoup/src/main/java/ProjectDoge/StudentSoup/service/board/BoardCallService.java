package ProjectDoge.StudentSoup.service.board;

import ProjectDoge.StudentSoup.dto.board.BoardDto;
import ProjectDoge.StudentSoup.dto.board.BoardMainDto;
import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.board.BoardLike;
import ProjectDoge.StudentSoup.exception.member.MemberIdNotSentException;
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
        if(memberId == null) throw new MemberIdNotSentException("맴버 아이디가 전송되지 않았습니다.");
        List<BoardMainDto> boardMainDtoList = new ArrayList<>();
        List<Board> boards = boardRepository.findBySchoolId(schoolId);
        for(Board board : boards){
            boardMainDtoList.add(new BoardMainDto(board));
        }
        return boardMainDtoList;
    }

    public BoardDto getBoardDetail(Long boardId,Long memberId){
        Board board = boardFindService.findOne(boardId);
        BoardLike boardLike = boardLikeRepository.findByBoardIdAndMemberId(boardId, memberId).orElse(null);
        if(boardLike==null){
            return getNotLikeBoardDto(board);
        }
        return getLikeBoardDto(board);

    }
    private BoardDto getLikeBoardDto(Board board) {
        return new BoardDto(board,boardLiked);
    }

    private BoardDto getNotLikeBoardDto(Board board) {
        return new BoardDto(board,boardNotLiked);
    }

}
