import React from 'react';
import { ReactComponent as RightIcon } from '../../img/icon_right.svg';
import { ReactComponent as LeftIcon } from '../../img/icon_left.svg';

const pictureInfo = () => {
  return (
    <>
      <div className="w-[744px] h-[1203px] bg-[#FFFFFF] shadow-[0px_2px_10px_rgba(0,0,0,0.1)] rounded-[5px]">
        <div className="grid grid-cols-[232px_minmax(232px,_0fr)_1px] ml-[25px]">
          <div className="mt-[14px] w-[226px] h-[190px] border border-[#6F2D] bg-[#6F2D]">1</div>
          <div className="mt-[14px] w-[226px] h-[190px] border border-[#6F2D] bg-[#6F2D]">2</div>
          <div className="mt-[14px] w-[226px] h-[190px] border border-[#6F2D] bg-[#6F2D]">3</div>
          <div className="mt-[6px] w-[226px] h-[190px] border border-[#6F2D] bg-[#6F2D]">4</div>
          <div className="mt-[6px] w-[226px] h-[190px] border border-[#6F2D] bg-[#6F2D]">5</div>
          <div className="mt-[6px] w-[226px] h-[190px] border border-[#6F2D] bg-[#6F2D]">6</div>
          <div className="mt-[6px] w-[226px] h-[190px] border border-[#6F2D] bg-[#6F2D]">7</div>
          <div className="mt-[6px] w-[226px] h-[190px] border border-[#6F2D] bg-[#6F2D]">8</div>
          <div className="mt-[6px] w-[226px] h-[190px] border border-[#6F2D] bg-[#6F2D]">9</div>
          <div className="mt-[6px] w-[226px] h-[190px] border border-[#6F2D] bg-[#6F2D]">10</div>
          <div className="mt-[6px] w-[226px] h-[190px] border border-[#6F2D] bg-[#6F2D]">11</div>
          <div className="mt-[6px] w-[226px] h-[190px] border border-[#6F2D] bg-[#6F2D]">12</div>
          <div className="mt-[6px] w-[226px] h-[190px] border border-[#6F2D] bg-[#6F2D]">13</div>
          <div className="mt-[6px] w-[226px] h-[190px] border border-[#6F2D] bg-[#6F2D]">14</div>
          <div className="mt-[6px] w-[226px] h-[190px] border border-[#6F2D] bg-[#6F2D]">15</div>
        </div>
        <div className="flex flex-row">
          <LeftIcon className="ml-[234px] mt-[55.63px]" />
          <div className="ml-[17.46px] mt-[43px] w-[38px] h-[38px] border border-[#FF611D] rounded-full">
            <div className="ml-[12.3px] mt-[4px] font-[400] text-[20px] leading-[26px] flex text-[#FF611D]">
              1
            </div>
          </div>
          <div className="ml-[9.5px] mt-[43px] w-[38px] h-[38px] border border-[#FF611D] rounded-full">
            <div className="ml-[12.3px] mt-[4px] font-[400] text-[20px] leading-[26px] flex text-[#FF611D]">
              2
            </div>
          </div>
          <div className="ml-[9.5px] mt-[43px] w-[38px] h-[38px] border border-[#FF611D] rounded-full">
            <div className="ml-[12.3px] mt-[4px] font-[400] text-[20px] leading-[26px] flex text-[#FF611D]">
              3
            </div>
          </div>
          <div className="ml-[9.5px] mt-[43px] w-[38px] h-[38px] border border-[#FF611D] rounded-full">
            <div className="ml-[12.3px] mt-[4px] font-[400] text-[20px] leading-[26px] flex text-[#FF611D]">
              4
            </div>
          </div>
          <div className="ml-[9.5px] mt-[43px] w-[38px] h-[38px] border border-[#FF611D] rounded-full">
            <div className="ml-[12.3px] mt-[4px] font-[400] text-[20px] leading-[26px] flex text-[#FF611D]">
              5
            </div>
          </div>
          <RightIcon className="ml-[15px] mt-[53.63px]" />
        </div>
      </div>
    </>
  );
};

export default pictureInfo;
