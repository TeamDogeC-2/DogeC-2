import { useEffect } from 'react';
import Navbar from '../common/navbar';
import MainSearch from './mainSearch';

const Home = () => {
  function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }
  useEffect(() => {
    disableScrolling();
  }, []);
  return (
    <div className='w-full h-full bg-[url("./img/mainlogo.jpg")] bg-cover z-50 no-scrollbar'>
      <div className="w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.45)] to-[rgba(0,0,0,0.1)] z-[51] no-scrollbar">
        <Navbar />
        <MainSearch />
      </div>
    </div>
  );
};

export default Home;
