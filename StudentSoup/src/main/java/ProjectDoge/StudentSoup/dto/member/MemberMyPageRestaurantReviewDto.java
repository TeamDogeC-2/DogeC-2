package ProjectDoge.StudentSoup.dto.member;

import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.restaurant.RestaurantReview;
import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;

import java.time.LocalDate;

@Data
public class MemberMyPageRestaurantReviewDto {

    private Long restaurantReviewId;
    private String imageName;
    private int starLiked;
    private String content;
    private String writeDate;

    public MemberMyPageRestaurantReviewDto(){
    }

    public MemberMyPageRestaurantReviewDto(RestaurantReview restaurantReview){
        this.restaurantReviewId = restaurantReview.getId();
        this.imageName = setImageFileName(restaurantReview.getImageFileList().get(0));
        this.starLiked = restaurantReview.getStarLiked();
        this.content = restaurantReview.getContent();
        this.writeDate = restaurantReview.getWriteDate().toString();
    }

    private String setImageFileName(ImageFile imageFile){
        if(imageFile != null){
            return imageFile.getFileName();
        }
        return null;
    }
}
