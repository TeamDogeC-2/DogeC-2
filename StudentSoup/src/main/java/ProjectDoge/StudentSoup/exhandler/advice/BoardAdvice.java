package ProjectDoge.StudentSoup.exhandler.advice;

import ProjectDoge.StudentSoup.exception.board.*;
import ProjectDoge.StudentSoup.exhandler.ErrorResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class BoardAdvice {
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(BoardNotFoundException.class)
    public ErrorResult BoardNotFoundHandler(BoardNotFoundException e){
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("BoardNotFound", e.getMessage());
    }
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(BoardIdNotSentException.class)
    public ErrorResult BoardIdNotSentHandler(BoardIdNotSentException e){
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("BoardIdNotSentException", e.getMessage());
    }
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(BoardSearchDataNotSentException.class)
    public  ErrorResult BoardIdNotSentException(BoardIdNotSentException e) {
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("BoardIdNotSentException", e.getMessage());
    }
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(BoardNotOwnMemberException.class)
    public ErrorResult BoardNotOwnMemberException(BoardNotOwnMemberException e){
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("BoardNotOwnMemberException",e.getMessage());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(BoardNotQualifiedException.class)
    public ErrorResult BoardNotQualifiedException(BoardNotQualifiedException e){
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("BoardNotQualifiedException",e.getMessage());
    }

}
