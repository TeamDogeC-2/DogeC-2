import React from 'react';
import './signupcomponent.scss';

const SignUpComponent = (props: any) => {
  return (
    <div className="signup-main">
      <h1>신규 회원가입</h1>
      <div className="signup-progress">
        <img src={props.process_1} alt="process-1" className="proceess-img" />
        <img src={props.process_bar_1} alt="process-bar" className="proceess-bar" />
        <img src={props.process_2} alt="process-2" className="proceess-img" />
        <img src={props.process_bar_2} alt="process-bar" className="proceess-bar" />
        <img src={props.process_3} alt="process-3" className="proceess-img" />
        <p className="sentence-1">이용약관 동의</p>
        <p className="sentence-2">회원가입</p>
        <p className="sentence-3">개인정보 입력</p>
      </div>
      {props.children}
    </div>
  );
};

export default SignUpComponent;
