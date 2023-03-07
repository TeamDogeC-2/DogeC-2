import React, { useEffect, useState } from 'react';
import Background from '../common/Background';
import MainNavbar from '../common/MainNavbar';
import SignUpComponent from './SignUpComponent';
import process_activate_3 from './../../img/signup_process_activate_3.png';
import process_check from './../../img/signup_process_check.png';
import process_next_bar from './../../img/signup_process_next_bar.png';
import './signupprocess3.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import axios from 'axios';

export interface universityDataType {
  schoolId: number;
  schoolName: string;
}

export interface majorDataType {
  departmentId: number;
  departmentName: string;
}

const SignUpProcess3 = () => {
  const [userNickname, onChangeUserNickname] = useInput('');
  const [userEmail, onChangeUserEmail] = useInput('');
  const [userAuthenticationCode, onChangeUserAuthenticationCode] = useInput('');
  const [universityData, setUniversityData] = useState<universityDataType[]>([]);
  const [majorData, setMajorData] = useState<majorDataType[]>([]);
  const [selectValue, setSelectValue] = useState('');
  const navigate = useNavigate();
  const { state } = useLocation();

  const onChangeUniversitySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };

  const onClickEmailCertification = () => {
    console.log(userEmail);
    axios.post('/members/signUp/3/mail', { email: userEmail }).then(res => {
      console.log(res);
    });
  };

  useEffect(() => {
    if (!state) {
      navigate('/');
    }
    axios.get('/members/signUp/3').then(res => {
      setUniversityData(res.data);
    });

    if (selectValue !== '') {
      axios.post('/members/signUp/3/' + selectValue).then(res => {
        console.log(res);
        return setMajorData(res.data);
      });
    }
  }, [state, selectValue]);

  return (
    <div className="signup-process-3-container">
      <MainNavbar />
      <Background>
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
              <label htmlFor="man">
                남
                <input type="radio" id="man" name="gender" defaultChecked />
              </label>
              <label htmlFor="woman">
                여
                <input type="radio" id="woman" name="gender" />
              </label>
            </div>
            <label>
              닉네임
              <div className="privacy-input-wrap">
                <input
                  type="text"
                  value={userNickname}
                  onChange={onChangeUserNickname}
                  placeholder="닉네임 입력"
                />
              </div>
            </label>
            <p>사용가능한 닉네임입니다.</p>
            <div className="select-wrap">
              <label>
                학교
                <select
                  name="university"
                  defaultValue="학교 선택"
                  onChange={e => onChangeUniversitySelect(e)}
                >
                  <option value="학교 선택" disabled={true}>
                    학교 선택
                  </option>
                  {universityData.map(el => (
                    <option key={el.schoolId} value={el.schoolId}>
                      {el.schoolName}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                전공
                <select name="major" defaultValue="전공 선택">
                  <option value="전공 선택" disabled>
                    전공 선택
                  </option>
                  {majorData.map(el => (
                    <option key={el.departmentId} value={el.departmentId}>
                      {el.departmentName}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              <div className="privacy-input-wrap">
                <input
                  type="email"
                  value={userEmail}
                  onChange={onChangeUserEmail}
                  placeholder="@학교이메일.com"
                />
                <button type="button" onClick={onClickEmailCertification}>
                  이메일 인증
                </button>
              </div>
            </label>
            <p>인증코드가 발송되었습니다.</p>
            <label>
              <div className="privacy-input-wrap">
                <input
                  type="text"
                  value={userAuthenticationCode}
                  onChange={onChangeUserAuthenticationCode}
                  placeholder="인증코드 입력"
                />
                <button type="button">인증 확인</button>
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
