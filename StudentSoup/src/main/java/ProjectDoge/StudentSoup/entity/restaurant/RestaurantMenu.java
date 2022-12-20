package ProjectDoge.StudentSoup.entity.restaurant;

import ProjectDoge.StudentSoup.entity.file.File;
import com.doge.takemh.controller.RestaurantMenuForm;
import com.doge.takemh.domain.File.Files;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "RESTAURANT_MENU")
@Getter
@Setter
public class RestaurantMenu {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "RESTAURANT_ID")
    private Restaurant restaurant;

    private String name;

    @Enumerated
    private RestaurantMenuCategory restaurantMenuCategory;

    private int cost;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "IMAGE_FILE_ID")
    private File file;

    private int likedCount;

    private float starLiked;

    //== 연관관계 메서드 ==//
    public void setRestaurant(Restaurant restaurant){
        this.restaurant = restaurant;
        restaurant.getRestaurantMenus().add(this);
    }

    //== 생성 메서드 ==//
    public RestaurantMenu createRestaurantMenu(RestaurantMenuForm form, Restaurant restaurant, Files file){
        this.setName(form.getName());
        this.setRestaurantMenuCategory(form.getRestaurantMenuCategory());
        this.setRestaurant(restaurant);
        this.setCost(form.getCost());
        this.setFile(file);
        return this;
    }

    public RestaurantMenu createTestRestaurantMenu(){
        this.setName("메뉴1");
        this.setLikedCount(0);
        this.setStarLiked(0);
        return this;
    }

}
