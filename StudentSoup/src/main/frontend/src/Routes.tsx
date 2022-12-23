import { Switch, Route } from "react-router-dom";
import Err404 from "./component/common/Err404";

const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path="/404" component={Err404} /> */}
      <Route component={Err404} />
    </Switch>
  );
};

export default Routes;
