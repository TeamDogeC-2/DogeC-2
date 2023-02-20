import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainNavbar from '../common/mainNavbar';
import './signup.scss';
import process_1 from './../../img/signup_process_1.png';
import process_2 from './../../img/signup_process_2.png';
import process_3 from './../../img/signup_process_3.png';
import process_check from './../../img/signup_process_check.png';
import process_bar from './../../img/signup_process_bar.png';
import unchecked from './../../img/signup_uncheck.png';

const SignUp = () => {
  return (
    <>
      <MainNavbar />
      <div className="signup-background">
        <div className="signup-main">
          <div className="signup-header">
            <h2>신규 회원가입</h2>
            <div className="signup-progress">
              <img src={process_1} alt="process-1" className="proceess-img" />
              <img src={process_bar} alt="process-bar" className="proceess-bar" />
              <img src={process_2} alt="process-2" className="proceess-img" />
              <img src={process_bar} alt="process-bar" className="proceess-bar" />
              <img src={process_3} alt="process-3" className="proceess-img" />
              <p className="sentence-1">이용약관 동의</p>
              <p className="sentence-2">회원가입</p>
              <p className="sentence-3">개인정보 입력</p>
            </div>
          </div>

          <h3>
            SFOO 서비스 이용약관에<br></br> 동의해 주세요.
          </h3>
          <label>
            <input type="checkbox" />
            모든 이용약관에 동의 합니다.
          </label>
          <div className="terms-conditions-wrap">
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
          </div>
          <p className="caution-sentence">
            고객님께서 동의를 거부할 수 있습니다. 단, 필수항목 동의 거부 시에는 회원가입이
            제한됩니다.
          </p>
          <div className="signup-button-box">
            <button>동의하고 가입하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
