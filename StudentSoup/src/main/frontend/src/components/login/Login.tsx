import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainNavbar from '../common/MainNavbar';
import './login.scss';
import useInput from '../../hooks/useInput';
import { signIn } from '../../apis/auth/AuthAPI';
import Swal from 'sweetalert2';

const Login = () => {
  const [userId, onChangeUserId, setUserId] = useInput('');
  const [userPassword, onChangeUserPassword, setUserPassword] = useInput('');
  const [isRememberId, setIsRememberId] = useState(false);

  const navigate = useNavigate();

  const onClickRememberId = () => {
    setIsRememberId(prevState => !prevState);

    if (!isRememberId) {
      localStorage.setItem('rememberId', userId);
    } else {
      localStorage.removeItem('rememberId');
    }
  };

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (isRememberId) {
        localStorage.setItem('rememberId', userId);
      }

      signIn(userId, userPassword)
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('access-token', token);
          console.log(response);
          setUserId('');
          setUserPassword('');

          Swal.fire({
            title: '로그인에 성공하였습니다.',
            icon: 'success',
          });

          navigate('/');
        })
        .catch(error => {
          const errorMessage = error.response.data.message;

          Swal.fire({
            title: '로그인에 실패하였습니다.',
            text: errorMessage,
            icon: 'error',
          });

          setUserPassword('');
        });
    },
    [userId, userPassword],
  );

  useEffect(() => {
    if (localStorage.getItem('access-token')) {
      navigate('/');
    }

    if (localStorage.getItem('rememberId') != null) {
      setIsRememberId(true);
      setUserId(localStorage.getItem('rememberId'));
    }
  }, [sessionStorage.getItem('token')]);

  return (
    <>
      <MainNavbar />
      <div className="background">
        <div className="main">
          <h2>로그인</h2>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="id"
              value={userId}
              onChange={onChangeUserId}
              placeholder="아이디 또는 이메일을 입력해주세요"
            />
            <input
              type="password"
              className="password"
              value={userPassword}
              onChange={onChangeUserPassword}
              placeholder="비밀번호를 입력해주세요"
            />
            <div className="login-keep-wrap">
              <div className="remember-wrap" onClick={onClickRememberId}>
                <div className={isRememberId ? 'checked-remember-id' : 'unchecked-remember-id'} />
                <span>아이디 저장</span>
              </div>
              <Link to="/login/findAccount">아이디/비밀번호 찾기</Link>
            </div>
            <button className="login-button" type="submit">
              로그인
            </button>
            <Link to="/signup" className="signup-link">
              <button className="signup-button">회원가입</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
