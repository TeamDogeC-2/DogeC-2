const ReplyComponent = () => {
  return (
    <div className='text-[14px]'>
      <div className='h-[50px] px-[34px] flex items-center overflow-hidden text-[#353535] border-b border-[#D9D9D9]'>
        <span className='w-[60%] '>댓글</span>
        <span className='w-[20%] text-center'>작성일</span>
        <span className='w-[20%] text-center'>좋아요</span>
      </div>
      <div className='h-[50px] px-[34px] flex items-center overflow-hidden text-[#353535] border-b border-[#D9D9D9]'>
        <span className='w-[60%] truncate text-[#909090]'>저도 그렇게 생각해요 ㅠㅠ 비교적 일반인 기준 넘 솔직히 말도 안 되게 맛있음 진심 강추</span>
        <span className='w-[20%] text-center text-[#909090]'>23.01.14</span>
        <span className='w-[20%] text-center text-[#909090]'>9</span>
      </div>
    </div>
  );
};

export default ReplyComponent;
