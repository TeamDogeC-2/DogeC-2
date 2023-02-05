package ProjectDoge.StudentSoup.service.BoardReview;

import ProjectDoge.StudentSoup.exception.boardreview.BoardReviewContentOutOfRangeException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class BoardReviewValidationService {

    public void checkContent(String content) {
        if(content.length() < 5 || content.length() > 500){
            throw new BoardReviewContentOutOfRangeException("댓글의 내용은 5자 이상이거나 500자 이하이여야 합니다.");
        }
    }

}
