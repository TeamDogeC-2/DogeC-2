package ProjectDoge.StudentSoup.entity.restaurant;

import ProjectDoge.StudentSoup.dto.restaurant.RestaurantFormDto;
import ProjectDoge.StudentSoup.entity.school.School;
import ProjectDoge.StudentSoup.entity.file.File;
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

    @ManyToOne(fetch = FetchType.LAZY)
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
    private File file;

    private float starLiked;

    private int likedCount;

    private String tel;

    private String tag;

    @Lob
    private String detail;

    @OneToMany(mappedBy = "restaurant")
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
    public Restaurant createRestaurant(RestaurantFormDto form, School school, File file) {
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
        this.setFile(file);
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

    // 학교로 부터 음식점까지 거리좌표 계산
    public int getDistance(){
        String[] schoolCoordinate = this.school.getSchoolCoordinate().split(",");
        String[] restaurantCoordinate = this.getCoordinate().split(",");
        double schoolLatitude = Double.parseDouble(schoolCoordinate[0]);
        double schoolLongitude = Double.parseDouble(schoolCoordinate[1]);
        double restaurantLatitude = Double.parseDouble(restaurantCoordinate[0]);
        double restaurantLongitude = Double.parseDouble(restaurantCoordinate[1]);

        double theta = schoolLongitude - restaurantLongitude;
        double dist = Math.sin(degToRad(schoolLatitude)) * Math.sin(degToRad(restaurantLatitude)) + Math.cos(degToRad(schoolLatitude)) * Math.cos(degToRad(restaurantLatitude)) * Math.cos(degToRad(theta));

        dist = Math.acos(dist);
        dist = radToDeg(dist);
        dist = dist * 60 * 1.1515;

        dist *= 1609.344;

        return (int)round(dist);
    }

    private double degToRad(double deg) {
        return (deg * Math.PI / 180.0);
    }

    private double radToDeg(double rad) {
        return (rad * 180 / Math.PI);
    }
}
