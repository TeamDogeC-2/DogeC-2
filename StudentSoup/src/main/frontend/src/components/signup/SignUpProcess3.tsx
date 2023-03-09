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

export interface UniversityDataType {
  schoolId: number;
  schoolName: string;
}
export interface DepartmentType {
  departmentId: number;
  departmentName: string;
}

export interface MajorDataType {
  departments: DepartmentType[];
  domain: string;
  message?: string;
}

const SignUpProcess3 = () => {
  const [userGender, setUserGender] = useState('MAN');
  const [userNickname, onChangeUserNickname] = useInput('');
  const [userEmail, setUserEmail] = useState('');
  const [userAuthenticationCode, onChangeUserAuthenticationCode] = useInput('');
  const [universityData, setUniversityData] = useState<UniversityDataType[]>([]);
  const [majorData, setMajorData] = useState<MajorDataType | null>(null);
  const [selectUniversity, setSelectUniversity] = useState('');
  const [selectMajor, setSelectMajor] = useState('');
  const [isEmailSubmit, setIsEmailSubmit] = useState(false);
  const [isEmailConfirmation, setIsEmailConfirmation] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  const REG_EMAIL =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

  const onChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserGender(e.target.value);
  };

  const onChangeUniversitySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectUniversity(e.target.value);
  };

  const onChangeMajor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectMajor(e.target.value);
  };

  const onChangeUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };

  const onClickEmailCertification = () => {
    if (userEmail !== '' && majorData !== null) {
      axios
        .post('/members/signUp/3/mail', { email: userEmail + '@' + majorData.domain })
        .then(res => {
          console.log(res);
          setIsEmailSubmit(true);
        });
    }
    // console.log(userEmail);
  };

  const onSubmitSignup = (e: any) => {
    e.preventDefault();
    if (majorData !== null) {
      axios
        .post('/members/signUp/3', {
          id: state.userId,
          pwd: state.userPassword,
          nickName: userNickname,
          email: userEmail + '@' + majorData.domain,
          gender: userGender,
          schoolId: selectUniversity,
          departmentId: selectMajor,
        })
        .then(res => {
          console.log(res);
        });
    }
  };

  useEffect(() => {
    if (!state) {
      navigate('/');
    }
    axios.get('/members/signUp/3').then(res => {
      setUniversityData(res.data);
      console.log(res.data);
    });

    if (selectUniversity !== '') {
      axios.post('/members/signUp/3/' + selectUniversity).then(res => {
        setMajorData(res.data);
        console.log(res.data);
      });
    }
  }, [state, selectUniversity, isEmailSubmit, selectMajor]);

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
          <form className="privacy-form" onSubmit={onSubmitSignup}>
            <div className="radio-wrap">
              <span>성별</span>
              <label htmlFor="man">
                남
                <input
                  type="radio"
                  id="man"
                  name="gender"
                  value="MAN"
                  onChange={onChangeGender}
                  defaultChecked
                />
              </label>
              <label htmlFor="woman">
                여
                <input
                  type="radio"
                  id="woman"
                  name="gender"
                  value="WOMAN"
                  onChange={onChangeGender}
                />
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
                  {universityData.map(el => {
                    return (
                      <option key={el.schoolId} value={el.schoolId}>
                        {el.schoolName}
                      </option>
                    );
                  })}
                </select>
              </label>
              <label>
                전공
                <select name="major" defaultValue="전공 선택" onChange={e => onChangeMajor(e)}>
                  <option value="전공 선택" disabled>
                    전공 선택
                  </option>
                  {!!majorData &&
                    majorData.departments.map(el => {
                      return (
                        <option key={el.departmentId} value={el.departmentId}>
                          {el.departmentName}
                        </option>
                      );
                    })}
                </select>
              </label>
            </div>
            <label>
              <div className="privacy-input-wrap">
                <input
                  className="id-input"
                  type="email"
                  value={userEmail}
                  onChange={onChangeUserEmail}
                  placeholder="아이디"
                />
                <input
                  className="email-input"
                  type="email"
                  value={majorData !== null ? '@' + majorData.domain : '@학교이메일.com'}
                  disabled
                />
                <button
                  className={
                    userEmail !== ''
                      ? 'signup-email-activate-button'
                      : 'signup-email-disabled-button'
                  }
                  type="button"
                  onClick={onClickEmailCertification}
                >
                  이메일 인증
                </button>
              </div>
            </label>
            {isEmailSubmit && (
              <>
                <p>인증코드가 발송되었습니다.</p>
                <label>
                  <div className="privacy-input-wrap">
                    <input
                      type="text"
                      value={userAuthenticationCode}
                      onChange={onChangeUserAuthenticationCode}
                      placeholder="인증코드 입력"
                    />
                    <button className="signup-email-activate-button" type="button">
                      인증 확인
                    </button>
                  </div>
                </label>
              </>
            )}
            {isEmailConfirmation ? <p>인증되었습니다.</p> : <p></p>}
            <button className="signup-activate-button " type="submit">
              완료
            </button>
          </form>
        </SignUpComponent>
      </Background>
    </div>
  );
};

export default SignUpProcess3;
