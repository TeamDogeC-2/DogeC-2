package ProjectDoge.StudentSoup.controller.admin.school;

import ProjectDoge.StudentSoup.dto.school.SchoolFormDto;
import ProjectDoge.StudentSoup.dto.school.SchoolSearch;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.repository.school.SchoolRepository;
import ProjectDoge.StudentSoup.service.admin.AdminSchoolService;
import ProjectDoge.StudentSoup.service.school.SchoolFindService;
import ProjectDoge.StudentSoup.service.school.SchoolRegisterService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
public class AdminSchoolController {
    private final SchoolFindService schoolFindService;
    private final SchoolRegisterService schoolRegisterService;
    private final AdminSchoolService adminSchoolService;
    private final SchoolRepository schoolRepository;

    @PostMapping("admin/school")
    public ResponseEntity createSchool(@RequestBody SchoolFormDto schoolFormDto){
        Long schoolId = schoolRegisterService.join(schoolFormDto);
        return new ResponseEntity(schoolId,HttpStatus.valueOf(201));
    }

//    @GetMapping("admin/school/new")
//    public String createSchool(Model model){
//        model.addAttribute("schoolForm",new SchoolFormDto());
//        return "/admin/school/createSchool";
//    }
//    @PostMapping("admin/school/new")
//    public String createSchool(@Valid SchoolFormDto formDto, BindingResult bindingResult){
//        if(bindingResult.hasErrors()){
//            return "/admin/school/createSchool";
//        }
//        schoolRegisterService.join(formDto);
//        return "redirect:/admin/schools";
//    }
    @GetMapping("/admin/schools")
    public Map<String,List<School>> schoolList(@ModelAttribute("schoolSearch") SchoolSearch schoolSearch) {
        Map<String,List<School>> result = new HashMap<>();
        List<School> schools = schoolFindService.findAll();
        List<School> findSchools = adminSchoolService.AdminSearchSchools(schoolSearch);
        result.put("schools",schools);
        result.put("searchSchools",findSchools);
        return result;
    }
    @GetMapping("/admin/school/edit")
    public SchoolFormDto editSchool(@RequestParam("schoolId")Long schoolId,Model model){
        SchoolFormDto updateSchool = adminSchoolService.AdminFindUpdateSchool(schoolId);
        return updateSchool;
    }
    @PostMapping("/admin/school/edit")
    public ResponseEntity<Long> editSchool(@RequestParam("schoolId")Long schoolId,@ModelAttribute("form") SchoolFormDto schoolFormDto){
        adminSchoolService.AdminUpdateSchool(schoolId,schoolFormDto);
        return ResponseEntity.ok().body(schoolId);
    }
    @GetMapping("/admin/school/delete")
    public ResponseEntity<Long> deleteSchool(@RequestParam("schoolId")Long schoolId){
        schoolRepository.deleteById(schoolId);
        return ResponseEntity.ok(schoolId);
    }


}
