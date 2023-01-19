import React from 'react';
import MenuInfo from '../../img/MenuInfo1.png';
import MenuInfo2 from '../../img/MenuInfo2.png';
import MenuInfo3 from '../../img/MenuInfo3.png';
import MenuInfo4 from '../../img/MenuInfo4.png';
import { ReactComponent as MenuHeart } from '../../img/MenuHeart.svg';
import { ReactComponent as MoreInfo } from '../../img/moreicon.svg';

const menuInfo = () => {
  return (
    <>
      <div className="ml-[25px] mt-[33px] grid grid-cols-2 gap-[18px]">
        <div className="relative flex flex-row">
          <img className="w-[172px] h-[164px] rounded-[5px]" src={MenuInfo}></img>
          <div className="ml-[14px] font-[400] text-[18px] leading-[28px] flex text-[#515151]">
            등심돈카츠 정식
          </div>
          <div className="absolute bottom-[132px] left-[106px] w-[58px] h-[27px] border bg-[#FF611D] border-[#FF611D] rounded-[15px]">
            <div className="flex flex-row">
              <MenuHeart className="mt-[5px] ml-[11px]" />
              <div className="ml-[4px] font-[400] text-[16px] leading-[22px] flex items-center text-[#FFFFFF]">
                16
              </div>
            </div>
            <div className="mt-[108px] ml-[80px] w-[68px] font-[400] text-[20px] leading-[28px] flex items-center text-[#FF611D]">
              8,900원
            </div>
          </div>
        </div>

        <div className="relative flex flex-row">
          <img className="w-[172px] h-[164px] rounded-[5px]" src={MenuInfo2}></img>
          <div className="ml-[14px] font-[400] text-[18px] leading-[28px] flex text-[#515151]">
            안심돈카츠 정식
          </div>
          <div className="absolute bottom-[132px] left-[106px] w-[58px] h-[27px] border bg-[#FF611D] border-[#FF611D] rounded-[15px]">
            <div className="flex flex-row">
              <MenuHeart className="mt-[5px] ml-[11px]" />
              <div className="ml-[4px] font-[400] text-[16px] leading-[22px] flex items-center text-[#FFFFFF]">
                16
              </div>
            </div>
            <div className="mt-[108px] ml-[80px] w-[79px] font-[400] text-[20px] leading-[28px] flex items-center text-[#FF611D]">
              10,500원
            </div>
          </div>
        </div>
        <div className="relative flex flex-row">
          <img className="w-[172px] h-[164px] rounded-[5px]" src={MenuInfo3}></img>
          <div className="ml-[14px] font-[400] text-[18px] leading-[28px] flex text-[#515151]">
            함박스테이크 정식
          </div>
          <div className="absolute bottom-[132px] left-[106px] w-[58px] h-[27px] border bg-[#FF611D] border-[#FF611D] rounded-[15px]">
            <div className="flex flex-row">
              <MenuHeart className="mt-[5px] ml-[11px]" />
              <div className="ml-[4px] font-[400] text-[16px] leading-[22px] flex items-center text-[#FFFFFF]">
                16
              </div>
            </div>
            <div className="mt-[108px] ml-[80px] w-[68px] font-[400] text-[20px] leading-[28px] flex items-center text-[#FF611D]">
              9,900원
            </div>
          </div>
        </div>
        <div className="relative flex flex-row">
          <img className="w-[172px] h-[164px] rounded-[5px]" src={MenuInfo4}></img>
          <div className="ml-[14px] font-[400] text-[18px] leading-[28px] flex text-[#515151]">
            치킨가스 정식
          </div>
          <div className="absolute bottom-[132px] left-[106px] w-[58px] h-[27px] border bg-[#FF611D] border-[#FF611D] rounded-[15px]">
            <div className="flex flex-row">
              <MenuHeart className="mt-[5px] ml-[11px]" />
              <div className="ml-[4px] font-[400] text-[16px] leading-[22px] flex items-center text-[#FFFFFF]">
                16
              </div>
            </div>
            <div className="mt-[108px] ml-[80px] w-[79px] font-[400] text-[20px] leading-[28px] flex items-center text-[#FF611D]">
              10,500원
            </div>
          </div>
        </div>
      </div>
      <div className="ml-[25px] mt-[27px] w-[687px] bg-[#BCBCBC] border-[1px] border-[#BCBCBC]"></div>
      <div className="mt-[14px] ml-[649px] font-[400] text-[16px] leading-[22px] flex items-center cursor-pointer">
        더보기
        <div className="ml-[5px] w-[14px] h-[14px] rounded-full border border-[#FF611D] bg-[#FF611D]">
          <MoreInfo className="ml-[2.22px] mt-[3.5px]" />
        </div>
      </div>
    </>
  );
};

export default menuInfo;
