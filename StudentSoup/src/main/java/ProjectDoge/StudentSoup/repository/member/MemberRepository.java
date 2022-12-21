package ProjectDoge.StudentSoup.repository.member;

import ProjectDoge.StudentSoup.entity.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long>, MemberRepositoryCustom {
}
