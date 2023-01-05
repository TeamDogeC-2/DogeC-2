package ProjectDoge.StudentSoup.exception.restaurant;

public class RestaurantMenuNotSentException extends RuntimeException {

    public RestaurantMenuNotSentException() {
        super();
    }

    public RestaurantMenuNotSentException(String message) {
        super(message);
    }

    public RestaurantMenuNotSentException(String message, Throwable cause) {
        super(message, cause);
    }

    public RestaurantMenuNotSentException(Throwable cause) {
        super(cause);
    }

    protected RestaurantMenuNotSentException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);

    }
}
