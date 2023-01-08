import School from '../../img/school.png';
import Major from '../../img/major.png';

const MypageHome = () => {
  return (
    <div className="flex-[9] z-[1] bg-zinc-100">
      <div className="w-full h-[259px] flex items-center justify-center bg-zinc-300">
        <span>배너 이미지 업로드</span>
      </div>
      <div className="flex flex-row w-full h-[685px]">
        <div className="w-[451px] relative bottom-[140px]">
          <div className="flex flex-col items-center w-[319px] h-[425px] ml-[75px] mr-[57px] bg-white shadow-lg rounded-[5px] z-[2]">
            <div className="mt-[35px]">
              <div className='w-[122px] h-[122px] bg-[url("./img/circle_fill_gray.jpg")] bg-cover relative top-[4px] rounded-full'></div>
              <div className='w-[61px] h-[65px] bg-[url("./img/human.jpg")] bg-cover relative bottom-[90px] left-[30px] mb-[10px]'></div>
            </div>
            <div className="relative bottom-[60px]">
              <span className="text-[28px] leading-39px text-[#353535]">운영자</span>
            </div>
            <div className="flex flex-col relative bottom-[40px]">
              <div className="flex flex-row justify-center items-center">
                <div className="mr-[10px]">
                  <img src={School} alt="" />
                </div>
                <span className="text-[12px] leading-[17px] text-[#8D8D8D]">
                  청운대학교 인천 캠퍼스
                </span>
              </div>
              <div className="flex flex-row items-center text-left">
                <div className="mr-[10px]">
                  <img src={Major} alt="" />
                </div>
                <span className="text-[12px] leading-[17px] text-[#8D8D8D]">컴퓨터공학과</span>
              </div>
            </div>
            <button className="w-[262px] h-[44px] bg-[#FF611D] text-white rounded-[11px] text-[15px] leading-[21px] relative bottom-[10px]">
              내 프로필 편집
            </button>
            <div>
              <span className="text-[10px] leading-[14px] text-[#8D8D8D]">
                가입일 : 2022년 12월 26일
              </span>
            </div>
          </div>
        </div>
        <div className="w-[635px] h-full flex flex-col">
          <div className="flex flex-row mt-[36px] mb-[32px]">
            <button className="w-[95px] h-[34px] rounded-[38px] bg-[#FF611D] text-[16px] font-semibold leading-[22px] text-white mr-[47px]">
              작성 글
            </button>
            <button className="w-[95px] h-[34px] rounded-[38px] bg-zinc-100 text-[16px] font-semibold leading-[22px] mr-[47px]">
              작성 댓글
            </button>
            <button className="w-[95px] h-[34px] rounded-[38px] bg-zinc-100 text-[16px] font-semibold leading-[22px]">
              작성 리뷰
            </button>
          </div>
          <div>
            <div className="w-[573px] h-[490px] bg-white border-[1px] border-[#E1E1E1] rounded-[5px] shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypageHome;
