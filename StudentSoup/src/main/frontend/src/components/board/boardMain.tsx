import { useState } from 'react';
import MypageNavbar from '../common/mypageNavbar';
import BoardSidebar from './boardSidebar';

export const enum BORDER_MENU {
  ALL = '전체게시판',
  FREE = '자유게시판',
  CONSULTING = '취업/상담게시판',
  TIP = 'TIP 게시판',
  NOTICE = '공지사항',
}

const BoardMain = () => {
  const [menu, setMenu] = useState<BORDER_MENU>(BORDER_MENU.ALL);

  return (
    <>
      <MypageNavbar />
      <div className="flex flex-row">
        <div className="z-[2]">
          <BoardSidebar menu={menu} setMenu={setMenu} />
        </div>
        <div className="w-full"></div>
      </div>
    </>
  );
};

export default BoardMain;
