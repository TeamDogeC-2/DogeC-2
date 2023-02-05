package ProjectDoge.StudentSoup.exception.boardreview;

public class BoardReviewNotFoundException extends RuntimeException{

    public BoardReviewNotFoundException() {
        super();
    }
    public BoardReviewNotFoundException(String message) {
        super(message);
    }

    public BoardReviewNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public BoardReviewNotFoundException(Throwable cause) {
        super(cause);
    }

    protected BoardReviewNotFoundException(String message, Throwable cause,
                                           boolean enableSuppression,
                                           boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
