package ProjectDoge.StudentSoup.exception.boardreview;

public class BoardReviewIdNotSentException extends RuntimeException{
    public BoardReviewIdNotSentException() {
        super();
    }
    public BoardReviewIdNotSentException(String message) {
        super(message);
    }

    public BoardReviewIdNotSentException(String message, Throwable cause) {
        super(message, cause);
    }

    public BoardReviewIdNotSentException(Throwable cause) {
        super(cause);
    }

    protected BoardReviewIdNotSentException(String message, Throwable cause,
                                            boolean enableSuppression,
                                            boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
