package ProjectDoge.StudentSoup.entity.restaurant;

import ProjectDoge.StudentSoup.entity.member.Member;
import com.doge.takemh.domain.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "RESTAURANT_MENU_LIKE")
@Getter
@Setter
public class RestaurantMenuLike {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "RESTAURANT_ID")
    private Restaurant restaurant;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "RESTAURANT_MENU_ID")
    private RestaurantMenu restaurantMenu;

    @ManyToOne
    @JoinColumn(name = "RESTAURANT_MENU_LIKED_ID")
    private Member member;
}
