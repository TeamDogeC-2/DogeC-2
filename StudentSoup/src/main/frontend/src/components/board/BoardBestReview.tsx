import './boardBestReview.scss';
import Circle_human from '../../img/circle_human.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons';

const BoardBestReview = () => {
  return (
    <div className="board-detail-bottom-best-review-div">
      <div className="board-detail-bottom-best-review">
        <div className="board-detail-bottom-best-review-left">
          <img src={Circle_human} alt="" />
          <div className="board-detail-bottom-best-review-best-div">
            <span className="board-detail-bottom-best-text">BEST</span>
            <div className="board-detail-bottom-best-review-name-div">
              <span>
                유저네임 <p>작성날짜</p>
              </span>
              <p className="board-detail-bottom-best-review-content">댓글내용</p>
            </div>
          </div>
        </div>
        <div className="board-detail-bottom-best-review-right">
          <FontAwesomeIcon icon={faEllipsis} className="board-detail-function-icon" />
          <div className="board-detail-bottom-best-review-right-heart">
            <FontAwesomeIcon icon={faHeart} className="board-detail-function-heart-icon" />
            <p>14</p>
          </div>
        </div>
      </div>
      <div className="board-detail-underline" />
    </div>
  );
};

export default BoardBestReview;
