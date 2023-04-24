import './boardReview.scss';
import Circle_human from '../../img/circle_human.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Desktop, Mobile } from '../../mediaQuery';
import BoardReply from './BoardReply';
import { useState } from 'react';
import axios from 'axios';
import axiosInstance from '../../apis/auth/AxiosInterceptor';
import BoardReviewFunction from './BoardReviewFunction';

interface Props {
  review: any;
  memberId: number;
  nickname: string;
  getBoardId: number;
}

const BoardReview = ({ review, memberId, getBoardId, nickname }: Props) => {
  return (
    <>
      <Desktop>
        {review.map((review: any) => (
          <>
            <div id={review.boardReplyId} className="board-detail-bottom-review-div">
              <BoardReviewFunction
                review={review}
                memberId={memberId}
                nickname={nickname}
                getBoardId={getBoardId}
              />
              <div className="board-detail-bottom-review-right">
                <div className="board-detail-bottom-review-right-heart">
                  <FontAwesomeIcon icon={faHeart} className="board-detail-function-heart-icon" />
                  <p>{review.likeCount}</p>
                </div>
              </div>
              <div className="board-detail-underline" />
              {review.boardNestedReplyDtoList.length !== 0 && (
                <BoardReply reply={review.boardNestedReplyDtoList} />
              )}
            </div>
          </>
        ))}
      </Desktop>
      <Mobile>
        {review.map((review: any) => (
          <>
            <div id={review.boardReplyId} className="board-detail-mobile-bottom-review-div">
              <div className="board-detail-mobile-bottom-review">
                <div className="board-detail-mobile-bottom-review-left">
                  <div className="board-detail-mobile-bottom-review-left-top">
                    <img
                      src={
                        review.memberProfileImageName
                          ? `/image/${review.memberProfileImageName}`
                          : Circle_human
                      }
                      alt=""
                    />
                    <span>
                      {review.nickname} <p>{review.writeDate}</p>
                    </span>
                  </div>
                  <p className="board-detail-mobile-bottom-review-content">{review.content}</p>
                </div>
                <FontAwesomeIcon icon={faEllipsis} className="board-detail-mobile-function-icon" />
              </div>
              <div className="board-detail-mobile-bottom-review-right">
                <div className="board-detail-mobile-bottom-review-right-heart">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="board-detail-mobile-function-heart-icon"
                  />
                  <p>{review.likeCount}</p>
                </div>
              </div>
              <div className="board-detail-mobile-underline" />
              {review.boardNestedReplyDtoList.length !== 0 && (
                <BoardReply reply={review.boardNestedReplyDtoList} />
              )}
            </div>
          </>
        ))}
      </Mobile>
    </>
  );
};

export default BoardReview;
