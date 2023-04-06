import React, { useEffect, useState } from 'react';
import { DesktopHeader, MobileHeader, Mobile } from '../../mediaQuery';
import { ReactComponent as MypageReviewStar } from '../../img/mypageallReviewStar.svg';
import { ReactComponent as MypageReviewHeart } from '../../img/mypageallReviewHeart.svg';
import Paginate from '../common/Paginate';
import EditReviewModal from './components/EditReviewModal';
import './mypageReview.scss';

const MypageReview = () => {
  const [currentpage, setCurrentpage] = useState(1);
  const [count, setCount] = useState(3);
  const [postPerPage, setPostPerPage] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalFadingOut, setIsModalFadingOut] = useState(false);
  const [selectedOption, setSelectedOption] = useState('all');
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
          <div className="mypagereview-container">
            <div className="mypagereview-grid-name">음식점 이름</div>
            <div className="mypagereview-grid-image"></div>
            <div className="mypagereview-grid-score">
              평점
              <span>
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
              </span>
            </div>
            <div className="mypagereview-grid-date">2023.01.12</div>
            <div className="mypagereview-grid-contents">
              맛은 어쩌구저쩌구 청결은 어저구저쩌구 다시또 갈만 한건지 아닌건지 모르겟어
            </div>
            <button className="mypagereview-grid-edit" onClick={() => setIsModalVisible(true)}>
              수정하기
            </button>
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
                  currentRating={5} // 별점 api
                  currentContent="맛은 어쩌구저쩌구 청결은 어저구저쩌구 다시또 갈만 한건지 아닌건지 모르겟어" // 리뷰 내용 api
                />
              </div>
            )}
          </div>
          <div className="mypagereview-bottomline"></div>
          <div className="mypagereview-container">
            <div className="mypagereview-grid-name">음식점 이름</div>
            <div className="mypagereview-grid-image"></div>
            <div className="mypagereview-grid-score">
              평점
              <span>
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
              </span>
            </div>
            <div className="mypagereview-grid-date">2023.01.12</div>
            <div className="mypagereview-grid-contents">
              맛은 어쩌구저쩌구 청결은 어저구저쩌구 다시또 갈만 한건지 아닌건지 모르겟어
            </div>
            <button className="mypagereview-grid-edit">수정하기</button>
          </div>
          <div className="mypagereview-bottomline"></div>
          <div className="mypagereview-container">
            <div className="mypagereview-grid-name">음식점 이름</div>
            <div className="mypagereview-grid-image"></div>
            <div className="mypagereview-grid-score">
              평점
              <span>
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
              </span>
            </div>
            <div className="mypagereview-grid-date">2023.01.12</div>
            <div className="mypagereview-grid-contents">
              맛은 어쩌구저쩌구 청결은 어저구저쩌구 다시또 갈만 한건지 아닌건지 모르겟어
            </div>
            <button className="tablet-mypagereview-grid-edit">수정하기</button>
          </div>
          <div className="mypagereview-bottomline"></div>
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
          <div className="tablet-mypagereview-container">
            <div className="tablet-mypagereview-grid-name">음식점 이름</div>
            <div className="tablet-mypagereview-grid-image"></div>
            <div className="tablet-mypagereview-grid-score">
              평점
              <span>
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
              </span>
            </div>
            <div className="tablet-mypagereview-grid-date">2023.01.12</div>
            <div className="tablet-mypagereview-grid-contents">
              맛은 어쩌구저쩌구 청결은 어저구저쩌구 다시또 갈만 한건지 아닌건지 모르겟어
            </div>
            <button
              className="tablet-mypagereview-grid-edit"
              onClick={() => setIsModalVisible(true)}
            >
              수정하기
            </button>
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
                  currentRating={5} // 별점 api
                  currentContent="맛은 어쩌구저쩌구 청결은 어저구저쩌구 다시또 갈만 한건지 아닌건지 모르겟어" // 리뷰 내용 api
                />
              </div>
            )}
          </div>
          <div className="tablet-mypagereview-bottomline"></div>
          <div className="tablet-mypagereview-container">
            <div className="tablet-mypagereview-grid-name">음식점 이름</div>
            <div className="tablet-mypagereview-grid-image"></div>
            <div className="tablet-mypagereview-grid-score">
              평점
              <span>
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
              </span>
            </div>
            <div className="tablet-mypagereview-grid-date">2023.01.12</div>
            <div className="tablet-mypagereview-grid-contents">
              맛은 어쩌구저쩌구 청결은 어저구저쩌구 다시또 갈만 한건지 아닌건지 모르겟어
            </div>
            <button className="tablet-mypagereview-grid-edit">수정하기</button>
          </div>
          <div className="tablet-mypagereview-bottomline"></div>
          <div className="tablet-mypagereview-container">
            <div className="tablet-mypagereview-grid-name">음식점 이름</div>
            <div className="tablet-mypagereview-grid-image"></div>
            <div className="tablet-mypagereview-grid-score">
              평점
              <span>
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
              </span>
            </div>
            <div className="tablet-mypagereview-grid-date">2023.01.12</div>
            <div className="tablet-mypagereview-grid-contents">
              맛은 어쩌구저쩌구 청결은 어저구저쩌구 다시또 갈만 한건지 아닌건지 모르겟어
            </div>
            <button className="tablet-mypagereview-grid-edit">수정하기</button>
          </div>
          <div className="tablet-mypagereview-bottomline"></div>
        </div>
      </MobileHeader>
      <Mobile>
        <div className="mobile-mypagereview-maincontainer">
          {/* <div className="mobile-mypagereview-reviewselect">
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
          </div> */}
          <div className="mobile-mypagereview-startline"></div>
          <div className="mobile-mypagereview-container">
            <div className="mobile-mypagereview-grid-name">음식점 이름</div>
            <div className="mobile-mypagereview-grid-image"></div>
            <div className="mobile-mypagereview-grid-score">
              평점
              <span>
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
              </span>
            </div>
            <div className="mobile-mypagereview-grid-date">2023.01.12</div>
            <div className="mobile-mypagereview-grid-contents">
              맛은 어쩌구저쩌구 청결은 어저구저쩌구 다시또 갈만 한건지 아닌건지 모르겟어
            </div>
            <button
              className="mobile-mypagereview-grid-edit"
              onClick={() => setIsModalVisible(true)}
            >
              수정하기
            </button>
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
                  currentRating={5} // 별점 api
                  currentContent="맛은 어쩌구저쩌구 청결은 어저구저쩌구 다시또 갈만 한건지 아닌건지 모르겟어" // 리뷰 내용 api
                />
              </div>
            )}
          </div>
          <div className="mobile-mypagereview-bottomline"></div>
          <div className="mobile-mypagereview-container">
            <div className="mobile-mypagereview-grid-name">음식점 이름</div>
            <div className="mobile-mypagereview-grid-image"></div>
            <div className="mobile-mypagereview-grid-score">
              평점
              <span>
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
              </span>
            </div>
            <div className="mobile-mypagereview-grid-date">2023.01.12</div>
            <div className="mobile-mypagereview-grid-contents">
              맛은 어쩌구저쩌구 청결은 어저구저쩌구 다시또 갈만 한건지 아닌건지 모르겟어
            </div>
            <button className="mobile-mypagereview-grid-edit">수정하기</button>
          </div>
          <div className="mobile-mypagereview-bottomline"></div>
          <div className="mobile-mypagereview-container">
            <div className="mobile-mypagereview-grid-name">음식점 이름</div>
            <div className="mobile-mypagereview-grid-image"></div>
            <div className="mobile-mypagereview-grid-score">
              평점
              <span>
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
                <MypageReviewStar />
              </span>
            </div>
            <div className="mobile-mypagereview-grid-date">2023.01.12</div>
            <div className="mobile-mypagereview-grid-contents">
              맛은 어쩌구저쩌구 청결은 어저구저쩌구 다시또 갈만 한건지 아닌건지 모르겟어
            </div>
            <button className="mobile-mypagereview-grid-edit">수정하기</button>
          </div>
          <div className="mobile-mypagereview-bottomline"></div>
        </div>
      </Mobile>
    </>
  );
};

export default MypageReview;
