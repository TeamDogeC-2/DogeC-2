package ProjectDoge.StudentSoup.service;

import ProjectDoge.StudentSoup.dto.admin.AdminMemberUpdateForm;
import ProjectDoge.StudentSoup.dto.member.MemberDto;
import ProjectDoge.StudentSoup.dto.member.MemberFormBDto;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.member.Member;
import ProjectDoge.StudentSoup.entity.school.Department;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.exception.member.MemberIdNotSentException;
import ProjectDoge.StudentSoup.exception.member.MemberNotFoundException;
import ProjectDoge.StudentSoup.exception.member.MemberNotSamePassword;
import ProjectDoge.StudentSoup.exception.member.MemberValidationException;
import ProjectDoge.StudentSoup.exception.school.SchoolNotFoundException;
import ProjectDoge.StudentSoup.repository.department.DepartmentRepository;
import ProjectDoge.StudentSoup.repository.member.MemberRepository;
import ProjectDoge.StudentSoup.repository.school.SchoolRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final SchoolRepository schoolRepository;
    private final DepartmentRepository departmentRepository;

    private final FileService fileService;

    @Transactional
    public Long join(MemberFormBDto dto) {
        log.info("회원 생성 메서드가 실행되었습니다.");

        School school = getMemberDtoSchool(dto.getSchoolId());
        Department department = getMemberDtoDepartment(dto.getDepartmentId());

        log.info("회원의 학교는 : {}, 회원의 학과는 : {}", school.getSchoolName(), department.getDepartmentName());

        validateDuplicateMember(dto);

        Member member = new Member().createMember(dto, school, department);
        memberRepository.save(member);

        log.info("회원이 생성되었습니다. [{}][{}] ", member.getId(), member.getNickname());

        return member.getMemberId();
    }

    public School getMemberDtoSchool(Long schoolId) {
        return schoolRepository.findById(schoolId)
                .orElseThrow(() -> {
                    log.info("회원 생성 중 학교를 찾지 못하는 예외가 발생했습니다.");
                    throw new SchoolNotFoundException("학교를 찾지 못하였습니다.");
                });
    }

    public Department getMemberDtoDepartment(Long departmentId) {
        return departmentRepository.findById(departmentId)
                .orElseThrow(() -> {
                    log.info("회원 생성 중 학과를 찾지 못하는 예외가 발생했습니다.");
                    throw new SchoolNotFoundException("학과를 찾지 못하였습니다.");
                });
    }

    public void validateDuplicateMember(MemberFormBDto dto) {
        validateDuplicateMemberNickname(dto.getNickname());
        validateDuplicateMemberEmail(dto.getEmail());
    }

    public void validateDuplicateMemberNickname(String nickname) {
        log.info("회원 닉네임 중복 검증 메소드가 실행되었습니다.");

        Member findMember = memberRepository.findByNickname(nickname);
        if (findMember != null) {
            log.info("회원 닉네임이 중복 예외가 발생했습니다.");
            throw new MemberValidationException("중복된 닉네임입니다.");
        }
        log.info("회원 닉네임 중복 검증이 완료되었습니다.");
    }

    public void validateDuplicateMemberEmail(String email) {
        log.info("회원 이메일 중복 검증 메소드가 실행되었습니다.");

        Member findMember = memberRepository.findByEmail(email);
        if (findMember != null) {
            log.info("회원 이메일 중복 예외가 발생했습니다.");
            throw new MemberValidationException("중복된 이메일입니다.");
        }
        log.info("회원 이메일 중복 검증이 완료되었습니다.");
    }

    public void validateDuplicateMemberId(String memberId) {
        log.info("회원 아이디 중복 검증 메소드가 실행되었습니다.");

        Member findMember = memberRepository.findById(memberId)
                .orElse(null);

        if (findMember != null) {
            log.info("회원이 존재하는 예외가 발생했습니다.");
            throw new MemberValidationException("중복된 아이디 입니다.");
        }
        log.info("회원 중복 검증이 완료되었습니다.");
    }

    public MemberDto login(String id, String pwd) {
        log.info("로그인 서비스 로직 실행");
        Member member = validationExistLoginId(id);
        validationCoincideMemberIdPwd(member, pwd);
        MemberDto memberDto = new MemberDto();
        log.info("로그인이 완료되었습니다. 현재 로그인 된 회원의 아이디[{}], 닉네임[{}]", member.getId(), member.getNickname());
        return memberDto.getMemberDto(member);
    }

    private Member validationExistLoginId(String id) {
        log.info("로그인 아이디 존재 검증 메소드가 실행되었습니다.");
        log.info("입력 된 회원 아이디 : {}", id);
        Member member = memberRepository.findById(id)
                .orElseThrow(() -> {
                    log.info("로그인 하는 아이디 존재하지 않는 예외 발생");
                    return new MemberNotFoundException("회원이 존재하지 않습니다.");
                });
        return member;
    }

    private void validationCoincideMemberIdPwd(Member member, String pwd) {
        log.info("아이디와 비밀번호를 체크하는 검증 로직 실행, 아이디 : [{}], 비밀번호 : [{}]", member.getId(), pwd);
        if(notSameMemberIdPwd(member, pwd)) {
            log.info("아이디와 패스워드가 일치하지 않는 예외 발생");
            throw new MemberNotSamePassword("아이디 또는 패스워드가 일치하지 않습니다.");
        }
    }

    private boolean notSameMemberIdPwd(Member member, String pwd) {
        return !member.getPwd().equals(pwd);
    }

    @Transactional
    public Long adminMemberUpdate(AdminMemberUpdateForm dto, MultipartFile file) {
        log.info("회원 업데이트 메서드가 실행되었습니다.");

        Member member = memberRepository.findById(dto.getMemberId())
                .orElseThrow(() -> {
                    throw new MemberNotFoundException();
                });

        School school = getMemberDtoSchool(dto.getSchoolId());
        Department department = getMemberDtoDepartment(dto.getDepartmentId());

        log.info("현재 가져온 학교와 학과 : [{}] / [{}]", school.getSchoolName(), department.getDepartmentName());
        String prevEmail = member.getEmail();
        String prevNickName = member.getNickname();
        updateMemberField(dto, member);
        validationChangedNicknameEmail(dto, member, prevEmail, prevNickName);
        log.info("회원 정보가 새로 갱신되었습니다.");
        Long fileId = fileService.join(file);
        updateMemberProfileImage(member, fileId);

        return member.getMemberId();
    }

    private void updateMemberField(AdminMemberUpdateForm dto, Member member) {
        member.setPwd(dto.getPwd());
        member.setEmail(dto.getEmail());
        member.setNickname(dto.getNickname());
    }

    private void validationChangedNicknameEmail(AdminMemberUpdateForm dto, Member member, String prevEmail, String prevNickName) {
        log.info("회원 업데이트 중 닉네임과 이메일 검증을 시작합니다.");
        if(!prevNickName.equals(dto.getNickname())) {
            validateDuplicateMemberNickname(member.getNickname());
        }
        if(!prevEmail.equals(dto.getEmail())) {
            validateDuplicateMemberEmail(member.getEmail());
        }
        log.info("회원 업데이트 중 닉네임 이메일 검증이 완료되었습니다.");
    }

    private void updateMemberProfileImage(Member member, Long fileId) {
        if(fileId != null) {
            ImageFile imageFile = fileService.findOne(fileId);
            member.setImageFile(imageFile);
        }
    }

    @Transactional
    public MemberDto memberProfileUpdate(Long memberId, MultipartFile multipartFile){
        log.info("멤버 프로필이미지 업데이트가 시작되었습니다.");
        Long fileId = fileService.join(multipartFile);
        Member member = findOne(memberId);
        return createProfileUpdateMemberDto(fileId, member);
    }

    private MemberDto createProfileUpdateMemberDto(Long fileId, Member member) {
        if(fileId != null){
            ImageFile imageFile = fileService.findOne(fileId);
            member.setImageFile(imageFile);
            log.info("멤버 프로필이미지가 업데이트 되었습니다. fileName : [{}]", imageFile.getFileOriginalName());
            return new MemberDto().getMemberDto(member);
        } else {
            log.info("전송된 프로필 이미지가 없으므로, 프로필 이미지가 업데이트되지 않았습니다.");
            return new MemberDto().getMemberDto(member);
        }
    }

    public Member findOne(Long memberId) {
        checkMemberIdSent(memberId);
        return memberRepository.findById(memberId)
                .orElseThrow(() -> {
                    throw new MemberNotFoundException("회원을 찾지 못하였습니다.");
                });
    }

    private void checkMemberIdSent(Long memberId) {
        if(memberId == null){
            log.info("멤버 프로필 업데이트 도중 memberId가 전송되지 않았습니다.");
            throw new MemberIdNotSentException("memberId가 전송되지 않았습니다.");
        }
    }
}
