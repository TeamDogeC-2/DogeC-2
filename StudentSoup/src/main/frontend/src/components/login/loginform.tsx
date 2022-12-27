import React from "react";
import Reddit from "../../img/Reddit.svg";
import cn from "clsx";

const onClickLogin = () => {
  console.log("click login");
};

const onClickSignup = () => {
  console.log("click sign up");
};

function LoginForm() {
  return (
    //navber 추가하기
    <div className="flex flex-col justify-center items-center">
      <div className="mt-[88px] flex justify-center">
        <img src={Reddit} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center">
          <input
            id="id"
            name="id"
            placeholder="아이디 또는 이메일을 입력해주세요"
            className="w-[558px] h-[60px] mt-[20px] p-[15px] border border-1 border-[#BCBCBC] rounded-[5px] text-[16px] text-[#A0A0A0]"
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            className="w-[558px] h-[60px] mt-[10px] p-[15px] border border-1 border-[#BCBCBC] rounded-[5px] text-[16px] text-[#A0A0A0]"
          />
        </div>
        <div className="w-[558px] mt-[25px] flex justify-between items-center">
          <div>
            <label htmlFor="saveId" className="flex items-center">
                <input
                type="checkbox"
                id="saveId"
                name="saveId"
                className={cn(
                  "w-[29px] h-[29px] inline-block border border-[#A0A0A0] rounded-full cursor-pointer appearance-none",
                  "checked:border-[#FF611D] checked:bg-[#FF611D]"
                )}
                //checked
                />
                <span className="ml-[13px] text-[#3E3E3E]">
                아이디 저장
                </span>                           
            </label>
          </div>
          <div>
            <a className="text-[#3E3E3E] cursor-pointer">
              아이디/비밀번호 찾기
            </a>
          </div>
        </div>
      </div>
      <div className="mt-[58px] flex flex-col justify-center items-center">
        <button
          type="button"
          onClick={onClickLogin}
          className="w-[558px] h-[60px] rounded-[20px] text-[20px] text-white bg-[#FF611D]"
        >
          로그인
        </button>
        <button
          type="button"
          onClick={onClickSignup}
          className="w-[558px] h-[60px] mt-[10px] rounded-[20px] text-[20px] border border-[#FF611D] text-[#FF611D] bg-white"
        >
          회원가입
        </button>
      </div>
      <div className="mt-[58px] flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <span className="w-[54.5px] h-0 border bg-[#C6C6C6]"></span>
          <label className="px-[34px] text-[16px] text-[#A0A0A0]">
            간편 로그인/가입
          </label>
          <span className="w-[54.5px] h-0 border bg-[#C6C6C6]"></span>
        </div>
        <div className="mt-[37px] space-x-[31px]">
          <button
            name="sns1"
            className="w-[62px] h-[62px] rounded-full bg-[#D9D9D9]"
          ></button>
          <button
            name="sns2"
            className="w-[62px] h-[62px] rounded-full bg-[#D9D9D9]"
          ></button>
          <button
            name="sns3"
            className="w-[62px] h-[62px] rounded-full bg-[#D9D9D9]"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
