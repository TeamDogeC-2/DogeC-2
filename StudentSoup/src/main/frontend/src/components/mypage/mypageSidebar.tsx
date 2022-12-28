import Menu from '../../img/menu.jpg';
import HomeFill from '../../img/home_fill.png';
import Home from '../../img/home.png';
import Scheduler from '../../img/scheduler.jpg';
import SchedulerFill from '../../img/scheduler_fill.png';
import Modify from '../../img/modify.png';
import ModifyFill from '../../img/modify_fill.png';
import CheckRight from '../../img/check_right.png';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cn from "clsx";

const MypageSidebar = () => {

    const history = useHistory();

    const [id, setId] = useState<string>("");

    useEffect(() => {
        if (id === "home") {
            history.push("/mypageHome");
        } else if (id === "scheduler") {
            history.push("/mypageScheduler");
        } else if (id === "modify") {
            history.push("/mypageModify");
        }
    }, [id])

    const onClickMypageHome = () => {
        history.push("/mypageHome");
        setId("home");
    };
    const onClickMypageScheduler = () => {
        history.push("/mypageScheduler");
        setId("scheduler");
    };
    const onClickMypageModify = () => {
        history.push("/mypageModify");
        setId("modify");
    };

    return (
        <div className="flex-[3] w-[354px] h-[100vh] items-center justify-center flex-col shadow-2xl z-[2]">
            <ul className='text-[20px] leading-[28px]'>
                <li className='mb-[42px]'>
                    <div className='flex items-center w-full h-[54px] font-bold mt-[26px]'>
                        <img src={Menu} alt="" className='w-[15.5px] h-[11.64px] ml-[40px] mr-[13.47px]' />
                        <span className='w-full'>Menu</span>
                    </div>
                </li>
                <li className='mb-[20px]'>
                    <div className={cn('flex items-center w-full h-[54px] mt-[26px] cursor-pointer', {
                        ["bg-[#F5F5F5]"]: id === "home",
                        [""]: id !== "home",
                    })} onClick={onClickMypageHome}>
                        <img src={id === "home" ? HomeFill : Home} alt="" className='w-[16px] h-[15px] ml-[40px] mr-[13px]' />
                        <span className={cn('w-full font-medium', {
                            ["text-[#FF611D]"]: id === "home",
                            [""]: id !== "home",
                        })}>홈</span>
                        <div className={cn('w-[4px] h-[54px]', {
                            ['bg-[#FF611D]']: id === "home",
                            [""]: id !== "home",
                        })}></div>
                    </div>
                </li>
                <li className='mb-[20px]'>
                    <div className={cn('flex items-center w-full h-[54px] mt-[26px] cursor-pointer', {
                        ["bg-[#F5F5F5]"]: id === "scheduler",
                        [""]: id !== "scheduler",
                    })} onClick={onClickMypageScheduler}>
                        <img src={id === "scheduler" ? SchedulerFill : Scheduler} alt="" className='w-[15.5px] h-[16.4px] ml-[40px] mr-[13px]' />
                        <span className={cn('w-full font-medium', {
                            ["text-[#FF611D]"]: id === "scheduler",
                            [""]: id !== "scheduler",
                        })}>시간표</span>
                        <div className={cn('w-[4px] h-[54px]', {
                            ['bg-[#FF611D]']: id === "scheduler",
                            [""]: id !== "scheduler",
                        })}>
                        </div>
                    </div>
                </li>
                <li className='mb-[20px]'>
                    <div className={cn('flex items-center w-full h-[54px] mt-[26px] cursor-pointer', {
                        ["bg-[#F5F5F5]"]: id === "modify",
                        [""]: id !== "modify",
                    })} onClick={onClickMypageModify}>
                        <img src={id === "modify" ? ModifyFill : Modify} alt="" className='w-[15.5px] h-[15.5px] ml-[40px] mr-[13px]' />
                        <span className={cn('w-full font-medium', {
                            ["text-[#FF611D]"]: id === "modify",
                            [""]: id !== "modify",
                        })}>내 정보 수정</span>
                        <img src={id === "modify" ? "" : CheckRight} alt="" className='w-[7px] h-[10px] mr-[26px]' />
                        <div className={cn('w-[4px] h-[54px]', {
                            ['bg-[#FF611D]']: id === "modify",
                            [""]: id !== "modify",
                        })}>
                        </div>
                    </div>
                </li>
                <li className='mb-[20px]'>
                    <div className='flex items-center w-full h-[54px] mt-[26px] cursor-pointer'>
                        <span className='w-full font-medium ml-[69px]'>기타 추가</span>
                        <img src={CheckRight} alt="" className='w-[7px] h-[10px] mr-[26px]' />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default MypageSidebar