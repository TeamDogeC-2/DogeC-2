package ProjectDoge.StudentSoup.dto.restaurant;

import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.restaurant.Restaurant;
import lombok.Data;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Data
public class RestaurantDetailDto {

    private Long restaurantId;
    private String name;
    private String address;
    private LocalTime startTime;
    private LocalTime endTime;
    private String distance;
    private List<String> fileName;
    private int reviewCount;
    private double starLiked;
    private int likedCount;
    private int viewCount;
    private boolean like;
    private String detail;

    // 생성 메서드
    public RestaurantDetailDto createRestaurantDetailDto(Restaurant restaurant, boolean like){
        this.restaurantId = restaurant.getId();
        this.name = restaurant.getName();
        this.address = restaurant.getAddress();
        this.startTime = restaurant.getStartTime();
        this.endTime = restaurant.getEndTime();
        this.fileName = setImageFile(restaurant);
        this.reviewCount = restaurant.getRestaurantReviews().size();
        this.starLiked = restaurant.getStarLiked();
        this.likedCount = restaurant.getLikedCount();
        this.viewCount = restaurant.getViewCount();
        this.distance = restaurant.getDistance() + "M";
        this.like = like;
        this.detail = restaurant.getDetail();
        return this;
    }

    // 비즈니스 로직
    private List<String> setImageFile(Restaurant restaurant){

        List<String> imageNameList = new ArrayList<>();
        if(!restaurant.getImageFileList().isEmpty()) {
            for (ImageFile imagefile : restaurant.getImageFileList())
                imageNameList.add(imagefile.getFileName());

            return imageNameList;
        }
        return Collections.emptyList();
    }
}
