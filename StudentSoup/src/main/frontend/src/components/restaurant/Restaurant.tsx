import axios from 'axios';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MainNavbar from '../common/mainNavbar';
import './restaurant.scss';

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

  const handleClickCategory = (e: any) => {
    setCategory(e.target.id);
  };
  return (
    <>
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
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
