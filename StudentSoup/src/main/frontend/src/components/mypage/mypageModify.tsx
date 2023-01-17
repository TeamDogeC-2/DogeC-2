import Upload from '../../img/upload.png';
import cn from 'clsx';
import { useState } from 'react';

const MypageModify = () => {
  const [lowAndUpValidated, setLowAndUpValidated] = useState<boolean>(false);
  const [numberValidated, setNumberValidated] = useState<boolean>(false);
  const [lengthValidated, setLengthValidated] = useState<boolean>(false);
  const [matchPassword, setMatchPassword] = useState<boolean>(false);

  return (
    <div className="flex flex-[9] w-full h-[100vh] z-[1] bg-zinc-100">
      <div className="w-[814px] h-[674px] flex flex-col ml-[161px] mt-[88px]">
        <div className="flex flex-col">
          <div className="text-[24px] leading-[33px] text-[#262626] font-bold">프로필 설정</div>
          <div className="w-full h-[526px] flex flex-row border-[1px] border-[#B1B1B1] bg-white rounded-[10px] mt-[18px]">
            <div className="w-[200px] h-full flex flex-col">
              <div className='w-[92px] h-[92px] bg-[url("./img/circle_fill_gray.jpg")] bg-cover mt-[44px] ml-[51px] rounded-full'></div>
              <div className='w-[46px] h-[49px] bg-[url("./img/human.jpg")] bg-cover relative bottom-[75px] left-[74px]'></div>
            </div>
            <div className="w-[1px] h-[420px] border-[#B1B1B1] border-[1px] mt-[44px] mb-[63px]"></div>
            <div className="w-[526px] h-[420px] flex flex-col">
              <div className="flex flex-col ml-[35px] mt-[43px] font-medium">
                <span className="text-[16px] fw-400 leading-[22px] text-[#6B6B6B]">아이디</span>
                <input
                  name="ID"
                  className="w-[246px] h-[38px] text-[16px] fw-400 leading-[21px] mt-[5px] pl-[23px] border-[1px] border-[#BCBCBC] rounded-[3px]"
                ></input>
                <div className="mt-[20px] flex flex-row">
                  <div className="flex flex-col">
                    <span className="text-[16px] fw-400 leading-[22px] text-[#6B6B6B]">닉네임</span>
                    <input
                      name="Nickname"
                      className="w-[246px] h-[38px] text-[16px] fw-400 leading-[21px] mt-[5px] pl-[23px] border-[1px] border-[#BCBCBC] rounded-[3px]"
                    ></input>
                  </div>
                  <div className="flex flex-col ml-[34px]">
                    <span
                      className={cn('text-[12px] fw-400 leading-[16px] mr-[6px] mt-[35px]', {
                        'text-[#FF611D]': matchPassword,
                        'text-[#939393]': !matchPassword,
                      })}
                    >
                      *사용 가능한 닉네임 입니다.
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-row ml-[35px]">
                <div className="flex flex-col mr-[34px]">
                  <span className="text-[16px] fw-400 leading-[22px] text-[#6B6B6B] mt-[20px]">
                    새 비밀번호
                  </span>
                  <input
                    name="newPW"
                    type="password"
                    className="w-[246px] h-[38px] text-[16px] fw-400 leading-[21px] mt-[5px] pl-[23px] border-[1px] border-[#BCBCBC] rounded-[3px]"
                  ></input>
                  <div className="flex flex-row mt-[5px] mb-[12px]">
                    <div className="flex flex-row items-center">
                      <span
                        className={cn('text-[12px] fw-400 leading-[16px] mr-[6px]', {
                          'text-[#FF611D]': lowAndUpValidated,
                          'text-[#939393]': !lowAndUpValidated,
                        })}
                      >
                        대소문자
                      </span>
                      <div
                        className={cn('w-[11px] h-[7px] bg-cover mr-[10px] relative bottom-[1px]', {
                          'bg-[url("./img/Vector15.jpg")]': lowAndUpValidated,
                          'bg-[url("./img/check_gray.jpg")]': !lowAndUpValidated,
                        })}
                      ></div>
                    </div>
                    <div className="flex flex-row items-center">
                      <span
                        className={cn('text-[12px] fw-400 leading-[16px] mr-[6px]', {
                          'text-[#FF611D]': numberValidated,
                          'text-[#939393]': !numberValidated,
                        })}
                      >
                        숫자
                      </span>
                      <div
                        className={cn('w-[11px] h-[7px] bg-cover mr-[10px] relative bottom-[1px]', {
                          'bg-[url("./img/Vector15.jpg")]': numberValidated,
                          'bg-[url("./img/check_gray.jpg")]': !numberValidated,
                        })}
                      ></div>
                    </div>
                    <div className="flex flex-row items-center">
                      <span
                        className={cn('text-[12px] fw-400 leading-[16px] mr-[6px]', {
                          'text-[#FF611D]': lengthValidated,
                          'text-[#939393]': !lengthValidated,
                        })}
                      >
                        8~20글자 이내
                      </span>
                      <div
                        className={cn('w-[11px] h-[7px] bg-cover relative bottom-[1px]', {
                          'bg-[url("./img/Vector15.jpg")]': lengthValidated,
                          'bg-[url("./img/check_gray.jpg")]': !lengthValidated,
                        })}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] fw-400 leading-[22px] text-[#6B6B6B] mt-[20px]">
                    비밀번호 확인
                  </span>
                  <input
                    name="PWconfirm"
                    type="password"
                    className="w-[246px] h-[38px] text-[16px] fw-400 leading-[21px] mt-[5px] pl-[23px] border-[1px] border-[#BCBCBC] rounded-[3px]"
                  ></input>
                  <div className="flex items-center mt-[5px]">
                    <span
                      className={cn('text-[12px] fw-400 leading-[16px] mr-[6px]', {
                        'text-[#FF611D]': !matchPassword,
                        'text-[#939393]': matchPassword,
                      })}
                    >
                      일치하지 않습니다.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col ml-[35px]">
                  <span className="text-[16px] fw-400 leading-[22px] text-[#6B6B6B]">이메일</span>
                  <input
                    name="Email"
                    className="w-[246px] h-[38px] text-[16px] fw-400 leading-[21px] mt-[5px] pl-[23px] border-[1px] border-[#BCBCBC] rounded-[3px]"
                  ></input>
                </div>
                <div className="flex flex-col ml-[35px]">
                  <button
                    className={cn(
                      'w-[246px] h-[38px] relative text-start bg-white text-[16px] mt-[32px] pl-[13px] fw-400 leading-[21px] border-[1px] border-[#BCBCBC] rounded-[3px]',
                      "after:bg-[url('./img/dropdown.png')] after:bg-no-repeat after:bg-[length:10px_5px] after:top-[12px] after:right-[13px] after:content-[''] after:absolute after:w-[10px] after:h-[5px]",
                    )}
                  ></button>
                </div>
              </div>
              <div className="flex flex-row mt-[20px]">
                <div className="flex flex-col ml-[35px]">
                  <span className="text-[16px] fw-400 leading-[22px] text-[#6B6B6B]">학교</span>
                  <input
                    name="Email"
                    className="w-[246px] h-[38px] text-[16px] fw-400 leading-[21px] mt-[5px] pl-[23px] border-[1px] border-[#BCBCBC] rounded-[3px]"
                  ></input>
                </div>
                <div className="flex flex-col ml-[35px]">
                  <span className="text-[16px] fw-400 leading-[22px] text-[#6B6B6B]">전공</span>
                  <button
                    className={cn(
                      'w-[246px] h-[38px] relative text-start bg-white text-[16px] mt-[5px] pl-[13px] fw-400 leading-[21px] border-[1px] border-[#BCBCBC] rounded-[3px]',
                      "after:bg-[url('./img/dropdown.png')] after:bg-no-repeat after:bg-[length:10px_5px] after:top-[12px] after:right-[13px] after:content-[''] after:absolute after:w-[10px] after:h-[5px]",
                    )}
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[814px] h-[54px] bg-[#B8B8B8] flex justify-center items-center mt-[34px]">
          <button className="w-full h-full text-[16px] fw-400 leading-[22px] text-white font-bold">
            변경 저장하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MypageModify;
