package ProjectDoge.StudentSoup.service.member;

import ProjectDoge.StudentSoup.dto.member.EmailDto;
import ProjectDoge.StudentSoup.dto.member.MemberEmailAuthenticationDto;
import ProjectDoge.StudentSoup.entity.member.MemberEmailAuthentication;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.repository.memberEmailAuthentication.MemberEmailAuthenticationRepository;
import ProjectDoge.StudentSoup.service.school.SchoolFindService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberEmailAuthenticationService {

    @Value("${admin.email}")
    private String adminEmail;

    private final SchoolFindService schoolFindService;

    private final MailSender mailSender;

    private final MemberEmailAuthenticationRepository memberEmailAuthenticationRepository;


    public ConcurrentHashMap<String,Object> findSchoolEmail(Long schoolId) {
        ConcurrentHashMap<String, Object> resultMap = new ConcurrentHashMap<>();
        School school = schoolFindService.findOne(schoolId);
        resultMap.put("domain",school.getSchoolEmail());
        return resultMap;
    }
    @Transactional
    public EmailDto sendMail(MemberEmailAuthenticationDto memberEmailAuthenticationDto){
        log.info("메일전송 메소드가 실행되었습니다.");
        int authenticationNumber = createAuthenticationNumber();
        memberEmailAuthenticationDto.setAuthenticationNumber(authenticationNumber);
        MemberEmailAuthentication memberEmailAuthentication = new MemberEmailAuthentication().createMemberEmailAuthentication(memberEmailAuthenticationDto);
        log.info("email ={}",memberEmailAuthentication.getEmail());
        memberEmailAuthenticationRepository.save(memberEmailAuthentication);
        EmailDto mail = createMail(memberEmailAuthentication);
        return mail;
    }

    private int createAuthenticationNumber() {
        return  (int)Math.floor(Math.random() * 89999 + 10000);

    }
    private EmailDto createMail(MemberEmailAuthentication memberEmailAuthentication) {
        EmailDto emailDto = new EmailDto();
        emailDto.setEmail(memberEmailAuthentication.getEmail());
        emailDto.setTitle("[studentSoup] 학교 인증 메일입니다.");
        emailDto.setMessage("안녕하세요. studentSoup 입니다.  인증번호는 " + memberEmailAuthentication.getAuthenticationNumber()+ "입니다.");
        return emailDto;
    }

    public void mailSend(EmailDto dto){
        log.info("회원 학교 인증 메일을 생성 시작하였습니다.");
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(dto.getEmail());
        log.info("email{}",dto.getEmail());
        message.setFrom(adminEmail);
        log.info("From{}",adminEmail);
        message.setSubject(dto.getTitle());
        log.info("title{}",dto.getTitle());
        message.setText(dto.getMessage());
        log.info("Text{}",dto.getMessage());
        mailSender.send(message);
        log.info("회원 학교 인증 메일이 전송되었습니다.");
    }

}
