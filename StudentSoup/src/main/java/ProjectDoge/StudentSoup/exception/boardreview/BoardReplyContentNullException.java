package ProjectDoge.StudentSoup.exception.boardreview;

public class BoardReplyContentNullException extends RuntimeException{
    public BoardReplyContentNullException() { super(); }

    public BoardReplyContentNullException(String message) {
        super(message);
    }

    public BoardReplyContentNullException(String message, Throwable cause) {
        super(message, cause);
    }

    public BoardReplyContentNullException(Throwable cause) {
        super(cause);
    }

    protected BoardReplyContentNullException(String message, Throwable cause,
                                             boolean enableSuppression,
                                             boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
