package ProjectDoge.StudentSoup.exception.boardreview;

public class BoardReviewContentOutOfRangeException extends RuntimeException {
    public BoardReviewContentOutOfRangeException() {
        super();
    }

    public BoardReviewContentOutOfRangeException(String message) {
        super(message);
    }

    public BoardReviewContentOutOfRangeException(String message, Throwable cause) {
        super(message, cause);
    }

    public BoardReviewContentOutOfRangeException(Throwable cause) {
        super(cause);
    }

    protected BoardReviewContentOutOfRangeException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
