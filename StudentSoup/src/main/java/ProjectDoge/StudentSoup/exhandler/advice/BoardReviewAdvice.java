package ProjectDoge.StudentSoup.exhandler.advice;

import ProjectDoge.StudentSoup.exception.board.BoardReviewContentNullException;
import ProjectDoge.StudentSoup.exception.board.BoardReviewIdNotSentException;
import ProjectDoge.StudentSoup.exception.board.BoardReviewNotFoundException;
import ProjectDoge.StudentSoup.exception.board.BoardReviewNotOwnException;
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
    public ErrorResult boardReviewContentNullHandler(BoardReviewContentNullException e){
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("BoardReviewContentNull",e.getMessage());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(BoardReviewNotFoundException.class)
    public ErrorResult boardReviewNotFoundHandler(BoardReviewNotFoundException e){
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("BoardReviewNotFound",e.getMessage());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(BoardReviewIdNotSentException.class)
    public ErrorResult boardReviewIdNotSentHandler(BoardReviewIdNotSentException e){
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("BoardReviewIdNotSent",e.getMessage());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(BoardReviewNotOwnException.class)
    public ErrorResult boardReviewNotOwnHandler(BoardReviewNotOwnException e){
        log.error("[exceptionHandle] ex", e);
        return new ErrorResult("BoardReviewNotOwn",e.getMessage());
    }

}
