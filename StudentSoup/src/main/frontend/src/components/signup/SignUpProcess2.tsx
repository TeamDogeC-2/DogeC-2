import React, { useEffect } from 'react';
import { Desktop, Mobile } from '../../mediaQuery';
import Background from '../common/Background';
import MainNavbar from '../common/MainNavbar';
import SignUpComponent from './SignUpComponent';
import process_activate_2 from './../../img/signup_process_activate_2.png';
import process_3 from './../../img/signup_process_3.png';
import process_check from './../../img/signup_process_check.png';
import process_bar from './../../img/signup_process_bar.png';
import process_next_bar from './../../img/signup_process_next_bar.png';
import unchecked from './../../img/signup_uncheck.png';
import './signupprocess2.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const SignUpProcess2 = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(state);
    if (state !== true) {
      navigate('/');
    }
  }, [state]);

  return (
    <div className="signup-process-2-container">
      <MainNavbar />
      <Background>
        <SignUpComponent
          process_1={process_check}
          process_2={process_activate_2}
          process_3={process_3}
          process_bar_1={process_next_bar}
          process_bar_2={process_bar}
          sentence_2="activate-sentence-2"
          sentence_3="sentence-3"
        >
          <Desktop>
            <h2>
              로그인에 사용할 아이디와 비밀번호를
              <br /> 입력해주세요.
            </h2>
          </Desktop>
          <Mobile>
            <h2>
              로그인에 사용할 아이디와
              <br />
              비밀번호를 입력해주세요.
            </h2>
          </Mobile>

          <form className="signup-form">
            <label>
              ID
              <input type="text" placeholder="아이디 입력" />
            </label>
            <label>
              PW
              <input type="password" placeholder="비밀번호 입력" />
            </label>
            <div className="signup-checked-password">
              <span>
                대소문자<img src={unchecked} alt="checked"></img>
              </span>
              <span>
                숫자<img src={unchecked} alt="checked"></img>
              </span>
              <span>
                8-20자 이내<img src={unchecked} alt="checked"></img>
              </span>
            </div>
            <label>
              <input type="password" placeholder="비밀번호 확인" />
            </label>
            <div className="signup-checked-password">
              <span>
                비밀번호 일치<img src={unchecked} alt="checked"></img>
              </span>
            </div>
          </form>
          <button className="signup-button">다음</button>
        </SignUpComponent>
      </Background>
    </div>
  );
};

export default SignUpProcess2;
