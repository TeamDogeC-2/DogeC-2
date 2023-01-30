import SearchComponent from './content/searchComponent';
import TitleComponent from './content/titleComponent';

import PencilIcon from '../../img/board/icon_pencil.png';
import BoardListComponent from './content/boardListComponent';
import TopListComponent from './content/topListComponent';
import HotListComponent from './content/hotListComponent';

interface PropsType {
  menu: string;
}

const BoardContent = (props: PropsType) => {
  const { menu } = props;
  return (
    <div className="py-[52px] px-[76px] max-w-[1100px]">
      <TitleComponent menu={menu} />
      <SearchComponent />
      <div className="flex justify-between">
        <TopListComponent />
        <HotListComponent />
      </div>
      <div className="flex justify-end mt-[21px]">
        <div className="cursor-pointer text-[14px] leading-[30px] text-center text-[#FF611D] w-[89px] h-[32px] border border-solid border-[#FF611D] rounded-[22px] bg-white">
          {/* <img src={PencilIcon} alt="write" /> */}
          <span>글쓰기</span>
        </div>
      </div>
      <BoardListComponent />
    </div>
  );
};

export default BoardContent;
