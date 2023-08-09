package ProjectDoge.StudentSoup.controller.admin;


import ProjectDoge.StudentSoup.dto.department.DepartmentFormDto;
import ProjectDoge.StudentSoup.dto.department.DepartmentUpdateDto;
import ProjectDoge.StudentSoup.entity.school.Department;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.repository.department.DepartmentRepository;
import ProjectDoge.StudentSoup.repository.school.SchoolRepository;
import ProjectDoge.StudentSoup.service.admin.AdminDepartmentService;
import ProjectDoge.StudentSoup.service.department.DepartmentFindService;
import ProjectDoge.StudentSoup.service.department.DepartmentRegisterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class AdminDepartmentController {
    private final SchoolRepository schoolRepository;
    private final DepartmentRegisterService departmentRegisterService;
    private final DepartmentFindService departmentFindService;
    private final AdminDepartmentService adminDepartmentService;

    private final DepartmentRepository departmentRepository;
    @GetMapping("admin/department")
    public ResponseEntity<List<School>> createDepartment(Model model){
        List<School> schools = schoolRepository.findAll();
        return ResponseEntity.ok(schools);
    }
    @PostMapping("admin/department")
    public Long createDepartment(DepartmentFormDto departmentFormDto){
        Long departmentId = departmentRegisterService.join(departmentFormDto.getSchoolId(),departmentFormDto);
        return departmentId;
    }
    @GetMapping("admin/departments")
    public Map<String,Object> departmentList(@RequestParam(required = false)Long schoolId, Model model){
        Map<String,Object> result = new HashMap<>();
        List<School> schools = schoolRepository.findAll();
        List<Department> departments = departmentFindService.getAllDepartmentUsingSchool(schoolId);
        result.put("school",schools);
        result.put("departments",departments);
        return result;
    }

    @GetMapping("admin/department/edit/{departmentId}")
    public ResponseEntity<DepartmentUpdateDto> editDepartment(@PathVariable Long departmentId,Model model){
        DepartmentUpdateDto departmentUpdateDto = adminDepartmentService.adminFindDepartment(departmentId);

        return ResponseEntity.ok(departmentUpdateDto);
    }
    @PostMapping("admin/department/edit/{departmentId}")
    public ResponseEntity<Long> editDepartment(@PathVariable Long departmentId,DepartmentUpdateDto departmentUpdateDto){
        Long Id = adminDepartmentService.adminUpdateDepartment(departmentId,departmentUpdateDto);

        return ResponseEntity.ok(Id);
    }
    @GetMapping("admin/department/{departmentId}")
    public ResponseEntity<Long> deleteDepartment(@PathVariable Long departmentId){
        departmentRepository.deleteById(departmentId);

        return ResponseEntity.ok(departmentId);
    }
}
