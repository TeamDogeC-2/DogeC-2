import MainNavbar from '../common/MainNavbar';
import './boardDetail.scss';
import left from '../../img/left.svg';
import review_white from '../../img/review_white.svg';
import heart_white from '../../img/heart_white.svg';
import heart_border_white from '../../img/heart_border_white.svg';
import BoardBestReview from './BoardBestReview';
import BoardReview from './BoardReview';
import BoardReply from './BoardReply';
import { Desktop, Mobile } from '../../mediaQuery';
import { useEffect, useState } from 'react';
import axiosInstance from '../../apis/auth/AxiosInterceptor';
import { useLocation } from 'react-router-dom';
import { postUserInfo } from '../../apis/auth/BoardAPI';
import axios from 'axios';

const BoardDetail = () => {
  const [boardTitle, setBoardTitle] = useState<string>();
  const [boardNickname, setBoardNickname] = useState<string>();
  const [boardContent, setBoardContent] = useState<string>();
  const [boardreviewCount, setBoardreviewCount] = useState<number>();
  const [boardlikeCount, setBoardlikeCount] = useState<number>();
  const [boardLiked, isBoardLiked] = useState<boolean>();
  const [boardView, setBoardView] = useState<number>();
  const [boardDate, setBoardDate] = useState<any>();
  const [isCategory, setCategory] = useState<string>();
  const [viewCategory, setViewCategory] = useState<string>();
  const [reply, setReply] = useState<number>(0);
  const [like, isLike] = useState<boolean>();
  const [likeCount, setLikeCount] = useState<number>();
  const state = useLocation();

  const [boardReviewList, setBoardReviewList] = useState<any>([]);
  const [boardBestReviewList, setBoardBestReviewList] = useState<any>([]);

  const [replyContent, setReplyContent] = useState<string>();

  const getBoardId = 192;
  const memberId = state.state.value2;
  const nickname = state.state.value3;

  useEffect(() => {
    axiosInstance
      .post(`/board/${getBoardId}/${memberId}`)
      .then(res => {
        setBoardTitle(res.data.title);
        setBoardContent(res.data.content);
        setBoardNickname(res.data.nickname);
        setBoardDate(res.data.writeDate);
        setBoardView(res.data.view);
        setBoardreviewCount(res.data.reviewCount);
        setBoardlikeCount(res.data.likedCount);
        setCategory(res.data.boardCategory);
        isLike(res.data.like);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (isCategory === 'FREE') {
      setViewCategory('자유게시판');
    } else if (isCategory === 'CONSULTING') {
      setViewCategory('취업/상담게시판');
    } else if (isCategory === 'TIP') {
      setViewCategory('팁게시판');
    } else if (isCategory === 'ANNOUNCEMENT') {
      setViewCategory('공지사항');
    } else if (isCategory === 'EMPLOYMENT') {
      setViewCategory('취업/상담게시판');
    }
  });

  useEffect(() => {
    axiosInstance
      .get(`/boardReplies/${getBoardId}/${memberId}`)
      .then(res => {
        setBoardReviewList(res.data.boardReplyList);
        setBoardBestReviewList(res.data.bestReplyList);
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handleBoardLikeCount = () => {
    axiosInstance
      .post(`/board/${getBoardId}/${memberId}/like`)
      .then(res => {
        setLikeCount(res.data.data.likedCount);
        isLike(res.data.data.like);
      })
      .catch(err => {
        console.error(err);
      });
    isLike(!like);
    isBoardLiked(!boardLiked);
  };

  const handleReplyContent = (e: any) => {
    setReplyContent(e.target.value);
  };

  const handleSumbitReply = (e: any) => {
    if (!replyContent) {
      alert('댓글을 입력해주세요.');
      return;
    }
    if (replyContent.length < 2 || replyContent.length > 500) {
      alert('댓글은 2자이상 500자 이하입니다.');
      return;
    }
    axiosInstance
      .put('/boardReply', {
        boardId: getBoardId,
        memberId,
        content: replyContent,
        level: 0,
        seq: reply,
      })
      .then(res => {
        alert('성공적으로 댓글을 작성하였습니다.');
        location.reload();
      })
      .catch(err => {
        console.error(err);
      });
  };
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
                  <span>{viewCategory}</span>
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
                  <span>{boardTitle}</span>
                  <p>{boardreviewCount}</p>
                </div>
                <div className="board-detail-mid-title-info">
                  <p>
                    {boardNickname} | {boardDate} | {boardView} | {boardlikeCount}
                  </p>
                </div>
                <div className="board-detail-underline" />
              </div>
              <div className="board-detail-content-div">
                <div className="board-detail-content">{boardContent}</div>
                <div className="board-detail-like-button-div">
                  <button onClick={handleBoardLikeCount} className="board-detail-like-button">
                    {like ? (
                      <img src={heart_white} alt="" />
                    ) : (
                      <img src={heart_border_white} alt="" />
                    )}
                    <p>좋아요 {boardLiked ? likeCount : boardlikeCount}</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="board-detail-bottom-div">
              <div className="board-detail-bottom-review-text">
                <div className="board-detail-bottom-review-count">
                  <p>댓글 {boardreviewCount}개</p>
                </div>
                <div className="board-detail-bottom-function">
                  <span className="board-detail-bottom-modify">수정</span>
                  <span className="board-detail-bottom-report">신고</span>
                </div>
              </div>
              <div className="board-detail-bottom-review-write-div">
                <div className="board-detail-bottom-review-write">
                  <textarea
                    maxLength={500}
                    onChange={e => handleReplyContent(e)}
                    placeholder="댓글을 입력해주세요."
                  />
                  <button onClick={handleSumbitReply}>작성</button>
                </div>
              </div>
              {boardBestReviewList?.map((bestReview: any) => (
                <>
                  <BoardBestReview bestReview={bestReview} />
                </>
              ))}
              <BoardReview review={boardReviewList} nickname={nickname} />
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
                  <span>{viewCategory}</span>
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
                  <span>{boardTitle}</span>
                  <p>{boardreviewCount}</p>
                </div>
                <div className="board-detail-mobile-mid-title-info">
                  <p>
                    {boardNickname} | {boardDate} | {boardView} | {boardlikeCount}
                  </p>
                </div>
                <div className="board-detail-mobile-underline" />
              </div>
              <div className="board-detail-mobile-content-div">
                <div className="board-detail-mobile-content">{boardContent}</div>
                <div className="board-detail-mobile-like-button-div">
                  <button
                    onClick={handleBoardLikeCount}
                    className="board-detail-mobile-like-button"
                  >
                    {like ? (
                      <img src={heart_white} alt="" />
                    ) : (
                      <img src={heart_border_white} alt="" />
                    )}
                    <p>좋아요 {boardLiked ? likeCount : boardlikeCount}</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="board-detail-mobile-bottom-div">
              <div className="board-detail-mobile-bottom-review-text">
                <div className="board-detail-mobile-bottom-review-count">
                  <p>댓글 {boardreviewCount}개</p>
                </div>
                <div className="board-detail-mobile-bottom-function">
                  <span className="board-detail-mobile-bottom-modify">수정</span>
                  <span className="board-detail-mobile-bottom-report">신고</span>
                </div>
              </div>
              <div className="board-detail-mobile-bottom-review-write-div">
                <div className="board-detail-mobile-bottom-review-write">
                  <textarea
                    maxLength={500}
                    onChange={e => handleReplyContent(e)}
                    placeholder="댓글을 입력해주세요."
                  />
                  <button onClick={handleSumbitReply}>작성</button>
                </div>
              </div>
              {boardBestReviewList?.map((bestReview: any) => (
                <>
                  <BoardBestReview bestReview={bestReview} />
                </>
              ))}
              <BoardReview review={boardReviewList} nickname={nickname} />
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default BoardDetail;
