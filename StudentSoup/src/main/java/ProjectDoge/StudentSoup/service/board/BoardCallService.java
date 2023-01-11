package ProjectDoge.StudentSoup.service.board;

import ProjectDoge.StudentSoup.dto.board.BoardMainDto;
import ProjectDoge.StudentSoup.exception.member.MemberIdNotSentException;
import ProjectDoge.StudentSoup.repository.board.BoardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class BoardCallService {
    private final BoardFindService boardFindService;

    private final BoardRepository boardRepository;

    public List<BoardMainDto> getBoardInSchool(Long schoolId,Long memberId){
        if(memberId == null) throw new MemberIdNotSentException("맴버 아이디가 전송되지 않았습니다.");

        List<BoardMainDto> boardMainDtoList = boardRepository.findBySchoolId(schoolId);
        return boardMainDtoList;
    }

}
