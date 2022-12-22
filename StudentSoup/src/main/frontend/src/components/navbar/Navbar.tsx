const Navbar = () => {
  return (
    <div className='w-full h-[88px] items-center sticky flex justify-between bg-gradient-to-b from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0)] border-b-[1px] border-white'>
      <div className='flex items-center m-5 w-[162px] h-[76px]'>
        reddit
      </div>
      <div className='flex items-center mr-[49px] m-5'>
        <div className='w-[65px] h-[60px] mr-[21px] flex justify-center items-center'>
          <span className='text-[25px] leading-[35px] fw-400'>
            FAQ
          </span>
        </div>
        <button className='w-[93px] h-[40px] bg-[#FF4F14] border-[1.2px] border-[#FF4D14] rounded-[41px] hover:cursor-pointer text-[20px]'>
          Login
        </button>
      </div>
    </div>
  )
}

export default Navbar