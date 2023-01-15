package ProjectDoge.StudentSoup.entity.restaurant;

import ProjectDoge.StudentSoup.entity.file.ImageFile;
import ProjectDoge.StudentSoup.entity.member.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Date;

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

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "IMAGE_FILE_ID")
    private ImageFile imageFile;

    // 리뷰가 좋아요 눌린 수
    private int likedCount;

    // 리뷰에서 작성한 음식점의 별점
    private int starLiked;

    @Temporal(TemporalType.TIMESTAMP)
    private Date writeDate;

    @Temporal(TemporalType.TIMESTAMP)
    private Date updateDate;

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
    public RestaurantReview createTestRestaurantReview(){
        RestaurantReview restaurantReview = new RestaurantReview();
        restaurantReview.setContent("레스토랑 리뷰 내용");
        restaurantReview.setLikedCount(0);
        restaurantReview.setStarLiked(0);
        restaurantReview.setWriteDate(Timestamp.valueOf(LocalDateTime.now()));
        restaurantReview.setUpdateDate(Timestamp.valueOf(LocalDateTime.now().plusHours(1)));

        return restaurantReview;
    }


}
