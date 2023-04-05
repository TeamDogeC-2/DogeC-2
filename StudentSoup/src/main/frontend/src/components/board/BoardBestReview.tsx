import './boardBestReview.scss';
import Circle_human from '../../img/circle_human.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Desktop, Mobile } from '../../mediaQuery';

const BoardBestReview = () => {
  return (
    <>
      <Desktop>
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
      </Desktop>
      <Mobile>
        <div className="board-detail-mobile-bottom-best-review-div">
          <div className="board-detail-mobile-bottom-best-review">
            <div className="board-detail-mobile-bottom-best-review-left">
              <img src={Circle_human} alt="" />
              <div className="board-detail-mobile-bottom-best-review-best-div">
                <div className="board-detail-mobile-bottom-best-review-best-name-info">
                  <div className="board-detail-mobile-bottom-best-review-name-div">
                    <span className="board-detail-mobile-bottom-best-text">BEST</span>
                    <span>
                      유저네임 <p>작성날짜</p>
                    </span>
                  </div>
                  <p className="board-detail-mobile-bottom-best-review-content">
                    댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용
                  </p>
                </div>
                <div className="board-detail-mobile-bottom-best-review-right">
                  <FontAwesomeIcon
                    icon={faEllipsis}
                    className="board-detail-mobile-function-icon"
                  />
                  <div className="board-detail-mobile-bottom-best-review-right-heart">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="board-detail-mobile-function-heart-icon"
                    />
                    <p>14</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="board-detail-mobile-underline" />
        </div>
      </Mobile>
    </>
  );
};

export default BoardBestReview;
