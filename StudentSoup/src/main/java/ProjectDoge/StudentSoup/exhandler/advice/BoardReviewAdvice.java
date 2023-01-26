package ProjectDoge.StudentSoup.exhandler.advice;

import ProjectDoge.StudentSoup.exception.board.BoardReviewContentNullException;
import ProjectDoge.StudentSoup.exception.board.BoardReviewIdNotSentException;
import ProjectDoge.StudentSoup.exception.board.BoardReviewNotFoundException;
import ProjectDoge.StudentSoup.exhandler.ErrorResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class BoardReviewAdvice {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(BoardReviewContentNullException.class)
    public ErrorResult boardReviewContentNullException(BoardReviewContentNullException e){
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("BoardReviewContentNullException",e.getMessage());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(BoardReviewNotFoundException.class)
    public ErrorResult boardReviewNotFoundException(BoardReviewNotFoundException e){
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("BoardReviewNotFoundException",e.getMessage());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(BoardReviewIdNotSentException.class)
    public ErrorResult boardReviewIdNotSentException(BoardReviewIdNotSentException e){
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("BoardReviewIdNotSentException",e.getMessage());
    }

}
