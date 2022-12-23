import RegisterNavbar from "../common/registerNavbar"

const register2 = () => {
    return (
        <div>
            <RegisterNavbar />
            <div className="w-full h-[calc(100vh-88px)] flex flex-col justify-center items-center">
                <div className="flex flex-col text-center w-[496px]">
                    <span className="text-[40px] fw-400 leading-[56px] flex justify-center font-bold">
                        신규 회원가입
                    </span>
                    <div className="flex flex-row  justify-center items-center mt-[47px]">
                        <div className="flex flex-col items-center">
                            <div className='w-[45px] h-[45px] bg-[url("./img/circle3.jpg")] bg-cover relative top-[12px]'></div>
                            <div className='w-[20px] h-[15px] bg-[url("./img/Vector.jpg")] bg-cover relative bottom-[18px] right-[1px] mb-[10px]'></div>
                            <span className="text-[#FF611D] text-[16px] fw-400 leading-[21px]">이용약관 동의</span>
                        </div>
                        <span className="w-[110px] h-[3px] bg-[#FF611D] relative bottom-[10px]"></span>
                        <div className="flex flex-col items-center mx-[20px]">
                            <div className='w-[45px] h-[45px] bg-[url("./img/circle1.jpg")] bg-cover relative top-[12px]'></div>
                            <div className='w-[15px] h-[23px] bg-[url("./img/check2.jpg")] bg-cover relative bottom-[22px]'></div>
                            <span className="text-[#FF611D] text-[16px] fw-400 leading-[21px]">회원가입</span>
                        </div>
                        <span className="w-[110px] h-[3px] bg-[#D9D9D9] relative bottom-[10px]"></span>
                        <div className="flex flex-col items-center">
                            <div className='w-[45px] h-[45px] bg-[url("./img/circle2.jpg")] bg-cover relative top-[12px]'></div>
                            <div className='w-[15px] h-[23px] bg-[url("./img/number3.jpg")] bg-cover relative bottom-[22px]'></div>
                            <span className="text-[#939393] text-[16px] fw-400 leading-[21px]">개인정보 입력</span>
                        </div>
                    </div>
                    <div className="mt-[49px]">
                        <span className="flex text-[26px] leading-[37px] text-left text-[#161616] font-semibold">
                            로그인에 사용할 아이디/비밀번호를
                            <br />입력해주세요.
                        </span>
                    </div>
                    <div className="flex flex-col text-left mt-[21px] mb-[39px]">
                        <span className="text-[16px] fw-400 leading-[22px] text-[#484848]">ID</span>
                        <input name="ID" placeholder="아이디(이메일)입력" className="text-[16px] fw-400 leading-[21px] mt-[6px] py-[16px] pl-[23px] border-[1px] border-[#BCBCBC] rounded-[3px]"></input>
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="text-[16px] fw-400 leading-[22px] text-[#484848]">PW</span>
                        <input name="PW" type="password" placeholder="비밀번호 입력" className="text-[16px] fw-400 leading-[21px] mt-[6px] py-[16px] pl-[23px] border-[1px] border-[#BCBCBC] rounded-[3px]"></input>
                        <div className="flex flex-row mt-[8px] mb-[12px]">
                            <div className="mr-[18px] flex flex-row items-center">
                                <span className="text-[12px] fw-400 leading-[16px] text-[#939393] mr-[6px]">대소문자</span>
                                <div className='w-[15px] h-[11px] bg-[url("./img/Vector7.jpg")] bg-cover mr-[11px] relative bottom-[1px]'></div>
                            </div>
                            <div className="mr-[18px] flex flex-row items-center">
                                <span className="text-[12px] fw-400 leading-[16px] text-[#939393] mr-[6px]">숫자</span>
                                <div className='w-[15px] h-[11px] bg-[url("./img/Vector7.jpg")] bg-cover mr-[11px] relative bottom-[1px]'></div>
                            </div>
                            <div className="flex flex-row items-center">
                                <span className="text-[12px] fw-400 leading-[16px] text-[#939393] mr-[6px]">8~20자 이내</span>
                                <div className='w-[15px] h-[11px] bg-[url("./img/Vector7.jpg")] bg-cover mr-[11px] relative bottom-[1px]'></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col text-left mb-[24px]">
                        <input name="PWconfirm" type="password" placeholder="비밀번호 확인" className="text-[16px] fw-400 leading-[21px] mt-[6px] py-[16px] pl-[23px] border-[1px] border-[#BCBCBC] rounded-[3px]"></input>
                        <div className="flex flex-row mt-[8px] mb-[12px]">
                            <div className="mr-[18px] flex flex-row items-center">
                                <span className="text-[12px] fw-400 leading-[16px] text-[#939393] mr-[6px]">비밀번호 일치</span>
                                <div className='w-[15px] h-[11px] bg-[url("./img/Vector7.jpg")] bg-cover mr-[11px] relative bottom-[1px]'></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[496px] h-[54px] bg-[#B8B8B8] flex justify-center items-center">
                        <button className="w-full h-full text-[16px] fw-400 leading-[22px] text-white font-semibold">다음</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default register2