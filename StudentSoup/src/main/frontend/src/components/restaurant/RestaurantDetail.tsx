import { DesktopHeader } from '../../mediaQuery';
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

const RestaurantDetail = () => {
  const [category, setCategory] = useState<string>('menu');
  const [heart, isHeart] = useState<boolean>(false);
  const [image, setImage] = useState<any>([]);
  const handleImgError = (e: any) => {
    e.target.src = Circle_human;
  };
  const handleClickCategory = (e: any) => {
    setCategory(e.target.id);
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
                      category.toString() === 'menu'
                        ? 'restaurant-detail-bottom-li active'
                        : 'restaurant-detail-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    메뉴
                  </li>
                  <li
                    id="review"
                    className={
                      category.toString() === 'review'
                        ? 'restaurant-detail-bottom-li active'
                        : 'restaurant-detail-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    리뷰
                  </li>
                  <li
                    id="photo"
                    className={
                      category.toString() === 'photo'
                        ? 'restaurant-detail-bottom-li active'
                        : 'restaurant-detail-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    사진
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DesktopHeader>
    </>
  );
};

export default RestaurantDetail;
