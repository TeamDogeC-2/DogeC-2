import { Switch, Route } from "react-router-dom";
import Err404 from "./components/err404/err404";
import homeComponent from "./components/home/homeComponent";
import Register from "./components/register/register1";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={homeComponent} />
      <Route exact path="/register/1" component={Register} />
      <Route component={Err404} />
    </Switch>
  );
};

export default Routes;
