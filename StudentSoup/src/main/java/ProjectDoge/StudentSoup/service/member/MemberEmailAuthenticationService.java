package ProjectDoge.StudentSoup.service.member;

import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.service.school.SchoolFindService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberEmailAuthenticationService {

    private final SchoolFindService schoolFindService;


    public ConcurrentHashMap<String,Object> findSchoolEmail(Long schoolId) {
        ConcurrentHashMap<String, Object> resultMap = new ConcurrentHashMap<>();
        School school = schoolFindService.findOne(schoolId);
        resultMap.put("domain",school.getSchoolEmail());
        return resultMap;
    }
}
