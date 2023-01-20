import React from 'react';

const MypageBoardReview = () => {
  return (
    <div className="flex-[9] flex-col ml-[60px] mt-[114px]">
      <div>
        <span className='text-[24px] leading-[33px] text-[#262626] font-bold'>게시글</span>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row w-[962px] h-[50px] border-[1px] border-[#BCBCBC] rounded-[5px]">
          <div className='w-[50%] border-r-[1px] border-[#BCBCBC] bg-white'>게시글(0)</div>
          <div className='w-[50%] bg-white'>댓글(0)</div>
        </div>
        <div>
          <div className="flex flex-row">
            <div>제목</div>
            <div>작성일</div>
            <div>조회수(0)</div>
            <div>좋아요(0)</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div>리뷰</div>
        <div className="flex flex-row">
          <div>icon</div>
          <div>제목</div>
        </div>
        <div>작성된 리뷰가 없습니다</div>
      </div>
    </div>
  );
};

export default MypageBoardReview;
