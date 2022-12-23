package ProjectDoge.StudentSoup.exception.member;

public class MemberNotSamePassword extends RuntimeException {
    public MemberNotSamePassword() {
        super();
    }

    public MemberNotSamePassword(String message) {
        super(message);
    }

    public MemberNotSamePassword(String message, Throwable cause) {
        super(message, cause);
    }

    public MemberNotSamePassword(Throwable cause) {
        super(cause);
    }

    protected MemberNotSamePassword(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
