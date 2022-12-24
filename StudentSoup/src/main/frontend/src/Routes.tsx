import { Switch, Route } from "react-router-dom";
import Err404 from "./components/err404/err404";
import homeComponent from "./components/home/homeComponent";
import Login from "./components/login/login";
import Register from "./components/register/register1";
import Register3 from "./components/register/register3";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={homeComponent} />
      <Route exact path="/register/1" component={Register} />
      <Route exact path="/register/3" component={Register3} />
      <Route exact path="/login" component={Login} />
      <Route component={Err404} />
    </Switch>
  );
};

export default Routes;
