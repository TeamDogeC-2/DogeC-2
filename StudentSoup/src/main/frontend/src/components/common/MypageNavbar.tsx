import './mypageNavbar.scss';
import { Link } from 'react-router-dom';
import { DesktopHeader, Mobile, MobileHeader } from '../../mediaQuery';
import mainLogo from '../../img/mainLogo.svg';
import Circle_human from '../../img/circle_human.png';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faBars,
  faXmark,
  faEllipsis,
  faBarsStaggered,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import MypageSidebar from './MypageSidebar';

const MypageNavbar = () => {
  const [click, isClick] = useState<boolean>(false);
  const [login, isLogin] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    isLogin(false);
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <MypageSidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      <DesktopHeader>
        <nav className="mypage-navbar-items">
          <div className="mypage-navbar-menuhome">
            <FontAwesomeIcon
              icon={faBars}
              size="2xl"
              className="mypage-navbar-menu-icon"
              onClick={toggleSidebar}
            />
            <Link to="/" className="mypage-navbar-logo-links">
              <img src={mainLogo} className="mypage-navbar-logo" />
            </Link>
          </div>
          <ul className="mypage-nav-menu">
            <li className="mypage-nav-li">
              <Link to="/board" className="mypage-nav-links">
                <FontAwesomeIcon icon={faBarsStaggered} className="mypage-nav-icons" />
                <i>BOARD</i>
              </Link>
            </li>
            <li className="mypage-nav-li">
              <Link to="/restaurant" className="mypage-nav-links">
                <FontAwesomeIcon icon={faHeart} className="mypage-nav-heart-icons" />
                <i>RESTAURANT</i>
              </Link>
            </li>
            <li className="mypage-nav-li">
              <Link to="/faq" className="mypage-nav-links">
                <FontAwesomeIcon icon={faEllipsis} className="mypage-nav-icons" />
                <i>FAQ</i>
              </Link>
            </li>
            <li className="mypage-nav-li">
              {login ? (
                <div className="mypage-navbar-logout-div" onClick={handleLogout}>
                  <i>
                    <img
                      src={`/image/${IMAGE_FILE_ID}`}
                      alt=""
                      onError={handleImgError}
                      className="mypage-navbar-logout"
                    />
                    <p className="mypage-navbar-hover-text">로그아웃</p>
                  </i>
                </div>
              ) : (
                <Link to="/login" className="mypage-nav-links">
                  <i>로그인</i>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </DesktopHeader>
      <MobileHeader>
        <nav className="tablet-mypage-navbar-items">
          <FontAwesomeIcon
            icon={faBars}
            size="2xl"
            className="mypage-navbar-menu-icon"
            onClick={toggleSidebar}
          />
          <Link to="/" className="mypage-navbar-logo-links">
            <img src={mainLogo} className="mypage-navbar-logo" />
          </Link>
          <div className="tablet-mypage-nav-menu">
            {click ? (
              <FontAwesomeIcon icon={faXmark} className="tablet-mypage-nav-menu-icon" />
            ) : login ? (
              <img
                src={`/image/${IMAGE_FILE_ID}`}
                alt=""
                onError={handleImgError}
                onMouseDown={handleClickMenu}
                className="tablet-mypage-nav-menu-profile"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="tablet-mypage-nav-menu-icon"
                onMouseDown={handleClickMenu}
              />
            )}
          </div>
          <ul
            ref={searchRef}
            className={click ? 'tablet-mypage-nav-menu-list active' : 'tablet-mypage-nav-menu-list'}
          >
            <li>
              <Link to="/board" className="tablet-mypage-nav-link">
                <div className="tablet-mypage-nav-list">
                  <i className="tablet-mypage-nav-listItme">학교게시판</i>
                  <FontAwesomeIcon icon={faAngleRight} className="tablet-mypage-nav-icons" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/restaurant" className="tablet-mypage-nav-link">
                <div className="tablet-mypage-nav-list">
                  <i className="tablet-mypage-nav-listItme">주변맛집</i>
                  <FontAwesomeIcon icon={faAngleRight} className="tablet-mypage-nav-icons" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/notice" className="tablet-mypage-nav-link">
                <div className="tablet-mypage-nav-list">
                  <i className="tablet-mypage-nav-listItme">공지사항</i>
                  <FontAwesomeIcon icon={faAngleRight} className="tablet-mypage-nav-icons" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/faq" className="tablet-mypage-nav-link">
                <div className="tablet-mypage-nav-list">
                  <i className="tablet-mypage-nav-listItme">FAQ</i>
                  <FontAwesomeIcon icon={faAngleRight} className="tablet-mypage-nav-icons" />
                </div>
              </Link>
            </li>
            <li>
              {login ? (
                <Link to="/" className="tablet-mypage-nav-link">
                  <div className="tablet-mypage-nav-list">
                    <i className="tablet-mypage-nav-listItme">로그아웃</i>
                    <FontAwesomeIcon icon={faAngleRight} className="tablet-mypage-nav-icons" />
                  </div>
                </Link>
              ) : (
                <Link to="/login" className="tablet-mypage-nav-link">
                  <div className="tablet-mypage-nav-list">
                    <i className="tablet-mypage-nav-listItme">로그인</i>
                    <FontAwesomeIcon icon={faAngleRight} className="tablet-mypage-nav-icons" />
                  </div>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </MobileHeader>
      <Mobile>
        <nav className="mobile-mypage-navbar-items">
          <FontAwesomeIcon
            icon={faBars}
            size="2xl"
            className="mypage-navbar-menu-icon"
            onClick={toggleSidebar}
          />
          <Link to="/" className="mypage-navbar-logo-links">
            <img src={mainLogo} className="mypage-navbar-logo" />
          </Link>
          <div className="mobile-mypage-nav-menu">
            {click ? (
              <FontAwesomeIcon icon={faXmark} className="mobile-mypage-nav-menu-icon" />
            ) : login ? (
              <img
                src={`/image/${IMAGE_FILE_ID}`}
                alt=""
                onError={handleImgError}
                onMouseDown={handleClickMenu}
                className="mobile-mypage-nav-menu-profile"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="mobile-mypage-nav-menu-icon"
                onMouseDown={handleClickMenu}
              />
            )}
          </div>
          <ul
            ref={searchRef}
            className={click ? 'mobile-mypage-nav-menu-list active' : 'mobile-mypage-nav-menu-list'}
          >
            <li>
              <Link to="/board" className="mobile-mypage-nav-link">
                <div className="mobile-mypage-nav-list">
                  <i className="mobile-mypage-nav-listItme">학교게시판</i>
                  <FontAwesomeIcon icon={faAngleRight} className="mobile-mypage-nav-icons" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/restaurant" className="mobile-mypage-nav-link">
                <div className="mobile-mypage-nav-list">
                  <i className="mobile-mypage-nav-listItme">주변맛집</i>
                  <FontAwesomeIcon icon={faAngleRight} className="mobile-mypage-nav-icons" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/notice" className="mobile-mypage-nav-link">
                <div className="mobile-mypage-nav-list">
                  <i className="mobile-mypage-nav-listItme">공지사항</i>
                  <FontAwesomeIcon icon={faAngleRight} className="mobile-mypage-nav-icons" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/faq" className="mobile-mypage-nav-link">
                <div className="mobile-mypage-nav-list">
                  <i className="mobile-mypage-nav-listItme">FAQ</i>
                  <FontAwesomeIcon icon={faAngleRight} className="mobile-mypage-nav-icons" />
                </div>
              </Link>
            </li>
            <li>
              {login ? (
                <Link to="/" className="mobile-mypage-nav-link">
                  <div className="mobile-mypage-nav-list">
                    <i className="mobile-mypage-nav-listItme">로그아웃</i>
                    <FontAwesomeIcon icon={faAngleRight} className="mobile-mypage-nav-icons" />
                  </div>
                </Link>
              ) : (
                <Link to="/login" className="mobile-mypage-nav-link">
                  <div className="mobile-mypage-nav-list">
                    <i className="mobile-mypage-nav-listItme">로그인</i>
                    <FontAwesomeIcon icon={faAngleRight} className="mobile-mypage-nav-icons" />
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

export default MypageNavbar;
