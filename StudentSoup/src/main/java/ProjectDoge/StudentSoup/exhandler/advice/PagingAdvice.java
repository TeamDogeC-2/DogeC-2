package ProjectDoge.StudentSoup.exhandler.advice;

import ProjectDoge.StudentSoup.exception.member.MemberNotFoundException;
import ProjectDoge.StudentSoup.exception.page.PagingLimitMoreThanZeroException;
import ProjectDoge.StudentSoup.exhandler.ErrorResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class PagingAdvice {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(PagingLimitMoreThanZeroException.class)
    public ErrorResult PagingLimitHandler(PagingLimitMoreThanZeroException e){
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("PagingLimitMoreThanZero", e.getMessage());
    }
}
