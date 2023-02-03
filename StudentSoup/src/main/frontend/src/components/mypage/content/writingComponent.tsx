const WritingComponent = () => {
  return (
    <div className="text-[14px]">
      <div className='h-[50px] px-[34px] flex items-center text-[#353535] border-b border-[#D9D9D9]'>
        <span className='w-[60%] '>제목</span>
        <span className='w-[20%] text-center'>조회수</span>
        <span className='w-[20%] text-center'>좋아요</span>
      </div>
      <div className='h-[50px] px-[34px] flex items-center text-[#353535] border-b border-[#D9D9D9]'>
        <span className='w-[60%] truncate text-[#909090]'>소래포구 &apos;화동옥&apos; 맛집</span>
        <span className='w-[20%] text-center text-[#909090]'>15</span>
        <span className='w-[20%] text-center text-[#909090]'>6</span>
      </div>
    </div>
  );
};

export default WritingComponent;
