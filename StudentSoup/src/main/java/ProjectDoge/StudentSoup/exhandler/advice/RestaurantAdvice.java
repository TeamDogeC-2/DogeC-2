package ProjectDoge.StudentSoup.exhandler.advice;

import ProjectDoge.StudentSoup.exception.member.MemberValidationException;
import ProjectDoge.StudentSoup.exception.restaurant.RestaurantMenuValidationException;
import ProjectDoge.StudentSoup.exception.restaurant.RestaurantNotFoundException;
import ProjectDoge.StudentSoup.exception.restaurant.RestaurantValidationException;
import ProjectDoge.StudentSoup.exhandler.ErrorResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class RestaurantAdvice {
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(RestaurantNotFoundException.class)
    public ErrorResult restaurantNotFoundHandler(RestaurantNotFoundException e){
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("RestaurantNotFound",e.getMessage());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(RestaurantValidationException.class)
    public ErrorResult restaurantValidationHandler(RestaurantValidationException e){
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("RestaurantValidation", e.getMessage());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(RestaurantMenuValidationException.class)
    public ErrorResult restaurantMenuValidationHandler(RestaurantMenuValidationException e){
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("RestaurantMenuValidation",e.getMessage());
    }

}
