package ProjectDoge.StudentSoup.exception.school;

public class NotFoundSchoolException extends RuntimeException {
    public NotFoundSchoolException() {
        super();
    }

    public NotFoundSchoolException(String message) {
        super(message);
    }

    public NotFoundSchoolException(String message, Throwable cause) {
        super(message, cause);
    }

    public NotFoundSchoolException(Throwable cause) {
        super(cause);
    }

    protected NotFoundSchoolException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
