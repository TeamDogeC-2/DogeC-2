import { useCallback, useEffect, useRef, useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import Reddit from '../../img/Reddit.svg';
import Modal from '../home/modal';

const Navbar = () => {
  const history = useHistory();
  const pathName = useLocation();

  const [isLogin, setIsLogin] = useState<boolean>(false);

  const [isModal, setModal] = useState<Boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setModal(!isModal);
  }, [isModal]);

  useEffect(() => {
    if (sessionStorage.getItem('email') === null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, []);

  const handleClick = (e: any) => {
    if (e.target.innerText === '로그인') {
      history.push('/login', { pathName });
    }
  };
  return (
    <div className="w-full h-[88px] items-center sticky flex justify-between bg-gradient-to-b from-[rgba(255,255,255,0.6)] to-[rgba(255,255,255,0)] hover:border-b-[1px]">
      <img src={Reddit} alt="" className="w-[162px] h-[72px]" />
      <div className="flex items-center mr-[49px] m-5">
        <div className="w-[65px] h-[60px] mr-[21px] flex justify-center items-center">
          <span className="text-[25px] leading-[35px] fw-400">FAQ</span>
        </div>
        <div onClick={onClickToggleModal}>
          {isLogin ? (
            <div className="flex sticky">
              <div className="flex flex-col items-center">
                <div
                  id="로그아웃"
                  className='w-[40px] h-[40px] bg-[url("./img/circle_fill_gray.jpg")] bg-cover relative top-[14px] rounded-full border-[1px] border-[#FF4D14] cursor-pointer'
                ></div>
                <div className='w-[20px] h-[21px] bg-[url("./img/human.jpg")] bg-cover relative bottom-[17px] mb-[10px]'></div>
              </div>
            </div>
          ) : (
            <button
              onClick={handleClick}
              className="w-[93px] h-[40px] bg-[#FF4F14] border-[1.2px] border-[#FF4D14] rounded-[41px] hover:cursor-pointer text-[20px]"
            >
              로그인
            </button>
          )}
        </div>
        {isModal && <Modal setIsLogin={setIsLogin} onClickToggleModal={onClickToggleModal} />}
      </div>
    </div>
  );
};

export default Navbar;
