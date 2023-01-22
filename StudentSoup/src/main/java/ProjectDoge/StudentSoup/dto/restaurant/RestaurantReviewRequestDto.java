package ProjectDoge.StudentSoup.dto.restaurant;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
public class RestaurantReviewRequestDto {
    private Long restaurantId;
    private String restaurantName;
    private Long memberId;
    private String nickName;
    private String content;
    private int starLiked;
    private List<MultipartFile> multipartFileList;
}
