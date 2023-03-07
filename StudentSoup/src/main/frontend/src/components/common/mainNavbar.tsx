import './mainNavbar.scss';
import { Link } from 'react-router-dom';
import { DesktopHeader, MobileHeader } from '../../mediaQuery';
import mainLogo from '../../img/mainLogo.svg';
import Circle_human from '../../img/circle_human.png';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const MainNavbar = () => {
  const [click, isClick] = useState<boolean>(false);
  const [login, isLogin] = useState<boolean>(true);

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
        <nav className="navbar-items">
          <Link to="/" className="navbar-logo-links">
            <img src={mainLogo} className="navbar-logo" />
          </Link>
          <ul className="nav-menu">
            <li className="nav-li">
              <Link to="/notice" className="nav-links">
                <i>공지사항</i>
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/help" className="nav-links">
                <i>고객센터</i>
              </Link>
            </li>
            <li className="nav-li">
              {login ? (
                <div className="navbar-logout-div" onClick={handleLogout}>
                  <i>
                    <img
                      src={`/image/${IMAGE_FILE_ID}`}
                      alt=""
                      onError={handleImgError}
                      className="navbar-logout"
                    />
                    <p className="navbar-hover-text">로그아웃</p>
                  </i>
                </div>
              ) : (
                <Link to="/login" className="nav-links">
                  <i>로그인</i>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </DesktopHeader>
      <MobileHeader>
        <nav className="mobile-navbar-items">
          <Link to="/" className="navbar-logo-links">
            <img src={mainLogo} className="navbar-logo" />
          </Link>
          <div className="mobile-nav-menu">
            {click ? (
              <FontAwesomeIcon icon={faXmark} className="mobile-nav-menu-icon" />
            ) : login ? (
              <img
                src={`/image/${IMAGE_FILE_ID}`}
                alt=""
                onError={handleImgError}
                onMouseDown={handleClickMenu}
                className="mobile-nav-menu-profile"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="mobile-nav-menu-icon"
                onMouseDown={handleClickMenu}
              />
            )}
          </div>
          <ul
            ref={searchRef}
            className={click ? 'mobile-nav-menu-list active' : 'mobile-nav-menu-list'}
          >
            <li>
              <Link to="/notice" className="mobile-nav-link">
                <div className="mobile-nav-list">
                  <i className="mobile-nav-listItme">공지사항</i>
                  <FontAwesomeIcon icon={faAngleRight} className="mobile-nav-icons" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/notice" className="mobile-nav-link">
                <div className="mobile-nav-list">
                  <i className="mobile-nav-listItme">고객센터</i>
                  <FontAwesomeIcon icon={faAngleRight} className="mobile-nav-icons" />
                </div>
              </Link>
            </li>
            <li>
              {login ? (
                <Link to="/notice" className="mobile-nav-link">
                  <div className="mobile-nav-list">
                    <i className="mobile-nav-listItme">로그아웃</i>
                    <FontAwesomeIcon icon={faAngleRight} className="mobile-nav-icons" />
                  </div>
                </Link>
              ) : (
                <Link to="/notice" className="mobile-nav-link">
                  <div className="mobile-nav-list">
                    <i className="mobile-nav-listItme">로그인</i>
                    <FontAwesomeIcon icon={faAngleRight} className="mobile-nav-icons" />
                  </div>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </MobileHeader>
    </>
  );
};

export default MainNavbar;
