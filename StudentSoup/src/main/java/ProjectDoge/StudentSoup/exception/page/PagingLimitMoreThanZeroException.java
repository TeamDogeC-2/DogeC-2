package ProjectDoge.StudentSoup.exception.page;

public class PagingLimitMoreThanZeroException extends RuntimeException {
    public PagingLimitMoreThanZeroException() {
        super();
    }

    public PagingLimitMoreThanZeroException(String message) {
        super(message);
    }

    public PagingLimitMoreThanZeroException(String message, Throwable cause) {
        super(message, cause);
    }

    public PagingLimitMoreThanZeroException(Throwable cause) {
        super(cause);
    }

    protected PagingLimitMoreThanZeroException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
