package ProjectDoge.StudentSoup.exception.boardreview;

public class BoardReplyIdNotSentException extends RuntimeException{
    public BoardReplyIdNotSentException() {
        super();
    }
    public BoardReplyIdNotSentException(String message) {
        super(message);
    }

    public BoardReplyIdNotSentException(String message, Throwable cause) {
        super(message, cause);
    }

    public BoardReplyIdNotSentException(Throwable cause) {
        super(cause);
    }

    protected BoardReplyIdNotSentException(String message, Throwable cause,
                                           boolean enableSuppression,
                                           boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
