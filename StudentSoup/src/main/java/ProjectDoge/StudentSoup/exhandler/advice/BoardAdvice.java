package ProjectDoge.StudentSoup.exhandler.advice;

import ProjectDoge.StudentSoup.exception.board.BoardIdNotSentException;
import ProjectDoge.StudentSoup.exception.department.DepartmentIdNotSentException;
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
    @ExceptionHandler(DepartmentIdNotSentException.class)
    public ErrorResult BoardIdNotSentHandler(BoardIdNotSentException e){
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("BoardIdNotSentException", e.getMessage());
    }
}
