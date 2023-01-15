package ProjectDoge.StudentSoup.repository.restaurant;

import ProjectDoge.StudentSoup.entity.restaurant.RestaurantMenuLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantMenuLikeRepository extends JpaRepository<RestaurantMenuLike, Long>, RestaurantMenuLikeRepositoryCustom {
}
