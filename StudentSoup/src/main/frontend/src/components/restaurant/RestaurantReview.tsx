import './restaurantReview.scss';
import review_white from '../../img/review_white.svg';
import { useState } from 'react';
import Circle_human from '../../img/circle_human.png';
import empty_heart from '../../img/empty_heart.svg';
import RestaurantReviewWrite from './RestaurantReviewWrite';
import { Desktop, Mobile } from '../../mediaQuery';

const RestaurantReview = () => {
  const [filter, setFilter] = useState<any>(1);
  const [write, isWrite] = useState<boolean>(false);

  return (
    <>
      <Desktop>
        <div className="restaurant-detail-bottom-review-div">
          <div className="restaurant-detail-bottom-review-info">
            <div className="restaurant-detail-bottom-review-info-left">
              <p>금돈</p>
              <div>별점 들어갈 곳</div>
              <span>총 ??명이 리뷰를 작성했어요</span>
            </div>
            <button
              className="restaurant-detail-bottom-review-write-button"
              onClick={() => isWrite(!write)}
            >
              <img src={review_white} alt="" />
              <p>리뷰 작성</p>
            </button>
          </div>
          {write && <RestaurantReviewWrite />}
          <div className="restaurant-detail-bottom-review-select-div">
            <div className="restaurant-detail-bottom-review-buttons">
              <button
                className={
                  filter === 1
                    ? 'restaurant-detail-bottom-review-button active'
                    : 'restaurant-detail-bottom-review-button'
                }
                onClick={() => setFilter(1)}
              >
                최신순
              </button>
              <button
                className={
                  filter === 2
                    ? 'restaurant-detail-bottom-review-button active'
                    : 'restaurant-detail-bottom-review-button'
                }
                onClick={() => setFilter(2)}
              >
                추천순
              </button>
            </div>
            <p>※홍보 및 비방 등 부적절한 평가는 평점 산정에서 제외될 수 있습니다.</p>
          </div>
          <div className="restaurant-detail-bottom-review-list-div">
            <img
              src={Circle_human}
              alt=""
              className="restaurant-detail-bottom-review-list-profile"
            />
            <div className="restaurant-detail-bottom-review-list-item">
              <div className="restaurant-detail-bottom-review-list-item-top">
                <span className="restaurant-detail-bottom-review-list-item-username">유저이름</span>
                <div className="restaurant-detail-bottom-review-list-item-heart">
                  <img src={empty_heart} alt="" />
                  52
                </div>
              </div>
              <div className="restaurant-detail-bottom-review-list-item-middle">
                <div>별점 들어갈 곳</div>
                <span>23.03.14</span>
              </div>
              <div className="restaurant-detail-bottom-review-list-item-img-div">
                <img src={Circle_human} alt="" />
                <img src={Circle_human} alt="" />
                <img src={Circle_human} alt="" />
                <img src={Circle_human} alt="" />
              </div>
              <div className="restaurant-detail-bottom-review-list-content">
                진짜진짜로 맛있어요 ㅠㅠ 치즈카츠의 치즈는 진짜 모짜렐라치즈 맛으로 고소하면서 쫙좍
                늘어나고 가츠동에 밥 양념이 기가막혀요 그냥, 하 양도 많아서 완전 든든해요!! 가성비
                굿!!
              </div>
            </div>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div className="restaurant-mobile-detail-bottom-review-div">
          <div className="restaurant-mobile-detail-bottom-review-info">
            <div className="restaurant-mobile-detail-bottom-review-info-left">
              <div>별점 들어갈 곳</div>
              <span>총 ??명이 리뷰를 작성했어요</span>
            </div>
          </div>
          {write && <RestaurantReviewWrite />}
          <div className="restaurant-mobile-detail-bottom-review-select-div">
            <div className="restaurant-mobile-detail-bottom-review-buttons">
              <div>
                <button
                  className={
                    filter === 1
                      ? 'restaurant-mobile-detail-bottom-review-button active'
                      : 'restaurant-mobile-detail-bottom-review-button'
                  }
                  onClick={() => setFilter(1)}
                >
                  최신순
                </button>
                <button
                  className={
                    filter === 2
                      ? 'restaurant-mobile-detail-bottom-review-button active'
                      : 'restaurant-mobile-detail-bottom-review-button'
                  }
                  onClick={() => setFilter(2)}
                >
                  추천순
                </button>
              </div>
              <button
                className="restaurant-mobile-detail-bottom-review-write-button"
                onClick={() => isWrite(!write)}
              >
                <img src={review_white} alt="" />
                <p>리뷰 작성</p>
              </button>
            </div>
            <p>※홍보 및 비방 등 부적절한 평가는 평점 산정에서 제외될 수 있습니다.</p>
          </div>
          <div className="restaurant-mobile-detail-bottom-review-list-div">
            <img
              src={Circle_human}
              alt=""
              className="restaurant-mobile-detail-bottom-review-list-profile"
            />
            <div className="restaurant-mobile-detail-bottom-review-list-item">
              <div className="restaurant-mobile-detail-bottom-review-list-item-top">
                <span className="restaurant-mobile-detail-bottom-review-list-item-username">
                  유저이름
                </span>
                <div className="restaurant-mobile-detail-bottom-review-list-item-heart">
                  <img src={empty_heart} alt="" />
                  52
                </div>
              </div>
              <div className="restaurant-mobile-detail-bottom-review-list-item-middle">
                <div>별점 들어갈 곳</div>
                <span>23.03.14</span>
              </div>
              <div className="restaurant-mobile-detail-bottom-review-list-item-img-div">
                <img src={Circle_human} alt="" />
                <img src={Circle_human} alt="" />
                <img src={Circle_human} alt="" />
                <img src={Circle_human} alt="" />
              </div>
              <div className="restaurant-mobile-detail-bottom-review-list-content">
                진짜진짜로 맛있어요 ㅠㅠ 치즈카츠의 치즈는 진짜 모짜렐라치즈 맛으로 고소하면서 쫙좍
                늘어나고 가츠동에 밥 양념이 기가막혀요 그냥, 하 양도 많아서 완전 든든해요!! 가성비
                굿!!
              </div>
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default RestaurantReview;
