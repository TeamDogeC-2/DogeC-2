import Footer from '../common/footer';
import RestaurantNavbar from '../common/restaurantNavbar';
import RestaurantMain from './restaurantMain';

const Restaurant = () => {
  return (
    <div>
      <RestaurantNavbar />
      <RestaurantMain />
      <Footer />
    </div>
  );
};
export default Restaurant;
