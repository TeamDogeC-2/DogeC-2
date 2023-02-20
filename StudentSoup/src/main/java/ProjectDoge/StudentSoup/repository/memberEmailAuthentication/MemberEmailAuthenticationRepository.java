package ProjectDoge.StudentSoup.repository.memberEmailAuthentication;

import ProjectDoge.StudentSoup.entity.member.MemberEmailAuthentication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberEmailAuthenticationRepository extends JpaRepository<MemberEmailAuthentication,Long> {
}
