package ProjectDoge.StudentSoup.service;

import ProjectDoge.StudentSoup.dto.school.SchoolFormDto;
import ProjectDoge.StudentSoup.dto.school.SchoolSearch;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.exception.member.MemberIdNotSentException;
import ProjectDoge.StudentSoup.exception.school.SchoolIdNotSentException;
import ProjectDoge.StudentSoup.exception.school.SchoolNotFoundException;
import ProjectDoge.StudentSoup.exception.school.SchoolValidationException;
import ProjectDoge.StudentSoup.repository.school.SchoolRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class SchoolService {

    private final SchoolRepository schoolRepository;

    @Transactional
    public Long join(SchoolFormDto schoolFormDto){
        log.info("학교 생성 메서드가 실행되었습니다.");
        School school = new School().createSchool(schoolFormDto);
        validateDuplicateSchool(school);
        schoolRepository.save(school);
        log.info("학교가 생성되었습니다. [{}][{}] ",school.getId(), school.getSchoolName());
        return school.getId();
    }

    private void validateDuplicateSchool(School school){
        log.info("학교 생성 검증 메소드가 실행되었습니다.");
        School findSchools = schoolRepository.findBySchoolName(school.getSchoolName());
        if (findSchools != null) {
            log.info("학교가 존재하는 예외가 발생했습니다.");
            throw new SchoolValidationException("이미 존재하는 학교입니다.");
        }
        log.info("학교 검증이 완료되었습니다.");
    }

    public School findOne(Long schoolId){
        checkSchoolIdSent(schoolId);

        return schoolRepository.findById(schoolId).orElseThrow(() -> {
            log.info("findOne 메소드가 실행되었습니다. [{}]", schoolId);
            throw new SchoolNotFoundException("학교를 찾지 못하였습니다.");
        });
    }
    private void checkSchoolIdSent(Long schoolId) {
        if(schoolId == null){
            log.info("schoolId가 전송되지 않았습니다.");
            throw new SchoolIdNotSentException("schoolId가 전송되지 않았습니다.");
        }
    }

    public List<School> findAll(){
        if(schoolRepository.findAll().isEmpty()){
            log.info("등록된 학교가 없는 예외가 발생했습니다.");
            throw new SchoolNotFoundException("등록된 학교가 존재하지 않습니다.");
        }
        return schoolRepository.findAll();
    }

    public List<School> AdminSearchSchools(SchoolSearch schoolSearch) {
        List<School> findSchool = schoolRepository.findSchoolDynamicSearch(schoolSearch);
        return  findSchool;
    }
    public SchoolFormDto AdminFindUpdateSchool(Long schoolId){
        School school = findOne(schoolId);
        SchoolFormDto schoolFormDto = new SchoolFormDto();
        schoolFormDto.setSchool(school);
        return schoolFormDto;

    }
    @Transactional
    public void AdminUpdateSchool(Long schoolId,SchoolFormDto schoolFormDto){
        School school = findOne(schoolId);
        school.setSchoolName(schoolFormDto.getSchoolName());
        school.setSchoolCoordinate(schoolFormDto.getSchoolCoordinate());
    }


}
