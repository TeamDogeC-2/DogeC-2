import { useState } from 'react';
import './restaurantMenu.scss';
import under_arrow from '../../img/under_arrow.svg';
import up_arrow from '../../img/up_arrow.svg';
import Circle_human from '../../img/circle_human.png';
import empty_heart from '../../img/empty_heart.svg';
import { DesktopHeader, Mobile, MobileHeader } from '../../mediaQuery';

const RestaurantMenu = () => {
  const [clickMenu1, setClickMenu1] = useState<boolean>(true);
  const [clickMenu2, setClickMenu2] = useState<boolean>(false);
  const [clickMenu3, setClickMenu3] = useState<boolean>(false);
  const [clickMenu4, setClickMenu4] = useState<boolean>(false);

  return (
    <>
      <DesktopHeader>
        <div className="restaurant-detail-bottom-dropdown-menus">
          <div
            className="restaurant-detail-bottom-dropdown"
            onClick={() => {
              setClickMenu1(!clickMenu1);
            }}
          >
            <span>주 메뉴</span>
            {clickMenu1 ? (
              <img src={under_arrow} alt="" className="restaurant-detail-bottom-dropdown-svg" />
            ) : (
              <img src={up_arrow} alt="" className="restaurant-detail-bottom-dropdown-svg" />
            )}
          </div>
          {clickMenu1 && (
            <div className="restaurant-detail-bottom-menu-list">
              <div className="restaurant-detail-bottom-menu">
                <div className="restaurant-detail-bottom-menu-img-div">
                  <img src={Circle_human} alt="" className="restaurant-detail-bottom-menu-img" />
                  <div className="restaurant-detail-bottom-menu-heart-div">
                    <img src={empty_heart} alt="" className="restaurant-detail-bottom-menu-heart" />
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
              <img src={under_arrow} alt="" className="restaurant-detail-bottom-dropdown-svg" />
            ) : (
              <img src={up_arrow} alt="" className="restaurant-detail-bottom-dropdown-svg" />
            )}
          </div>
          {clickMenu2 && (
            <div className="restaurant-detail-bottom-menu-list">
              <div className="restaurant-detail-bottom-menu">
                <div className="restaurant-detail-bottom-menu-img-div">
                  <img src={Circle_human} alt="" className="restaurant-detail-bottom-menu-img" />
                  <div className="restaurant-detail-bottom-menu-heart-div">
                    <img src={empty_heart} alt="" className="restaurant-detail-bottom-menu-heart" />
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
              <img src={under_arrow} alt="" className="restaurant-detail-bottom-dropdown-svg" />
            ) : (
              <img src={up_arrow} alt="" className="restaurant-detail-bottom-dropdown-svg" />
            )}
          </div>
          {clickMenu3 && (
            <div className="restaurant-detail-bottom-menu-list">
              <div className="restaurant-detail-bottom-menu">
                <div className="restaurant-detail-bottom-menu-img-div">
                  <img src={Circle_human} alt="" className="restaurant-detail-bottom-menu-img" />
                  <div className="restaurant-detail-bottom-menu-heart-div">
                    <img src={empty_heart} alt="" className="restaurant-detail-bottom-menu-heart" />
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
              <img src={under_arrow} alt="" className="restaurant-detail-bottom-dropdown-svg" />
            ) : (
              <img src={up_arrow} alt="" className="restaurant-detail-bottom-dropdown-svg" />
            )}
          </div>
          {clickMenu4 && (
            <div className="restaurant-detail-bottom-menu-list">
              <div className="restaurant-detail-bottom-menu">
                <div className="restaurant-detail-bottom-menu-img-div">
                  <img src={Circle_human} alt="" className="restaurant-detail-bottom-menu-img" />
                  <div className="restaurant-detail-bottom-menu-heart-div">
                    <img src={empty_heart} alt="" className="restaurant-detail-bottom-menu-heart" />
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
      </DesktopHeader>
      <MobileHeader>
        <div className="restaurant-tablet-detail-bottom-dropdown-menus">
          <div
            className="restaurant-tablet-detail-bottom-dropdown"
            onClick={() => {
              setClickMenu1(!clickMenu1);
            }}
          >
            <span>주 메뉴</span>
            {clickMenu1 ? (
              <img
                src={under_arrow}
                alt=""
                className="restaurant-tablet-detail-bottom-dropdown-svg"
              />
            ) : (
              <img src={up_arrow} alt="" className="restaurant-tablet-detail-bottom-dropdown-svg" />
            )}
          </div>
          {clickMenu1 && (
            <div className="restaurant-tablet-detail-bottom-menu-list">
              <div className="restaurant-tablet-detail-bottom-menu">
                <div className="restaurant-tablet-detail-bottom-menu-img-div">
                  <img
                    src={Circle_human}
                    alt=""
                    className="restaurant-tablet-detail-bottom-menu-img"
                  />
                  <div className="restaurant-tablet-detail-bottom-menu-heart-div">
                    <img
                      src={empty_heart}
                      alt=""
                      className="restaurant-tablet-detail-bottom-menu-heart"
                    />
                    <p>0</p>
                  </div>
                </div>
                <div className="restaurant-tablet-detail-bottom-menu-text-div">
                  <div>
                    <p className="restaurant-tablet-menu-name">등심돈카츠 정식</p>
                    <span>
                      등심돈카츠(200g)+밥+장국+샐러드+김치+단무지+돈카츠소스+샐러드참깨소스
                    </span>
                  </div>
                  <p className="restaurant-tablet-menu-price">8,900원</p>
                </div>
              </div>
            </div>
          )}
          <div
            className="restaurant-tablet-detail-bottom-next-dropdown"
            onClick={() => {
              setClickMenu2(!clickMenu2);
            }}
          >
            <span>사이드 메뉴</span>
            {clickMenu2 ? (
              <img
                src={under_arrow}
                alt=""
                className="restaurant-tablet-detail-bottom-dropdown-svg"
              />
            ) : (
              <img src={up_arrow} alt="" className="restaurant-tablet-detail-bottom-dropdown-svg" />
            )}
          </div>
          {clickMenu2 && (
            <div className="restaurant-tablet-detail-bottom-menu-list">
              <div className="restaurant-tablet-detail-bottom-menu">
                <div className="restaurant-tablet-detail-bottom-menu-img-div">
                  <img
                    src={Circle_human}
                    alt=""
                    className="restaurant-tablet-detail-bottom-menu-img"
                  />
                  <div className="restaurant-tablet-detail-bottom-menu-heart-div">
                    <img
                      src={empty_heart}
                      alt=""
                      className="restaurant-tablet-detail-bottom-menu-heart"
                    />
                    <p>0</p>
                  </div>
                </div>
                <div className="restaurant-tablet-detail-bottom-menu-text-div">
                  <div>
                    <p className="restaurant-tablet-menu-name">등심돈카츠 정식</p>
                    <span>
                      등심돈카츠(200g)+밥+장국+샐러드+김치+단무지+돈카츠소스+샐러드참깨소스
                    </span>
                  </div>
                  <p className="restaurant-tablet-menu-price">8,900원</p>
                </div>
              </div>
            </div>
          )}
          <div
            className="restaurant-tablet-detail-bottom-next-dropdown"
            onClick={() => {
              setClickMenu3(!clickMenu3);
            }}
          >
            <span>음료</span>
            {clickMenu3 ? (
              <img
                src={under_arrow}
                alt=""
                className="restaurant-tablet-detail-bottom-dropdown-svg"
              />
            ) : (
              <img src={up_arrow} alt="" className="restaurant-tablet-detail-bottom-dropdown-svg" />
            )}
          </div>
          {clickMenu3 && (
            <div className="restaurant-tablet-detail-bottom-menu-list">
              <div className="restaurant-tablet-detail-bottom-menu">
                <div className="restaurant-tablet-detail-bottom-menu-img-div">
                  <img
                    src={Circle_human}
                    alt=""
                    className="restaurant-tablet-detail-bottom-menu-img"
                  />
                  <div className="restaurant-tablet-detail-bottom-menu-heart-div">
                    <img
                      src={empty_heart}
                      alt=""
                      className="restaurant-tablet-detail-bottom-menu-heart"
                    />
                    <p>0</p>
                  </div>
                </div>
                <div className="restaurant-tablet-detail-bottom-menu-text-div">
                  <div>
                    <p className="restaurant-tablet-menu-name">등심돈카츠 정식</p>
                    <span>
                      등심돈카츠(200g)+밥+장국+샐러드+김치+단무지+돈카츠소스+샐러드참깨소스
                    </span>
                  </div>
                  <p className="restaurant-tablet-menu-price">8,900원</p>
                </div>
              </div>
            </div>
          )}
          <div
            className="restaurant-tablet-detail-bottom-next-dropdown"
            onClick={() => {
              setClickMenu4(!clickMenu4);
            }}
          >
            <span>기타</span>
            {clickMenu4 ? (
              <img
                src={under_arrow}
                alt=""
                className="restaurant-tablet-detail-bottom-dropdown-svg"
              />
            ) : (
              <img src={up_arrow} alt="" className="restaurant-tablet-detail-bottom-dropdown-svg" />
            )}
          </div>
          {clickMenu4 && (
            <div className="restaurant-tablet-detail-bottom-menu-list">
              <div className="restaurant-tablet-detail-bottom-menu">
                <div className="restaurant-tablet-detail-bottom-menu-img-div">
                  <img
                    src={Circle_human}
                    alt=""
                    className="restaurant-tablet-detail-bottom-menu-img"
                  />
                  <div className="restaurant-tablet-detail-bottom-menu-heart-div">
                    <img
                      src={empty_heart}
                      alt=""
                      className="restaurant-tablet-detail-bottom-menu-heart"
                    />
                    <p>0</p>
                  </div>
                </div>
                <div className="restaurant-tablet-detail-bottom-menu-text-div">
                  <div>
                    <p className="restaurant-tablet-menu-name">등심돈카츠 정식</p>
                    <span>
                      등심돈카츠(200g)+밥+장국+샐러드+김치+단무지+돈카츠소스+샐러드참깨소스
                    </span>
                  </div>
                  <p className="restaurant-tablet-menu-price">8,900원</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </MobileHeader>
      <Mobile>
        <div className="restaurant-mobile-detail-bottom-dropdown-menus">
          <div
            className="restaurant-mobile-detail-bottom-dropdown"
            onClick={() => {
              setClickMenu1(!clickMenu1);
            }}
          >
            <span>주 메뉴</span>
            {clickMenu1 ? (
              <img
                src={under_arrow}
                alt=""
                className="restaurant-mobile-detail-bottom-dropdown-svg"
              />
            ) : (
              <img src={up_arrow} alt="" className="restaurant-mobile-detail-bottom-dropdown-svg" />
            )}
          </div>
          {clickMenu1 && (
            <div className="restaurant-mobile-detail-bottom-menu-list">
              <div className="restaurant-mobile-detail-bottom-menu">
                <div className="restaurant-mobile-detail-bottom-menu-img-div">
                  <img
                    src={Circle_human}
                    alt=""
                    className="restaurant-mobile-detail-bottom-menu-img"
                  />
                  <div className="restaurant-mobile-detail-bottom-menu-heart-div">
                    <img
                      src={empty_heart}
                      alt=""
                      className="restaurant-mobile-detail-bottom-menu-heart"
                    />
                    <p>0</p>
                  </div>
                </div>
                <div className="restaurant-mobile-detail-bottom-menu-text-div">
                  <div>
                    <p className="restaurant-mobile-menu-name">등심돈카츠 정식</p>
                    <span>
                      등심돈카츠(200g)+밥+장국+샐러드+김치+단무지+돈카츠소스+샐러드참깨소스
                    </span>
                  </div>
                  <p className="restaurant-mobile-menu-price">8,900원</p>
                </div>
              </div>
              <div className="restaurant-mobile-detail-bottom-menu">
                <div className="restaurant-mobile-detail-bottom-menu-img-div">
                  <img
                    src={Circle_human}
                    alt=""
                    className="restaurant-mobile-detail-bottom-menu-img"
                  />
                  <div className="restaurant-mobile-detail-bottom-menu-heart-div">
                    <img
                      src={empty_heart}
                      alt=""
                      className="restaurant-mobile-detail-bottom-menu-heart"
                    />
                    <p>0</p>
                  </div>
                </div>
                <div className="restaurant-mobile-detail-bottom-menu-text-div">
                  <div>
                    <p className="restaurant-mobile-menu-name">등심돈카츠 정식</p>
                    <span>
                      등심돈카츠(200g)+밥+장국+샐러드+김치+단무지+돈카츠소스+샐러드참깨소스
                    </span>
                  </div>
                  <p className="restaurant-mobile-menu-price">8,900원</p>
                </div>
              </div>
              <div className="restaurant-mobile-detail-bottom-menu">
                <div className="restaurant-mobile-detail-bottom-menu-img-div">
                  <img
                    src={Circle_human}
                    alt=""
                    className="restaurant-mobile-detail-bottom-menu-img"
                  />
                  <div className="restaurant-mobile-detail-bottom-menu-heart-div">
                    <img
                      src={empty_heart}
                      alt=""
                      className="restaurant-mobile-detail-bottom-menu-heart"
                    />
                    <p>0</p>
                  </div>
                </div>
                <div className="restaurant-mobile-detail-bottom-menu-text-div">
                  <div>
                    <p className="restaurant-mobile-menu-name">등심돈카츠 정식</p>
                    <span>
                      등심돈카츠(200g)+밥+장국+샐러드+김치+단무지+돈카츠소스+샐러드참깨소스
                    </span>
                  </div>
                  <p className="restaurant-mobile-menu-price">8,900원</p>
                </div>
              </div>
            </div>
          )}
          <div
            className="restaurant-mobile-detail-bottom-next-dropdown"
            onClick={() => {
              setClickMenu2(!clickMenu2);
            }}
          >
            <span>사이드 메뉴</span>
            {clickMenu2 ? (
              <img
                src={under_arrow}
                alt=""
                className="restaurant-mobile-detail-bottom-dropdown-svg"
              />
            ) : (
              <img src={up_arrow} alt="" className="restaurant-mobile-detail-bottom-dropdown-svg" />
            )}
          </div>
          {clickMenu2 && (
            <div className="restaurant-mobile-detail-bottom-menu-list">
              <div className="restaurant-mobile-detail-bottom-menu">
                <div className="restaurant-mobile-detail-bottom-menu-img-div">
                  <img
                    src={Circle_human}
                    alt=""
                    className="restaurant-mobile-detail-bottom-menu-img"
                  />
                  <div className="restaurant-mobile-detail-bottom-menu-heart-div">
                    <img
                      src={empty_heart}
                      alt=""
                      className="restaurant-mobile-detail-bottom-menu-heart"
                    />
                    <p>0</p>
                  </div>
                </div>
                <div className="restaurant-mobile-detail-bottom-menu-text-div">
                  <div>
                    <p className="restaurant-mobile-menu-name">등심돈카츠 정식</p>
                    <span>
                      등심돈카츠(200g)+밥+장국+샐러드+김치+단무지+돈카츠소스+샐러드참깨소스
                    </span>
                  </div>
                  <p className="restaurant-mobile-menu-price">8,900원</p>
                </div>
              </div>
            </div>
          )}
          <div
            className="restaurant-mobile-detail-bottom-next-dropdown"
            onClick={() => {
              setClickMenu3(!clickMenu3);
            }}
          >
            <span>음료</span>
            {clickMenu3 ? (
              <img
                src={under_arrow}
                alt=""
                className="restaurant-mobile-detail-bottom-dropdown-svg"
              />
            ) : (
              <img src={up_arrow} alt="" className="restaurant-mobile-detail-bottom-dropdown-svg" />
            )}
          </div>
          {clickMenu3 && (
            <div className="restaurant-mobile-detail-bottom-menu-list">
              <div className="restaurant-mobile-detail-bottom-menu">
                <div className="restaurant-mobile-detail-bottom-menu-img-div">
                  <img
                    src={Circle_human}
                    alt=""
                    className="restaurant-mobile-detail-bottom-menu-img"
                  />
                  <div className="restaurant-mobile-detail-bottom-menu-heart-div">
                    <img
                      src={empty_heart}
                      alt=""
                      className="restaurant-mobile-detail-bottom-menu-heart"
                    />
                    <p>0</p>
                  </div>
                </div>
                <div className="restaurant-mobile-detail-bottom-menu-text-div">
                  <div>
                    <p className="restaurant-mobile-menu-name">등심돈카츠 정식</p>
                    <span>
                      등심돈카츠(200g)+밥+장국+샐러드+김치+단무지+돈카츠소스+샐러드참깨소스
                    </span>
                  </div>
                  <p className="restaurant-mobile-menu-price">8,900원</p>
                </div>
              </div>
            </div>
          )}
          <div
            className="restaurant-mobile-detail-bottom-next-dropdown"
            onClick={() => {
              setClickMenu4(!clickMenu4);
            }}
          >
            <span>기타</span>
            {clickMenu4 ? (
              <img
                src={under_arrow}
                alt=""
                className="restaurant-mobile-detail-bottom-dropdown-svg"
              />
            ) : (
              <img src={up_arrow} alt="" className="restaurant-mobile-detail-bottom-dropdown-svg" />
            )}
          </div>
          {clickMenu4 && (
            <div className="restaurant-mobile-detail-bottom-menu-list">
              <div className="restaurant-mobile-detail-bottom-menu">
                <div className="restaurant-mobile-detail-bottom-menu-img-div">
                  <img
                    src={Circle_human}
                    alt=""
                    className="restaurant-mobile-detail-bottom-menu-img"
                  />
                  <div className="restaurant-mobile-detail-bottom-menu-heart-div">
                    <img
                      src={empty_heart}
                      alt=""
                      className="restaurant-mobile-detail-bottom-menu-heart"
                    />
                    <p>0</p>
                  </div>
                </div>
                <div className="restaurant-mobile-detail-bottom-menu-text-div">
                  <div>
                    <p className="restaurant-mobile-menu-name">등심돈카츠 정식</p>
                    <span>
                      등심돈카츠(200g)+밥+장국+샐러드+김치+단무지+돈카츠소스+샐러드참깨소스
                    </span>
                  </div>
                  <p className="restaurant-mobile-menu-price">8,900원</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Mobile>
    </>
  );
};

export default RestaurantMenu;
