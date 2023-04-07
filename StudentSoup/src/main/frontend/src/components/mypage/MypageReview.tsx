import React, { useEffect, useState } from 'react';
import { DesktopHeader, MobileHeader, Mobile } from '../../mediaQuery';
import { ReactComponent as MypageReviewStar } from '../../img/mypageallReviewStar.svg';
import EditReviewModal from './components/EditReviewModal';
import { PreViewReview, type PreviewReviewResponse } from './data/MypageContents';
import RatingStars from './components/RatingStars';
import MyPagination from './components/MyPagination';
import './mypageReview.scss';
interface propTypes {
  memberId: number | undefined;
}
const MypageReview = (props: propTypes) => {
  const [currentpage, setCurrentpage] = useState(1);
  const [count, setCount] = useState(3);
  const [postPerPage, setPostPerPage] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalFadingOut, setIsModalFadingOut] = useState(false);
  const [selectedOption, setSelectedOption] = useState('all');
  const [reivewList, setReviewList] = useState<PreviewReviewResponse>();
  const [selectedReview, setSelectedReview] = useState({ starLiked: 0, content: '' });
  const [reviewcurrentPage, setReviewCurrentpage] = useState(1);
  const [reviewpostPerPage, setReviewPostPerPage] = useState(6);
  const handlePageChange = (e: any) => {
    setCurrentpage(e);
  };
  useEffect(() => {
    if (isModalFadingOut) {
      const timer = setTimeout(() => {
        setIsModalVisible(false);
        setIsModalFadingOut(false);
      }, 300); // 300ms는 애니메이션 시간과 같아야 함
      return () => clearTimeout(timer);
    }
  }, [isModalFadingOut]);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  const handleReplyPageChange = (e: any) => {
    setReviewCurrentpage(e);
  };
  useEffect(() => {
    if (props?.memberId) {
      PreViewReview(props.memberId, '', reviewcurrentPage - 1, 3)
        .then(res => {
          setReviewList(res);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [reviewcurrentPage]);
  return (
    <>
      <DesktopHeader>
        <div className="mypagereview-maincontainer">
          <div className="mypagereview-reviewselect">
            <h2 className="mypagereview-reviewname">리뷰</h2>
            <select className="mypagereview-select" value={selectedOption} onChange={handleChange}>
              <option value="all">전체</option>
              <option value="today">오늘</option>
              <option value="month">한달</option>
              <option value="halfYear">6개월</option>
              <option value="year">1년</option>
            </select>
          </div>
          <div className="mypagereview-startline"></div>
          {reivewList?.content?.map(review => (
            <>
              <div className="mypagereview-container">
                <div className="mypagereview-grid-name">음식점 이름</div>
                {review.imageName !== null ? (
                  <img src={`/image/${review.imageName}`} className="mypagereview-grid-image" />
                ) : (
                  <div className="mypagereview-grid-image"></div>
                )}

                <div className="mypagereview-grid-score">
                  평점
                  <span>
                    <RatingStars rating={review.starLiked} width="17px" height="16px" />
                  </span>
                </div>
                <div className="mypagereview-grid-date">{review.writeDate}</div>
                <div className="mypagereview-grid-contents">{review.content}</div>
                <button
                  className="mypagereview-grid-edit"
                  onClick={() => {
                    setSelectedReview({ starLiked: review.starLiked, content: review.content });
                    setIsModalVisible(true);
                  }}
                >
                  수정하기
                </button>
              </div>
              <div className="mypagereview-bottomline"></div>
            </>
          ))}
          {reivewList?.totalElements !== undefined && (
            <MyPagination
              currentPage={reviewcurrentPage}
              itemsCount={reivewList.totalElements}
              itemsPerPage={reviewpostPerPage}
              onChange={handleReplyPageChange}
            />
          )}
          {isModalVisible && (
            <div
              className={`mypagereview-modal-container ${
                isModalFadingOut ? 'mypagereview-modal-fadeOut' : 'mypagereview-modal-animation'
              }`}
            >
              <div
                className="mypagereview-modal-overlay"
                onClick={() => setIsModalFadingOut(true)}
              />
              <EditReviewModal
                onSubmit={(rating, content) => {
                  // 수정 완료시 처리할 로직 구현
                  setIsModalFadingOut(true);
                }}
                onCancel={() => setIsModalFadingOut(true)}
                currentRating={selectedReview.starLiked} // 별점 api
                currentContent={selectedReview.content} // 리뷰 내용 api
              />
            </div>
          )}
        </div>
      </DesktopHeader>
      <MobileHeader>
        <div className="tablet-mypagereview-maincontainer">
          <div className="tablet-mypagereview-reviewselect">
            <h2 className="tablet-mypagereview-reviewname">리뷰</h2>
            <select
              className="tablet-mypagereview-select"
              value={selectedOption}
              onChange={handleChange}
            >
              <option value="all">전체</option>
              <option value="today">오늘</option>
              <option value="month">한달</option>
              <option value="halfYear">6개월</option>
              <option value="year">1년</option>
            </select>
          </div>
          <div className="tablet-mypagereview-startline"></div>
          {reivewList?.content?.map(review => (
            <>
              <div className="tablet-mypagereview-container">
                <div className="tablet-mypagereview-grid-name">음식점 이름</div>
                {review.imageName !== null ? (
                  <img
                    src={`/image/${review.imageName}`}
                    className="tablet-mypagereview-grid-image"
                  />
                ) : (
                  <div className="tablet-mypagereview-grid-image"></div>
                )}

                <div className="tablet-mypagereview-grid-score">
                  평점
                  <span>
                    <RatingStars rating={review.starLiked} width="17px" height="16px" />
                  </span>
                </div>
                <div className="tablet-mypagereview-grid-date">{review.writeDate}</div>
                <div className="tablet-mypagereview-grid-contents">{review.content}</div>
                <button
                  className="tablet-mypagereview-grid-edit"
                  onClick={() => {
                    setSelectedReview({ starLiked: review.starLiked, content: review.content });
                    setIsModalVisible(true);
                  }}
                >
                  수정하기
                </button>
              </div>
              <div className="tablet-mypagereview-bottomline"></div>
            </>
          ))}
          {reivewList?.totalElements !== undefined && (
            <MyPagination
              currentPage={reviewcurrentPage}
              itemsCount={reivewList.totalElements}
              itemsPerPage={reviewpostPerPage}
              onChange={handleReplyPageChange}
            />
          )}
          {isModalVisible && (
            <div
              className={`mypagereview-modal-container ${
                isModalFadingOut ? 'mypagereview-modal-fadeOut' : 'mypagereview-modal-animation'
              }`}
            >
              <div
                className="mypagereview-modal-overlay"
                onClick={() => setIsModalFadingOut(true)}
              />
              <EditReviewModal
                onSubmit={(rating, content) => {
                  // 수정 완료시 처리할 로직 구현
                  setIsModalFadingOut(true);
                }}
                onCancel={() => setIsModalFadingOut(true)}
                currentRating={selectedReview.starLiked} // 별점 api
                currentContent={selectedReview.content} // 리뷰 내용 api
              />
            </div>
          )}
        </div>
      </MobileHeader>
      <Mobile>
        <div className="mobile-mypagereview-maincontainer">
          <div className="mobile-mypagereview-reviewselect">
            <h2 className="mobile-mypagereview-reviewname">리뷰</h2>
            <select
              className="mobile-mypagereview-select"
              value={selectedOption}
              onChange={handleChange}
            >
              <option value="all">전체</option>
              <option value="today">오늘</option>
              <option value="month">한달</option>
              <option value="halfYear">6개월</option>
              <option value="year">1년</option>
            </select>
          </div>
          <div className="mobile-mypagereview-startline"></div>
          {reivewList?.content?.map(review => (
            <>
              <div className="mobile-mypagereview-container">
                <div className="mobile-mypagereview-grid-name">음식점 이름</div>
                {review.imageName !== null ? (
                  <img
                    src={`/image/${review.imageName}`}
                    className="mobile-mypagereview-grid-image"
                  />
                ) : (
                  <div className="mobile-mypagereview-grid-image"></div>
                )}

                <div className="mobile-mypagereview-grid-score">
                  평점
                  <span>
                    <RatingStars rating={review.starLiked} width="17px" height="16px" />
                  </span>
                </div>
                <div className="mobile-mypagereview-grid-date">{review.writeDate}</div>
                <div className="mobile-mypagereview-grid-contents">{review.content}</div>
                <button
                  className="mobile-mypagereview-grid-edit"
                  onClick={() => {
                    setSelectedReview({ starLiked: review.starLiked, content: review.content });
                    setIsModalVisible(true);
                  }}
                >
                  수정하기
                </button>
              </div>
              <div className="mobile-mypagereview-bottomline"></div>
            </>
          ))}
          {isModalVisible && (
            <div
              className={`mypagereview-modal-container ${
                isModalFadingOut ? 'mypagereview-modal-fadeOut' : 'mypagereview-modal-animation'
              }`}
            >
              <div
                className="mypagereview-modal-overlay"
                onClick={() => setIsModalFadingOut(true)}
              />
              <EditReviewModal
                onSubmit={(rating, content) => {
                  // 수정 완료시 처리할 로직 구현
                  setIsModalFadingOut(true);
                }}
                onCancel={() => setIsModalFadingOut(true)}
                currentRating={selectedReview.starLiked} // 별점 api
                currentContent={selectedReview.content} // 리뷰 내용 api
              />
            </div>
          )}
        </div>
      </Mobile>
    </>
  );
};

export default MypageReview;
