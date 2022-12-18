package ProjectDoge.StudentSoup.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
public class Hello {

    @GetMapping("/hello")
    public List<String> hello(){
        List<String> list = new ArrayList<>();
        list.add("hello");
        list.add("world");
        log.info("실행되었습니다. = {}", list);
        return list;
    }
}
