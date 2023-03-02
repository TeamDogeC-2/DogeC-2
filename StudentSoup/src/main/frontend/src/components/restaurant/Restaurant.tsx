import axios from 'axios';
import view_count from '../../img/view_count.svg';
import heart from '../../img/heart.svg';
import star from '../../img/star.svg';
import filter from '../../img/filter.svg';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MainNavbar from '../common/mainNavbar';
import './restaurant.scss';
import { DesktopHeader, Mobile, MobileHeader } from '../../mediaQuery';

const Restaurant = () => {
  const [category, setCategory] = useState<string>('ALL');
  const [size, setSize] = useState<number>(6);
  const [sort, setSort] = useState<number>(0);

  const [total, isTotal] = useState<number>();
  const [set, isSet] = useState<any[]>();
  const [latitude, setLatitude] = useState<any>();
  const [longitude, setLongitude] = useState<any>();
  const url = '/restaurants';
  const state = useLocation();
  const navigate = useNavigate();

  const postRestaurant = () => {
    axios
      .post(
        url,
        {
          schoolName: state.state,
        },
        {
          params: {
            size,
            sorted: sort,
            category,
          },
        },
      )
      .then(res => {
        isTotal(res.data.restaurant.totalElements);
        isSet(res.data.restaurant.content);
        setLatitude(Number(res.data.school.schoolLatitude));
        setLongitude(Number(res.data.school.schoolLongitude));
      })
      .catch(function (_error) {
        if (!state.state) {
          alert('비정상적인 경로입니다. 메인페이지로 이동합니다.');
          navigate('/');
        }
      });
  };

  useEffect(() => {
    postRestaurant();
  }, [sort, category]);

  const handleClickCategory = (e: any) => {
    setCategory(e.target.id);
  };
  return (
    <>
      <DesktopHeader>
        <div>
          <MainNavbar />
          <div className="restaurant-main">
            <div className="restaurant-top">
              <div className="restaurant-top-div">
                <div>
                  <span className="restaurant-school-name">청운대학교</span>
                  <span className="restaurant-top-text">근처 인기 맛집</span>
                </div>
                <button className="restaurant-filter-button">정렬</button>
              </div>
              <div className="restaurant-top-map">kakaoMap</div>
            </div>
            <div className="restaurant-bottom">
              <div className="restaurant-bottom-div">
                <ul className="restaurant-bottom-list">
                  <li
                    id="ALL"
                    className={
                      category.toString() === 'ALL'
                        ? 'restaurant-bottom-li active'
                        : 'restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    전체보기
                  </li>
                  <li
                    id="KOREAN"
                    className={
                      category.toString() === 'KOREAN'
                        ? 'restaurant-bottom-li active'
                        : 'restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    한식
                  </li>
                  <li
                    id="CHINESE"
                    className={
                      category.toString() === 'CHINESE'
                        ? 'restaurant-bottom-li active'
                        : 'restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    중식
                  </li>
                  <li
                    id="WESTERN"
                    className={
                      category.toString() === 'WESTERN'
                        ? 'restaurant-bottom-li active'
                        : 'restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    양식
                  </li>
                  <li
                    id="ASIAN"
                    className={
                      category.toString() === 'ASIAN'
                        ? 'restaurant-bottom-li active'
                        : 'restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    아시아음식
                  </li>
                  <li
                    id="CAFE"
                    className={
                      category.toString() === 'CAFE'
                        ? 'restaurant-bottom-li active'
                        : 'restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    카페
                  </li>
                  <li
                    id="SNACK"
                    className={
                      category.toString() === 'SNACK'
                        ? 'restaurant-bottom-li active'
                        : 'restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    브런치
                  </li>
                  <li
                    id="SNACK"
                    className={
                      category.toString() === 'SNACK'
                        ? 'restaurant-bottom-li active'
                        : 'restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    주점
                  </li>
                  <li
                    id="FASTFOOD"
                    className={
                      category.toString() === 'FASTFOOD'
                        ? 'restaurant-bottom-li active'
                        : 'restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    패스트푸드
                  </li>
                  <li
                    id="OTHERS"
                    className={
                      category.toString() === 'OTHERS'
                        ? 'restaurant-bottom-li active'
                        : 'restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    기타
                  </li>
                </ul>
              </div>
              <hr className="underline" />
              <div className="restaurant-bottom-restaurant-list">
                {set?.map(restaurant => (
                  <div id={restaurant.restaurantId} key={restaurant.restaurantId}>
                    <img
                      src={`/image/${restaurant.fileName}`}
                      id={restaurant.restaurantId}
                      className="restaurant-bottom-restaurant-img"
                    />
                    <div className="restaurant-bottom-restaurant-text">
                      {restaurant.name}
                      <span className="restaurant-bottom-restaurant-starLiked">
                        {restaurant.starLiked}
                      </span>
                    </div>
                    <div className="restaurant-bottom-restaurant-tag">
                      {restaurant.restaurantCategory} | {restaurant.tag}
                    </div>
                    <div className="restaurant-bottom-restaurant-info">
                      <span>
                        <img src={view_count} alt="" />
                        {restaurant.viewCount}
                      </span>
                      <span>
                        <img src={star} alt="" />
                        {restaurant.starLiked}
                      </span>
                      <span>
                        <img src={heart} alt="" />
                        {restaurant.likedCount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DesktopHeader>
      <MobileHeader>
        <div>
          <MainNavbar />
          <div className="tablet-restaurant-main">
            <div className="tablet-restaurant-top">
              <div className="tablet-restaurant-top-div">
                <div className="tablet-restaurant-top-text-div">
                  <span className="tablet-restaurant-school-name">청운대학교</span>
                  <span className="tablet-restaurant-top-text">근처 인기 맛집</span>
                </div>
                <div className="tablet-restaurant-filter-button">
                  <img src={filter} alt="" className="tablet-restaurant-filter-icon" />
                  정렬
                </div>
              </div>
              <div className="tablet-restaurant-top-map">kakaoMap</div>
            </div>
            <div className="tablet-restaurant-bottom">
              <div className="tablet-restaurant-bottom-div">
                <ul className="tablet-restaurant-bottom-list">
                  <li
                    id="ALL"
                    className={
                      category.toString() === 'ALL'
                        ? 'tablet-restaurant-bottom-li active'
                        : 'tablet-restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    전체보기
                  </li>
                  <li
                    id="KOREAN"
                    className={
                      category.toString() === 'KOREAN'
                        ? 'tablet-restaurant-bottom-li active'
                        : 'tablet-restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    한식
                  </li>
                  <li
                    id="CHINESE"
                    className={
                      category.toString() === 'CHINESE'
                        ? 'tablet-restaurant-bottom-li active'
                        : 'tablet-restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    중식
                  </li>
                  <li
                    id="WESTERN"
                    className={
                      category.toString() === 'WESTERN'
                        ? 'tablet-restaurant-bottom-li active'
                        : 'tablet-restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    양식
                  </li>
                  <li
                    id="ASIAN"
                    className={
                      category.toString() === 'ASIAN'
                        ? 'tablet-restaurant-bottom-li active'
                        : 'tablet-restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    아시아음식
                  </li>
                  <li
                    id="CAFE"
                    className={
                      category.toString() === 'CAFE'
                        ? 'tablet-restaurant-bottom-li active'
                        : 'tablet-restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    카페
                  </li>
                  <li
                    id="SNACK"
                    className={
                      category.toString() === 'SNACK'
                        ? 'tablet-restaurant-bottom-li active'
                        : 'tablet-restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    브런치
                  </li>
                  <li
                    id="SNACK"
                    className={
                      category.toString() === 'SNACK'
                        ? 'tablet-restaurant-bottom-li active'
                        : 'tablet-restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    주점
                  </li>
                  <li
                    id="FASTFOOD"
                    className={
                      category.toString() === 'FASTFOOD'
                        ? 'tablet-restaurant-bottom-li active'
                        : 'tablet-restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    패스트푸드
                  </li>
                  <li
                    id="OTHERS"
                    className={
                      category.toString() === 'OTHERS'
                        ? 'tablet-restaurant-bottom-li active'
                        : 'tablet-restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    기타
                  </li>
                </ul>
              </div>
              <hr className="underline" />
              <div className="tablet-restaurant-bottom-restaurant-list">
                {set?.map(restaurant => (
                  <div id={restaurant.restaurantId} key={restaurant.restaurantId}>
                    <img
                      src={`/image/${restaurant.fileName}`}
                      id={restaurant.restaurantId}
                      className="tablet-restaurant-bottom-restaurant-img"
                    />
                    <div className="tablet-restaurant-bottom-restaurant-text">
                      {restaurant.name}
                      <span className="tablet-restaurant-bottom-restaurant-starLiked">
                        {restaurant.starLiked}
                      </span>
                    </div>
                    <div className="tablet-restaurant-bottom-restaurant-tag">
                      {restaurant.restaurantCategory} | {restaurant.tag}
                    </div>
                    <div className="tablet-restaurant-bottom-restaurant-info">
                      <span>
                        <img src={view_count} alt="" />
                        {restaurant.viewCount}
                      </span>
                      <span>
                        <img src={star} alt="" />
                        {restaurant.starLiked}
                      </span>
                      <span>
                        <img src={heart} alt="" />
                        {restaurant.likedCount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MobileHeader>
      <Mobile>
        <div>
          <MainNavbar />
          <div className="mobile-restaurant-main">
            <div className="mobile-restaurant-top">
              <div className="mobile-restaurant-top-div">
                <div className="mobile-restaurant-top-text-div">
                  <span className="mobile-restaurant-school-name">청운대학교</span>
                  <span className="mobile-restaurant-top-text">근처 인기 맛집</span>
                </div>
                <div className="mobile-restaurant-filter-button">
                  <img src={filter} alt="" className="mobile-restaurant-filter-icon" />
                  정렬
                </div>
              </div>
              <div className="mobile-restaurant-top-map">kakaoMap</div>
            </div>
            <div className="mobile-restaurant-bottom">
              <div className="mobile-restaurant-bottom-div">
                <ul className="mobile-restaurant-bottom-list">
                  <li
                    id="ALL"
                    className={
                      category.toString() === 'ALL'
                        ? 'mobile-restaurant-bottom-li active'
                        : 'mobile-restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    전체보기
                  </li>
                  <li
                    id="KOREAN"
                    className={
                      category.toString() === 'KOREAN'
                        ? 'mobile-restaurant-bottom-li active'
                        : 'mobile-restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    한식
                  </li>
                  <li
                    id="CHINESE"
                    className={
                      category.toString() === 'CHINESE'
                        ? 'mobile-restaurant-bottom-li active'
                        : 'mobile-restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    중식
                  </li>
                  <li
                    id="WESTERN"
                    className={
                      category.toString() === 'WESTERN'
                        ? 'mobile-restaurant-bottom-li active'
                        : 'mobile-restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    양식
                  </li>
                  <li
                    id="ASIAN"
                    className={
                      category.toString() === 'ASIAN'
                        ? 'mobile-restaurant-bottom-li active'
                        : 'mobile-restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    아시아음식
                  </li>
                  <li
                    id="CAFE"
                    className={
                      category.toString() === 'CAFE'
                        ? 'mobile-restaurant-bottom-li active'
                        : 'mobile-restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    카페
                  </li>
                  <li
                    id="SNACK"
                    className={
                      category.toString() === 'SNACK'
                        ? 'mobile-restaurant-bottom-li active'
                        : 'mobile-restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    브런치
                  </li>
                  <li
                    id="SNACK"
                    className={
                      category.toString() === 'SNACK'
                        ? 'mobile-restaurant-bottom-li active'
                        : 'mobile-restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    주점
                  </li>
                  <li
                    id="FASTFOOD"
                    className={
                      category.toString() === 'FASTFOOD'
                        ? 'mobile-restaurant-bottom-li active'
                        : 'mobile-restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    패스트푸드
                  </li>
                  <li
                    id="OTHERS"
                    className={
                      category.toString() === 'OTHERS'
                        ? 'mobile-restaurant-bottom-li active'
                        : 'mobile-restaurant-bottom-li'
                    }
                    onClick={handleClickCategory}
                  >
                    기타
                  </li>
                </ul>
              </div>
              <hr className="underline" />
              <div className="mobile-restaurant-bottom-restaurant-list">
                {set?.map(restaurant => (
                  <div id={restaurant.restaurantId} key={restaurant.restaurantId}>
                    <img
                      src={`/image/${restaurant.fileName}`}
                      id={restaurant.restaurantId}
                      className="mobile-restaurant-bottom-restaurant-img"
                    />
                    <div className="mobile-restaurant-bottom-restaurant-text">
                      {restaurant.name}
                      <span className="mobile-restaurant-bottom-restaurant-starLiked">
                        {restaurant.starLiked}
                      </span>
                    </div>
                    <div className="mobile-restaurant-bottom-restaurant-tag">
                      {restaurant.restaurantCategory} | {restaurant.tag}
                    </div>
                    <div className="mobile-restaurant-bottom-restaurant-info">
                      <span>
                        <img src={view_count} alt="" />
                        {restaurant.viewCount}
                      </span>
                      <span>
                        <img src={star} alt="" />
                        {restaurant.starLiked}
                      </span>
                      <span>
                        <img src={heart} alt="" />
                        {restaurant.likedCount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default Restaurant;
