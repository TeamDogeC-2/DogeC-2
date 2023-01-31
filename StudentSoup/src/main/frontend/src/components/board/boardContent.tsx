import SearchComponent from './content/searchComponent';
import TitleComponent, { RANGE } from './content/titleComponent';

import PencilIcon from '../../img/board/icon_pencil.png';
import BoardListComponent from './content/boardListComponent';
import TopListComponent from './content/topListComponent';
import HotListComponent from './content/hotListComponent';
import { BORDER_MENU } from './boardMain';
import { useState } from 'react';

interface PropsType {
  menu: BORDER_MENU;
}

const BoardContent = (props: PropsType) => {
  const { menu } = props;
  const [range, setRange] = useState(RANGE.SCHOOL);

  return (
    <div className="py-[52px] px-[76px] max-w-[1100px]">
      <TitleComponent menu={menu} range={range} setRange={setRange} />
      <SearchComponent range={range} />
      {menu === BORDER_MENU.ALL && (
        <div className="flex justify-between">
          <TopListComponent />
          <HotListComponent />
        </div>
      )}
      <div className="flex justify-end mt-[21px]">
        <div className="flex justify-center gap-x-[5px] cursor-pointer text-[14px] leading-[30px] text-center text-[#FF611D] w-[89px] h-[32px] border border-solid border-[#FF611D] rounded-[22px] bg-white">
          <img src={PencilIcon} alt="write" className="self-center" />
          <span>글쓰기</span>
        </div>
      </div>
      <BoardListComponent />
    </div>
  );
};

export default BoardContent;
