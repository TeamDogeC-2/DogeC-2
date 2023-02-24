import MainNavbar from '../common/mainNavbar';
import './restaurant.scss';

const Restaurant = () => {
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
      </div>
    </>
  );
};

export default Restaurant;
