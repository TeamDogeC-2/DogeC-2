import React  from 'react';
import axios from 'axios';

const onClickLogin = () => {
    console.log('click login')
}

const onClickSignup = () => {
    console.log('click sign up')
}

function LoginForm() {
    return(
        <div>
            <div></div>
            <div>
                <input id="id" name="id" placeholder="아이디 또는 이메일을 입력해주세요" />
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                />
            </div>
            <div>
                <div>
                    <input type='checkbox' id='saveId' name='saveId' />
                    <label htmlFor="saveID">아이디 저장</label>
                </div>
                <div>
                    <a>아이디/비밀번호 찾기</a>
                </div>
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>로그인</button>
                <button type='button' onClick={onClickSignup}>회원가입</button>
            </div>
            <div>
                <label>간편 로그인/가입</label>
                <div>
                    <button name='sns1'>1</button>
                    <button name='sns2'>2</button>
                    <button name='sns3'>3</button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
