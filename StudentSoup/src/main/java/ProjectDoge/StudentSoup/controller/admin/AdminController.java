package ProjectDoge.StudentSoup.controller.admin;

import ProjectDoge.StudentSoup.dto.admin.AdminMemberForm;
import ProjectDoge.StudentSoup.dto.department.DepartmentSignUpDto;
import ProjectDoge.StudentSoup.dto.member.MemberFormBDto;
import ProjectDoge.StudentSoup.entity.member.GenderType;
import ProjectDoge.StudentSoup.entity.school.Department;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.service.DepartmentService;
import ProjectDoge.StudentSoup.service.MemberService;
import ProjectDoge.StudentSoup.service.SchoolService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@RequestMapping("/admin")
@RequiredArgsConstructor
@Controller
public class AdminController {
    private final MemberService memberService;
    private final SchoolService schoolService;
    private final DepartmentService departmentService;

    @GetMapping()
    public String adminPage(){
        return "admin/admin-index";
    }

    @GetMapping("/member/new")
    public String createMemberForm(Model model){


        model.addAttribute("memberForm", new AdminMemberForm());
        model.addAttribute("genderTypes", GenderType.values());
        List<School> schools = schoolService.findAll();
        model.addAttribute("schools", schools);

        return "/admin/member/createMember";
    }

    @PostMapping("/member/new")
    public String createMemberForm(@ModelAttribute("memberForm") MemberFormBDto memberForm){
        memberService.join(memberForm);
        return "redirect:/admin";
    }

    @PostMapping("/member/ajax")
    @ResponseBody
    public List<DepartmentSignUpDto> getDepartment(@RequestBody Map<String, Long> param){
        Long schoolId = param.get("schoolId");
        log.info("member/ajax , schoolId : [{}]", schoolId);
        List<Department> Department = departmentService.getAllDepartmentUsingSchool(schoolId);
        List<DepartmentSignUpDto> dto = Department.stream()
                .map(department -> new DepartmentSignUpDto(department))
                .collect(Collectors.toList());
        return dto;
    }
}
