package ProjectDoge.StudentSoup.repository.board;


import ProjectDoge.StudentSoup.dto.board.BoardMainDto;
import ProjectDoge.StudentSoup.entity.board.QBoard;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static ProjectDoge.StudentSoup.entity.board.QBoard.board;
import static ProjectDoge.StudentSoup.entity.school.QSchool.school;

@RequiredArgsConstructor
public class BoardRepositoryImpl implements BoardRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    @Override
    public List<BoardMainDto> findBySchoolId(Long schoolId){
        List<BoardMainDto> query= queryFactory.
                select(Projections.bean(BoardMainDto.class, board.id,
                        board.boardCategory,
                        board.title,
                        board.updateDate,
                        board.likedCount))
                .leftJoin(board.school,school)
                .fetchJoin()
                .where(board.school.id.eq(schoolId))
                .fetch();
    return query;
    }
}
