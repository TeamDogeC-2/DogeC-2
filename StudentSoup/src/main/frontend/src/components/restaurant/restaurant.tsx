import RestaurantNavbar from "../common/restaurantNavbar";
import RestaurantMain from "./restaurantMain";
import RestaurantMapView from "./restaurantMapView";

const Restaurant = () => {
    return(
        <div>
            <RestaurantNavbar/>
            <RestaurantMain/>
        </div>
    );
}
export default Restaurant;