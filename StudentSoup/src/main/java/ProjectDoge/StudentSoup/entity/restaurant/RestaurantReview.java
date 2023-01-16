package ProjectDoge.StudentSoup.entity.restaurant;

import ProjectDoge.StudentSoup.dto.restaurant.RestaurantReviewRequestDto;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.member.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "RESTAURANT_REVIEW")
@Getter
@Setter
public class RestaurantReview {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "RESTAURANT_ID")
    private Restaurant restaurant;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @Column(name = "WRITER_NICKNAME")
    public String nickname;  // Member

    private String content;

    private String menuName;

    @OneToMany(mappedBy = "restaurantReview")
    private List<ImageFile> imageFileList;

    // 리뷰가 좋아요 눌린 수
    private int likedCount;

    // 리뷰에서 작성한 음식점의 별점
    private int starLiked;

    @Column(columnDefinition = "DATE")
    private LocalDate writeDate;

    @Column(columnDefinition = "DATE")
    private LocalDate updateDate;

    //== 연관관계 메서드 ==//
    public void setRestaurant(Restaurant restaurant){
        this.restaurant = restaurant;
        restaurant.getRestaurantReviews().add(this);
    }

    public void setMember(Member member){
        this.member = member;
        member.getRestaurantReviews().add(this);
    }

    //== 생성 메서드 ==//
    public RestaurantReview createRestaurantReview(RestaurantReviewRequestDto dto,
                                                   Restaurant restaurant,
                                                   Member member){
        this.restaurant = restaurant;
        this.member = member;
        this.nickname = dto.getNickName();
        this.content = dto.getContent();
        this.menuName = dto.getMenuName();
        this.likedCount = 0;
        this.starLiked = dto.getStarLiked();
        this.writeDate = LocalDate.now();
        this.updateDate = LocalDate.now();
        return this;
    }

    public RestaurantReview createTestRestaurantReview(){
        RestaurantReview restaurantReview = new RestaurantReview();
        restaurantReview.setContent("레스토랑 리뷰 내용");
        restaurantReview.setLikedCount(0);
        restaurantReview.setStarLiked(0);
        restaurantReview.setWriteDate(LocalDate.now());
        restaurantReview.setUpdateDate(LocalDate.now());

        return restaurantReview;
    }

    //== 비즈니스 로직 ==//
    public void addImageFile(ImageFile imageFile){
        this.getImageFileList().add(imageFile);

        if(imageFile.getRestaurantReview() != this)
            imageFile.setRestaurantReview(this);
    }


}
