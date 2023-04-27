import MainNavbar from './MainNavbar';
import './noticeandservicedetail.scss';
import left from '../../img/left.svg';
import review_white from '../../img/review_white.svg';
import { Desktop, Mobile } from '../../mediaQuery';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import axiosInstance from '../../apis/auth/AxiosInterceptor';
import BoardBestReview from '../board/BoardBestReview';
import BoardReview from '../board/BoardReview';
import BoardReply from '../board/BoardReply';
import Swal from 'sweetalert2';
import { postBoardDetail } from '../../apis/auth/BoardAPI';

const NoticeDetail = () => {
  const [postDetailInformation, setPostDetailInformation] = useState({
    content: '',
    nickname: '',
    title: '',
    writeDate: '',
    updateDate: '',
    boardCategory: '',
    reviewCount: null,
  });
  const location = useLocation();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);

  const boardCategory: {
    [key: string]: string;
    ANNOUNCEMENT: string;
    CUSTOMERSERVICE: string;
  } = { ANNOUNCEMENT: '공지사항', CUSTOMERSERVICE: '고객센터' };

  const api = () => {
    postBoardDetail(location.state.boardId, location.state.memberId).then(res => {
      setPostDetailInformation({
        content: res.data.content,
        nickname: res.data.nickname,
        title: res.data.title,
        writeDate: res.data.writeDate,
        updateDate: res.data.updateDate,
        boardCategory: res.data.boardCategory,
        reviewCount: res.data.reviewCount,
      });
    });
  };

  const handleClickBackButton = () => {
    navigate(-1);
  };

  useEffect(() => {
    api();
    if (window.localStorage.getItem('access-token')) {
      setIsLogin(true);
    }
  }, []);

  return (
    <>
      <Desktop>
        <div>
          <MainNavbar />
          <div className="board-notice-service-detail-main">
            <div className="board-notice-service-detail-top-div">
              <div className="board-notice-service-detail-top">
                <div className="board-notice-service-detail-top-left">
                  <img src={left} alt="" onClick={handleClickBackButton} />
                  <span>{boardCategory[postDetailInformation.boardCategory]}</span>
                </div>
                {boardCategory[postDetailInformation.boardCategory] === '고객센터' && isLogin ? (
                  <div className="board-notice-service-detail-top-right">
                    <button className="board-notice-service-detail-write-div">
                      <img src={review_white} alt="" />
                      <p>글쓰기</p>
                    </button>
                  </div>
                ) : (
                  location.state.memberClassification === 'ADMIN' && (
                    <div className="board-notice-service-detail-top-right">
                      <button className="board-notice-service-detail-write-div">
                        <img src={review_white} alt="" />
                        <p>글쓰기</p>
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="board-notice-service-detail-mid-div">
              <div className="board-notice-service-detail-mid-title-div">
                <div className="board-notice-service-detail-mid-title">
                  <span>{postDetailInformation.title}</span>
                </div>
                <div className="board-notice-service-detail-mid-title-info">
                  <p>
                    {postDetailInformation.nickname} | {postDetailInformation.writeDate}
                  </p>
                </div>
                <div className="board-notice-service-detail-underline" />
              </div>
              <div className="board-notice-service-detail-content-div">
                <div className="board-notice-service-detail-content">
                  {postDetailInformation.content}
                </div>
              </div>
            </div>
            <div className="board-notice-service-detail-bottom-div">
              <div className="board-notice-service-detail-bottom-review-text">
                <div className="board-notice-service-detail-bottom-review-count">
                  {boardCategory[postDetailInformation.boardCategory] === '고객센터' && (
                    <p>{postDetailInformation.reviewCount}개의 댓글</p>
                  )}
                </div>
              </div>
              {boardCategory[postDetailInformation.boardCategory] === '고객센터' && (
                <>
                  {isLogin && (
                    <div className="board-notice-service-detail-bottom-review-write-div">
                      <div className="board-notice-service-detail-bottom-review-write">
                        <input type="text" placeholder="댓글을 입력해주세요." />
                        <button>작성</button>
                      </div>
                    </div>
                  )}
                  <BoardBestReview />
                  <BoardReview />
                  <BoardReply />
                </>
              )}
            </div>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div>
          <MainNavbar />
          <div className="board-notice-service-detail-mobile-main">
            <div className="board-notice-service-detail-mobile-top-div">
              <div className="board-notice-service-detail-mobile-top">
                <div className="board-notice-service-detail-mobile-top-left">
                  <img src={left} alt="" onClick={handleClickBackButton} />
                  <span>{boardCategory[postDetailInformation.boardCategory]}</span>
                </div>
                {boardCategory[postDetailInformation.boardCategory] === '고객센터' && isLogin ? (
                  <div className="board-notice-service-detail-mobile-top-right">
                    <button className="board-notice-service-detail-mobile-write-div">
                      <img src={review_white} alt="" />
                      <p>글쓰기</p>
                    </button>
                  </div>
                ) : (
                  location.state.memberClassification === 'ADMIN' && (
                    <div className="board-notice-service-detail-mobile-top-right">
                      <button className="board-notice-service-detail-mobile-write-div">
                        <img src={review_white} alt="" />
                        <p>글쓰기</p>
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="board-notice-service-detail-mobile-mid-div">
              <div className="board-notice-service-detail-mobile-mid-title-div">
                <div className="board-notice-service-detail-mobile-mid-title">
                  <span>{postDetailInformation.title}</span>
                </div>
                <div className="board-notice-service-detail-mobile-mid-title-info">
                  <p>
                    {postDetailInformation.nickname} | {postDetailInformation.writeDate}
                  </p>
                </div>
                <div className="board-notice-service-detail-mobile-underline" />
              </div>
              <div className="board-notice-service-detail-mobile-content-div">
                <div className="board-notice-service-detail-mobile-content">
                  {postDetailInformation.content}
                </div>
              </div>
            </div>
            <div className="board-notice-service-detail-mobile-bottom-div">
              <div className="board-notice-service-detail-mobile-bottom-review-text">
                <div className="board-notice-service-detail-mobile-bottom-review-count">
                  {boardCategory[postDetailInformation.boardCategory] === '고객센터' && (
                    <p>{postDetailInformation.reviewCount}개의 댓글</p>
                  )}
                </div>
              </div>
              {boardCategory[postDetailInformation.boardCategory] === '고객센터' && (
                <>
                  {isLogin && (
                    <div className="board-notice-service-detail-mobile-bottom-review-write-div">
                      <div className="board-notice-service-detail-mobile-bottom-review-write">
                        <input type="text" placeholder="댓글을 입력해주세요." />
                        <button>작성</button>
                      </div>
                    </div>
                  )}
                  <BoardBestReview />
                  <BoardReview />
                  <BoardReply />
                </>
              )}
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default NoticeDetail;
