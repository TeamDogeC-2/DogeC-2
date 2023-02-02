package ProjectDoge.StudentSoup.service.board;

import ProjectDoge.StudentSoup.commonmodule.ConstField;
import ProjectDoge.StudentSoup.dto.board.BoardCallDto;
import ProjectDoge.StudentSoup.dto.board.BoardDto;
import ProjectDoge.StudentSoup.dto.board.BoardMainDto;
import ProjectDoge.StudentSoup.dto.board.BoardSearchDto;
import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.entity.board.BoardLike;
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
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Service
@RequiredArgsConstructor
public class BoardCallService {
    private final BoardFindService boardFindService;
    private final BoardRepository boardRepository;
    private final BoardLikeRepository boardLikeRepository;

    public BoardDto getBoardDetail(Long boardId, Long memberId) {
        log.info("게시글 클릭시 게시글 호출 로직이 실행되었습니다.");
        Board board = boardFindService.findOne(boardId);
        board.addViewCount();
        BoardLike boardLike = boardLikeRepository.findByBoardIdAndMemberId(boardId, memberId).orElse(null);
        if (boardLike == null) {
            return getNotLikeBoardDto(board);
        }
        return getLikeBoardDto(board);
    }

    private BoardDto getLikeBoardDto(Board board) {
        return new BoardDto(board, ConstField.LIKED);
    }

    private BoardDto getNotLikeBoardDto(Board board) {
        return new BoardDto(board, ConstField.NOT_LIKED);
    }

    public ConcurrentHashMap<String, Object> getBoardSortedCall(BoardCallDto boardCallDto,
                                                                String category,
                                                                int sorted,
                                                                Pageable pageable,
                                                                BoardSearchDto boardSearchDto) {
        log.info("게시판 호출 정렬 서비스 로직이 실행되었습니다");
        isLoginMember(boardCallDto.getMemberId());
        ConcurrentHashMap<String, Object> map = new ConcurrentHashMap<>();
        if (isFirstPage(pageable)) {
            getFirstPageBoards(boardCallDto, category, sorted, boardSearchDto, map);
        } else {
            getBoards(boardCallDto, category, sorted, pageable, map, boardSearchDto);
        }
        return map;
    }

    private void isLoginMember(Long memberId) {
        log.info("회원이 로그인이 되었는지 확인하는 로직이 실행되었습니다.");
        if (memberId == null) {
            log.info("회원의 기본키가 전달이 되지 않았거나 로그인이 되어있지 않은 상태입니다.");
            throw new MemberNotFoundException("회원이 로그인이 되어있지 않은 상태이거나, 기본키가 전달 되지 않았습니다.");
        }
        log.info("회원이 로그인이 되어있는 상태입니다.");
    }

    private boolean isFirstPage(Pageable pageable) {
        return pageable.getPageNumber() == 0;
    }

    private void getFirstPageBoards(
            BoardCallDto boardCallDto,
            String category,
            int sorted,
            BoardSearchDto boardSearchDto,
            ConcurrentHashMap<String, Object> map) {

        if (category.equals("ALL")) {
            getFirstAllBoardsPage(boardCallDto, category, sorted, boardSearchDto, map);
        } else {
//            getFirstBoardsPage()
        }
    }

    private void getBoards(BoardCallDto boardCallDto,
                           String category, int sorted,
                           Pageable pageable,
                           ConcurrentHashMap<String, Object> map,
                           BoardSearchDto boardSearchDto) {
        log.info("게시판 호출 메서드가 실행되었습니다.");
        Page<BoardMainDto> boardMainDtoList = boardRepository.orderByCategory(boardCallDto.getSchoolId(),
                boardCallDto.getDepartmentId(),
                category,
                sorted,
                pageable,
                boardSearchDto.getColumn(),
                boardSearchDto.getValue());
        checkWriteDate(boardMainDtoList);
        map.put("boards", boardMainDtoList);
    }


    private void getFirstTipBoardsPage(
            BoardCallDto boardCallDto,
            String category,
            int sorted,
            BoardSearchDto boardSearchDto,
            ConcurrentHashMap<String, Object> map) {
        log.info("팁 게시판 0페이지 호출 메서드가 실행 됐습니다.");
        PageRequest pageable = PageRequest.of(0, 8);

        Page<BoardMainDto> boards = boardRepository.orderByCategory(boardCallDto.getSchoolId(),
                boardCallDto.getDepartmentId(),
                category,
                sorted,
                pageable,
                boardSearchDto.getColumn(),
                boardSearchDto.getValue());
        List<BoardMainDto> tipBoards = boardRepository.findBestTipBoards(boardCallDto.getSchoolId());

        checkWriteDate(boards);
        checkWriteDate(tipBoards);

        map.put("boards", boards);
        map.put("tipBoards", tipBoards);
    }

    private void getFirstAllBoardsPage(
            BoardCallDto boardCallDto,
            String category,
            int sorted,
            BoardSearchDto boardSearchDto,
            ConcurrentHashMap<String, Object> map) {

        log.info("전체게시판 0페이지 호출 메서드가 실행 됐습니다.");

        Pageable pageable = PageRequest.of(0, 8);

        Page<BoardMainDto> boards = boardRepository.orderByCategory(boardCallDto.getSchoolId(),
                boardCallDto.getDepartmentId(),
                category,
                sorted,
                pageable,
                boardSearchDto.getColumn(),
                boardSearchDto.getValue());

        List<BoardMainDto> bestBoards = boardRepository.findLiveBestAndHotBoards(
                boardCallDto.getSchoolId(),
                ConstField.startTime,
                ConstField.endTime);

        List<BoardMainDto> hotBoards = boardRepository.findLiveBestAndHotBoards(
                boardCallDto.getSchoolId(),
                ConstField.startTime.minusMonths(1),
                ConstField.endTime);

        log.info("startTime [{}] endTime[{}]", ConstField.startTime, ConstField.endTime);
        checkTodayWriteDate(boards, bestBoards, hotBoards);

        map.put("boards", boards);
        map.put("bestBoards", bestBoards);
        map.put("hotBoards", hotBoards);
    }

    private void checkTodayWriteDate(
            Page<BoardMainDto> boardMainDtoList,
            List<BoardMainDto> bestBoardList,
            List<BoardMainDto> hotBoardList) {

        checkWriteDate(boardMainDtoList);
        checkWriteDate(bestBoardList);
        checkWriteDate(hotBoardList);
    }

    private void checkWriteDate(Iterable<BoardMainDto> boardMainDtoList) {
        for (BoardMainDto dto : boardMainDtoList) {
            setWriteDate(dto);
        }
    }

    private void setWriteDate(BoardMainDto boardMainDto) {
        LocalDateTime writeDateTime = LocalDateTime.parse(boardMainDto.getWriteDate(), DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));
        LocalDate writeDate = writeDateTime.toLocalDate();
        log.info("포멧한 시간 [{}]", writeDate);
        if (writeDate.equals(LocalDate.parse(LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"))))) {
            log.info("작성 시간 : [{}]", String.valueOf(writeDateTime.toLocalTime()));
            boardMainDto.setWriteDate(String.valueOf(writeDateTime.toLocalTime()));
        } else {
            log.info("작성 날짜 : [{}]", String.valueOf(writeDate));
            boardMainDto.setWriteDate(String.valueOf(writeDate).substring(5));
        }
    }
}
