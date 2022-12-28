package ProjectDoge.StudentSoup.controller.admin.school;

import ProjectDoge.StudentSoup.dto.school.SchoolFormDto;
import ProjectDoge.StudentSoup.dto.school.SchoolSearch;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.repository.school.SchoolRepository;
import ProjectDoge.StudentSoup.service.SchoolService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class CreateSchoolController {

    private final SchoolService schoolService;

    private final SchoolRepository schoolRepository;

    @GetMapping("admin/school/new")
    public String createSchool(Model model){
        model.addAttribute("schoolForm",new SchoolFormDto());
        return "/admin/school/createSchool";
    }
    @PostMapping("admin/school/new")
    public String createSchool(@Valid SchoolFormDto formDto, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            return "/admin/school/createSchool";
        }
        schoolService.join(formDto);
        return "redirect:/admin/schools";
    }
    @GetMapping("/admin/schools")
    public String schoolList(@ModelAttribute("schoolSearch") SchoolSearch schoolSearch, Model model) {
        List<School> schools = schoolService.findAll();
        model.addAttribute("schools", schools);

        List<School> findSchools = schoolService.findSchools(schoolSearch);
        model.addAttribute("findSchools", findSchools);

        return "/admin/school/schoolList";
    }

}
