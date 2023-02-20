package ProjectDoge.StudentSoup.entity.member;

import ProjectDoge.StudentSoup.dto.member.MemberEmailAuthenticationDto;
import lombok.Getter;
import lombok.Setter;
import org.springframework.context.annotation.Primary;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "MEMBER_EMAIL_AUTHENTICATION")
public class MemberEmailAuthentication {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "EMAIL_AUTHENTICATION_ID")
    private Long Id;

    private String email;

    private LocalDateTime createDate;

    private String AuthenticationNumber;

    public MemberEmailAuthentication(MemberEmailAuthenticationDto memberEmailAuthenticationDto) {
        this.email = memberEmailAuthenticationDto.getEmail();
        this.AuthenticationNumber = memberEmailAuthenticationDto.getAuthenticationNumber();
    }
}
