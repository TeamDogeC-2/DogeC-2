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
import under_arrow from '../../img/under_arrow.svg';
import up_arrow from '../../img/up_arrow.svg';

const RestaurantDetail = () => {
  const [clickMenu, setClickMenu] = useState<any>(1);
  const [clickPage, setClickPage] = useState<any>(1);
  const [clickMenu1, setClickMenu1] = useState<boolean>(true);
  const [clickMenu2, setClickMenu2] = useState<boolean>(false);
  const [clickMenu3, setClickMenu3] = useState<boolean>(false);
  const [clickMenu4, setClickMenu4] = useState<boolean>(false);
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
              {clickPage === 1 && (
                <div className="restaurant-detail-bottom-dropdown-menus">
                  <div
                    className="restaurant-detail-bottom-dropdown"
                    onClick={() => {
                      setClickMenu1(!clickMenu1);
                    }}
                  >
                    <span>주 메뉴</span>
                    {clickMenu1 ? (
                      <img
                        src={under_arrow}
                        alt=""
                        className="restaurant-detail-bottom-dropdown-svg"
                      />
                    ) : (
                      <img
                        src={up_arrow}
                        alt=""
                        className="restaurant-detail-bottom-dropdown-svg"
                      />
                    )}
                  </div>
                  {clickMenu1 && (
                    <div className="restaurant-detail-bottom-menu-list">
                      <div className="restaurant-detail-bottom-menu">
                        <div className="restaurant-detail-bottom-menu-img-div">
                          <img
                            src={Circle_human}
                            alt=""
                            className="restaurant-detail-bottom-menu-img"
                          />
                          <div className="restaurant-detail-bottom-menu-heart-div">
                            <img
                              src={empty_heart}
                              alt=""
                              className="restaurant-detail-bottom-menu-heart"
                            />
                            <p>0</p>
                          </div>
                        </div>
                        <div className="restaurant-detail-bottom-menu-text-div">
                          <div>
                            <p className="restaurant-menu-name">등심돈카츠 정식</p>
                            <span>
                              등심돈카츠(200g)+밥+장국+샐러드+김치+단무지+돈카츠소스+샐러드참깨소스
                            </span>
                          </div>
                          <p className="restaurant-menu-price">8,900원</p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div
                    className="restaurant-detail-bottom-next-dropdown"
                    onClick={() => {
                      setClickMenu2(!clickMenu2);
                    }}
                  >
                    <span>사이드 메뉴</span>
                    {clickMenu2 ? (
                      <img
                        src={under_arrow}
                        alt=""
                        className="restaurant-detail-bottom-dropdown-svg"
                      />
                    ) : (
                      <img
                        src={up_arrow}
                        alt=""
                        className="restaurant-detail-bottom-dropdown-svg"
                      />
                    )}
                  </div>
                  {clickMenu2 && (
                    <div className="restaurant-detail-bottom-menu-list">
                      <div className="restaurant-detail-bottom-menu">
                        <div className="restaurant-detail-bottom-menu-img-div">
                          <img
                            src={Circle_human}
                            alt=""
                            className="restaurant-detail-bottom-menu-img"
                          />
                          <div className="restaurant-detail-bottom-menu-heart-div">
                            <img
                              src={empty_heart}
                              alt=""
                              className="restaurant-detail-bottom-menu-heart"
                            />
                            <p>0</p>
                          </div>
                        </div>
                        <div className="restaurant-detail-bottom-menu-text-div">
                          <div>
                            <p className="restaurant-menu-name">등심돈카츠 정식</p>
                            <span>
                              등심돈카츠(200g)+밥+장국+샐러드+김치+단무지+돈카츠소스+샐러드참깨소스
                            </span>
                          </div>
                          <p className="restaurant-menu-price">8,900원</p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div
                    className="restaurant-detail-bottom-next-dropdown"
                    onClick={() => {
                      setClickMenu3(!clickMenu3);
                    }}
                  >
                    <span>음료</span>
                    {clickMenu3 ? (
                      <img
                        src={under_arrow}
                        alt=""
                        className="restaurant-detail-bottom-dropdown-svg"
                      />
                    ) : (
                      <img
                        src={up_arrow}
                        alt=""
                        className="restaurant-detail-bottom-dropdown-svg"
                      />
                    )}
                  </div>
                  {clickMenu3 && (
                    <div className="restaurant-detail-bottom-menu-list">
                      <div className="restaurant-detail-bottom-menu">
                        <div className="restaurant-detail-bottom-menu-img-div">
                          <img
                            src={Circle_human}
                            alt=""
                            className="restaurant-detail-bottom-menu-img"
                          />
                          <div className="restaurant-detail-bottom-menu-heart-div">
                            <img
                              src={empty_heart}
                              alt=""
                              className="restaurant-detail-bottom-menu-heart"
                            />
                            <p>0</p>
                          </div>
                        </div>
                        <div className="restaurant-detail-bottom-menu-text-div">
                          <div>
                            <p className="restaurant-menu-name">등심돈카츠 정식</p>
                            <span>
                              등심돈카츠(200g)+밥+장국+샐러드+김치+단무지+돈카츠소스+샐러드참깨소스
                            </span>
                          </div>
                          <p className="restaurant-menu-price">8,900원</p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div
                    className="restaurant-detail-bottom-next-dropdown"
                    onClick={() => {
                      setClickMenu4(!clickMenu4);
                    }}
                  >
                    <span>기타</span>
                    {clickMenu4 ? (
                      <img
                        src={under_arrow}
                        alt=""
                        className="restaurant-detail-bottom-dropdown-svg"
                      />
                    ) : (
                      <img
                        src={up_arrow}
                        alt=""
                        className="restaurant-detail-bottom-dropdown-svg"
                      />
                    )}
                  </div>
                  {clickMenu4 && (
                    <div className="restaurant-detail-bottom-menu-list">
                      <div className="restaurant-detail-bottom-menu">
                        <div className="restaurant-detail-bottom-menu-img-div">
                          <img
                            src={Circle_human}
                            alt=""
                            className="restaurant-detail-bottom-menu-img"
                          />
                          <div className="restaurant-detail-bottom-menu-heart-div">
                            <img
                              src={empty_heart}
                              alt=""
                              className="restaurant-detail-bottom-menu-heart"
                            />
                            <p>0</p>
                          </div>
                        </div>
                        <div className="restaurant-detail-bottom-menu-text-div">
                          <div>
                            <p className="restaurant-menu-name">등심돈카츠 정식</p>
                            <span>
                              등심돈카츠(200g)+밥+장국+샐러드+김치+단무지+돈카츠소스+샐러드참깨소스
                            </span>
                          </div>
                          <p className="restaurant-menu-price">8,900원</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </DesktopHeader>
    </>
  );
};

export default RestaurantDetail;
