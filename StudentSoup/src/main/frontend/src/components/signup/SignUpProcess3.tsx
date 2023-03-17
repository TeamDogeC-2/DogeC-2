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
import Swal from 'sweetalert2';
import {
  getSignUpThird,
  postSignUpSchoolId,
  signUpComplete,
  signUpEmailAuthenticate,
  signUpEmailAuthenticateNumber,
  signUpNicknameCheck,
} from '../../apis/Auth/AuthAPI';

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
  const [userGender, onChangeGender] = useInput('MAN');
  const [selectUniversity, onChangeUniversitySelect] = useInput('');
  const [selectMajor, onChangeMajor] = useInput('');

  const [userNickname, setUserNickname] = useState('');
  const [availableNickname, setAvailableNickname] = useState('');
  const [userNicknameText, setUserNicknameText] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [availableEmail, setAvailableEmail] = useState('');
  const [emailText, setEmailText] = useState('');

  const [userAuthenticationCode, onChangeUserAuthenticationCode, setUserAuthenticationCode] =
    useInput('');

  const [universityData, setUniversityData] = useState<UniversityDataType[]>([]);
  const [majorData, setMajorData] = useState<MajorDataType | null>(null);

  const [universityDomain, setUniversityDomain] = useState('');

  const [isCheckedNickname, setIsCheckedNickname] = useState(false);
  const [isEmailSubmit, setIsEmailSubmit] = useState(false);
  const [isEmailConfirmation, setIsEmailConfirmation] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  const onChangeUserNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNickname(e.target.value);
    setIsCheckedNickname(false);

    if (isCheckedNickname) {
      setUserNicknameText('닉네임 중복 여부를 확인해주세요.');
    }
  };

  const onChangeUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
    setIsEmailSubmit(false);
    setIsEmailConfirmation(false);
  };

  const onClickNicknameCheck = () => {
    signUpNicknameCheck(userNickname)
      .then(response => {
        if (response.statusText === 'OK') {
          setAvailableNickname(userNickname);
          setUserNicknameText('사용 가능한 닉네임입니다.');
          setIsCheckedNickname(true);
        }
      })
      .catch(error => {
        setUserNicknameText(error.response.data.message);
        setIsCheckedNickname(false);
      });
  };

  const onClickEmailCertification = () => {
    if (userEmail !== '' && majorData !== null) {
      signUpEmailAuthenticate(userEmail)
        .then(response => {
          setIsEmailSubmit(true);
          setIsEmailConfirmation(false);
          setAvailableEmail(userEmail);
          setEmailText('');
          setUserAuthenticationCode('');
        })
        .catch(error => {
          console.log(error.response.data.message);
          setEmailText(error.response.data.message);
        });
    }
  };

  const onClickAuthenticationNumber = () => {
    signUpEmailAuthenticateNumber(userEmail, userAuthenticationCode)
      .then(response => {
        setIsEmailConfirmation(true);
      })
      .catch(error => {
        console.log(error.response.data.message);
      });
  };

  const onSubmitSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      isCheckedNickname &&
      selectUniversity !== '학교 선택' &&
      selectMajor !== '전공 선택' &&
      isEmailSubmit &&
      isEmailConfirmation &&
      universityDomain !== ''
    ) {
      signUpComplete(
        state.id,
        state.password,
        availableNickname,
        `${availableEmail}@${universityDomain}`,
        userGender,
        selectUniversity,
        selectMajor,
      )
        .then(response => {
          Swal.fire({
            icon: 'success',
            title: '회원가입에 성공하였습니다.',
          });

          navigate('/login');
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: '회원가입에 실패하였습니다.',
            text: error.response.data.message,
          });
        });
    }
  };

  useEffect(() => {
    if (!state) {
      navigate('/');
    }

    getSignUpThird()
      .then(response => {
        setUniversityData(response.data);
      })
      .catch(error => {
        console.log(error.response.data.message);
      });

    if (selectUniversity !== '') {
      postSignUpSchoolId(selectUniversity)
        .then(response => {
          setMajorData(response.data);
          setUniversityDomain(response.data.domain);
        })
        .catch(error => {
          console.log(error.response.data.message);
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
          process_3={
            userNickname !== '' &&
            userEmail !== '' &&
            userAuthenticationCode !== '' &&
            universityData.length !== 0 &&
            majorData !== null &&
            isEmailConfirmation
              ? process_check
              : process_activate_3
          }
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
                <button
                  className={
                    userNickname !== ''
                      ? 'signup-email-activate-button'
                      : 'signup-email-disabled-button'
                  }
                  type="button"
                  onClick={userNickname !== '' ? onClickNicknameCheck : undefined}
                >
                  중복 확인
                </button>
              </div>
            </label>
            <p>{userNicknameText}</p>
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
                  type="text"
                  value={userEmail}
                  onChange={onChangeUserEmail}
                  placeholder="아이디"
                />
                <input
                  className="email-input"
                  type="email"
                  value={majorData !== null ? '@' + universityDomain : '@학교이메일.com'}
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
            <p>{emailText}</p>
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
                      disabled={isEmailConfirmation}
                    />
                    <button
                      className="signup-email-activate-button"
                      type="button"
                      onClick={isEmailConfirmation ? undefined : onClickAuthenticationNumber}
                    >
                      인증 확인
                    </button>
                  </div>
                </label>
              </>
            )}
            {isEmailConfirmation ? <p>인증되었습니다.</p> : <p></p>}
            <button
              className={
                isCheckedNickname &&
                selectUniversity !== '' &&
                selectMajor !== '' &&
                isEmailSubmit &&
                isEmailConfirmation
                  ? 'signup-activate-button'
                  : 'signup-disabled-button'
              }
              type="submit"
            >
              완료
            </button>
          </form>
        </SignUpComponent>
      </Background>
    </div>
  );
};

export default SignUpProcess3;
