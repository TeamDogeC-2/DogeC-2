import './boardReply.scss';
import Circle_human from '../../img/circle_human.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faHeart, faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';
import { Desktop, Mobile } from '../../mediaQuery';

const BoardReply = () => {
  return (
    <>
      <Desktop>
        <div className="board-detail-bottom-reply-div">
          <div className="board-detail-bottom-reply">
            <div className="board-detail-bottom-reply-left">
              <div className="board-detail-bottom-reply-left-top">
                <FontAwesomeIcon icon={faArrowTurnUp} className="board-detail-reply-icon" />
                <img src={Circle_human} alt="" />
                <span>
                  유저네임 <p>작성날짜</p>
                </span>
              </div>
              <p className="board-detail-bottom-reply-content">댓글내용</p>
            </div>
            <FontAwesomeIcon icon={faEllipsis} className="board-detail-reply-function-icon" />
          </div>
          <div className="board-detail-bottom-reply-right">
            <div className="board-detail-bottom-reply-right-heart">
              <FontAwesomeIcon icon={faHeart} className="board-detail-reply-function-heart-icon" />
              <p>14</p>
            </div>
          </div>
          <div className="board-detail-underline" />
        </div>
      </Desktop>
      <Mobile>
        <div className="board-detail-mobile-bottom-reply-div">
          <div className="board-detail-mobile-bottom-reply">
            <div className="board-detail-mobile-bottom-reply-left">
              <div className="board-detail-mobile-bottom-reply-left-top">
                <FontAwesomeIcon icon={faArrowTurnUp} className="board-detail-mobile-reply-icon" />
                <img src={Circle_human} alt="" />
                <span>
                  유저네임 <p>작성날짜</p>
                </span>
              </div>
              <p className="board-detail-mobile-bottom-reply-content">댓글내용</p>
            </div>
            <FontAwesomeIcon
              icon={faEllipsis}
              className="board-detail-mobile-reply-function-icon"
            />
          </div>
          <div className="board-detail-mobile-bottom-reply-right">
            <div className="board-detail-mobile-bottom-reply-right-heart">
              <FontAwesomeIcon
                icon={faHeart}
                className="board-detail-mobile-reply-function-heart-icon"
              />
              <p>14</p>
            </div>
          </div>
          <div className="board-detail-underline" />
        </div>
      </Mobile>
    </>
  );
};

export default BoardReply;
