package ProjectDoge.StudentSoup.dto.member;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MemberFindAccountDto {
    private String id;
    private String email;
    private String nickname;
}
