package ProjectDoge.StudentSoup.repository.memberEmailAuthentication;

import ProjectDoge.StudentSoup.entity.member.MemberEmailAuthentication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberEmailAuthenticationRepository extends JpaRepository<MemberEmailAuthentication,Long> {
}
