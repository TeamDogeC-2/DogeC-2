import './restaurantPhoto.scss';
import Circle_human from '../../img/circle_human.png';

const RestaurantPhoto = () => {
  return (
    <div className="restaurant-detail-photo-div">
      <img src={Circle_human} alt="" />
      <img src={Circle_human} alt="" />
      <img src={Circle_human} alt="" />
      <img src={Circle_human} alt="" />
    </div>
  );
};

export default RestaurantPhoto;
