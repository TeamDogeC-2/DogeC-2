import { Switch, Route } from "react-router-dom";
import Err404 from "./component/common/Err404";
import Home from "./components/home/homeComponent";
import Register1 from "./components/register/register1";
import Register2 from "./components/register/register2";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/register1" component={Register1} />
      <Route exact path="/register2" component={Register2} />
      <Route component={Err404} />
    </Switch>
  );
};

export default Routes;
