import React from 'react';
import MainNavbar from '../common/MainNavbar';
import SignUpComponent from './SignUpComponent';
import process_activate_1 from './../../img/signup_process_activate_1.png';
import process_2 from './../../img/signup_process_2.png';
import process_3 from './../../img/signup_process_3.png';
import process_bar from './../../img/signup_process_bar.png';
import unchecked from './../../img/signup_uncheck.png';
import Background from '../common/Background';
import './signupprocess1.scss';
import { DesktopHeader, MobileHeader } from '../../mediaQuery';

const SignUpProcess1 = () => {
  return (
    <div className="signup-process-1-container">
      <MainNavbar />
      <Background>
        <SignUpComponent
          process_1={process_activate_1}
          process_2={process_2}
          process_3={process_3}
          process_bar_1={process_bar}
          process_bar_2={process_bar}
          sentence_2="sentence-2"
          sentence_3="sentence-3"
        >
          <h2>
            SFOO 서비스 이용약관에<br></br> 동의해 주세요.
          </h2>
          <label>
            <input type="checkbox" />
            모든 이용약관에 동의 합니다.
          </label>
          <div className="terms-conditions-container">
            <div className="terms-wrap">
              <button>
                <img src={unchecked} alt="unchecked" className="unchecked-img uncheck-1" />
              </button>
              <p>
                <span>[필수]</span> 개인정보 수집 및 이용 동의
              </p>
            </div>
            <div className="terms-wrap">
              <button>
                <img src={unchecked} alt="unchecked" className="unchecked-img uncheck-2" />
              </button>
              <p>
                <span>[필수]</span> 개인정보 보유기간 및 이용기간
              </p>
            </div>
            <div className="terms-wrap">
              <button>
                <img src={unchecked} alt="unchecked" className="unchecked-img uncheck-3" />
              </button>
              <p>
                <span>[필수]</span> 광고성 정보 수신 및 마케팅 활용 동의
              </p>
            </div>
            <DesktopHeader>
              <p className="caution-sentence">
                고객님께서 동의를 거부할 수 있습니다. 단, 필수항목 동의 거부 시에는 회원가입이
                제한됩니다.
              </p>
            </DesktopHeader>
            <MobileHeader>
              <p className="caution-sentence">
                고객님께서 동의를 거부할 수 있습니다. <br />
                단, 필수항목 동의 거부 시에는 회원가입이 제한됩니다.
              </p>
            </MobileHeader>
          </div>
          <button className="signup-button">동의하고 가입하기</button>
        </SignUpComponent>
      </Background>
    </div>
  );
};

export default SignUpProcess1;
