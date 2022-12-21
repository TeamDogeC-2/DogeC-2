import { useEffect, useRef } from 'react'
import './modal.css'

const Modal = () => {
    return (
        <div className='modal'>
            <div className='modalBody'>
                <div className='topModal'>
                    <ul className='modalTopMenu'>
                        <li>
                            <a href='#'>최근 본 맛집</a>
                            <p>&gt;</p>
                        </li>
                        <li>
                            <a href='#'>찜한 가게</a>
                            <p>&gt;</p>
                        </li>
                        <li>
                            <a href='#'>공지사항</a>
                            <p>&gt;</p>
                        </li>
                        <li>
                            <a href='#'>자주 묻는 질문 FAQ</a>
                            <p>&gt;</p>
                        </li>
                        <li>
                            <a href='#'>고객센터</a>
                            <p>&gt;</p>
                        </li>
                    </ul>
                </div>
                <div className='bottomModal'>
                    <div className='modalBottomMenu'>
                        <div className='bottomTexts'>
                            <span className='bottomText'>회원가입 후</span>
                            <span className='bottomTextColor'>대학교 주변 맛집 찾기</span>
                        </div>
                        <div className='bottomButtons'>
                            <button className='login'>로그인</button>
                            <button className='signUp'>회원가입</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal