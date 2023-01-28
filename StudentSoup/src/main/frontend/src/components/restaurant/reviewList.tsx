import { ReactComponent as MoreInfo } from '../../img/moreicon.svg';
import { ReactComponent as ReviewSmallHeart } from '../../img/ReviewSmallHeart.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import StarTest from './reviewStarView';

const reviewWrite = () => {
  const [reviewList, setReviewList] = useState<any>([]);
  const state = useLocation<any>();
  const restaurantNumber = state.state[0];
  const saveMemberId = sessionStorage.getItem('memberId');
  const url = `/restaurant/${restaurantNumber}/reviews`;
  useEffect(() => {
    axios
      .post(url, {
        restaurantId: restaurantNumber,
        memberId: saveMemberId,
      })
      .then(res => {
        setReviewList(res.data.content);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div className="ml-[25px] mt-[20px] w-[687px] h-[1px] border border-[#D5D5D5] bg-[#D5D5D5] "></div>
      <div className="grid grid-cols-[235px_minmax(235px,_0fr)_235px]">
        {reviewList.map((school: any) => (
          <>
            <div
              key={school.restaurantReviewId}
              className="ml-[20px] mt-[18px] w-[220px] h-[312px] border-[1px] border-[#D2D2D2] shadow-[1px_1px_4px_rgba(0,0,0,0.07)] rounded-[5px]"
            >
              <div className="w-[39px] h-[40px] ml-[13px] mt-[15px] border rounded-full border-[#CCCCCC] bg-[#CCCCCC]">
                <div className="ml-[44px] mt-[6px] w-[82px] h-[10px] font-[400] text-[12px] leading-[20px] flex items-center">
                  {school.nickName}
                </div>
                <StarTest {...school} school={school} />
                <div className="ml-[5px] mt-[23.12px] w-[180px] h-[120px] border border-[#DDDDDD] rounded-[10px] text-center bg-[#DDDDDD]">
                  이미지
                </div>
                <div className="ml-[5px] mt-[11px] w-[184px] h-[62px] font-[400] text-[12px] leading-[16px] text-[#6B6B6B]">
                  {school.content}
                </div>
                <div className="flex flex-row w-[200px]">
                  <div className="mt-[18px] w-[57px] h-[16px] font-normal text-[11px] leading-[14px] flex items-center text-[#A5A5A5]">
                    {school.writeDate}
                  </div>
                  <ReviewSmallHeart className="ml-[99px] mt-[18px]" />
                  <div className="ml-[3.31px] mt-[15px] w-[18px] h-[16px] font-normal text-[11px] leading-[14px] flex items-center text-[#A5A5A5]">
                    {school.likedCount}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="ml-[25px] mt-[13px] w-[687px] h-[1px] border border-[#D5D5D5] bg-[#D5D5D5] "></div>
      <div className="mt-[13px] mb-[20px] ml-[649px] font-[400] text-[16px] leading-[22px] flex items-center cursor-pointer">
        더보기
        <div className="w-[14px] h-[14px] rounded-full border border-[#FF611D] bg-[#FF611D]">
          <MoreInfo className="ml-[2.22px] mt-[3.5px]" />
        </div>
      </div>
    </>
  );
};

export default reviewWrite;
