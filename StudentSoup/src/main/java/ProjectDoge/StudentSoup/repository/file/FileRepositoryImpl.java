package ProjectDoge.StudentSoup.repository.file;

import ProjectDoge.StudentSoup.entity.file.QImageFile;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;

import java.util.List;

import static ProjectDoge.StudentSoup.entity.file.QImageFile.imageFile;

@RequiredArgsConstructor
public class FileRepositoryImpl implements FileRepositoryCustom {

    private final JPAQueryFactory queryFactory;
    @Override
    public Page<String> callImageFileByRestaurantReviewId(Long restaurantId, Pageable pageable) {

        List<String> content = queryFactory
                .select(imageFile.fileName)
                .from(imageFile)
                .where(imageFile.restaurant.id.eq(restaurantId), imageFile.restaurantReview.id.isNotNull())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();


        JPAQuery<Long> count = queryFactory
                .select(imageFile.fileName.count())
                .from(imageFile)
                .where(imageFile.restaurant.id.eq(restaurantId), imageFile.restaurantReview.id.isNotNull());

        return PageableExecutionUtils.getPage(content, pageable, count::fetchOne);
    }
}
