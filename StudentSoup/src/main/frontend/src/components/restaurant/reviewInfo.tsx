import React, { useState, useEffect } from 'react';
import { ReactComponent as SmallStar } from '../../img/reviewSmallStar.svg';
import { ReactComponent as MoreInfo } from '../../img/moreicon.svg';
import cn from 'clsx';

const review = () => {
  const AVR_RATE = 4.6;
  const STAR_IDX_ARR = ['first', 'second', 'third', 'fourth', 'last'];
  const [starArr, setStarArr] = useState([0, 0, 0, 0, 0]);
  const [click, setClick] = useState<any>(2);
  const clickPage = (e: any) => {
    setClick(e);
  };
  const calcStarRates = () => {
    const tempStarRatesArr = [0, 0, 0, 0, 0];
    let starVerScore = (AVR_RATE * 60) / 5;
    let idx = 0;
    while (starVerScore > 12) {
      tempStarRatesArr[idx] = 12;
      idx += 1;
      starVerScore -= 12;
    }
    tempStarRatesArr[idx] = starVerScore;
    return tempStarRatesArr;
  };
  useEffect(() => {
    setStarArr(calcStarRates);
  }, []);
  return (
    <>
      <div className="flex flex-row">
        <div className="ml-[28px] mt-[25px] h-[16px] font-bold text-[24px] leading-[33px] flex items-center">
          금돈
        </div>
        {STAR_IDX_ARR.map((item, idx) => {
          return (
            <span
              className="flex inline-flex items-center ml-[1px] mt-[19.4px]"
              key={`${item}_${idx}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.21px"
                height="21.56px"
                viewBox="0 0 12 13"
                fill="#cacaca"
              >
                <clipPath id={`${item}StarClip`}>
                  <rect width={`${starArr[idx]}`} height="39" />
                </clipPath>
                <path
                  id={`${item}Star`}
                  d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                  transform="translate(-2 -2)"
                />
                <use clipPath={`url(#${item}StarClip)`} href={`#${item}Star`} fill="#FFB21D" />
              </svg>
            </span>
          );
        })}
        <div className="ml-[11.11px] mt-[24px] w-[45px] h-[16px] font-bold text-[24px] leading-[33px] flex items-center text-[#FF611D]">
          {AVR_RATE}
        </div>
        <div className="ml-[5px] mt-[28px] w-[201px] h-[16px] font-[400] text-[14px] leading-[18px] flex items-center text-[#9F9F9F]">
          총 302명이 리뷰를 작성했어요.
        </div>
        <div
          onClick={() => {
            clickPage(1);
          }}
          className={cn('ml-[94px] mt-[19px] w-[70px] h-[29px] border-[1px] rounded-[10px]', {
            'border-[#FF611D] text-[#FF611D]': click === 1,
            'border-[#9C9C9C] text-[#9C9C9C]': click !== 1,
          })}
        >
          <div className="ml-[11.5px] mt-[2px] font-[400] text-[16px] leading-[21px] flex items-center">
            최신순
          </div>
        </div>
        <div
          onClick={() => {
            clickPage(2);
          }}
          className={cn('ml-[7px] mt-[19px] w-[70px] h-[29px] border-[1px]  rounded-[10px]', {
            'border-[#FF611D] text-[#FF611D]': click === 2,
            'border-[#9C9C9C] text-[#9C9C9C]': click !== 2,
          })}
        >
          <div className="ml-[11.5px] mt-[2px] font-[400] text-[16px] leading-[21px] flex items-center">
            추천순
          </div>
        </div>
      </div>
      <div className="ml-[25px] mt-[29px] w-[687px] h-[1px] border border-[#D5D5D5] bg-[#D5D5D5] "></div>
      <div>
        <div className="grid grid-cols-3">
          <div className="ml-[25px] mt-[18px] w-[220px] h-[312px] border-[1px] border-[#D2D2D2] shadow-[1px_1px_4px_rgba(0,0,0,0.07)] rounded-[5px]">
            <div className="w-[39px] h-[40px] ml-[13px] mt-[15px] border rounded-full border-[#CCCCCC] bg-[#CCCCCC]">
              <div className="ml-[44px] mt-[6px] w-[82px] h-[10px] font-[400] text-[12px] leading-[20px] flex items-center">
                냠냠쿠키
              </div>
              <SmallStar className="ml-[44px] mt-[5.23px]" />
              <div className="ml-[5px] mt-[23.12px] w-[180px] h-[120px] border border-[#DDDDDD] rounded-[10px] text-center bg-[#DDDDDD]">
                이미지
                <div className="ml-[147px] mt-[63px] w-[32px] h-[32px] border border-[rgba(0,0,0,0.01)] border-[#FFFFFF] rounded-br-lg bg-[rgba(0,0,0,0.4)]">
                  <div className="ml-[6px] mt-[4px] font-[400] text-[14px] laeding-[18px] flex items-center text-[#FFFFFF]">
                    +4
                  </div>
                </div>
              </div>
              <div className="ml-[5px] mt-[11px] w-[184px] h-[62px] font-[400] text-[12px] leading-[16px] text-[#6B6B6B]">
                진짜진짜로 맛있어요 ㅠㅠ 치즈카츠의 치즈는 진짜 모짜렐라치즈 맛으로 고소하면서 쫙좍
                늘어나고 가츠동에 밥 양념이...
              </div>
              <div className="ml-[7px] mt-[18px] w-[55px] h-[16px] font-[400] text-[11px] leading-[14px] flex items-center text-[#A5A5A5]">
                2022.12.14
              </div>
            </div>
          </div>
          <div className="ml-[12px] mt-[18px] w-[220px] h-[312px] border-[1px] border-[#D2D2D2] shadow-[1px_1px_4px_rgba(0,0,0,0.07)] rounded-[5px]">
            <div className="w-[39px] h-[40px] ml-[13px] mt-[15px] border rounded-full border-[#CCCCCC] bg-[#CCCCCC]">
              <div className="ml-[44px] mt-[6px] w-[82px] h-[10px] font-[400] text-[12px] leading-[20px] flex items-center">
                냠냠쿠키
              </div>
              <SmallStar className="ml-[44px] mt-[5.23px]" />
              <div className="ml-[5px] mt-[23.12px] w-[180px] h-[120px] border border-[#DDDDDD] rounded-[10px] text-center bg-[#DDDDDD]">
                이미지
                <div className="ml-[147px] mt-[63px] w-[32px] h-[32px] border border-[rgba(0,0,0,0.01)] border-[#FFFFFF] rounded-br-lg bg-[rgba(0,0,0,0.4)]">
                  <div className="ml-[6px] mt-[4px] font-[400] text-[14px] laeding-[18px] flex items-center text-[#FFFFFF]">
                    +2
                  </div>
                </div>
              </div>
              <div className="ml-[5px] mt-[11px] w-[184px] h-[62px] font-[400] text-[12px] leading-[16px] text-[#6B6B6B]">
                진짜진짜로 맛있어요 ㅠㅠ 치즈카츠의 치즈는 진짜 모짜렐라치즈 맛으로 고소하면서 쫙좍
                늘어나고 가츠동에 밥 양념이...
              </div>
              <div className="ml-[7px] mt-[18px] w-[55px] h-[16px] font-[400] text-[11px] leading-[14px] flex items-center text-[#A5A5A5]">
                2022.12.14
              </div>
            </div>
          </div>
          <div className="mt-[18px] w-[220px] h-[312px] border-[1px] border-[#D2D2D2] shadow-[1px_1px_4px_rgba(0,0,0,0.07)] rounded-[5px]">
            <div className="w-[39px] h-[40px] ml-[13px] mt-[15px] border rounded-full border-[#CCCCCC] bg-[#CCCCCC]">
              <div className="ml-[44px] mt-[6px] w-[82px] h-[10px] font-[400] text-[12px] leading-[20px] flex items-center">
                냠냠쿠키
              </div>
              <SmallStar className="ml-[44px] mt-[5.23px]" />
              <div className="ml-[5px] mt-[23.12px] w-[180px] h-[120px] border border-[#DDDDDD] rounded-[10px] text-center bg-[#DDDDDD]">
                이미지
                <div className="ml-[147px] mt-[63px] w-[32px] h-[32px] border border-[rgba(0,0,0,0.01)] border-[#FFFFFF] rounded-br-lg bg-[rgba(0,0,0,0.4)]">
                  <div className="ml-[6px] mt-[4px] font-[400] text-[14px] laeding-[18px] flex items-center text-[#FFFFFF]">
                    +2
                  </div>
                </div>
              </div>
              <div className="ml-[5px] mt-[11px] w-[184px] h-[62px] font-[400] text-[12px] leading-[16px] text-[#6B6B6B]">
                진짜진짜로 맛있어요 ㅠㅠ 치즈카츠의 치즈는 진짜 모짜렐라치즈 맛으로 고소하면서 쫙좍
                늘어나고 가츠동에 밥 양념이...
              </div>
              <div className="ml-[7px] mt-[18px] w-[55px] h-[16px] font-[400] text-[11px] leading-[14px] flex items-center text-[#A5A5A5]">
                2022.12.14
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="ml-[644px] mt-[15px] h-[16px] font-[400] text-[16px] leading-[22px] flex items-center text-[#515151]">
            더보기
          </div>
          <div className="ml-[4px] mt-[16px] w-[14px] h-[14px] bg-[#FF611D] border rounded-full">
            <MoreInfo className="ml-[2.89px] mt-[3.5px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default review;
