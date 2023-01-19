package ProjectDoge.StudentSoup.service.board;

import ProjectDoge.StudentSoup.dto.board.BoardMainDto;
import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.repository.board.BoardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class BoardSearchService {

    private final BoardRepository boardRepository;

    public List<BoardMainDto> searchBoard(Long schoolId,String category,String column ,String value){
        if(column == null || value == null){
            return Collections.emptyList();
        }
        log.info("게시글 검색 서비스가 실행되었습니다.");
        log.info("schoolId [{}] category [{}] column[{}] value [{}]",schoolId,category,column,value);
        List<Board> boards = boardRepository.findByDynamicSearch(schoolId,category,column,value);
        List<BoardMainDto> boardMainDtoList = typeCastingToBoardMainDto(boards);
        return boardMainDtoList;
    }

    private List<BoardMainDto> typeCastingToBoardMainDto(List<Board> boards) {
        List<BoardMainDto> boardMainDtoList = new ArrayList<>();
        for(Board board : boards) {
            BoardMainDto boardMainDto = new BoardMainDto(board);
            boardMainDtoList.add(boardMainDto);
        }
        return boardMainDtoList;
    }

}
