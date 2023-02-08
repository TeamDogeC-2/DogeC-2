import { useEffect, useState } from 'react';
import MypageNavbar from '../common/mypageNavbar';
import BoardContent from './boardContent';
import BoardSidebar from './boardSidebar';

const BoardMain = () => {
  const [boardCategory, setBoardCategory] = useState<string>('ALL');

  return (
    <>
      <MypageNavbar />
      <div className="flex flex-row">
        <div className="z-[2]">
          <BoardSidebar boardCategory={boardCategory} setBoardCategory={setBoardCategory} />
        </div>
        <div className="w-full bg-[#f4f4f5]">
          <BoardContent boardCategory={boardCategory} />
        </div>
      </div>
    </>
  );
};

export default BoardMain;
