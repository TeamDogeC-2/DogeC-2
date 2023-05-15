package ProjectDoge.StudentSoup.domain.member.domain;

import javax.persistence.Embeddable;

@Embeddable
public class Account {

    private String userId;
    private String pwd;
    private String nickName;
    private String email;
}
