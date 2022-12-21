package ProjectDoge.StudentSoup.entity.restaurant;

import ProjectDoge.StudentSoup.entity.member.Member;
import com.doge.takemh.domain.Member;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "RESTAURANT_REVIEW_LIKE")
@Getter
@Setter
public class RestaurantReviewLike {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "RESTAURANT_REVIEW_ID")
    private RestaurantReview restaurantReview;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "RESTAURANT_REVIEW_LIKED_ID")
    private Member member;
}
