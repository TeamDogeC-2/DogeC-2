import { useState } from 'react';
import RestaurantNavbar from '../common/restaurantNavbar';
import { ReactComponent as Star } from '../../img/Star.svg';
import { ReactComponent as Heart } from '../../img/Heart.svg';
import { ReactComponent as Share } from '../../img/Share.svg';
import { ReactComponent as Review } from '../../img/Review.svg';
import { ReactComponent as Camera } from '../../img/camera.svg';
import { ReactComponent as Location } from '../../img/location.svg';
import { ReactComponent as Phone } from '../../img/Phone.svg';
import { ReactComponent as Clock } from '../../img/Clock.svg';
import { ReactComponent as PlusCircle } from '../../img/pluscircle.svg';
import { ReactComponent as InfoHeart } from '../../img/InfoHeart.svg';
import MenuInfopage from './menuInfo';
import Reviewpage from './reviewInfo';
import Sharepage from './pictureInfo';
import cn from 'clsx';

const restaurant = () => {
  const [click, setClick] = useState<any>(1);
  const clickPage = (e: any) => {
    console.log(e);
    setClick(e);
  };
  return (
    <>
      <RestaurantNavbar />
      <div className="w-[full] h-[535px] flex m-[49px] justify-center">
        <div className="w-[281px] h-[532px]  bg-[#FFFFFF] shadow-[0px_2px_10px_rgba(0,0,0,0.1)] rounded-[5px] mr-[14px]">
          <div className="w-[238px] h-[239px] bg-[#FF6347] m-[21px]"></div>
          <div className="ml-[22px] h-[50px] font-[900] text-[28px] leading-[40px] flex items-center">
            금돈
          </div>
          <div className="ml-[22px] h-[16px] font-[400] leading-[21px] text-[16px] flex items-center text-[#717171]">
            제물포역 | 돈가스, 함박스테이크
          </div>
          <div className="flex flex-row">
            <Star className="ml-[22px] mt-[10px]" />
            <div className="ml-[5.92px] mt-[10px] h-[16px] font-bold text-[16px] leading-[23px] flex items-center text-[#515151]">
              4.6
            </div>
            <div className="ml-[10px] mt-[10px] h-[16px] font-[400] text-[13px] leading-[17px] flex items-center text-[#9C9C9C]">
              258개 평점(428명 참여)
            </div>
          </div>
          <div className="ml-[22px] mr-[21px] mt-[23px] border-[1px] border-[#DEDEDE] bg-[#DEDEDE]"></div>
          <div className="flex flex-row w-[238px]">
            <div className="flex flex-col">
              <Heart className="ml-[47px] mt-[17px] mb-[12.26px]" />
              <div className="ml-[35px] w-[39px] h-[11px] font-[400] text-[13px] leading-[17px] flex items-center text-[#515151]">
                좋아요
              </div>
            </div>
            <div className="ml-[24px] mt-[17px] border-[1px] border-[#DEDEDE] rotate-[90] bg-[#DEDEDE]"></div>
            <div className="flex flex-col">
              <Share className="ml-[35px] mt-[18.24px]" />
              <div className="ml-[30px] w-[26px] mt-[9px] h-[11px] font-[400] text-[13px] leading-[17px] flex items-center">
                공유
              </div>
            </div>
            <div className="ml-[32px] mt-[16px] border-[1px] border-[#DEDEDE] rotate-[90] bg-[#DEDEDE]"></div>
            <div className="flex flex-col">
              <Review className="ml-[30px] mt-[17px]" />
              <div className="ml-[25px] w-[26px] mt-[11px] h-[11px] font-[400] text-[13px] leading-[17px] flex items-center">
                리뷰
              </div>
            </div>
          </div>
          <div className="mt-[23px] ml-[22px] w-[238px] h-[38px] border-[0.7px] rounded-[5px] border-[#FF611D]">
            <div className="ml-[83px] mt-[13px] mb-[15px] w-[82px] h-[11px] font-[400] text-[13px] leading-[18px] flex items-center text-[#FF611D]">
              배달가능 업체
            </div>
          </div>
        </div>
        <div className="w-[744px] h-[563px] bg-[#FFFFFF] shadow-[0px_2px_10px_rgba(0,0,0,0.1)] rounded-[5px]">
          <div className="grid grid-cols-3">
            <div className="ml-[21px] mt-[21px] w-[268px] h-[290px] bg-[#29088A]"></div>
            <div className="ml-[45px] mt-[21px] w-[214px] h-[143px] bg-[#31B404]"></div>
            <div className="ml-[16px] mt-[21px] w-[214px] h-[143px] bg-[#F8E0E0]"></div>
            <div className="ml-[293px] mt-[-142px] w-[214px] h-[143px] bg-[#F5A9D0]"></div>
            <div className="ml-[264px] mt-[-142px] w-[214px] h-[143px] bg-[rgba(23,23,23,0.55)]">
              <Camera className="ml-[97px] mt-[53px]" />
              <div className="ml-[55px] mt-[5.75px] font-[400] leading-[21px] flex items-center text-[#FEFEFE]">
                230장 모두보기
              </div>
            </div>
          </div>
          <div className="ml-[21px] mt-[32px] font-[400] text-[24px] flex items-center">
            매장정보
          </div>
          <div className="flex flex-row">
            <Location className="ml-[21px] mt-[20.15px]" />
            <div className="ml-[10.33px] mt-[18px] h-[16px] font-[400] text-[16px] leading-[21px] flex items-center text-[#515151]">
              인천 미추홀구 숙골로87번길28
            </div>
            <div className="ml-[15.78px] mt-[19px] w-[14px] h-[14px] bg-[#1C1B6A] rounded-full">
              <div className="ml-[3px] mt-[1px] w-[4px] h-[9px] text-[13px] leading-[18px] font-[400] flex items-center text-[#FFFFFF]">
                1
              </div>
            </div>
            <div className="ml-[5px] mt-[17px] flex flex-row ">
              <div className=" h-[16px] font-[400] leading-[21px] flex items-center text-[#515151]">
                제물포역
              </div>
              <div className="ml-[5px] h-[16px] font-[400] leading-[21px] flex items-center text-[#7B7B7B]">
                2번 출구에서
              </div>
              <div className="ml-[5px] h-[16px] font-[400] leading-[21px] flex items-center text-[#FF611D]">
                637m
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <Phone className="ml-[21px] mt-[19px]" />
            <div className="ml-[9.61px] mt-[17px] h-[16px] font-[400] text-[16px] leading-[21px] flex items-center text-[#515151]">
              0507-1391-1009
            </div>
          </div>
          <div className="flex flex-row">
            <Clock className="ml-[21px] mt-[21px]" />
            <div className="ml-[8px] mt-[18px] h-[16px] font-[400] text-[16px] leading-[21px] flex items-center text-[#515151]">
              영업시간 AM 09:00- PM 21:00
            </div>
          </div>
          <div className="flex flex-row">
            <PlusCircle className="ml-[21px] mt-[20px]" />
            <div className="ml-[9px] mt-[17px] h-[16px] font-[400] text-[16px] leading-[21px] flex items-center text-[#515151]">
              주차,포장,배달,무선 인터넷 남/녀 화장실 구분
            </div>
          </div>
          <div className="flex flex-row">
            <InfoHeart className="ml-[21px] mt-[19px]" />
            <div className="ml-[8px] mt-[16px] h-[16px] font-[400] leading-[21px] flex items-center text-[#515151]">
              이 식당에 1235명의 좋아요한 사용자가 있습니다.
            </div>
          </div>
        </div>
      </div>
      <div className="w-[full] h-[542px] flex justify-center">
        <div className="ml-[298px] w-[744px] h-[563px] bg-[#FFFFFF] shadow-[0px_2px_10px_rgba(0,0,0,0.1)] rounded-[5px]">
          <div className="flex flex-row">
            <div
              onClick={() => {
                clickPage(1);
              }}
              className={cn(
                'ml-[86px] mt-[43px] h-[16px] text-[24px] leading-[34px] flex items-center cursor-pointer',
                {
                  'font-bold text-[#FF611D]': click === 1,
                  'font-[400] text-[#515151]': click !== 1,
                },
              )}
            >
              메뉴정보
            </div>
            <div
              onClick={() => {
                clickPage(2);
              }}
              className={cn(
                'ml-[160px] mt-[43px] h-[16px] text-[24px] leading-[34px] flex items-center cursor-pointer',
                {
                  'font-bold text-[#FF611D]': click === 2,
                  'font-[400] text-[#515151]': click !== 2,
                },
              )}
            >
              리뷰
            </div>
            <div
              onClick={() => {
                clickPage(3);
              }}
              className={cn(
                'ml-[181px] mt-[43px] h-[16px]  text-[24px] leading-[34px] flex items-center cursor-pointer',
                {
                  'font-bold text-[#FF611D]': click === 3,
                  'font-[400] text-[#515151]': click !== 3,
                },
              )}
            >
              사진
            </div>
          </div>
          <div className="flex flex-row">
            <div className="ml-[25px] mt-[25px] w-[687px] h-[2px] bg-[#BCBCBC] border-[1px] border-[#BCBCBC]">
              <div
                className={cn(
                  'm-[-1px] w-[229px] h-[2px] bg-[#FF611D] border-[1px] border-[#FF611D]',
                  { '': click === 1, 'ml-[229px]': click === 2, 'ml-[458px]': click === 3 },
                )}
              ></div>
            </div>
          </div>
          {click === 1 ? <MenuInfopage /> : ''}
          {click === 2 ? <Reviewpage /> : ''}
          {click === 3 ? <Sharepage /> : ''}
        </div>
      </div>
    </>
  );
};
export default restaurant;
