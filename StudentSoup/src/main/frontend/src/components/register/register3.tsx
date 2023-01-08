import RegisterNavbar from '../common/registerNavbar';
import cn from 'clsx';

const Register3 = () => {
  return (
    <>
      <RegisterNavbar />
      <div className="w-full h-[calc(100vh-88px)] flex flex-col justify-center items-center">
        <div className="flex flex-col text-center w-[530px]">
          <span className="text-[40px] fw-400 leading-[56px] flex justify-center font-bold mb-[47px]">
            신규 회원가입
          </span>
          <div className="flex flex-row  justify-center items-center">
            <div className="flex flex-col items-center w-[88px]">
              <div className="w-[45px] h-[45px] bg-[#FF611D] rounded-full bg-cover relative top-[12px]"></div>
              <div className='w-[20px] h-[15px] bg-[url("./img/check_white.png")] bg-[length:20px_15px] bg-no-repeat relative bottom-[18px]' />
              <span className="text-[#FF611D] text-[16px] fw-400 leading-[21px]">
                이용약관 동의
              </span>
            </div>
            <span className="w-[110px] h-[3px] bg-[#FF611D] relative bottom-[10px]"></span>
            <div className="flex flex-col items-center w-[88px]">
              <div className="w-[45px] h-[45px] bg-[#FF611D] rounded-full bg-cover relative top-[12px]"></div>
              <div className='w-[20px] h-[15px] bg-[url("./img/check_white.png")] bg-[length:20px_15px] bg-no-repeat relative bottom-[18px]' />
              <span className="text-[#FF611D] text-[16px] fw-400 leading-[21px]">회원가입</span>
            </div>
            <span className="w-[110px] h-[3px] bg-[#FF611D] relative bottom-[10px]"></span>
            <div className="flex flex-col items-center w-[88px]">
              <div className="w-[45px] h-[45px] bg-[#FF611D] rounded-full bg-cover relative top-[12px]"></div>
              <div className='w-[20px] h-[15px] bg-[url("./img/check_white.png")] bg-[length:20px_15px] bg-no-repeat relative bottom-[18px]' />
              <span className="text-[#FF611D] text-[16px] fw-400 leading-[21px]">
                개인정보 입력
              </span>
            </div>
          </div>
          <div className="mt-[49px]">
            <span className="flex text-[26px] leading-[37px] text-left text-[#161616] font-bold">
              SFOO의 서비스를 위한 개인정보를 <br />
              입력해주세요.
            </span>
          </div>
          {/* 성별 */}
          <div className="flex justify-center">
            <div></div>
          </div>
          <div className="flex text-left mt-[46px] mb-[20px]">
            성별
            <div className="ml-[32px]">
              <input
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#FF611D] checked:border-[#FF611D] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-[9px] cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label inline-block text-gray-800 mr-[9px]">여</label>
            </div>
            <div>
              <input
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#FF611D] checked:border-[#FF611D] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-[9px] cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label inline-block text-gray-800 mr-[9px]">남</label>
            </div>
          </div>
          {/* 학교 */}
          <div className="flex flex-col text-start">
            <div>학교</div>
            <button
              className={cn(
                'relative text-start text-[#939393] text-[16px] fw-400 leading-[21px] mt-[6px] py-[16px] pl-[23px] border-[1px] border-[#BCBCBC] rounded-[3px]',
                "after:bg-[url('./img/dropdown.png')] after:bg-no-repeat after:bg-[length:10px_5px] after:top-[23px] after:right-[20px] after:content-[''] after:absolute after:w-[10px] after:h-[5px]",
              )}
            >
              학교 선택
            </button>
          </div>

          <div className="flex flex-row justify-between text-start mt-[14px]">
            {/* 닉네임 */}
            <div className="flex flex-col w-[46%]">
              <div>닉네임</div>
              <input
                type="text"
                placeholder="닉네임 입력"
                className="text-[16px] fw-400 leading-[21px] mt-[6px] py-[16px] pl-[23px] border-[1px] border-[#BCBCBC] rounded-[3px]"
              />
            </div>
            {/* 전공 */}
            <div className="flex flex-col w-[46%]">
              <div>전공</div>
              <button
                className={cn(
                  'relative text-start text-[#939393] text-[16px] fw-400 leading-[21px] mt-[6px] py-[16px] pl-[23px] border-[1px] border-[#BCBCBC] rounded-[3px]',
                  "after:bg-[url('./img/dropdown.png')] after:bg-no-repeat after:bg-[length:10px_5px] after:top-[23px] after:right-[20px] after:content-[''] after:absolute after:w-[10px] after:h-[5px]",
                )}
              >
                전공 선택
              </button>
            </div>
          </div>
          {/* 완료 */}
          <div className="w-[530px] h-[54px] mt-[24px] bg-[#B8B8B8] flex justify-center items-center">
            <button className="w-full h-full text-[16px] fw-400 leading-[22px] text-white">
              완료
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register3;
