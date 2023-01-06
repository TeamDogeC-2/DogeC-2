package ProjectDoge.StudentSoup.entity.restaurant;

import ProjectDoge.StudentSoup.dto.restaurant.RestaurantFormDto;
import ProjectDoge.StudentSoup.dto.restaurant.RestaurantUpdateDto;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.entity.file.ImageFile;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import static ProjectDoge.StudentSoup.commonmodule.ConvertStringToDateTime.convertStringToDateTime;
import static java.lang.Math.round;

@Entity
@Table(name = "RESTAURANT")
@Getter
@Setter
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.REMOVE)
    @JoinColumn(name = "SCHOOL_ID")
    private School school;

    @Enumerated(EnumType.STRING)
    private RestaurantCategory restaurantCategory;

    private String name;

    private String address;

    private LocalTime startTime;

    private LocalTime endTime;

    private String coordinate;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "IMAGE_FILE_ID")
    private ImageFile imageFile;

    private float starLiked;

    private int likedCount;

    private String tel;

    private String tag;

    @Lob
    private String detail;

    @OneToMany(mappedBy = "restaurant",cascade = CascadeType.REMOVE)
    private List<RestaurantMenu> restaurantMenus = new ArrayList<>();

    @OneToMany(mappedBy = "restaurant")
    private List<RestaurantReview> restaurantReviews = new ArrayList<>();

    //== 연관관계 메서드 ==//
    public void setSchool(School school) {
        this.school = school;
        if (!school.getRestaurants().contains(this))
            school.getRestaurants().add(this);
    }

    //== 생성 메서드 ==//
    public Restaurant createRestaurant(RestaurantFormDto form, School school, ImageFile imageFile) {
        this.setName(form.getName());
        this.setAddress(form.getAddress());
        this.setSchool(school);
        this.setRestaurantCategory(form.getRestaurantCategory());
        this.setStartTime(convertStringToDateTime(form.getStartTime()));
        this.setEndTime(convertStringToDateTime(form.getEndTime()));
        this.setCoordinate(form.getCoordinate());
        this.setTel(form.getTel());
        this.setTag(form.getTag());
        this.setDetail(form.getDetail());
        this.setLikedCount(0);
        this.setStarLiked(0);
        this.setImageFile(imageFile);
        return this;
    }
    //==업데이트 메서드 == //
    public void updateRestaurant(RestaurantUpdateDto form, School school, ImageFile imageFile){
        this.setName(form.getName());
        this.setAddress(form.getAddress());
        this.setSchool(school);
        this.setRestaurantCategory(form.getRestaurantCategory());
        this.setStartTime(convertStringToDateTime(form.getStartTime()));
        this.setEndTime(convertStringToDateTime(form.getEndTime()));
        this.setCoordinate(form.getCoordinate());
        this.setTel(form.getTel());
        this.setTag(form.getTag());
        this.setDetail(form.getDetail());
        this.setImageFile(imageFile);

    }

    public Restaurant createRestaurant(RestaurantFormDto form, School school) {
        this.setName(form.getName());
        this.setAddress(form.getAddress());
        this.setSchool(school);
        this.setRestaurantCategory(form.getRestaurantCategory());
        this.setStartTime(convertStringToDateTime(form.getStartTime()));
        this.setEndTime(convertStringToDateTime(form.getEndTime()));
        this.setCoordinate(form.getCoordinate());
        this.setTel(form.getTel());
        this.setTag(form.getTag());
        this.setDetail(form.getDetail());
        this.setLikedCount(0);
        this.setStarLiked(0);
        this.setImageFile(form.getImageFile());
        return this;
    }

    //== 비즈니스 로직 ==//
    public void addLikedCount(){
        this.likedCount += 1;
    }
    public void minusLikedCount(){
        if(this.likedCount != 0) {
            this.likedCount -= 1;
        }
    }
}
