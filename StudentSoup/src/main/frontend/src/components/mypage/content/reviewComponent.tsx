import _ from 'lodash';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'clsx';
import axios from 'axios';
import { ReactComponent as Star } from '../../../img/restaurantDetailStar.svg';

const ReviewComponent = () => {
  const state = useLocation<any>();
  const savedMemberId = sessionStorage.getItem('memberId');
  const [set, isSet] = useState<any[]>();
  const [content, setContent] = useState<string>();
  const [likedCount, setLikedCount] = useState<number>();
  const [starLiked, setStarLiked] = useState<number>();
  const [size, setSize] = useState<number>(6);
  const starArr = [0, 1, 2, 3, 4];

  const url = '/mypage/restaurantReview';
  useEffect(() => {
    axios
      .post(url, {
        memberId: savedMemberId,
      })
      .then(res => {
        isSet(res.data.content);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="text-[14px]">
      <div className='h-[50px] px-[34px] flex items-center text-[#353535] border-b border-[#D9D9D9]'>
        <span className='w-[60%] '>제목</span>
        <span className='w-[20%] text-center'>좋아요</span>
        <span className='w-[20%] text-center'>별점</span>
      </div>
      {set?.map((review: any) => (
        <>
        <div key={review.memberId} className='h-[50px] px-[34px] flex items-center text-[#353535] border-b border-[#D9D9D9]'>
          <span className='w-[60%] truncate text-[#909090]'>{review.content}</span>
          <span className='w-[20%] text-center text-[#909090]'>{review.likedCount}</span>
          <span key={review.starLiked} className='w-[20%] text-center text-[#909090]'>
            {starArr?.map((starLiked, index) => {
              index += 1;
              return (
                <>
                <span key={review.starLiked}>
                  <svg
                    key={review.starLiked}
                    className={
                      index <= review.starLiked ? 'px-[1.2px] fill-[#FFB21D]' : 'px-[1.2px] fill-[#CDCDCD]'
                    }
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                      <Star />
                    </svg>
                </span>
                </>
              )
            })}
          </span>
        </div>
        </>
      ))}
    </div>
  );
};

export default ReviewComponent;
