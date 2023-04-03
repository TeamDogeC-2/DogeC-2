import './restaurantNavbar.scss';
import { Link } from 'react-router-dom';
import {
  DesktopHeader,
  DesktopRestaurantHeader,
  Mobile,
  MobileHeader,
  MobileRestaurantHeader,
} from '../../mediaQuery';
import mainLogo from '../../img/mainLogo.svg';
import Circle_human from '../../img/circle_human.png';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const RestaurantNavbar = () => {
  const [click, isClick] = useState<boolean>(false);
  const [login, isLogin] = useState<boolean>(false);

  const IMAGE_FILE_ID = String(sessionStorage.getItem('fileName'));

  const searchRef = useRef<any>();

  const handleClickMenu = (e: any) => {
    e.stopPropagation();
    isClick(!click);
  };

  const handleImgError = (e: any) => {
    e.target.src = Circle_human;
  };

  const handleLogout = (e: any) => {
    console.log(e);
  };

  useEffect(() => {
    const onCheckClickOutside = (e: MouseEvent) => {
      if (click && searchRef.current && !searchRef.current.contains(e.target as Node)) {
        isClick(!click);
      }
    };
    document.addEventListener('mousedown', onCheckClickOutside);
    return () => {
      document.removeEventListener('mousedown', onCheckClickOutside);
    };
  }, [click]);
  return (
    <>
      <DesktopHeader>
        <nav className="restaurant-navbar-items">
          <div className="restaurant-navbar-left">
            <Link to="/" className="restaurant-navbar-logo-links">
              <img src={mainLogo} className="restaurant-navbar-logo" />
            </Link>
            <input
              type="text"
              placeholder="지역 또는 학교명을 입력하세요."
              className="restaurant-navbar-input"
            />
          </div>
          <ul className="restaurant-nav-menu">
            <li className="restaurant-nav-li">
              <Link to="/notice" className="restaurant-nav-links">
                <i>공지사항</i>
              </Link>
            </li>
            <li className="restaurant-nav-li">
              <Link to="/help" className="restaurant-nav-links">
                <i>고객센터</i>
              </Link>
            </li>
            <li className="restaurant-nav-li">
              {login ? (
                <div className="restaurant-navbar-logout-div" onClick={handleLogout}>
                  <i>
                    <img
                      src={`/image/${IMAGE_FILE_ID}`}
                      alt=""
                      onError={handleImgError}
                      className="restaurant-navbar-logout"
                    />
                    <p className="restaurant-navbar-hover-text">로그아웃</p>
                  </i>
                </div>
              ) : (
                <Link to="/login" className="restaurant-nav-links">
                  <i>로그인</i>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </DesktopHeader>
      <MobileHeader>
        <nav className="tablet-restaurant-navbar-items">
          <Link to="/" className="restaurant-navbar-logo-links">
            <img src={mainLogo} className="restaurant-navbar-logo" />
          </Link>
          <div className="tablet-restaurant-nav-menu">
            {click ? (
              <FontAwesomeIcon icon={faXmark} className="tablet-restaurant-nav-menu-icon" />
            ) : login ? (
              <img
                src={`/image/${IMAGE_FILE_ID}`}
                alt=""
                onError={handleImgError}
                onMouseDown={handleClickMenu}
                className="tablet-restaurant-nav-menu-profile"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="tablet-restaurant-nav-menu-icon"
                onMouseDown={handleClickMenu}
              />
            )}
          </div>
          <ul
            ref={searchRef}
            className={
              click ? 'tablet-restaurant-nav-menu-list active' : 'tablet-restaurant-nav-menu-list'
            }
          >
            <li className="tablet-restaurant-navbar-input-div">
              <div className="tablet-restaurant-navbar-input-div">
                <input
                  type="text"
                  placeholder="지역 또는 학교명을 입력하세요."
                  className="tablet-restaurant-navbar-input"
                />
              </div>
            </li>
            <li>
              <Link to="/notice" className="tablet-restaurant-nav-link">
                <div className="tablet-restaurant-nav-list">
                  <i className="tablet-restaurant-nav-listItme">공지사항</i>
                  <FontAwesomeIcon icon={faAngleRight} className="tablet-restaurant-nav-icons" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/notice" className="tablet-restaurant-nav-link">
                <div className="tablet-restaurant-nav-list">
                  <i className="tablet-restaurant-nav-listItme">고객센터</i>
                  <FontAwesomeIcon icon={faAngleRight} className="tablet-restaurant-nav-icons" />
                </div>
              </Link>
            </li>
            <li>
              {login ? (
                <Link to="/notice" className="tablet-nav-link">
                  <div className="tablet-restaurant-nav-list">
                    <i className="tablet-restaurant-nav-listItme">로그아웃</i>
                    <FontAwesomeIcon icon={faAngleRight} className="tablet-restaurant-nav-icons" />
                  </div>
                </Link>
              ) : (
                <Link to="/notice" className="tablet-restaurant-nav-link">
                  <div className="tablet-restaurant-nav-list">
                    <i className="tablet-restaurant-nav-listItme">로그인</i>
                    <FontAwesomeIcon icon={faAngleRight} className="tablet-restaurant-nav-icons" />
                  </div>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </MobileHeader>
      <Mobile>
        <nav className="mobile-restaurant-navbar-items">
          <Link to="/" className="restaurant-navbar-logo-links">
            <img src={mainLogo} className="restaurant-navbar-logo" />
          </Link>
          <div className="mobile-restaurant-nav-menu">
            {click ? (
              <FontAwesomeIcon icon={faXmark} className="mobile-restaurant-nav-menu-icon" />
            ) : login ? (
              <img
                src={`/image/${IMAGE_FILE_ID}`}
                alt=""
                onError={handleImgError}
                onMouseDown={handleClickMenu}
                className="mobile-restaurant-nav-menu-profile"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="mobile-restaurant-nav-menu-icon"
                onMouseDown={handleClickMenu}
              />
            )}
          </div>
          <ul
            ref={searchRef}
            className={
              click ? 'mobile-restaurant-nav-menu-list active' : 'mobile-restaurant-nav-menu-list'
            }
          >
            <li className="mobile-restaurant-navbar-input-div">
              <div className="mobile-restaurant-navbar-input-div">
                <input
                  type="text"
                  placeholder="지역 또는 학교명을 입력하세요."
                  className="mobile-restaurant-navbar-input"
                />
              </div>
            </li>
            <li>
              <Link to="/notice" className="mobile-restaurant-nav-link">
                <div className="mobile-restaurant-nav-list">
                  <i className="mobile-restaurant-nav-listItme">공지사항</i>
                  <FontAwesomeIcon icon={faAngleRight} className="mobile-restaurant-nav-icons" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/notice" className="mobile-restaurant-nav-link">
                <div className="mobile-restaurant-nav-list">
                  <i className="mobile-restaurant-nav-listItme">고객센터</i>
                  <FontAwesomeIcon icon={faAngleRight} className="mobile-restaurant-nav-icons" />
                </div>
              </Link>
            </li>
            <li>
              {login ? (
                <Link to="/notice" className="mobile-nav-link">
                  <div className="mobile-restaurant-nav-list">
                    <i className="mobile-restaurant-nav-listItme">로그아웃</i>
                    <FontAwesomeIcon icon={faAngleRight} className="mobile-restaurant-nav-icons" />
                  </div>
                </Link>
              ) : (
                <Link to="/notice" className="mobile-restaurant-nav-link">
                  <div className="mobile-restaurant-nav-list">
                    <i className="mobile-restaurant-nav-listItme">로그인</i>
                    <FontAwesomeIcon icon={faAngleRight} className="mobile-restaurant-nav-icons" />
                  </div>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Mobile>
    </>
  );
};

export default RestaurantNavbar;
