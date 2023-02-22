package ProjectDoge.StudentSoup.service.member;

import ProjectDoge.StudentSoup.dto.member.EmailDto;
import ProjectDoge.StudentSoup.dto.member.MemberEmailAuthenticationDto;
import ProjectDoge.StudentSoup.entity.member.MemberEmailAuthentication;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.exception.EmailAuthentication.AuthenticationEmailNotSentException;
import ProjectDoge.StudentSoup.exception.EmailAuthentication.AuthenticationNumberNotSentException;
import ProjectDoge.StudentSoup.exception.EmailAuthentication.AuthenticationNumberWrongException;
import ProjectDoge.StudentSoup.exception.EmailAuthentication.AuthenticationTimeOverException;
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

import java.time.LocalDateTime;
import java.util.Optional;
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
    public EmailDto join(String email){
        log.info("메일전송 메소드가 실행되었습니다.");
        int index = email.indexOf("@");
        if(email.substring(0,index).trim().length() == 0){
            throw new AuthenticationEmailNotSentException("메일이 전송되지 않았습니다.");
        }
        int authenticationNumber = createAuthenticationNumber();
        MemberEmailAuthentication memberEmailAuthentication = new MemberEmailAuthentication().createMemberEmailAuthentication(email,authenticationNumber);
        log.info("email ={}",memberEmailAuthentication.getEmail());
        memberEmailAuthenticationRepository.save(memberEmailAuthentication);
        EmailDto mail = createMail(memberEmailAuthentication);
        return mail;
    }

    public ConcurrentHashMap<String,String> checkAuthenticationNumber(MemberEmailAuthenticationDto memberEmailAuthenticationDto){
        if(memberEmailAuthenticationDto.getAuthenticationNumber() == null){
            throw new AuthenticationNumberNotSentException("인증번호가 전송되지 않았습니다.");
        }
        ConcurrentHashMap<String,String> resultMap = new ConcurrentHashMap();
        MemberEmailAuthentication memberEmailAuthentication = memberEmailAuthenticationRepository.findByEmailAndAuthenticationNumber(memberEmailAuthenticationDto).orElse(null);
        checkAuthenticationNumber(memberEmailAuthentication);
        checkAuthenticationTime(memberEmailAuthentication);
        resultMap.put("email", memberEmailAuthentication.getEmail());
        resultMap.put("result","ok");
        memberEmailAuthenticationRepository.delete(memberEmailAuthentication);

        return resultMap;
    }
    private void checkAuthenticationNumber(MemberEmailAuthentication memberEmailAuthentication) {
        if(memberEmailAuthentication == null){
            throw new AuthenticationNumberWrongException("잘못된 인증 번호입니다.");
        }
    }

    private void checkAuthenticationTime(MemberEmailAuthentication memberEmailAuthentication) {
        if(memberEmailAuthentication.getCreateDate().isAfter(LocalDateTime.now().plusMinutes(5))){
            throw new AuthenticationTimeOverException("인증 시간이 초과되었습니다.");
        }
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
        message.setFrom(adminEmail);
        message.setSubject(dto.getTitle());
        message.setText(dto.getMessage());
        mailSender.send(message);
        log.info("회원 학교 인증 메일이 전송되었습니다.");
    }

}
