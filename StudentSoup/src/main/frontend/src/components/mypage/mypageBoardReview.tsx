import { ReactComponent as Remove } from '../../img/remove.svg';
import { ReactComponent as Modify } from '../../img/modify.svg';

const MypageBoardReview = () => {
  return (
    <div className="flex flex-[9] w-full h-[120vh] z-[1] font-[SDGothic] bg-zinc-100">
      <div className="w-full h-[820px] ml-[60px]">
        <div className='mt-[45px]'>
          <span className="text-[24px] leading-[33px] text-[#262626] font-bold">게시글</span>
        </div>
        <div className="flex flex-col w-[962px] h-[396px] mt-[30px]">
          <div className="flex flex-row h-[50px] border-[1px] border-[#BCBCBC] rounded-[5px]">
            <div className="w-[50%] border-r-[1px] border-[#BCBCBC] rounded-l-[5px] bg-white items-center justify-center flex">
              게시글(0)
            </div>
            <div className="w-[50%] rounded-r-[5px] bg-white items-center justify-center flex">
              댓글(0)
            </div>
          </div>
          <div className="w-[962px] h-[225px] flex flex-col mt-[25px]">
            <div className="w-full h-[4px] bg-[#FF611D]"></div>
            <div className="flex flex-row mt-[18px]">
              <div className="w-[30px] h-[19px] text-[16px] leading-[22px] text-[#353535] mx-[16px]">
                제목
              </div>
              <div className="ml-[425px] mr-[143px] text-[#353535]">작성일</div>
              <div className="w-[65px] h-[19px] text-[16px] leading-[22px] text-[#353535]">
                조회수(0)
              </div>
              <div className="w-[63px] h-[19px] ml-[66px] text-[16px] leading-[22px] text-[#353535]">
                좋아요(0)
              </div>
            </div>
            <div className="w-full h-[2px] bg-[#FF611D] mt-[19px]"></div>
            <div className="w-full h-[164px] font-bold text-[20px] leading-[28px] text-[#353535] flex items-center justify-center">
              작성된 게시글이 없습니다.
            </div>
            <div className="w-full h-[2px] bg-[#BCBCBC]"></div>
          </div>
        </div>
        <div className="flex flex-col w-[962px]">
          <div className="text-[24px] leading-[33px] font-bold text-[#262626]">리뷰</div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row mt-[25px]">
              <Remove className="mr-[15px]" />
              <Modify />
            </div>
            <div>
              <select className="w-[191px] h-[35px] text-[#939393] text-[16px] fw-400 leading-[21px] pl-[3px] border-[1px] border-[#BCBCBC] rounded-[3px]">
                <option value="0">전체</option>
                <option value="1">오늘</option>
                <option value="2">한달</option>
                <option value="3">6개월</option>
                <option value="4">1년</option>
              </select>
            </div>
          </div>
          <div className='mt-[13px]'>
            <div className="w-full h-[3px] bg-[#BCBCBC]"></div>
            <div className='w-full h-[224px] bg-white text-[20px] leading-[28px] font-semibold text-[#353535] flex items-center justify-center'>작성된 리뷰가 없습니다</div>
            <div className="w-full h-[3px] bg-[#BCBCBC]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypageBoardReview;
