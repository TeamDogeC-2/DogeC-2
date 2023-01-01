package ProjectDoge.StudentSoup.exhandler.advice;

import ProjectDoge.StudentSoup.exception.member.MemberIdNotSentException;
import ProjectDoge.StudentSoup.exception.member.MemberNotFoundException;
import ProjectDoge.StudentSoup.exception.member.MemberNotSamePassword;
import ProjectDoge.StudentSoup.exception.member.MemberValidationException;
import ProjectDoge.StudentSoup.exhandler.ErrorResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class MemberAdvice {
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MemberNotFoundException.class)
    public ErrorResult memberNotFoundHandler(MemberNotFoundException e){
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("MemberNotFound", e.getMessage());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MemberValidationException.class)
    public ErrorResult memberValidationHandler(MemberValidationException e){
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("MemberValidation", e.getMessage());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MemberNotSamePassword.class)
    public ErrorResult memberCheckPasswordHandler(MemberNotSamePassword e){
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("MemberNotSamePassword", e.getMessage());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MemberIdNotSentException.class)
    public ErrorResult memberIdNotSentHandler(MemberIdNotSentException e){
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("MemberIdNotSent", e.getMessage());
    }
}
