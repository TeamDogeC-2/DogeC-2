import React, { useEffect, useState } from 'react';
import MainNavbar from '../common/MainNavbar';
import SignUpComponent from './SignUpComponent';
import process_activate_1 from './../../img/signup_process_activate_1.png';
import process_2 from './../../img/signup_process_2.png';
import process_3 from './../../img/signup_process_3.png';
import process_bar from './../../img/signup_process_bar.png';
import process_check from './../../img/signup_process_check.png';
import Background from '../common/Background';
import './signupprocess1.scss';
import { DesktopHeader, MobileHeader } from '../../mediaQuery';
import Checkbox from './Checkbox';
import { useNavigate } from 'react-router-dom';

const SignUpProcess1 = () => {
  const checkboxDataLists = [
    { id: 0, name: 'collect', subTitle: '필수', title: '개인정보 수집 및 이용 동의' },
    { id: 1, name: 'terms', subTitle: '필수', title: '개인정보 보유기간 및 이용기간' },
    { id: 2, name: 'marketing', subTitle: '선택', title: '광고성 정보 수신 및 마케팅 활용 동의' },
  ];

  const [isAllChecked, setIsAllChecked] = useState<boolean | undefined>(undefined);
  const [checkItems, setCheckItems] = useState<string[]>([]);
  const navigate = useNavigate();

  const onChangeSingleCheck = (name: string, isChecked: React.ChangeEvent<HTMLInputElement>) => {
    if (isChecked) {
      setCheckItems([...checkItems, name]);
    } else if (!isChecked && checkItems.find(el => el === name)) {
      const filter = checkItems.filter(el => el !== name);
      setCheckItems([...filter]);
    }
  };

  const onChangeAllCheck = (isChecked: any) => {
    if (isChecked) {
      setCheckItems([...checkboxDataLists.map(el => el.name)]);
    } else {
      setCheckItems([]);
    }
  };

  const onClickGoToSignupNextPage = () => {
    if (isAllChecked) {
      navigate('/signup/process/2', { state: isAllChecked });
    }
  };

  useEffect(() => {
    if (checkItems.includes('collect') && checkItems.includes('terms')) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  }, [checkItems]);

  return (
    <div className="signup-process-1-container">
      <MainNavbar />
      <Background>
        <SignUpComponent
          process_1={isAllChecked ? process_check : process_activate_1}
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
          <label className="terms-all-wrap">
            <input
              type="checkbox"
              id="terms-all-checkbox"
              checked={isAllChecked}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeAllCheck(e.target.checked)
              }
            />
            모든 이용약관에 동의 합니다.
          </label>
          <div className="terms-conditions-container">
            {checkboxDataLists.map(el => {
              return (
                <Checkbox
                  id={el.id}
                  key={el.id}
                  name={el.name}
                  onChange={onChangeSingleCheck}
                  subTitle={el.subTitle}
                  title={el.title}
                  checkItems={checkItems}
                />
              );
            })}
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
          <button
            className={isAllChecked === true ? 'signup-activate-button' : 'signup-disabled-button'}
            onClick={onClickGoToSignupNextPage}
          >
            동의하고 가입하기
          </button>
        </SignUpComponent>
      </Background>
    </div>
  );
};

export default SignUpProcess1;
