package ProjectDoge.StudentSoup.repository.boardreview;


import ProjectDoge.StudentSoup.dto.member.MemberMyPageBoardReviewDto;
import ProjectDoge.StudentSoup.dto.member.QMemberMyPageBoardReviewDto;
import ProjectDoge.StudentSoup.entity.board.BoardReview;
import ProjectDoge.StudentSoup.entity.board.QBoardReview;
import com.querydsl.core.Tuple;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;

import java.util.List;

import static ProjectDoge.StudentSoup.entity.board.QBoardReview.boardReview;

@RequiredArgsConstructor
public class BoardReviewRepositoryImpl implements BoardReviewRepositoryCustom{

    private final JPAQueryFactory queryFactory;

    @Override
    public List<MemberMyPageBoardReviewDto> callByMemberIdForMyPage(Long memberId, Pageable pageable) {

        return queryFactory.select(new QMemberMyPageBoardReviewDto(boardReview.content, boardReview.writeDate, boardReview.likedCount))
                .from(boardReview)
                .where(boardReview.member.memberId.eq(memberId))
                .offset(pageable.getPageNumber())
                .limit(pageable.getPageSize())
                .fetch();
    }
}
