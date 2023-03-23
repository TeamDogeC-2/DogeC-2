import { DesktopHeader, Mobile, MobileHeader } from '../../mediaQuery';
import './restaurantDetail.scss';
import RestaurantNavbar from './RestaurantNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Circle_human from '../../img/circle_human.png';
import empty_heart from '../../img/empty_heart.svg';
import share from '../../img/share.svg';
import review from '../../img/review.svg';
import pin from '../../img/pin.svg';
import phone from '../../img/phone.svg';
import clock from '../../img/clock.svg';
import plus_circle from '../../img/plus_circle.svg';
import restaurant_empty_heart from '../../img/restaurant_empty_heart.svg';
import under_arrow from '../../img/under_arrow.svg';
import up_arrow from '../../img/up_arrow.svg';
import RestaurantMenu from './RestaurantMenu';
import RestaurantReview from './RestaurantReview';
import RestaurantPhoto from './RestaurantPhoto';

const RestaurantDetail = () => {
  const [clickPage, setClickPage] = useState<any>(1);
  const [heart, isHeart] = useState<boolean>(false);
  const [image, setImage] = useState<any>([]);
  const handleImgError = (e: any) => {
    e.target.src = Circle_human;
  };
  const imgArr = image.slice(1);
  return (
    <>
      <DesktopHeader>
        <div>
          <RestaurantNavbar />
          <div className="restaurant-detail-main">
            <div className="restaurant-detail-top">
              <div className="restaurant-detail-left">
                <div className="restaurant-detail-map">kakaoMap</div>
                <div className="restaurant-detail-left-info">
                  <span className="restaurant-detail-left-info-name">금돈</span>
                  <p>제물포역 | 돈가스, 함박스테이크</p>
                  <p>4.6</p>
                </div>
                <div className="restaurant-detail-underline"></div>
                <div className="restaurant-detail-functions">
                  <div className="restaurant-detail-function">
                    {heart ? (
                      <FontAwesomeIcon icon={faHeart} className="restaurant-detail-function-icon" />
                    ) : (
                      <img src={empty_heart} alt="" />
                    )}
                    <p>좋아요</p>
                  </div>
                  <div className="restaurant-detail-vertical-underline"></div>
                  <div className="restaurant-detail-function">
                    <img src={share} alt="" />
                    <p>공유</p>
                  </div>
                  <div className="restaurant-detail-vertical-underline"></div>
                  <div className="restaurant-detail-function">
                    <img src={review} alt="" />
                    <p>리뷰</p>
                  </div>
                </div>
                <button className="restaurant-detail-left-button">배달가능 업체</button>
              </div>
              <div className="restaurant-detail-right">
                <div className="restaurant-detail-right-imgs">
                  <img
                    src={`/image/${image[0]}`}
                    alt=""
                    onError={handleImgError}
                    className="restaurant-detail-right-first-img"
                  />
                  <div className="restaurant-detail-right-other-imgs">
                    {/* {imgArr.map((school: any) => (
                    <img
                      key={school}
                      src={`/image/${school}`}
                      className="restaurant-detail-right-other-img"
                    />
                  ))} */}
                    <img
                      src={`/image/${image[0]}`}
                      alt=""
                      onError={handleImgError}
                      className="restaurant-detail-right-other-img"
                    />
                    <img
                      src={`/image/${image[0]}`}
                      alt=""
                      onError={handleImgError}
                      className="restaurant-detail-right-other-img"
                    />
                    <img
                      src={`/image/${image[0]}`}
                      alt=""
                      onError={handleImgError}
                      className="restaurant-detail-right-other-img"
                    />
                    <img
                      src={`/image/${image[0]}`}
                      alt=""
                      onError={handleImgError}
                      className="restaurant-detail-right-other-img"
                    />
                  </div>
                </div>
                <div className="restaurant-detail-right-info">
                  <span>매장정보</span>
                  <p>
                    <img src={pin} alt="" />
                    인천 미추홀구 숙골로
                  </p>
                  <p>
                    <img src={phone} alt="" />
                    0507
                  </p>
                  <p>
                    <img src={clock} alt="" />
                    영업시간
                  </p>
                  <p>
                    <img src={plus_circle} alt="" />
                    주차,포장
                  </p>
                  <p>
                    <img src={restaurant_empty_heart} alt="" />
                    좋아요 수
                  </p>
                </div>
              </div>
            </div>
            <div className="restaurant-detail-bottom">
              <div className="restaurant-detail-bottom-list-div">
                <ul className="restaurant-detail-bottom-list">
                  <li
                    id="menu"
                    className={
                      clickPage === 1
                        ? 'restaurant-detail-bottom-li active'
                        : 'restaurant-detail-bottom-li'
                    }
                    onClick={() => setClickPage(1)}
                  >
                    메뉴
                  </li>
                  <li
                    id="review"
                    className={
                      clickPage === 2
                        ? 'restaurant-detail-bottom-li active'
                        : 'restaurant-detail-bottom-li'
                    }
                    onClick={() => setClickPage(2)}
                  >
                    리뷰
                  </li>
                  <li
                    id="photo"
                    className={
                      clickPage === 3
                        ? 'restaurant-detail-bottom-li active'
                        : 'restaurant-detail-bottom-li'
                    }
                    onClick={() => setClickPage(3)}
                  >
                    사진
                  </li>
                </ul>
              </div>
              {clickPage === 1 && <RestaurantMenu />}
              {clickPage === 2 && <RestaurantReview />}
              {clickPage === 3 && <RestaurantPhoto />}
            </div>
          </div>
        </div>
      </DesktopHeader>
      <MobileHeader>
        <div>
          <RestaurantNavbar />
          <div className="restaurant-tablet-detail-main">
            <div className="restaurant-tablet-detail-top">
              <div className="restaurant-tablet-detail-left">
                <div className="restaurant-tablet-detail-map">kakaoMap</div>
                <div className="restaurant-tablet-detail-left-info">
                  <span className="restaurant-tablet-detail-left-info-name">금돈</span>
                  <p>제물포역 | 돈가스, 함박스테이크</p>
                  <p>4.6</p>
                </div>
                <div className="restaurant-tablet-detail-underline"></div>
                <div className="restaurant-tablet-detail-functions">
                  <div className="restaurant-tablet-detail-function">
                    {heart ? (
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="restaurant-tablet-detail-function-icon"
                      />
                    ) : (
                      <img src={empty_heart} alt="" />
                    )}
                    <p>좋아요</p>
                  </div>
                  <div className="restaurant-tablet-detail-vertical-underline"></div>
                  <div className="restaurant-tablet-detail-function">
                    <img src={share} alt="" />
                    <p>공유</p>
                  </div>
                  <div className="restaurant-tablet-detail-vertical-underline"></div>
                  <div className="restaurant-tablet-detail-function">
                    <img src={review} alt="" />
                    <p>리뷰</p>
                  </div>
                </div>
                <button className="restaurant-tablet-detail-left-button">배달가능 업체</button>
              </div>
              <div className="restaurant-tablet-detail-right">
                <div className="restaurant-tablet-detail-right-imgs">
                  <div className="restaurant-tablet-detail-right-first-img">
                    <img src={`/image/${image[0]}`} alt="" onError={handleImgError} />
                  </div>
                  <div className="restaurant-tablet-detail-right-other-imgs">
                    {/* {imgArr.map((school: any) => (
                    <img
                      key={school}
                      src={`/image/${school}`}
                      className="restaurant-tablet-detail-right-other-img"
                    />
                  ))} */}
                    <div className="restaurant-tablet-detail-right-other-top-imgs">
                      <img
                        src={`/image/${image[0]}`}
                        alt=""
                        onError={handleImgError}
                        className="restaurant-tablet-detail-right-other-img"
                      />
                      <img
                        src={`/image/${image[0]}`}
                        alt=""
                        onError={handleImgError}
                        className="restaurant-tablet-detail-right-other-img"
                      />
                    </div>
                    <div className="restaurant-tablet-detail-right-other-bottom-imgs">
                      <img
                        src={`/image/${image[0]}`}
                        alt=""
                        onError={handleImgError}
                        className="restaurant-tablet-detail-right-other-img"
                      />
                      <img
                        src={`/image/${image[0]}`}
                        alt=""
                        onError={handleImgError}
                        className="restaurant-tablet-detail-right-other-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="restaurant-tablet-detail-right-info">
                  <span>매장정보</span>
                  <p>
                    <img src={pin} alt="" />
                    인천 미추홀구 숙골로
                  </p>
                  <p>
                    <img src={phone} alt="" />
                    0507
                  </p>
                  <p>
                    <img src={clock} alt="" />
                    영업시간
                  </p>
                  <p>
                    <img src={plus_circle} alt="" />
                    주차,포장
                  </p>
                  <p>
                    <img src={restaurant_empty_heart} alt="" />
                    좋아요 수
                  </p>
                </div>
              </div>
            </div>
            <div className="restaurant-tablet-detail-bottom">
              <div className="restaurant-tablet-detail-bottom-list-div">
                <ul className="restaurant-tablet-detail-bottom-list">
                  <li
                    id="menu"
                    className={
                      clickPage === 1
                        ? 'restaurant-tablet-detail-bottom-li active'
                        : 'restaurant-tablet-detail-bottom-li'
                    }
                    onClick={() => setClickPage(1)}
                  >
                    메뉴
                  </li>
                  <li
                    id="review"
                    className={
                      clickPage === 2
                        ? 'restaurant-tablet-detail-bottom-li active'
                        : 'restaurant-tablet-detail-bottom-li'
                    }
                    onClick={() => setClickPage(2)}
                  >
                    리뷰
                  </li>
                  <li
                    id="photo"
                    className={
                      clickPage === 3
                        ? 'restaurant-tablet-detail-bottom-li active'
                        : 'restaurant-tablet-detail-bottom-li'
                    }
                    onClick={() => setClickPage(3)}
                  >
                    사진
                  </li>
                </ul>
              </div>
              {clickPage === 1 && <RestaurantMenu />}
              {clickPage === 2 && <RestaurantReview />}
              {clickPage === 3 && <RestaurantPhoto />}
            </div>
          </div>
        </div>
      </MobileHeader>
      <Mobile>
        <div>
          <RestaurantNavbar />
          <div className="restaurant-mobile-detail-main">
            <div className="restaurant-mobile-detail-top">
              <div className="restaurant-mobile-detail-top-img-div">
                <div className="restaurant-mobile-detail-top-first-img">
                  <img src={`/image/${image[0]}`} alt="" onError={handleImgError} />
                </div>
                <div className="restaurant-mobile-detail-top-other-imgs">
                  {/* {imgArr.map((school: any) => (
                    <img
                      key={school}
                      src={`/image/${school}`}
                      className="restaurant-tablet-detail-top-other-img"
                    />
                  ))} */}
                  <div className="restaurant-mobile-detail-top-other-top-imgs">
                    <img
                      src={`/image/${image[0]}`}
                      alt=""
                      onError={handleImgError}
                      className="restaurant-mobile-detail-top-other-img"
                    />
                    <img
                      src={`/image/${image[0]}`}
                      alt=""
                      onError={handleImgError}
                      className="restaurant-mobile-detail-top-other-img"
                    />
                  </div>
                  <div className="restaurant-mobile-detail-top-other-bottom-imgs">
                    <img
                      src={`/image/${image[0]}`}
                      alt=""
                      onError={handleImgError}
                      className="restaurant-mobile-detail-top-other-img"
                    />
                    <img
                      src={`/image/${image[0]}`}
                      alt=""
                      onError={handleImgError}
                      className="restaurant-mobile-detail-top-other-img"
                    />
                  </div>
                </div>
              </div>
              <div className="restaurant-mobile-detail-top-info-div">
                <div className="restaurant-mobile-detail-top-info-right">
                  <div className="restaurant-mobile-detail-left-info">
                    <span className="restaurant-mobile-detail-left-info-name">금돈</span>
                    <p>제물포역 | 돈가스, 함박스테이크</p>
                    <p>4.6</p>
                  </div>
                  <div className="restaurant-mobile-detail-underline"></div>
                  <div className="restaurant-mobile-detail-functions">
                    <div className="restaurant-mobile-detail-function">
                      {heart ? (
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="restaurant-mobile-detail-function-icon"
                        />
                      ) : (
                        <img src={empty_heart} alt="" />
                      )}
                      <p>좋아요</p>
                    </div>
                    <div className="restaurant-mobile-detail-vertical-underline"></div>
                    <div className="restaurant-mobile-detail-function">
                      <img src={share} alt="" />
                      <p>공유</p>
                    </div>
                    <div className="restaurant-mobile-detail-vertical-underline"></div>
                    <div className="restaurant-mobile-detail-function">
                      <img src={review} alt="" />
                      <p>리뷰</p>
                    </div>
                  </div>
                  <button className="restaurant-mobile-detail-left-button">배달가능 업체</button>
                </div>
                <div className="restaurant-mobile-detail-map">kakaoMap</div>
                <div className="restaurant-mobile-detail-bottom-info">
                  <span>매장정보</span>
                  <p>
                    <img src={pin} alt="" />
                    인천 미추홀구 숙골로
                  </p>
                  <p>
                    <img src={phone} alt="" />
                    0507
                  </p>
                  <p>
                    <img src={clock} alt="" />
                    영업시간
                  </p>
                  <p>
                    <img src={plus_circle} alt="" />
                    주차,포장
                  </p>
                  <p>
                    <img src={restaurant_empty_heart} alt="" />
                    좋아요 수
                  </p>
                </div>
              </div>
            </div>
            <div className="restaurant-mobile-detail-bottom">
              <div className="restaurant-mobile-detail-bottom-list-div">
                <ul className="restaurant-mobile-detail-bottom-list">
                  <li
                    id="menu"
                    className={
                      clickPage === 1
                        ? 'restaurant-mobile-detail-bottom-li active'
                        : 'restaurant-mobile-detail-bottom-li'
                    }
                    onClick={() => setClickPage(1)}
                  >
                    메뉴
                  </li>
                  <li
                    id="review"
                    className={
                      clickPage === 2
                        ? 'restaurant-mobile-detail-bottom-li active'
                        : 'restaurant-mobile-detail-bottom-li'
                    }
                    onClick={() => setClickPage(2)}
                  >
                    리뷰
                  </li>
                  <li
                    id="photo"
                    className={
                      clickPage === 3
                        ? 'restaurant-mobile-detail-bottom-li active'
                        : 'restaurant-mobile-detail-bottom-li'
                    }
                    onClick={() => setClickPage(3)}
                  >
                    사진
                  </li>
                </ul>
              </div>
              {clickPage === 1 && <RestaurantMenu />}
              {clickPage === 2 && <RestaurantReview />}
              {clickPage === 3 && <RestaurantPhoto />}
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default RestaurantDetail;
