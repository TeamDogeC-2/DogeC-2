import './restaurantReview.scss';
import review_white from '../../img/review_white.svg';
import { useState, useEffect } from 'react';
import Circle_human from '../../img/circle_human.png';
import empty_heart from '../../img/empty_heart.svg';
import RestaurantReviewWrite from './RestaurantReviewWrite';
import { Desktop, Mobile } from '../../mediaQuery';
import axios from 'axios';

interface Props {
  name: string;
  reviewCount: number;
  starLiked: number;
  restaurantId: number;
}

const RestaurantReview = ({ name, reviewCount, starLiked, restaurantId }: Props) => {
  const [write, isWrite] = useState<boolean>(false);

  const [reviewList, setReviewList] = useState<any>([]);
  const [clickPage, setClickPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>();
  const [lastPage, isLastPage] = useState<boolean>();
  const [page, setPage] = useState<number>(0);
  const [sort, setSort] = useState<string>('liked');
  const memberId = sessionStorage.getItem('memberId');
  const url = `/restaurantReview/${restaurantId}`;

  useEffect(() => {
    axios
      .post(
        url,
        {
          restaurantId,
          memberId,
        },
        {
          params: {
            page,
            sorted: sort,
          },
        },
      )
      .then(res => {
        setReviewList(res.data.content);
        setTotalPage(res.data.totalPages);
        isLastPage(res.data.last);
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [clickPage, sort]);

  const handleImgError = (e: any) => {
    e.target.src = Circle_human;
  };

  return (
    <>
      <Desktop>
        <div className="restaurant-detail-bottom-review-div">
          <div className="restaurant-detail-bottom-review-info">
            <div className="restaurant-detail-bottom-review-info-left">
              <p>{name}</p>
              <div>{starLiked}</div>
              <span>총 {reviewCount}명이 리뷰를 작성했어요</span>
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
                  sort === 'newest'
                    ? 'restaurant-detail-bottom-review-button active'
                    : 'restaurant-detail-bottom-review-button'
                }
                onClick={() => setSort('newest')}
              >
                최신순
              </button>
              <button
                className={
                  sort === 'liked'
                    ? 'restaurant-detail-bottom-review-button active'
                    : 'restaurant-detail-bottom-review-button'
                }
                onClick={() => setSort('liked')}
              >
                추천순
              </button>
            </div>
          </div>
          {reviewList.map((review: any, idx: any) => (
            <>
              <div className="restaurant-detail-bottom-review-list-div">
                <img
                  key={review.restaurantReviewId}
                  src={`/image/${review.memberProfileImageName}`}
                  alt=""
                  onError={handleImgError}
                  className="restaurant-detail-bottom-review-list-profile"
                />
                <div className="restaurant-detail-bottom-review-list-item">
                  <div className="restaurant-detail-bottom-review-list-item-top">
                    <span className="restaurant-detail-bottom-review-list-item-username">
                      {review.nickName}
                    </span>
                    <div className="restaurant-detail-bottom-review-list-item-heart">
                      <img src={empty_heart} alt="" />
                      {review.likedCount}
                    </div>
                  </div>
                  <div className="restaurant-detail-bottom-review-list-item-middle">
                    <div>별점 들어갈 곳</div>
                    <span>{review.writeDate}</span>
                  </div>
                  {review.imageFileNameList.length ? (
                    <>
                      <div className="restaurant-detail-bottom-review-list-item-img-div">
                        <img src={`/image/${review.imageFileNameList[0]}`} alt="" />
                      </div>
                      <div className="restaurant-detail-bottom-review-list-content">
                        {review.content}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="restaurant-detail-bottom-review-list-content">
                        {review.content}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
      </Desktop>
      <Mobile>
        <div className="restaurant-mobile-detail-bottom-review-div">
          <div className="restaurant-mobile-detail-bottom-review-info">
            <div className="restaurant-mobile-detail-bottom-review-info-left">
              <div className="restaurant-mobile-detail-bottom-review-info-left-div">
                <p>{name}</p>
                <div>{starLiked}</div>
              </div>
              <span>총 {reviewCount}명이 리뷰를 작성했어요</span>
            </div>
          </div>
          <div className="restaurant-mobile-detail-bottom-review-select-div">
            <div className="restaurant-mobile-detail-bottom-review-buttons">
              <div>
                <button
                  className={
                    sort === 'newest'
                      ? 'restaurant-mobile-detail-bottom-review-button active'
                      : 'restaurant-mobile-detail-bottom-review-button'
                  }
                  onClick={() => setSort('newest')}
                >
                  최신순
                </button>
                <button
                  className={
                    sort === 'liked'
                      ? 'restaurant-mobile-detail-bottom-review-button active'
                      : 'restaurant-mobile-detail-bottom-review-button'
                  }
                  onClick={() => setSort('liked')}
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
            {write && <RestaurantReviewWrite />}
          </div>
          {reviewList.map((review: any, idx: any) => (
            <>
              <div className="restaurant-mobile-detail-bottom-review-list-div">
                <img
                  key={review.restaurantReviewId}
                  src={`/image/${review.memberProfileImageName}`}
                  alt=""
                  onError={handleImgError}
                  className="restaurant-mobile-detail-bottom-review-list-profile"
                />
                <div className="restaurant-mobile-detail-bottom-review-list-item">
                  <div className="restaurant-mobile-detail-bottom-review-list-item-top">
                    <span className="restaurant-mobile-detail-bottom-review-list-item-username">
                      {review.nickName}
                    </span>
                    <div className="restaurant-mobile-detail-bottom-review-list-item-heart">
                      <img src={empty_heart} alt="" />
                      {review.likedCount}
                    </div>
                  </div>
                  <div className="restaurant-mobile-detail-bottom-review-list-item-middle">
                    <div>별점 들어갈 곳</div>
                    <span>{review.writeDate}</span>
                  </div>
                  {review.imageFileNameList.length ? (
                    <>
                      <div className="restaurant-mobile-detail-bottom-review-list-item-img-div">
                        <img src={`/image/${review.imageFileNameList[0]}`} alt="" />
                      </div>
                      <div className="restaurant-mobile-detail-bottom-review-list-content">
                        {review.content}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="restaurant-mobile-detail-bottom-review-list-content">
                        {review.content}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
      </Mobile>
    </>
  );
};

export default RestaurantReview;
