import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactComponent as ReviewMoreHeart } from '../../img/ReviewMoreHeart.svg';
import { useLocation } from 'react-router-dom';
const reviewMoreHeartInfo = (data: any) => {
  const state = useLocation<any>();
  const restaurantNumber = state.state[0];
  const saveMemberId = sessionStorage.getItem('memberId');
  const [clicklike, isClickLike] = useState<boolean>();
  const [like, isLike] = useState<boolean>(data.like);
  const [likeCount, setlikeCount] = useState<number>();
  const handleHeartCount = async (e: any) => {
    const saveReviewId = e.target.id;
    if (!saveMemberId) {
      alert('로그인후 이용 가능한 기능입니다.');
    } else {
      await axios
        .post(`/restaurant/${restaurantNumber}/review/like`, {
          restaurantReviewId: saveReviewId,
          memberId: saveMemberId,
        })
        .then(res => {
          isLike(res.data.data.like);
          setlikeCount(res.data.data.likedCount);
        });
      isClickLike(!clicklike);
      isLike(!like);
      if (like) {
        alert('좋아요가 취소되었습니다.');
      }
    }
  };
  return (
    <div className="flex flex-row">
      {like ? (
        <svg
          onClick={handleHeartCount}
          id={data.restaurantReviewId}
          className="ml-[455px] mt-[5px] w-[15px] h-[13px] cursor-pointer"
          width="17"
          height="15"
          viewBox="0 0 17 15"
          fill="#FF611D"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id={data.restaurantReviewId}
            d="M4.75 1C2.67893 1 1 2.61547 1 4.60825C1 6.21701 1.656 10.035 8.11563 13.8951C8.34955 14.035 8.65045 14.035 8.88437 13.8951C15.344 10.035 16 6.21701 16 4.60825C16 2.61547 14.321 1 12.25 1C10.179 1 8.5 3.18682 8.5 3.18682C8.5 3.18682 6.82107 1 4.75 1Z"
            stroke="#FF611D"
            strokeWidth="1.30715"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          onClick={handleHeartCount}
          id={data.restaurantReviewId}
          className="ml-[455px] mt-[5px] w-[15px] h-[13px] cursor-pointer"
          width="17"
          height="15"
          viewBox="0 0 17 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id={data.restaurantReviewId}
            d="M4.75 1C2.67893 1 1 2.61547 1 4.60825C1 6.21701 1.656 10.035 8.11563 13.8951C8.34955 14.035 8.65045 14.035 8.88437 13.8951C15.344 10.035 16 6.21701 16 4.60825C16 2.61547 14.321 1 12.25 1C10.179 1 8.5 3.18682 8.5 3.18682C8.5 3.18682 6.82107 1 4.75 1Z"
            stroke="#ACACAC"
            strokeWidth="1.30715"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      <div className="ml-[5px] font-normal text-[16px] leading-[21px] flex items-center text-[#A5A5A5]">
        {clicklike ? likeCount : data.likedCount}
      </div>
    </div>
  );
};

export default reviewMoreHeartInfo;
