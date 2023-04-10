import './restaurantNavbar.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DesktopRestaurantHeader, Mobile, MobileRestaurantHeader } from '../../mediaQuery';
import mainLogo from '../../img/mainLogo.svg';
import Circle_human from '../../img/circle_human.png';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import SearchIcon from './../../img/restaurant_search.svg';
import { SchoolList, type SchoolListType } from '../home/data/SchoolList';

const RestaurantNavbar = () => {
  const [schoolComponent, setSchoolComponent] = useState<any>([]);
  const [schoolName, setSchoolName] = useState<string>('');
  const [isUseSearch, setIsUseSearch] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const { state } = useLocation();
  const IMAGE_FILE_ID = String(sessionStorage.getItem('fileName'));

  const searchRef = useRef<HTMLUListElement | null>(null);
  const navigate = useNavigate();

  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  const saveSchoolName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSchoolName(e.target.value);
    setIsUseSearch(true);
  };

  const handleClickSearch = useCallback(() => {
    if (!schoolName) {
      Toast.fire({
        icon: 'error',
        title: '학교를 입력해주세요.',
      });
      return;
    } else if (
      schoolComponent.find((item: { schoolName: string }) => item.schoolName === schoolName) ===
      undefined
    ) {
      Toast.fire({
        toast: true,
        icon: 'error',
        title: '학교 정보가 없습니다.',
      });
      return;
    }

    setIsUseSearch(false);
    setIsMenuOpen(false);
    setSchoolName('');
    navigate(`/restaurant/${schoolName}`, { state: schoolName });
  }, [schoolName, schoolComponent]);

  const activeEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleClickSearch();
    }
  };

  const filterSchoolName = schoolComponent.filter((item: { schoolName: string | string[] }) => {
    return item.schoolName.includes(schoolName);
  });

  const handleClickMenu = (e: React.MouseEvent) => {
    e.stopPropagation();

    setIsMenuOpen(!isMenuOpen);
  };

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = Circle_human;
  };

  const handleLogout = () => {
    setIsMenuOpen(false);

    Swal.fire({
      title: '로그아웃 시도',
      text: '로그아웃을 하시겠습니까?',
      icon: 'warning',

      showCancelButton: true,
      confirmButtonColor: '#ff611d',
      cancelButtonColor: '#bcbcbc',
      confirmButtonText: '확인',
      cancelButtonText: '취소',
    }).then(result => {
      if (result.isConfirmed) {
        localStorage.removeItem('access-token');
        localStorage.removeItem('refresh-token');

        setIsLogin(false);

        Swal.fire('로그아웃 성공', '로그아웃이 완료되었습니다.', 'success');
      }
    });
  };

  const onCheckClickOutside = (e: MouseEvent) => {
    if (isMenuOpen && searchRef.current && !searchRef.current.contains(e.target as Node)) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const loginCheck = () => {
    return localStorage.getItem('access-token') ? setIsLogin(true) : setIsLogin(false);
  };

  useEffect(() => {
    loginCheck();
    SchoolList()
      .then(res => {
        setSchoolComponent(res.data);
      })
      .catch(err => {
        console.error(err);
      });

    document.addEventListener('mousedown', onCheckClickOutside);

    return () => {
      document.removeEventListener('mousedown', onCheckClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <DesktopRestaurantHeader>
        <nav className="restaurant-navbar-items">
          <div className="restaurant-navbar-left">
            <Link to="/" className="restaurant-navbar-logo-links">
              <img src={mainLogo} className="restaurant-navbar-logo" />
            </Link>
            <div className="restaurant-navbar-input-div">
              <input
                type="search"
                onChange={saveSchoolName}
                value={schoolName}
                placeholder="지역 또는 학교명을 입력하세요."
                className="restaurant-navbar-input"
                onKeyDown={e => activeEnter(e)}
              />
              <img
                src={SearchIcon}
                className="restaurant-navbar-img"
                alt="검색이미지"
                onClick={handleClickSearch}
              />
              {schoolName && isUseSearch && (
                <>
                  {filterSchoolName.map((school: SchoolListType) => (
                    <div
                      onClick={() => {
                        setSchoolName(school.schoolName);
                      }}
                      className="search-school-list"
                      key={school.schoolId}
                    >
                      {school.schoolName}
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
          <ul className="restaurant-nav-menu">
            <li className="restaurant-nav-li">
              <Link to="/notice" className="restaurant-nav-links">
                <i>공지사항</i>
              </Link>
            </li>
            <li className="restaurant-nav-li">
              <Link to="/customerservice" className="restaurant-nav-links">
                <i>고객센터</i>
              </Link>
            </li>
            {isLogin ? (
              <>
                <li className="restaurant-nav-li">
                  <Link to="/restaurant" className="restaurant-nav-links">
                    <i>주변 맛집</i>
                  </Link>
                </li>
                <li className="restaurant-nav-li">
                  <Link to="/board" className="restaurant-nav-links">
                    <i>학교 게시판</i>
                  </Link>
                </li>
                <li className="restaurant-nav-li">
                  <Link to="/mypage" className="restaurant-nav-links">
                    <i>마이페이지</i>
                  </Link>
                </li>
                <li className="restaurant-nav-li">
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
                </li>
              </>
            ) : (
              <li className="restaurant-nav-li" onClick={handleLogout}>
                <i>로그인</i>
              </li>
            )}
          </ul>
        </nav>
      </DesktopRestaurantHeader>
      <MobileRestaurantHeader>
        <nav className="tablet-restaurant-navbar-items">
          <Link to="/" className="restaurant-navbar-logo-links">
            <img src={mainLogo} className="restaurant-navbar-logo" />
          </Link>
          <div className="tablet-restaurant-nav-menu">
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faXmark} className="tablet-restaurant-nav-menu-icon" />
            ) : isLogin ? (
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
              isMenuOpen
                ? 'tablet-restaurant-nav-menu-list active'
                : 'tablet-restaurant-nav-menu-list'
            }
          >
            <li className="tablet-restaurant-navbar-input-div">
              <div className="tablet-restaurant-navbar-input-div">
                <input
                  type="search"
                  onChange={saveSchoolName}
                  value={schoolName}
                  placeholder="지역 또는 학교명을 입력하세요."
                  className="tablet-restaurant-navbar-input"
                  onKeyDown={e => activeEnter(e)}
                />
                <img
                  src={SearchIcon}
                  className="tablet-restaurant-navbar-img"
                  alt="검색이미지"
                  onClick={handleClickSearch}
                />
                {schoolName && isUseSearch && (
                  <>
                    {filterSchoolName.map((school: SchoolListType) => (
                      <div
                        onClick={() => {
                          setSchoolName(school.schoolName);
                        }}
                        className="tablet-search-school-list"
                        key={school.schoolId}
                      >
                        {school.schoolName}
                      </div>
                    ))}
                  </>
                )}
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
              <Link to="/customerservice" className="tablet-restaurant-nav-link">
                <div className="tablet-restaurant-nav-list">
                  <i className="tablet-restaurant-nav-listItme">고객센터</i>
                  <FontAwesomeIcon icon={faAngleRight} className="tablet-restaurant-nav-icons" />
                </div>
              </Link>
            </li>
            {isLogin ? (
              <>
                <li>
                  <Link to="/restaurant" className="tablet-restaurant-nav-link">
                    <div className="tablet-restaurant-nav-list">
                      <i className="tablet-restaurant-nav-listItme">주변 맛집</i>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="tablet-restaurant-nav-icons"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/board" className="tablet-restaurant-nav-links">
                    <div className="tablet-restaurant-nav-list">
                      <i className="tablet-restaurant-nav-listItme">학교 게시판</i>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="tablet-restaurant-nav-icons"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/mypage" className="tablet-restaurant-nav-links">
                    <div className="tablet-restaurant-nav-list">
                      <i className="tablet-restaurant-nav-listItme">마이페이지</i>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="tablet-restaurant-nav-icons"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <div className="tablet-restaurant-nav-list" onClick={handleLogout}>
                    <i className="tablet-restaurant-nav-listItme">로그아웃</i>
                    <FontAwesomeIcon icon={faAngleRight} className="tablet-restaurant-nav-icons" />
                  </div>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className="tablet-restaurant-nav-link">
                  <div className="tablet-restaurant-nav-list">
                    <i className="tablet-restaurant-nav-listItme">로그인</i>
                    <FontAwesomeIcon icon={faAngleRight} className="tablet-restaurant-nav-icons" />
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </MobileRestaurantHeader>
      <Mobile>
        <nav className="mobile-restaurant-navbar-items">
          <Link to="/" className="restaurant-navbar-logo-links">
            <img src={mainLogo} className="restaurant-navbar-logo" />
          </Link>
          <div className="mobile-restaurant-nav-menu">
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faXmark} className="mobile-restaurant-nav-menu-icon" />
            ) : isLogin ? (
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
              isMenuOpen
                ? 'mobile-restaurant-nav-menu-list active'
                : 'mobile-restaurant-nav-menu-list'
            }
          >
            <li className="mobile-restaurant-navbar-input-div">
              <div className="mobile-restaurant-navbar-input-div">
                <input
                  type="search"
                  onChange={saveSchoolName}
                  value={schoolName}
                  placeholder="지역 또는 학교명을 입력하세요."
                  className="mobile-restaurant-navbar-input"
                  onKeyDown={e => activeEnter(e)}
                />
                <img
                  src={SearchIcon}
                  className="mobile-restaurant-navbar-img"
                  alt="검색이미지"
                  onClick={handleClickSearch}
                />
                {schoolName && isUseSearch && (
                  <>
                    {filterSchoolName.map((school: SchoolListType) => (
                      <div
                        onClick={() => {
                          setSchoolName(school.schoolName);
                        }}
                        className="mobile-search-school-list"
                        key={school.schoolId}
                      >
                        {school.schoolName}
                      </div>
                    ))}
                  </>
                )}
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
              <Link to="/customerservice" className="mobile-restaurant-nav-link">
                <div className="mobile-restaurant-nav-list">
                  <i className="mobile-restaurant-nav-listItme">고객센터</i>
                  <FontAwesomeIcon icon={faAngleRight} className="mobile-restaurant-nav-icons" />
                </div>
              </Link>
            </li>
            {isLogin ? (
              <>
                <li>
                  <Link to="/restaurant" className="mobile-restaurant-nav-link">
                    <div className="mobile-restaurant-nav-list">
                      <i className="mobile-restaurant-nav-listItme">주변 맛집</i>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="mobile-restaurant-nav-icons"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/board" className="mobile-restaurant-nav-link">
                    <div className="mobile-restaurant-nav-list">
                      <i className="mobile-restaurant-nav-listItme">학교 게시판</i>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="mobile-restaurant-nav-icons"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/mypage" className="mobile-restaurant-nav-link">
                    <div className="mobile-restaurant-nav-list">
                      <i className="mobile-restaurant-nav-listItme">마이페이지</i>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="mobile-restaurant-nav-icons"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <div className="mobile-restaurant-nav-list" onClick={handleLogout}>
                    <i className="mobile-restaurant-nav-listItme">로그아웃</i>
                    <FontAwesomeIcon icon={faAngleRight} className="mobile-restaurant-nav-icons" />
                  </div>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="mobile-restaurant-nav-link">
                    <div className="mobile-restaurant-nav-list">
                      <i className="mobile-restaurant-nav-listItme">로그인</i>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="mobile-restaurant-nav-icons"
                      />
                    </div>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </Mobile>
    </>
  );
};

export default RestaurantNavbar;
