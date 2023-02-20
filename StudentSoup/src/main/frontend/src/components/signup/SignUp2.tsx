import React from 'react';
import MainNavbar from '../common/mainNavbar';
import SignUpComponent from './SignUpComponent';
import process_2 from './../../img/signup_process_2.png';
import process_3 from './../../img/signup_process_3.png';
import process_check from './../../img/signup_process_check.png';
import process_bar from './../../img/signup_process_bar.png';
import process_next_bar from './../../img/signup_process_next_bar.png';
import unchecked from './../../img/signup_uncheck.png';

import './signup2.scss';
const SignUp2 = () => {
  return (
    <>
      <MainNavbar />
      <div className="signup-background">
        <SignUpComponent
          process_1={process_check}
          process_2={process_2}
          process_3={process_3}
          process_bar_1={process_next_bar}
          process_bar_2={process_bar}
        >
          <h3>
            로그인에 사용할 아이디와 비밀번호를
            <br /> 입력해주세요.
          </h3>
          <form className="signup-form">
            <label>
              ID
              <input type="text" />
            </label>
            <label>
              PW
              <input type="password" />
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
              <input type="password" />
            </label>
            <div className="signup-checked-password">
              <span>
                비밀번호 일치<img src={unchecked} alt="checked"></img>
              </span>
            </div>
            <button>다음</button>
          </form>
        </SignUpComponent>
      </div>
    </>
  );
};

export default SignUp2;
