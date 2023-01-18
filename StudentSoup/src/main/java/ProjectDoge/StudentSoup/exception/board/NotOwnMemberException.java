package ProjectDoge.StudentSoup.exception.board;

public class NotOwnMemberException extends RuntimeException {

    public NotOwnMemberException() {
        super();
    }

    public NotOwnMemberException(String message) {
        super(message);
    }

    public NotOwnMemberException(String message, Throwable cause) {
        super(message, cause);
    }

    public NotOwnMemberException(Throwable cause) {
        super(cause);
    }

    protected NotOwnMemberException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
