package ProjectDoge.StudentSoup.exception.boardreview;

public class BoardReviewContentNullException extends RuntimeException{
    public BoardReviewContentNullException() { super(); }

    public BoardReviewContentNullException(String message) {
        super(message);
    }

    public BoardReviewContentNullException(String message, Throwable cause) {
        super(message, cause);
    }

    public BoardReviewContentNullException(Throwable cause) {
        super(cause);
    }

    protected BoardReviewContentNullException(String message, Throwable cause,
                                              boolean enableSuppression,
                                              boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
