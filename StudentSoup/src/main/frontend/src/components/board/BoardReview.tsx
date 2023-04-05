import './boardReview.scss';
import Circle_human from '../../img/circle_human.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons';

const BoardReview = () => {
  return (
    <div className="board-detail-bottom-review-div">
      <div className="board-detail-bottom-review">
        <div className="board-detail-bottom-review-left">
          <img src={Circle_human} alt="" />
          <div className="board-detail-bottom-review-top-div">
            <div className="board-detail-bottom-review-name-div">
              <span>
                유저네임 <p>작성날짜</p>
              </span>
              <p className="board-detail-bottom-review-content">댓글내용</p>
            </div>
          </div>
        </div>
        <div className="board-detail-bottom-review-right">
          <FontAwesomeIcon icon={faEllipsis} className="board-detail-function-icon" />
          <div className="board-detail-bottom-review-right-heart">
            <FontAwesomeIcon icon={faHeart} className="board-detail-function-heart-icon" />
            <p>14</p>
          </div>
        </div>
      </div>
      <div className="board-detail-underline" />
    </div>
  );
};

export default BoardReview;
