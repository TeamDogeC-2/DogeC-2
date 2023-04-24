/* eslint-disable @typescript-eslint/ban-types */
import { useState } from 'react';
import './boardReviewFunction.scss';
import Circle_human from '../../img/circle_human.png';

interface Props {
  review: any;
  memberId: number;
  isEditClick: Function;
  nickname: string;
}

const BoardReviewFunction = ({ review, memberId, isEditClick, nickname }: Props) => {
  const [modifyClick, setModifyClick] = useState<boolean>(false);
  const [saveBoardId, setSaveBoardId] = useState<any>();
  const [contented, setContented] = useState<string>('');

  const handleEditClick = (e: any) => {
    isEditClick(!modifyClick);
    setModifyClick(!modifyClick);
    setSaveBoardId(e.target.id);

    // axiosInstance
    //   .get(`/boardReply/${e.target.id}/${memberId}`)
    //   .then(res => {
    //     setContented(res.data.content);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
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
            <textarea maxLength={500} placeholder="댓글을 입력해주세요."></textarea>
            <button>등록</button>
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
                |<p className="board-detail-delete">삭제</p>
              </span>
            )}
          </>
        </div>
      )}
    </div>
  );
};

export default BoardReviewFunction;
