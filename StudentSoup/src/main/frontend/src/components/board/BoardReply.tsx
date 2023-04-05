import './boardReply.scss';
import Circle_human from '../../img/circle_human.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faHeart, faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';

const BoardReply = () => {
  return (
    <div className="board-detail-bottom-reply-div">
      <div className="board-detail-bottom-reply">
        <div className="board-detail-bottom-reply-left">
          <FontAwesomeIcon icon={faArrowTurnUp} className="board-detail-reply-icon" />
          <img src={Circle_human} alt="" />
          <div className="board-detail-bottom-reply-top-div">
            <div className="board-detail-bottom-reply-name-div">
              <span>
                유저네임 <p>작성날짜</p>
              </span>
              <p className="board-detail-bottom-reply-content">댓글내용</p>
            </div>
          </div>
        </div>
        <div className="board-detail-bottom-reply-right">
          <FontAwesomeIcon icon={faEllipsis} className="board-detail-reply-function-icon" />
          <div className="board-detail-bottom-reply-right-heart">
            <FontAwesomeIcon icon={faHeart} className="board-detail-reply-function-heart-icon" />
            <p>14</p>
          </div>
        </div>
      </div>
      <div className="board-detail-underline" />
    </div>
  );
};

export default BoardReply;
