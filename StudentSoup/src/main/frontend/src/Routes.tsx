import { Switch, Route } from "react-router-dom";
import Home from "./components/home/homeComponent";
import Register1 from "./components/register/register1";
import Register2 from "./components/register/register2";
import Register3 from "./components/register/register3";
import Err404 from "./components/err404/err404";
import Login from "./components/login/login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register/1" component={Register1} />
      <Route exact path="/register/2" component={Register2} />
      <Route exact path="/register/3" component={Register3} />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route component={Err404} />
    </Switch>
  );
};

export default Routes;
