package ProjectDoge.StudentSoup.service.board;

import ProjectDoge.StudentSoup.dto.board.BoardCallDto;
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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Service
@RequiredArgsConstructor
public class BoardCallService {
    private final BoardFindService boardFindService;
    private final BoardRepository boardRepository;
    private  final BoardLikeRepository boardLikeRepository;
    boolean boardLiked =true;
    boolean boardNotLiked = false;


    public BoardDto getBoardDetail(Long boardId,Long memberId){
        log.info("게시글 클릭시 게시글 호출 로직이 실행되었습니다.");
        Board board = boardFindService.findOne(boardId);
        BoardLike boardLike = boardLikeRepository.findByBoardIdAndMemberId(boardId, memberId).orElse(null);
        if(boardLike==null){
            return getNotLikeBoardDto(board);
        }
        return getLikeBoardDto(board);

    }

    public Page<BoardMainDto> getBoardSortedCall(BoardCallDto boardCallDto, String category, int sorted, Pageable pageable){
        log.info("게시판 호출 정렬 서비스 로직이 실행되었습니다");
        isLoginMember(boardCallDto.getMemberId());
        ConcurrentHashMap<String,Object> map = new ConcurrentHashMap<>();
        checkFistPage(map,category,pageable,boardCallDto.getSchoolId());
        Page<BoardMainDto>  boardMainDtoList=  boardRepository.orderByCategory(boardCallDto.getSchoolId(),boardCallDto.getDepartmentId(),category,sorted,pageable);
        return boardMainDtoList;
    }

    private void checkFistPage(ConcurrentHashMap<String, Object> map, String category, Pageable pageable,Long schoolId) {
        if(pageable.getPageNumber() == 0){
            boardRepository.findAnnouncement();
            if(category.equals("ALL")) {
                LocalDateTime searchTime = LocalDate.now().atTime(0,0,0);
                LocalDateTime endTime = LocalDate.now().atTime(23,59,59);
                List<BoardMainDto> bestBoards = boardRepository.findLiveBestBoards(schoolId,searchTime,endTime);
                List<BoardMainDto> hotBoards = boardRepository.findHotBoards(schoolId,searchTime.minusMonths(1),endTime);
                map.put("bestBoars",bestBoards);
                map.put("hotBoards",hotBoards);
            }

            }
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
