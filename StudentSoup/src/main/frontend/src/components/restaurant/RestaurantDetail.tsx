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

const RestaurantDetail = () => {
  const [heart, isHeart] = useState<boolean>(false);
  const [image, setImage] = useState<any>([]);
  const handleImgError = (e: any) => {
    e.target.src = Circle_human;
  };
  return (
    <>
      <DesktopHeader>
        <div>
          <RestaurantNavbar />
          <div className="restaurant-detail-main">
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
              </div>
            </div>
          </div>
        </div>
      </DesktopHeader>
    </>
  );
};

export default RestaurantDetail;
