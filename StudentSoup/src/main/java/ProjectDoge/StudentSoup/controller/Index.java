package ProjectDoge.StudentSoup.controller;

import ProjectDoge.StudentSoup.dto.school.SchoolIndexDTO;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.service.SchoolService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Slf4j
@RequiredArgsConstructor
@RestController
public class Index {

    private final SchoolService schoolService;

    @GetMapping("/home")
    public List<SchoolIndexDTO> homeController(){
        log.info("homeController가 호출되었습니다.");

        List<School> schools = schoolService.findAll();
        List<SchoolIndexDTO> result = schools.stream()
                .map(o -> new SchoolIndexDTO(o))
                .collect(toList());

        log.info("불러온 학교 목록 DTO : {}", result);
        return result;
    }

    @Data
    @AllArgsConstructor
    static class Result<T> {
        private T data;
    }
}
