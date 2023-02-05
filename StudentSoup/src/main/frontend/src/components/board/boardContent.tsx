import SearchComponent from './content/searchComponent';
import TitleComponent, { RANGE } from './content/titleComponent';

import PencilIcon from '../../img/board/icon_pencil.png';
import BoardListComponent, { BoardListType } from './content/boardListComponent';
import TopListComponent from './content/topListComponent';
import HotListComponent from './content/hotListComponent';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import useBoardData, { DataResType } from './data/useBoardData';

interface PropsType {
  boardCategory: string;
}

const BoardContent = (props: PropsType) => {
  const { boardCategory } = props;
  const [range, setRange] = useState(RANGE.SCHOOL);
  const { getBoardList } = useBoardData();
  const [list, setList] = useState<BoardListType[]>([]);
  const [pageInfo, setPageInfo] = useState<number>(0);
  const [topList, setTopList] = useState<BoardListType[]>([]);
  const [hotList, setHotList] = useState<BoardListType[]>([]);

  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(0); // TODO
  const [column, setColumn] = useState('title');
  const [sort, setSort] = useState(0);
  const [departmentId, setDepartmentId] = useState<number | undefined>(undefined);

  useEffect(() => {
    handleSearchValueInit();
    const request = {
      column: 'title',
      value: '',
      category: boardCategory,
      sorted: 0,
      page: 0,
      size: boardCategory === 'ALL' ? 7 : 12,
    };
    getBoardList(request, (res: DataResType) => {
      setList(res.boards.content);
      setPageInfo(res.boards.totalPages);
      if (res.bestBoards) setTopList(res.bestBoards);
      if (res.hotBoards) setHotList(res.hotBoards);
    });
  }, [boardCategory, range]);

  useEffect(() => {
    handleSearchButton();
  }, [sort, departmentId, page]);

  const handleSearchValueInit = () => {
    setSearchValue('');
    setPage(0);
    setColumn('title');
    setSort(0);
    setDepartmentId(undefined);
  };

  const handleSearchButton = () => {
    const request = {
      column,
      value: searchValue,
      category: boardCategory,
      sorted: sort,
      page,
      size: boardCategory === 'ALL' ? 7 : 12,
      departmentId: range === RANGE.SUBJECT ? departmentId : undefined,
    };
    getBoardList(request, (res: DataResType) => {
      setList(res.boards.content);
      if (res.bestBoards) setTopList(res.bestBoards);
      if (res.hotBoards) setHotList(res.hotBoards);
    });
  };

  return (
    <div className="py-[52px] px-[76px] max-w-[1100px]">
      <TitleComponent boardCategory={boardCategory} range={range} setRange={setRange} />
      <SearchComponent
        range={range}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        sort={sort}
        setSort={setSort}
        column={column}
        setColumn={setColumn}
        departmentId={departmentId}
        setDepartmentId={setDepartmentId}
        handleSearchButton={handleSearchButton}
      />
      {boardCategory === 'ALL' && (
        <div className="flex justify-between">
          <TopListComponent topList={topList} />
          <HotListComponent hotList={hotList} />
        </div>
      )}
      <div className="flex justify-end mt-[21px]">
        <div className="flex justify-center gap-x-[5px] cursor-pointer text-[14px] leading-[30px] text-center text-[#FF611D] w-[89px] h-[32px] border border-solid border-[#FF611D] rounded-[22px] bg-white">
          <img src={PencilIcon} alt="write" className="self-center" />
          <span>글쓰기</span>
        </div>
      </div>
      <BoardListComponent
        list={list}
        totalPages={pageInfo}
        boardCategory={boardCategory}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default BoardContent;
