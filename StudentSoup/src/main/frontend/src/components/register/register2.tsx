import { ChangeEvent, useState } from "react"
import RegisterNavbar from "../common/registerNavbar"

const Register2 = () => {

    const [lowAndUpValidated, setLowAndUpValidated] = useState<boolean>(false);
    const [numberValidated, setNumberValidated] = useState<boolean>(false);
    const [lengthValidated, setLengthValidated] = useState<boolean>(false);
    const [checkButton, setCheckButton] = useState<boolean>(false);

    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleChange=(e: ChangeEvent<HTMLInputElement>)=>{
        const newValue = e.target.value;
        setPassword(newValue);
        const lowAndUp = new RegExp('(?=.*[a-z])(?=.*[A-Z]).*');
        const number = new RegExp('(?=.*[0-9])');
        const length = new RegExp('(?=.{8,20})');

        if(lowAndUp.test(newValue)){
            setLowAndUpValidated(true);
        }
        else{
            setLowAndUpValidated(false);
        }
        if(number.test(newValue)){
            setNumberValidated(true);
        }
        else{
            setNumberValidated(false);
        }
        if(length.test(newValue)){
            setLengthValidated(true);
        }
        else{
            setLengthValidated(false);
        }
    }

    const checkPW=(e: ChangeEvent<HTMLInputElement>)=>{
        const newValue = e.target.value;
        // setConfirmPassword(newValue);
        if(password === newValue){
            setCheckButton(true);
        }
        else{
            setCheckButton(false);
        }
    }
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
                        <input name="PW" id="PW" value={password} type="password" onChange={handleChange} placeholder="비밀번호 입력" className="text-[16px] fw-400 leading-[21px] mt-[6px] py-[16px] pl-[23px] border-[1px] border-[#BCBCBC] rounded-[3px]"></input>
                        <div className="flex flex-row mt-[8px] mb-[12px]">
                            <div className="mr-[18px] flex flex-row items-center">
                                <span className={lowAndUpValidated?"text-[12px] fw-400 leading-[16px] text-[#FF611D] mr-[6px]":"text-[12px] fw-400 leading-[16px] text-[#939393] mr-[6px]"}>대소문자</span>
                                <div className={lowAndUpValidated?'w-[11px] h-[7px] bg-[url("./img/Vector15.jpg")] bg-cover mr-[11px] relative bottom-[1px]':'w-[15px] h-[11px] bg-[url("./img/Vector7.jpg")] bg-cover mr-[11px] relative bottom-[1px]'}></div>
                            </div>
                            <div className="mr-[18px] flex flex-row items-center">
                                <span className={numberValidated?"text-[12px] fw-400 leading-[16px] text-[#FF611D] mr-[6px]":"text-[12px] fw-400 leading-[16px] text-[#939393] mr-[6px]"}>숫자</span>
                                <div className={numberValidated?'w-[11px] h-[7px] bg-[url("./img/Vector15.jpg")] bg-cover mr-[11px] relative bottom-[1px]':'w-[15px] h-[11px] bg-[url("./img/Vector7.jpg")] bg-cover mr-[11px] relative bottom-[1px]'}></div>
                            </div>
                            <div className="flex flex-row items-center">
                                <span className={lengthValidated?"text-[12px] fw-400 leading-[16px] text-[#FF611D] mr-[6px]":"text-[12px] fw-400 leading-[16px] text-[#939393] mr-[6px]"}>8~20자 이내</span>
                                <div className={lengthValidated?'w-[11px] h-[7px] bg-[url("./img/Vector15.jpg")] bg-cover mr-[11px] relative bottom-[1px]':'w-[15px] h-[11px] bg-[url("./img/Vector7.jpg")] bg-cover mr-[11px] relative bottom-[1px]'}></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col text-left mb-[24px]">
                        <input name="PWconfirm" id="PWconfirm" type="password" value={confirmPassword} onChange={checkPW} placeholder="비밀번호 확인" className="text-[16px] fw-400 leading-[21px] mt-[6px] py-[16px] pl-[23px] border-[1px] border-[#BCBCBC] rounded-[3px]"></input>
                        <div className="flex flex-row mt-[8px] mb-[12px]">
                            <div className="mr-[18px] flex flex-row items-center">
                                <span className={checkButton?"text-[12px] fw-400 leading-[16px] text-[#FF611D] mr-[6px]":"text-[12px] fw-400 leading-[16px] text-[#939393] mr-[6px]"}>비밀번호 일치</span>
                                <div className={checkButton?'w-[11px] h-[7px] bg-[url("./img/Vector15.jpg")] bg-cover mr-[11px] relative bottom-[1px]':'w-[15px] h-[11px] bg-[url("./img/Vector7.jpg")] bg-cover mr-[11px] relative bottom-[1px]'}></div>
                            </div>
                        </div>
                    </div>
                    <div className={checkButton?"w-[496px] h-[54px] bg-[#FF611D] flex justify-center items-center":"w-[496px] h-[54px] bg-[#B8B8B8] flex justify-center items-center"}>
                        <button className="w-full h-full text-[16px] fw-400 leading-[22px] text-white font-semibold">다음</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register2
