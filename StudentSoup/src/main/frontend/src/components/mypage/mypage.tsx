import { useState } from "react"
import MypageNavbar from "../common/mypageNavbar"
import MypageHome from "./mypageHome"
import MypageModify from "./mypageModify"
import MypageScheduler from "./mypageScheduler"
import MypageSidebar from "./mypageSidebar"

const Mypage = () => {

    const [menu, setMenu] = useState<String>("home");

    const onClickMenu = (id: String) => {
        setMenu(id);
    }
    return (
        <div>
            <MypageNavbar />
            <div className="flex flex-row">
                <div className="z-[2]">
                    <MypageSidebar onClickMenu={onClickMenu} />
                </div>
                <div className="w-full">
                    <div>{menu === "home" ? <MypageHome /> : ""}</div>
                    <div >{menu === "scheduler" ? <MypageScheduler /> : ""}</div>
                    <div>{menu === "modify" ? <MypageModify /> : ""}</div>

                </div>
            </div>
        </div>
    )
}

export default Mypage