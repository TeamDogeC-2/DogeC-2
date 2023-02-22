package ProjectDoge.StudentSoup.repository.memberEmailAuthentication;


import ProjectDoge.StudentSoup.dto.member.MemberEmailAuthenticationDto;
import ProjectDoge.StudentSoup.entity.member.MemberEmailAuthentication;

import java.time.LocalDateTime;
import java.util.Optional;

public interface MemberEmailAuthenticationRepositoryCustom {

    Optional<MemberEmailAuthentication> findByEmailAndAuthenticationNumber(MemberEmailAuthenticationDto memberEmailAuthenticationDto);

}
