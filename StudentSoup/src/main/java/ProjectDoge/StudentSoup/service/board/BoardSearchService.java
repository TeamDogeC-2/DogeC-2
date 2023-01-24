package ProjectDoge.StudentSoup.service.board;

import ProjectDoge.StudentSoup.dto.board.BoardMainDto;
import ProjectDoge.StudentSoup.entity.board.Board;
import ProjectDoge.StudentSoup.exception.board.BoardSearchDataNotSentException;
import ProjectDoge.StudentSoup.repository.board.BoardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class BoardSearchService {

    private final BoardRepository boardRepository;

    public Page<BoardMainDto> searchBoard(Long schoolId, String category, String column , String value, Pageable pageable){
        checkDataSent(column, value);
        log.info("게시글 검색 서비스가 실행되었습니다.");
        log.info("schoolId [{}] category [{}] column[{}] value [{}]",schoolId,category,column,value);
        Page<BoardMainDto>  boardMainDtoList= boardRepository.findByDynamicSearch(schoolId,category,column,value,pageable);

        return boardMainDtoList;
    }

    private void checkDataSent(String column, String value) {
        if(column == null || value == null){
            throw new BoardSearchDataNotSentException("column 또는 value 전송되지 않았습니다.");
        }
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
