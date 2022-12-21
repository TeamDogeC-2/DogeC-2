const MainSearch = () => {
  return (
    <div className='w-full h-[calc(100vh-88px)] bg-cyan-300 flex flex-col justify-center items-center'>
      <div className='flex flex-col text-center relative bottom-[88px]'>
        <span className='text-[45px] fw-400 leading-[59px] text-white'>
          대학생을 위한
        </span>
        <span className='text-[65px] fw-400 leading-[93px] text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.25)]'>
          대학 주변 맛집 추천
        </span>
        <div className='mt-[28px] w-full h-[60px] rounded-[5px] bg-white'>
          <span className='mx-[16px] my-[21px]'>
            Icon
          </span>
          <input placeholder='지역 학교 명을 입력하세요.' className='w-[500px] h-[58px] text-[25px] fw-400 leading-[33px] text-[#A0A0A0] border-none pl-[23px]'></input>
          <button className='w-[94px] h-[60px] text-[25px] fw-400 leading-[33px] text-white bg-[#FF611D] border-none rounded-[5px]'>검색</button>
        </div>
      </div>
    </div>
  )
}

export default MainSearch