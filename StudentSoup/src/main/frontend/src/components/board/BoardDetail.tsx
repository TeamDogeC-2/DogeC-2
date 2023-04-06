import MainNavbar from '../common/MainNavbar';
import './boardDetail.scss';
import left from '../../img/left.svg';
import review_white from '../../img/review_white.svg';
import heart_white from '../../img/heart_white.svg';
import BoardBestReview from './BoardBestReview';
import BoardReview from './BoardReview';
import BoardReply from './BoardReply';
import { Desktop, Mobile } from '../../mediaQuery';

const BoardDetail = () => {
  return (
    <>
      <Desktop>
        <div>
          <MainNavbar />
          <div className="board-detail-main">
            <div className="board-detail-top-div">
              <div className="board-detail-top">
                <div className="board-detail-top-left">
                  <img src={left} alt="" />
                  <span>게시판 이름</span>
                </div>
                <div className="board-detail-top-right">
                  <button className="board-detail-write-div">
                    <img src={review_white} alt="" />
                    <p>글쓰기</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="board-detail-mid-div">
              <div className="board-detail-mid-title-div">
                <div className="board-detail-mid-title">
                  <span>제목</span>
                  <p>0</p>
                </div>
                <div className="board-detail-mid-title-info">
                  <p>작성자 | 작성일 | 조회수 | 좋아요</p>
                </div>
                <div className="board-detail-underline" />
              </div>
              <div className="board-detail-content-div">
                <div className="board-detail-content">글 내용</div>
                <div className="board-detail-like-button-div">
                  <button className="board-detail-like-button">
                    <img src={heart_white} alt="" />
                    <p>좋아요 20</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="board-detail-bottom-div">
              <div className="board-detail-bottom-review-text">
                <div className="board-detail-bottom-review-count">
                  <p>댓글 수</p>
                </div>
                <div className="board-detail-bottom-function">
                  <span className="board-detail-bottom-modify">수정</span>
                  <span className="board-detail-bottom-report">신고</span>
                </div>
              </div>
              <div className="board-detail-bottom-review-write-div">
                <div className="board-detail-bottom-review-write">
                  <input type="text" placeholder="댓글을 입력해주세요." />
                  <button>작성</button>
                </div>
              </div>
              <BoardBestReview />
              <BoardReview />
              <BoardReply />
            </div>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div>
          <MainNavbar />
          <div className="board-detail-mobile-main">
            <div className="board-detail-mobile-top-div">
              <div className="board-detail-mobile-top">
                <div className="board-detail-mobile-top-left">
                  <img src={left} alt="" />
                  <span>게시판 이름</span>
                </div>
                <div className="board-detail-mobile-top-right">
                  <button className="board-detail-mobile-write-div">
                    <img src={review_white} alt="" />
                    <p>글쓰기</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="board-detail-mobile-mid-div">
              <div className="board-detail-mobile-mid-title-div">
                <div className="board-detail-mobile-mid-title">
                  <span>제목</span>
                  <p>0</p>
                </div>
                <div className="board-detail-mobile-mid-title-info">
                  <p>작성자 | 작성일 | 조회수 | 좋아요</p>
                </div>
                <div className="board-detail-mobile-underline" />
              </div>
              <div className="board-detail-mobile-content-div">
                <div className="board-detail-mobile-content">글 내용</div>
                <div className="board-detail-mobile-like-button-div">
                  <button className="board-detail-mobile-like-button">
                    <img src={heart_white} alt="" />
                    <div className='board-detail-mobile-like-div'>
                      <p>좋아요</p>
                      <p>20</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="board-detail-mobile-bottom-div">
              <div className="board-detail-mobile-bottom-review-text">
                <div className="board-detail-mobile-bottom-review-count">
                  <p>댓글 수</p>
                </div>
                <div className="board-detail-mobile-bottom-function">
                  <span className="board-detail-mobile-bottom-modify">수정</span>
                  <span className="board-detail-mobile-bottom-report">신고</span>
                </div>
              </div>
              <div className="board-detail-mobile-bottom-review-write-div">
                <div className="board-detail-mobile-bottom-review-write">
                  <input type="text" placeholder="댓글을 입력해주세요." />
                  <button>작성</button>
                </div>
              </div>
              <BoardBestReview />
              <BoardReview />
              <BoardReply />
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default BoardDetail;
