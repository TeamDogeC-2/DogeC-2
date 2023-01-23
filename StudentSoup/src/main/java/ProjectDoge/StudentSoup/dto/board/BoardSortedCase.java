package ProjectDoge.StudentSoup.dto.board;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum BoardSortedCase {
    NORMAL(0),

    LIKED(1),

    MORETHANFIVELIKED(2),

    REVIEW(3),

    VIEW(4);

    private final int value;
}
