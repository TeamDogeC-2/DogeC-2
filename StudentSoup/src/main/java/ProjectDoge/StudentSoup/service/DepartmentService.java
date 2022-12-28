package ProjectDoge.StudentSoup.service;

import ProjectDoge.StudentSoup.dto.department.DepartmentFormDto;
import ProjectDoge.StudentSoup.entity.school.Department;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.exception.department.DepartmentNotFoundException;
import ProjectDoge.StudentSoup.exception.school.SchoolNotFoundException;
import ProjectDoge.StudentSoup.repository.department.DepartmentRepository;
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
public class DepartmentService {
    private final DepartmentRepository departmentRepository;
    private final SchoolRepository schoolRepository;

    @Transactional
    public Long join(Long schoolId, DepartmentFormDto dto){
        log.info("학과 생성 메서드가 실행되었습니다.");
        School school = validateNotFoundSchool(schoolId);
        Department department = new Department().createDepartmentForm(dto, school);
        validateDuplicateDepartment(department);
        departmentRepository.save(department);
        log.info("학과가 생성되었습니다. [{}][{}] ",department.getId(), department.getDepartmentName());
        return department.getId();
    }

    private void validateDuplicateDepartment(Department department){
        log.info("학과 생성 검증 메소드가 실행되었습니다.");
        Department findDepartment = departmentRepository.findByDepartmentNameAndSchool_SchoolName(department.getDepartmentName(), department.getSchool().getSchoolName());
        if (findDepartment != null) {
            log.info("학과가 존재하는 예외가 발생했습니다.");
            throw new IllegalStateException("이미 존재하는 학과입니다.");
        }
        log.info("학과 검증이 완료되었습니다.");
    }
    private School validateNotFoundSchool(Long schoolId){
        log.info("학과 생성 중 학교 존재 여부 검증 메소드가 실행되었습니다.");
        School school = schoolRepository.findById(schoolId)
                .orElseThrow(() -> {
                    log.info("학과 등록 중 학교가 존재하지 않는 예외가 발생했습니다.");
                    return new SchoolNotFoundException("등록되지 않은 학교입니다.");
                });
        log.info("학과 생성 중 등록 된 학교 : {}", school.getSchoolName());
        return school;
    }

    public Department findOne(Long departmentId){
        Optional<Department> department = departmentRepository.findById(departmentId);
        return department.get();
    }

    public Department findOneUsingDepartmentNameAndSchoolName(String departmentName, String schoolName){
        Department department = departmentRepository.findByDepartmentNameAndSchool_SchoolName(departmentName, schoolName);
        return department;
    }

    public List<Department> getAllDepartmentUsingSchool(Long schoolId){
        if(departmentRepository.findBySchool_Id(schoolId).isEmpty()){
            log.info("등록된 학과가 없는 예외가 발생했습니다.");
            throw new DepartmentNotFoundException("학과가 존재하지 않습니다.");
        }
        return departmentRepository.findBySchool_Id(schoolId);
    }
}
