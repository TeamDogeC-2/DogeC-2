import _ from 'lodash';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'clsx';
import axios from 'axios';

const ReviewComponent = () => {
  const state = useLocation<any>();
  const savedMemberId = sessionStorage.getItem('memberId');
  const [set, isSet] = useState<any[]>();
  const [content, setContent] = useState<string>();
  const [likedCount, setLikedCount] = useState<number>();
  const [starLiked, setStarLiked] = useState<number>();
  const [size, setSize] = useState<number>(6);

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

  useEffect(() => {
    axios
      .post('/restaurantReview/{restaurantId}', {
        memberId: savedMemberId,
      })
      .then(res => {
        setLikedCount(res.data.content);
      })
      .catch(res => {
        console.log(res.data);
      });
  }, []);

  return (
    <div className="text-[14px]">
      <div className='h-[50px] px-[34px] flex items-center text-[#353535] border-b border-[#D9D9D9]'>
        <span className='w-[60%] '>제목</span>
        <span className='w-[20%] text-center'>좋아요</span>
        <span className='w-[20%] text-center'>별점</span>
      </div>
      <div className='h-[50px] px-[34px] flex items-center text-[#353535] border-b border-[#D9D9D9]'>
        <span className='w-[60%] truncate text-[#909090]'>{content}</span>
        <span className='w-[20%] text-center text-[#909090]'>{likedCount}</span>
        <span className='w-[20%] text-center text-[#909090]'>{starLiked}</span>
      </div>
    </div>
  );
};

export default ReviewComponent;
