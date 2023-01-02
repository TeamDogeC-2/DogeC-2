package ProjectDoge.StudentSoup.exception.member;

public class MemberNotMatchIdPwd extends RuntimeException {
    public MemberNotMatchIdPwd() {
        super();
    }

    public MemberNotMatchIdPwd(String message) {
        super(message);
    }

    public MemberNotMatchIdPwd(String message, Throwable cause) {
        super(message, cause);
    }

    public MemberNotMatchIdPwd(Throwable cause) {
        super(cause);
    }

    protected MemberNotMatchIdPwd(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
