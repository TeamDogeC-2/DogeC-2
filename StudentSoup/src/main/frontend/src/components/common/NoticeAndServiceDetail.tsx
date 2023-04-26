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

const NoticeDetail = () => {
  const [postDetailInformation, setPostDetailInformation] = useState({
    content: '',
    nickname: '',
    title: '',
    writeDate: '',
    updateDate: '',
    boardCategory: '',
    reviewCount: 0,
  });
  const location = useLocation();
  const navigate = useNavigate();

  const boardCategory: {
    [key: string]: string;
    ANNOUNCEMENT: string;
    CUSTOMERSERVICE: string;
  } = { ANNOUNCEMENT: '공지사항', CUSTOMERSERVICE: '고객센터' };

  const api = () => {
    axiosInstance.post(`/board/${location.state.boardId}/${location.state.memberId}`).then(res => {
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

  const deletePost = () => {
    axiosInstance
      .delete(`/board/${location.state.boardId}/${location.state.memberId}`)
      .then(res => {
        console.log(res);
        navigate('');
      });
  };

  const handleClickBackButton = () => {
    navigate(-1);
  };

  const handleClickRemovePostButton = () => {
    console.log('remove');
    deletePost();
  };

  useEffect(() => {
    api();
    console.log(location);
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
                {boardCategory[postDetailInformation.boardCategory] === '고객센터' ? (
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
                <div className="board-notice-service-detail-bottom-function">
                  <span className="board-notice-service-detail-bottom-modify">수정</span>
                  <span className="board-notice-service-detail-bottom-report">신고</span>
                  {(location.state.memberClassification === 'ADMIN' ||
                    location.state.nickname === postDetailInformation.nickname) && (
                    <span
                      className="board-notice-service-detail-bottom-report"
                      onClick={handleClickRemovePostButton}
                    >
                      삭제
                    </span>
                  )}
                </div>
              </div>
              {boardCategory[postDetailInformation.boardCategory] === '고객센터' && (
                <>
                  <div className="board-notice-service-detail-bottom-review-write-div">
                    <div className="board-notice-service-detail-bottom-review-write">
                      <input type="text" placeholder="댓글을 입력해주세요." />
                      <button>작성</button>
                    </div>
                  </div>
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
                <div className="board-notice-service-detail-mobile-top-right">
                  <button className="board-notice-service-detail-mobile-write-div">
                    <img src={review_white} alt="" />
                    <p>글쓰기</p>
                  </button>
                </div>
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
            {location.state.memberCalssification === 'ADMIN' && (
              <div className="board-notice-service-detail-mobile-bottom-div">
                <div className="board-notice-service-detail-mobile-bottom-review-text">
                  <div className="board-notice-service-detail-mobile-bottom-review-count"></div>
                  <div className="board-notice-service-detail-mobile-bottom-function">
                    <span className="board-notice-service-detail-mobile-bottom-modify">수정</span>
                    <span className="board-notice-service-detail-mobile-bottom-modify">삭제</span>
                  </div>
                </div>
              </div>
            )}
            <div className="board-notice-service-detail-mobile-bottom-div">
              <div className="board-notice-service-detail-mobile-bottom-review-text">
                <div className="board-notice-service-detail-mobile-bottom-review-count">
                  {boardCategory[postDetailInformation.boardCategory] === '고객센터' && (
                    <p>{postDetailInformation.reviewCount}개의 댓글</p>
                  )}
                </div>
                <div className="board-notice-service-detail-mobile-bottom-function">
                  <span className="board-notice-service-detail-mobile-bottom-modify">수정</span>
                  <span className="board-notice-service-detail-mobile-bottom-report">신고</span>
                </div>
              </div>
              {boardCategory[postDetailInformation.boardCategory] === '고객센터' && (
                <>
                  <div className="board-notice-service-detail-mobile-bottom-review-write-div">
                    <div className="board-notice-service-detail-mobile-bottom-review-write">
                      <input type="text" placeholder="댓글을 입력해주세요." />
                      <button>작성</button>
                    </div>
                  </div>
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
