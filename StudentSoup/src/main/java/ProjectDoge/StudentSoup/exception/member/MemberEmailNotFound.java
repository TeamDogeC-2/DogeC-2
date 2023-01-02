package ProjectDoge.StudentSoup.exception.member;

public class MemberEmailNotFound extends RuntimeException {
    public MemberEmailNotFound() {
        super();
    }

    public MemberEmailNotFound(String message) {
        super(message);
    }

    public MemberEmailNotFound(String message, Throwable cause) {
        super(message, cause);
    }

    public MemberEmailNotFound(Throwable cause) {
        super(cause);
    }

    protected MemberEmailNotFound(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
