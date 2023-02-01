import { Switch, Route } from 'react-router-dom';
import Home from './components/home/homeComponent';
import Register1 from './components/register/register1';
import Register2 from './components/register/register2';
import Register3 from './components/register/register3';
import Err404 from './components/err404/err404';
import Login from './components/login/login';
import MypageHome from './components/mypage/mypageHome';
import MypageScheduler from './components/mypage/mypageScheduler';
import MypageModify from './components/mypage/mypageModify';
import MypageBoardReview from './components/mypage/mypageBoardReview';
import Mypage from './components/mypage/mypage';
import Restaurant from './components/restaurant/restaurant';
import BoardDetail from './components/board/boardDetail';
import BoardMain from './components/board/boardMain';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register/1" component={Register1} />
      <Route exact path="/register/2" component={Register2} />
      <Route exact path="/register/3" component={Register3} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/mypage" component={Mypage} />
      <Route exact path="/mypageHome" component={MypageHome} />
      <Route exact path="/mypageScheduler" component={MypageScheduler} />
      <Route exact path="/mypagemodify" component={MypageModify} />
      <Route exact path="/mypageBoardReview" component={MypageBoardReview} />
      <Route exact path="/restaurant" component={Restaurant} />
      <Route exact path="/board" component={BoardMain} />
      <Route exact path="/board/detail" component={BoardDetail} />
      <Route exact path="/board/write" component={BoardWrite} />
      <Route component={Err404} />
    </Switch>
  );
};

export default Routes;
