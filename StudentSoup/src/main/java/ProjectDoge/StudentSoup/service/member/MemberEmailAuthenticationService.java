package ProjectDoge.StudentSoup.service.member;

import ProjectDoge.StudentSoup.dto.member.MemberEmailAuthenticationDto;
import ProjectDoge.StudentSoup.entity.member.MemberEmailAuthentication;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.repository.memberEmailAuthentication.MemberEmailAuthenticationRepository;
import ProjectDoge.StudentSoup.service.school.SchoolFindService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberEmailAuthenticationService {

    private final SchoolFindService schoolFindService;

    private final MemberEmailAuthenticationRepository memberEmailAuthenticationRepository;

    public ConcurrentHashMap<String,Object> findSchoolEmail(Long schoolId) {
        ConcurrentHashMap<String, Object> resultMap = new ConcurrentHashMap<>();
        School school = schoolFindService.findOne(schoolId);
        resultMap.put("domain",school.getSchoolEmail());
        return resultMap;
    }
    public ResponseEntity sendMail(MemberEmailAuthenticationDto memberEmailAuthenticationDto){
        int authenticationNumber = createAuthenticationNumber();
        memberEmailAuthenticationDto.setAuthenticationNumber(authenticationNumber);
        MemberEmailAuthentication memberEmailAuthentication = new MemberEmailAuthentication(memberEmailAuthenticationDto);
        memberEmailAuthenticationRepository.save(memberEmailAuthentication);

        return ResponseEntity.ok("ok");
    }

    private int createAuthenticationNumber() {
         return  (int)Math.floor(Math.random() * 89999 + 10000);

    }

}
