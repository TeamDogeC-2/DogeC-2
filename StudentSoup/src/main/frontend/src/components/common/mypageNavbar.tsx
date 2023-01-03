import Reddit from "../../img/Reddit.svg";
import Board from "../../img/board.jpg";
import Restaurant from "../../img/restaurant.jpg";
import Faq from "../../img/faq.jpg";
import Logout from "../../img/logout.jpg";

const mypageNavbar = () => {
    return (
        <div className='w-full h-[80px] items-center sticky flex justify-between border-b-[1px] border-[#FF611D] z-[2] shadow-lg'>
            <img src={Reddit} alt="" className="w-[162px] h-[72px]" />
            <div className="flex items-center mr-[32px] m-5">
                <div className="flex justify-center items-center w-[100px] cursor-pointer">
                    <img src={Board} alt="" className="mr-[13.6px] w-[14.4px] h-[16px]" />
                    <span className="text-[16px] fw-400 leading-[19px] text-[#353535] mr-[16px]">BOARD</span>
                </div>
                <span className="w-[1px] h-[30.5px] bg-[#B1B1B1] mr-[16px]"></span>
                <div className="flex justify-center items-center w-[150px] cursor-pointer">
                    <img src={Restaurant} alt="" className="mr-[10px] w-[16px] h-[16px]" />
                    <span className="text-[16px] fw-400 leading-[19px] text-[#353535] mr-[16px]">RESTAURANT</span>
                </div>
                <span className="w-[1px] h-[30.5px] bg-[#B1B1B1] mr-[16px]"></span>
                <div className="flex justify-center items-center w-[73px] cursor-pointer">
                    <img src={Faq} alt="" className="mr-[10px] w-[16px] h-[16px]" />
                    <span className="text-[16px] fw-400 leading-[19px] text-[#353535] mr-[16px]">FAQ</span>
                </div>
                <span className="w-[1px] h-[30.5px] bg-[#B1B1B1] mr-[19px]"></span>
                <div className="flex justify-center items-center w-[110px] cursor-pointer">
                    <img src={Logout} alt="" className="mr-[6px] w-[16px] h-[16px]" />
                    <span className="text-[16px] fw-400 leading-[19px] text-[#353535] mr-[30px]">LOGOUT</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className='w-[40px] h-[40px] bg-[url("./img/circle_fill_gray.jpg")] bg-cover relative top-[14px] rounded-full border-[1px] border-[#FF4D14] cursor-pointer'></div>
                    <div className='w-[20px] h-[21px] bg-[url("./img/human.jpg")] bg-cover relative bottom-[17px] mb-[10px]'></div>
                </div>
                    <span className="w-[14px] h-[14px] bg-[#FF4D14] rounded-full text-[10px] text-white flex items-center justify-center relative bottom-[15px] right-[10px]">1</span>
            </div>
        </div>
    )
}

export default mypageNavbar