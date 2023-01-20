package ProjectDoge.StudentSoup.controller.board;

import ProjectDoge.StudentSoup.dto.board.BoardMainDto;
import ProjectDoge.StudentSoup.service.board.BoardSearchService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class BoardSearchController {
    private final BoardSearchService boardSearchService;

    @GetMapping("board/{schoolId}")
    public List<BoardMainDto> searchBoard(@PathVariable Long schoolId,
                                          @RequestParam String category,
                                          @RequestParam String column,
                                          @RequestParam String value){
    log.info("schoolId [{}] category [{}] column[{}] value [{}]",schoolId,category,column,value);
    return boardSearchService.searchBoard(schoolId,category,column,value);

    }

}
