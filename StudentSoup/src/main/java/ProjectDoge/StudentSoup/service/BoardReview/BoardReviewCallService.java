package ProjectDoge.StudentSoup.service.BoardReview;


import ProjectDoge.StudentSoup.commonmodule.ConstField;
import ProjectDoge.StudentSoup.dto.board.BoardReviewDto;
import ProjectDoge.StudentSoup.entity.board.BoardLike;
import ProjectDoge.StudentSoup.entity.board.BoardReview;
import ProjectDoge.StudentSoup.repository.boardreview.BoardReviewRepository;
import com.querydsl.jpa.impl.JPAQuery;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@RequiredArgsConstructor
@Service
public class BoardReviewCallService {
    private final BoardReviewRepository boardReviewRepository;

    public ConcurrentHashMap<String, Object> callBoardReview(Long memberId, Long boardId, Pageable pageable) {
        ConcurrentHashMap<String, Object> resultMap = new ConcurrentHashMap<String, Object>();

        List<BoardReview> boardReviewList = boardReviewRepository.findByBoardId(boardId, pageable);
        JPAQuery<Long> count = boardReviewRepository.pagingCountByBoardId(boardId);

        List<BoardReviewDto> boardReviewDtoList = checkBoardReviewLike(memberId, boardReviewList);
        Page<BoardReviewDto> pageBoardReviewDtoList = PageableExecutionUtils.getPage(boardReviewDtoList, pageable, count::fetchOne);


        List<BoardReview> bestReview = boardReviewRepository.findBestReview(boardId);
        List<BoardReviewDto> pageBoardReviewList = checkBoardReviewLike(memberId, bestReview);

        resultMap.put("boardReviewList", pageBoardReviewDtoList);
        resultMap.put("bestReviewList", pageBoardReviewList);

        return resultMap;
    }

    private List<BoardReviewDto> checkBoardReviewLike(Long memberId,
                                                      List<BoardReview> boardReviewList) {
        List<BoardReviewDto> boardReviewDtoList = new ArrayList<>();
        for (BoardReview boardReview : boardReviewList) {
            boardReviewDtoList.add(getBoardReviewLike(memberId, boardReview));
        }
        return boardReviewDtoList;
    }

    private BoardReviewDto getBoardReviewLike(Long memberId, BoardReview boardReview) {
        for (BoardLike boardLike : boardReview.getBoard().getBoardLikes()) {
            if (boardLike.getMember().getMemberId().equals(memberId))
                return new BoardReviewDto().createBoardReviewDto(boardReview, ConstField.LIKED);
        }
        return new BoardReviewDto().createBoardReviewDto(boardReview, ConstField.NOT_LIKED);
    }
}
