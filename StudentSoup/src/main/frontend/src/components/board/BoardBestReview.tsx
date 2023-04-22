import './boardBestReview.scss';
import Circle_human from '../../img/circle_human.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Desktop, Mobile } from '../../mediaQuery';

interface Props {
  bestReview: any;
}

const BoardBestReview = ({ bestReview }: Props) => {
  console.log(bestReview);
  return (
    <>
      <Desktop>
        <div id={bestReview.boardReplyId} className="board-detail-bottom-best-review-div">
          <div className="board-detail-bottom-best-review">
            <div className="board-detail-bottom-best-review-left">
              <div className="board-detail-bottom-best-review-left-top">
                <img src={Circle_human} alt="" />
                <span className="board-detail-bottom-best-text">BEST</span>
                <span>
                  {bestReview.nickname} <p>{bestReview.writeDate}</p>
                </span>
              </div>
              <p className="board-detail-bottom-best-review-content">{bestReview.content}</p>
            </div>
            <FontAwesomeIcon icon={faEllipsis} className="board-detail-function-icon" />
          </div>
          <div className="board-detail-bottom-best-review-best-div">
            <div className="board-detail-bottom-best-review-right-heart">
              <FontAwesomeIcon icon={faHeart} className="board-detail-function-heart-icon" />
              <p>{bestReview.likeCount}</p>
            </div>
          </div>
          <div className="board-detail-underline" />
        </div>
      </Desktop>
      <Mobile>
        <div className="board-detail-mobile-bottom-best-review-div">
          <div className="board-detail-mobile-bottom-best-review">
            <div className="board-detail-mobile-bottom-best-review-left">
              <div className="board-detail-mobile-bottom-best-review-left-top">
                <img src={Circle_human} alt="" />
                <span className="board-detail-mobile-bottom-best-text">BEST</span>
                <span>
                  유저네임 <p>작성날짜</p>
                </span>
              </div>
              <p className="board-detail-mobile-bottom-best-review-content">댓글 내용</p>
            </div>
            <FontAwesomeIcon icon={faEllipsis} className="board-detail-mobile-function-icon" />
          </div>
          <div className="board-detail-mobile-bottom-best-review-best-div">
            <div className="board-detail-mobile-bottom-best-review-right-heart">
              <FontAwesomeIcon icon={faHeart} className="board-detail-mobile-function-heart-icon" />
              <p>14</p>
            </div>
          </div>
          <div className="board-detail-mobile-underline" />
        </div>
      </Mobile>
    </>
  );
};

export default BoardBestReview;
