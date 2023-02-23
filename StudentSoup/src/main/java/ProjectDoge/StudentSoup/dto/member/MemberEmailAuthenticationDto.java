package ProjectDoge.StudentSoup.dto.member;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class MemberEmailAuthenticationDto {

    private String email;

    private Integer authenticationNumber;

}
