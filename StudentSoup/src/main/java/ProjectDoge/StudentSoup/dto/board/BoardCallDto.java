package ProjectDoge.StudentSoup.dto.board;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardCallDto {
    Long schoolId;
    Long memberId;

    Integer page;
    Integer size;
}
