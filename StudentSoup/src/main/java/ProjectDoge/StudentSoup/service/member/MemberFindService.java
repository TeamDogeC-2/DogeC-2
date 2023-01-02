package ProjectDoge.StudentSoup.service.member;

import ProjectDoge.StudentSoup.dto.member.EmailDto;
import ProjectDoge.StudentSoup.dto.member.MemberFindAccountDto;
import ProjectDoge.StudentSoup.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberFindService {

    @Value("${admin.email}")
    private String adminEmail;

    private final MemberRepository memberRepository;
    private final MemberService memberService;
    private final MailSender mailSender;

    public EmailDto createFindMemberIdUsingEmail(String email){
        log.info("회원 아이디 찾기 서비스 로직을 실행하였습니다.");
        MemberFindAccountDto findMember = memberRepository.findByAccountEmail(email)
                .orElse(null);
        if(findMember == null){
            log.info("이메일에 맞는 회원 아이디를 발견하지 못했습니다.");
            return null;
        } else{
            return createFindIdMailDto(findMember);
        }
    }

    private EmailDto createFindIdMailDto(MemberFindAccountDto findMember){
        log.info("회원 아이디 찾기 메세지 객체 생성이 시작되었습니다. [{}]", findMember.getId());
        EmailDto dto = new EmailDto();
        dto.setEmail(findMember.getEmail());
        dto.setTitle("[takemh] 아이디 찾기 메일입니다.");
        dto.setMessage("안녕하세요. takemh 입니다. [" + findMember.getNickname() + "]님의 아이디는 " + findMember.getId() + "입니다.");
        return dto;
    }

    public void mailSend(EmailDto dto){
        log.info("회원 아이디/패스워드 찾기 메일을 생성을 시작하였습니다.");
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(dto.getEmail());
        message.setFrom(adminEmail);
        message.setSubject(dto.getTitle());
        message.setText(dto.getMessage());
        mailSender.send(message);
        log.info("회원 아이디/패스워드 찾기 메일이 전송되었습니다.");
    }


}
