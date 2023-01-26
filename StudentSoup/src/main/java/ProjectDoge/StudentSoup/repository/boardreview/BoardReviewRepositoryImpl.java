package ProjectDoge.StudentSoup.repository.boardreview;


import ProjectDoge.StudentSoup.dto.member.MemberMyPageBoardReviewDto;
import ProjectDoge.StudentSoup.dto.member.QMemberMyPageBoardReviewDto;
import ProjectDoge.StudentSoup.entity.board.BoardReview;
import ProjectDoge.StudentSoup.entity.board.QBoardReview;
import com.querydsl.core.Tuple;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;

import java.util.List;

import static ProjectDoge.StudentSoup.entity.board.QBoardReview.boardReview;

@RequiredArgsConstructor
public class BoardReviewRepositoryImpl implements BoardReviewRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public Page<MemberMyPageBoardReviewDto> callByMemberIdForMyPage(Long memberId, Pageable pageable) {

        List<MemberMyPageBoardReviewDto> content = queryFactory.select(new QMemberMyPageBoardReviewDto(
                        boardReview.board.id, boardReview.content, boardReview.writeDate, boardReview.likedCount))
                .from(boardReview)
                .where(boardReview.member.memberId.eq(memberId))
                .offset(pageable.getPageNumber())
                .limit(pageable.getPageSize())
                .fetch();

        JPAQuery<Long> count = queryFactory.select(boardReview.count())
                .from(boardReview)
                .where(boardReview.member.memberId.eq(memberId));

        return PageableExecutionUtils.getPage(content, pageable, count::fetchOne);
    }
}
