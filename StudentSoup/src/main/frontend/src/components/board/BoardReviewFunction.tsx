/* eslint-disable @typescript-eslint/ban-types */
import { useState } from 'react';
import './boardReviewFunction.scss';
import Circle_human from '../../img/circle_human.png';
import axiosInstance from '../../apis/auth/AxiosInterceptor';

interface Props {
  review: any;
  memberId: number;
  nickname: string;
  getBoardId: number;
}

const BoardReviewFunction = ({ review, memberId, getBoardId, nickname }: Props) => {
  const [modifyClick, setModifyClick] = useState<boolean>(false);
  const [saveBoardReplyId, setSaveBoardReplyId] = useState<any>();
  const [contented, setContented] = useState<string>('');

  const handleReplySetContentValue = (e: any) => {
    setContented(e.target.value);
  };

  const handleEditClick = (e: any) => {
    setModifyClick(!modifyClick);
    setSaveBoardReplyId(e.target.id);

    axiosInstance
      .get(`/boardReply/${e.target.id}/${memberId}`)
      .then(res => {
        setContented(res.data.content);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleEditReply = (e: any) => {
    if (!contented.length) {
      alert('댓글을 입력해주세요.');
      return;
    }
    if (contented.length < 2 || contented.length > 500) {
      alert('댓글은 2자이상 500자 이하입니다.');
      return;
    }
    axiosInstance
      .patch(`/boardReply/${saveBoardReplyId}`, {
        boardReplyId: saveBoardReplyId,
        boardId: getBoardId,
        memberId,
        content: contented,
      })
      .then(res => {
        alert('성공적으로 수정하였습니다.');
        location.reload();
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleDeleteReply = (e: any) => {
    if (confirm('정말로 댓글을 삭제하시겟습니까?')) {
      axiosInstance
        .delete(`/boardReply/${e.target.id}/${memberId}`)
        .then(res => {
          alert('댓글이 삭제되었습니다.');
          location.reload();
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      /* empty */
    }
  };
  return (
    <div className="board-detail-bottom-review">
      <div className="board-detail-bottom-review-left">
        <div className="board-detail-bottom-review-left-top">
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
        {modifyClick ? (
          <div id={review.boardReplyId} className="board-detail-bottom-review-modify-content">
            <textarea
              maxLength={500}
              value={contented}
              onChange={e => handleReplySetContentValue(e)}
              placeholder="댓글을 입력해주세요."
            ></textarea>
            <button onClick={handleEditReply}>등록</button>
          </div>
        ) : (
          <p className="board-detail-bottom-review-content">{review.content}</p>
        )}
      </div>
      {nickname === review.nickname && (
        <div className="board-detail-function-div">
          <>
            {modifyClick ? (
              <span>
                <p
                  id={review.boardReplyId}
                  onClick={handleEditClick}
                  className="board-detail-modify-cancel"
                >
                  수정취소
                </p>
              </span>
            ) : (
              <span>
                <p
                  id={review.boardReplyId}
                  onClick={handleEditClick}
                  className="board-detail-modify"
                >
                  수정
                </p>
                |
                <p
                  id={review.boardReplyId}
                  onClick={handleDeleteReply}
                  className="board-detail-delete"
                >
                  삭제
                </p>
              </span>
            )}
          </>
        </div>
      )}
    </div>
  );
};

export default BoardReviewFunction;
