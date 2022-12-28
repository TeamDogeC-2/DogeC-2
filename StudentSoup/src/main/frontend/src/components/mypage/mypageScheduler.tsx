import MypageNavbar from "../common/mypageNavbar"
import MypageSidebar from "./mypageSidebar"
import Delete from "../../img/delete.png"
import Plus from "../../img/plus.png"
import cn from "clsx";

const MypageCalendar = () => {
    return (
        <div>
            <MypageNavbar />
            <div className="flex flex-row">
                <MypageSidebar />
                <div className="flex flex-[9] w-full z-[1] bg-zinc-100">
                    <div className="flex flex-col w-[716px] h-[724px] ml-[161px] mt-[100px]">
                        <div className="flex flex-row justify-between">
                            <span className="flex text-[26px] leading-[37px] text-left text-[#FF611D] font-bold">
                                SCHOOL
                                <br />
                                SCHEDULER
                            </span>
                            <div className="flex h-[31px] flex-row relative top-[22px] items-center">
                                <img src={Delete} alt="" className="w-[18px] h-[19.25px] mr-[24px]"/>
                                <img src={Plus} alt="" className="w-[19.25px] h-[19.25px] mr-[27px]"/>
                                <button
                                    className={cn(
                                        "w-[166px] h-full relative text-start text-[#7B7B7B] bg-white text-[16px] pl-[13px] fw-400 leading-[21px] border-[1px] border-[#BCBCBC] rounded-[3px]",
                                        "after:bg-[url('./img/dropdown.png')] after:bg-no-repeat after:bg-[length:10px_5px] after:top-[12px] after:right-[13px] after:content-[''] after:absolute after:w-[10px] after:h-[5px]"
                                    )}
                                >
                                    2023년 1학기
                                </button>
                            </div>
                        </div>
                        <div className="mt-[18px]">
                            <table className="w-full h-[658px]">
                                <thead>
                                    <tr className="border-[1px] border-black bg-[#E8E8E8]">
                                        <th scope="row" className="border-[1px] border-black w-[41px] h-[64px]"></th>
                                        <th className="border-[1px] border-black w-[135px]">월</th>
                                        <th className="border-[1px] border-black w-[135px]">화</th>
                                        <th className="border-[1px] border-black w-[135px]">수</th>
                                        <th className="border-[1px] border-black w-[135px]">목</th>
                                        <th className="border-[1px] border-black w-[135px]">금</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" className="border-[1px] border-black w-[41px] h-[64px] bg-[#E8E8E8]">9</th>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="border-[1px] border-black w-[41px] h-[64px] bg-[#E8E8E8]">10</th>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="border-[1px] border-black w-[41px] h-[64px] bg-[#E8E8E8]">11</th>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="border-[1px] border-black w-[41px] h-[64px] bg-[#E8E8E8]">12</th>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="border-[1px] border-black w-[41px] h-[64px] bg-[#E8E8E8]">1</th>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="border-[1px] border-black w-[41px] h-[64px] bg-[#E8E8E8]">2</th>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="border-[1px] border-black w-[41px] h-[64px] bg-[#E8E8E8]">3</th>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="border-[1px] border-black w-[41px] h-[64px] bg-[#E8E8E8]">4</th>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="border-[1px] border-black w-[41px] h-[64px] bg-[#E8E8E8]">5</th>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                        <td className="border-[1px] border-black w-[135px]"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MypageCalendar