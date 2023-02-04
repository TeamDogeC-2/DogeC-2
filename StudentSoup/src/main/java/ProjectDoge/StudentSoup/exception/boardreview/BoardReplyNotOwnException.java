package ProjectDoge.StudentSoup.exception.boardreview;

public class BoardReplyNotOwnException extends RuntimeException{

    public BoardReplyNotOwnException() {
        super();
    }

    public BoardReplyNotOwnException(String message) {
        super(message);
    }


    public BoardReplyNotOwnException(Throwable cause) {
        super(cause);
    }

    protected BoardReplyNotOwnException(String message, Throwable cause,
                                        boolean enableSuppression,
                                        boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
