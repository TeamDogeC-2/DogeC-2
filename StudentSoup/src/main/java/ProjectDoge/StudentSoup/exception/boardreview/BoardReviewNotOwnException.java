package ProjectDoge.StudentSoup.exception.boardreview;

public class BoardReviewNotOwnException extends RuntimeException{

    public BoardReviewNotOwnException() {
        super();
    }

    public BoardReviewNotOwnException(String message) {
        super(message);
    }


    public BoardReviewNotOwnException(Throwable cause) {
        super(cause);
    }

    protected BoardReviewNotOwnException(String message, Throwable cause,
                                         boolean enableSuppression,
                                         boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
