import './mypageNavbar.scss';
import { Link, type NavigateFunction, useNavigate } from 'react-router-dom';
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
  faChevronDown,
  faChevronRight,
  faComments,
  faStar,
  faCalendar,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
interface MypageNavbarProps {
  selectPage: string;
  updateSelectPage: (page: string) => void;
  memberId?: string | null;
}
const MypageNavbar = ({ selectPage, updateSelectPage, memberId }: MypageNavbarProps) => {
  const navigate = useNavigate();
  const [click, isClick] = useState<boolean>(false);
  const [login, isLogin] = useState<boolean>(false);
  const [sidebarOpen, isSidebarOpen] = useState(false);

  const IMAGE_FILE_ID = String(sessionStorage.getItem('fileName'));

  const searchRef = useRef<any>();
  const sidebarRef = useRef<any>();

  const handleClickMenu = (e: any) => {
    e.stopPropagation();
    isClick(!click);
    if (sidebarOpen) {
      isSidebarOpen(!sidebarOpen);
    }
  };

  const handleImgError = (e: any) => {
    e.target.src = Circle_human;
  };

  const handleLogout = (e: any) => {
    isLogin(false);
  };
  const onCheckClickOutside = (e: MouseEvent) => {
    if (click && searchRef.current && !searchRef.current.contains(e.target as Node)) {
      isClick(!click);
    }
  };
  const onCheckSidebarClickOutSide = (e: MouseEvent) => {
    if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
      isSidebarOpen(!sidebarOpen);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', onCheckSidebarClickOutSide);
    document.addEventListener('mousedown', onCheckClickOutside);
    return () => {
      document.removeEventListener('mousedown', onCheckSidebarClickOutSide);
      document.removeEventListener('mousedown', onCheckClickOutside);
    };
  }, [click, sidebarOpen]);
  const toggleSidebar = (e: any) => {
    e.stopPropagation();
    isSidebarOpen(!sidebarOpen);
    if (click) {
      isClick(!click);
    }
  };
  const handleItemClick = (page: string) => {
    updateSelectPage(page);
    if (page === 'scheduler' && selectPage !== 'scheduler') {
      navigate('/mypage/scheduler', { state: memberId });
    } else if (selectPage === 'scheduler') {
      navigate('/mypage');
    }
  };
  return (
    <>
      <div className={`overlay ${sidebarOpen ? 'open' : ''}`}></div>
      <div ref={sidebarRef} className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul>
          <li
            className={selectPage === 'preview' ? 'selected' : ''}
            onClick={() => handleItemClick('preview')}
          >
            <div className="sidebar-contents">
              <div>
                <FontAwesomeIcon icon={faHouse} /> 홈
              </div>
              {selectPage !== 'scheduler' ? (
                <FontAwesomeIcon icon={faChevronDown} />
              ) : (
                <FontAwesomeIcon icon={faChevronRight} />
              )}
            </div>
          </li>
          {selectPage !== 'scheduler' && (
            <>
              <li
                className={selectPage === 'boardreply' ? 'selected' : ''}
                onClick={() => handleItemClick('boardreply')}
              >
                <FontAwesomeIcon icon={faComments} /> 나의 게시판/댓글
              </li>
              <li
                className={selectPage === 'review' ? 'selected' : ''}
                onClick={() => handleItemClick('review')}
              >
                <FontAwesomeIcon icon={faStar} /> 나의 리뷰
              </li>
            </>
          )}
          <li
            className={selectPage === 'scheduler' ? 'selected' : ''}
            onClick={() => handleItemClick('scheduler')}
          >
            <FontAwesomeIcon icon={faCalendar} /> 시간표
          </li>
        </ul>
      </div>
      <DesktopHeader>
        <nav className="mypage-navbar-items">
          <div className="mypage-navbar-menuhome">
            <FontAwesomeIcon
              icon={faBars}
              size="2xl"
              className="mypage-navbar-menu-icon"
              onMouseDown={toggleSidebar}
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
            onMouseDown={toggleSidebar}
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
                onClick={handleClickMenu}
                className="tablet-mypage-nav-menu-profile"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="tablet-mypage-nav-menu-icon"
                onClick={handleClickMenu}
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
            onMouseDown={toggleSidebar}
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
