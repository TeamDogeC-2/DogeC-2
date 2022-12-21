package ProjectDoge.StudentSoup.service;

import ProjectDoge.StudentSoup.entity.school.Department;
import ProjectDoge.StudentSoup.repository.department.DepartmentRepository;
import ProjectDoge.StudentSoup.repository.school.SchoolRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class DepartmentService {
    private final DepartmentRepository departmentRepository;
    private final SchoolRepository schoolRepository;

    @Transactional
    public Long join(Department department){
        log.info("학과 생성 메서드가 실행되었습니다.");
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
}
