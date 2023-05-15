package ProjectDoge.StudentSoup.domain.member.domain;

import ProjectDoge.StudentSoup.domain.model.DateBaseEntity;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class TempMember extends DateBaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Embedded
    private Account account;

    @Embedded
    private MemberInfo memberInfo;
}
