import React from 'react';
import Background from '../common/Background';
import MainNavbar from '../common/mainNavbar';
import SignUpComponent from './SignUpComponent';
import process_activate_3 from './../../img/signup_process_activate_3.png';
import process_check from './../../img/signup_process_check.png';
import process_next_bar from './../../img/signup_process_next_bar.png';
import './signupprocess3.scss';

const SignUpProcess3 = () => {
  return (
    <div className="signup-process-3-container">
      <MainNavbar />
      <Background>
        <div className="aa">
          <div className="bb">
            <div className="cc"></div>
          </div>
        </div>
        <SignUpComponent
          process_1={process_check}
          process_2={process_check}
          process_3={process_activate_3}
          process_bar_1={process_next_bar}
          process_bar_2={process_next_bar}
          sentence_2="activate-sentence-2"
          sentence_3="activate-sentence-3"
        >
          <h2>
            SFOO의 서비스를 위한 개인정보를
            <br /> 입력해주세요.
          </h2>
          <form className="privacy-form">
            <div className="radio-wrap">
              <span>성별</span>
              <label>
                남
                <input type="radio" id="man" name="gender" />
              </label>
              <label>
                여
                <input type="radio" id="woman" name="gender" />
              </label>
            </div>
            <label>
              닉네임
              <div className="privacy-input-wrap">
                <input type="text" placeholder="닉네임 입력" />
                <button>중복확인</button>
              </div>
            </label>
            <p>사용가능한 닉네임입니다.</p>
            <div className="select-wrap">
              <label>
                학교
                <select name="university">
                  <option value="" disabled selected>
                    학교 선택
                  </option>
                  <option>인천대학교</option>
                  <option>청운대학교</option>
                  <option>대학교</option>
                </select>
              </label>
              <label>
                전공
                <select name="major" required>
                  <option value="" disabled selected>
                    전공 선택
                  </option>
                  <option>컴퓨터공학과</option>
                  <option>멀티미디어공학과</option>
                  <option>소프트웨어공학과</option>
                </select>
              </label>
            </div>
            <label>
              <div className="privacy-input-wrap">
                <input type="email" placeholder="@학교이메일.com" />
                <button>이메일 인증</button>
              </div>
            </label>
            <p>인증코드가 발송되었습니다.</p>
            <label>
              <div className="privacy-input-wrap">
                <input type="text" placeholder="인증코드 입력" />
                <button>인증 확인</button>
              </div>
            </label>
            <p>인증되었습니다.</p>
          </form>
          <button className="signup-button">완료</button>
        </SignUpComponent>
      </Background>
    </div>
  );
};

export default SignUpProcess3;
