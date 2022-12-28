package ProjectDoge.StudentSoup.controller.admin.school;

import ProjectDoge.StudentSoup.dto.school.SchoolFormDto;
import ProjectDoge.StudentSoup.repository.school.SchoolRepository;
import ProjectDoge.StudentSoup.service.SchoolService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;

@Controller
@RequiredArgsConstructor
public class CreateSchoolController {

    private final SchoolService schoolService;

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
}
