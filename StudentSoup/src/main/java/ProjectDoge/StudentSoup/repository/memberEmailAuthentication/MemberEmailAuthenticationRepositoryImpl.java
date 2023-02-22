package ProjectDoge.StudentSoup.repository.memberEmailAuthentication;

import ProjectDoge.StudentSoup.dto.member.MemberEmailAuthenticationDto;
import ProjectDoge.StudentSoup.entity.member.MemberEmailAuthentication;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.Optional;

import static ProjectDoge.StudentSoup.entity.member.QMemberEmailAuthentication.memberEmailAuthentication;

@RequiredArgsConstructor
public class MemberEmailAuthenticationRepositoryImpl implements MemberEmailAuthenticationRepositoryCustom{

    private final JPAQueryFactory queryFactory;


    @Override
    public Optional<MemberEmailAuthentication> findByEmailAndAuthenticationNumber(MemberEmailAuthenticationDto memberEmailAuthenticationDto){
        MemberEmailAuthentication query = queryFactory.
                select(memberEmailAuthentication)
                .where(memberEmailAuthentication.email.eq(memberEmailAuthenticationDto.getEmail()),
                        memberEmailAuthentication.authenticationNumber.eq(memberEmailAuthenticationDto.getAuthenticationNumber()))
                .fetchOne();

        return Optional.ofNullable(query);
    }

}
