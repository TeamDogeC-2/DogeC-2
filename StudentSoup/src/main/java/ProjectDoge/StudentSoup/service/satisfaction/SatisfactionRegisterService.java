package ProjectDoge.StudentSoup.service.satisfaction;


import ProjectDoge.StudentSoup.dto.satisfaction.SatisfactionDto;
import ProjectDoge.StudentSoup.entity.satisfaction.Satisfaction;
import ProjectDoge.StudentSoup.repository.satisfaction.SatisfactionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@RequiredArgsConstructor
@Service
public class SatisfactionRegisterService {


    private final SatisfactionRepository satisfactionRepository;

    @Transactional
    public Long join(SatisfactionDto satisfactionDto){
        String score = "";
        for(int i : satisfactionDto.getStar()){
            score += Integer.toString(i);
        }
        Satisfaction satisfaction = new Satisfaction().setDto(satisfactionDto.getComment(),score);
        Satisfaction satisfaction1 = satisfactionRepository.save(satisfaction);
        return satisfaction1.getId();

    }
}
