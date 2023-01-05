package ProjectDoge.StudentSoup.controller.admin;


import ProjectDoge.StudentSoup.dto.department.DepartmentFormDto;
import ProjectDoge.StudentSoup.entity.school.Department;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.repository.school.SchoolRepository;
import ProjectDoge.StudentSoup.service.department.DepartmentFindService;
import ProjectDoge.StudentSoup.service.department.DepartmentRegisterService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class AdminDepartmentController {
    private final SchoolRepository schoolRepository;
    private final DepartmentRegisterService departmentRegisterService;

    private final DepartmentFindService departmentFindService;
    @GetMapping("admin/department")
    public String createDepartment(Model model){
        List<School> schools = schoolRepository.findAll();
        model.addAttribute("schools",schools);
        model.addAttribute("departmentForm",new DepartmentFormDto());

        return "/admin/department/createDepartment";
    }
    @PostMapping("admin/department")
    public String createDepartment(DepartmentFormDto departmentFormDto){
        departmentRegisterService.join(departmentFormDto.getSchoolId(),departmentFormDto);
        return "redirect:/admin/departments";
    }
    @GetMapping("admin/departments")
    public String departmentList(@RequestParam(required = false)Long schoolId,Model model){
        List<School> schools = schoolRepository.findAll();
        List<Department> departments = departmentFindService.getAllDepartmentUsingSchool(schoolId);

        model.addAttribute("schools",schools);
        model.addAttribute("findDepartments",departments);
        return "admin/department/departmentList";
    }
}
