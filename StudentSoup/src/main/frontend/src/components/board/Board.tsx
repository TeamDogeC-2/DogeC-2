import react, { useEffect, useState } from 'react';
import MainNavbar from '../common/MainNavbar';
import './board.scss';
import BoardSearch from '../common/BoardSearch';
import Paginate from '../common/Paginate';
import { Desktop, Mobile } from '../../mediaQuery';
import review_white from '../../img/review_white.svg';
import axiosInstance from '../../apis/auth/AxiosInterceptor';
import { postBoards, postUserInfo } from '../../apis/auth/BoardAPI';
import PCBoard from './boardcomponents/PcBoard';
import MobileBoard from './boardcomponents/MobileBoard';

const Board = () => {
  const [userInfo, setUserInfo] = useState<any>({});
  const [category, setCategory] = useState<string>('ALL');
  const [schoolName, setSchoolName] = useState<string>('');

  const [bestBoardItems, setBestBoardItems] = useState<any[]>([]);
  const [hotBoardItems, setHotBoardItems] = useState<any[]>([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(0);

  const [currentPosts, setCurrentPosts] = useState<any[]>([]);

  const [selected, setSelected] = useState('');
  const [searched, setSearched] = useState('');

  const handleClickCategory = (e: any) => {
    setCategory(() => e.target.id);
    setCurrentPage(1);
    setSelected('');
    setSearched('');
  };

  const handlePageChange = (e: React.SetStateAction<number>) => {
    setCurrentPage(e);
  };

  const handleSearchButton = (selected: string, searched: string) => {
    postBoards(
      userInfo.schoolId,
      userInfo.memberId,
      userInfo.departmentId,
      selected,
      searched,
      category,
      0,
      currentPage - 1,
    ).then(res => {
      if (category === 'ALL') {
        setBestBoardItems(res.data.bestBoards);
        setHotBoardItems(res.data.hotBoards);

        setPostPerPage(res.data.boards.pageable.pageSize);
        setCount(res.data.boards.totalElements);
        setCurrentPosts(res.data.boards.content);
      } else {
        setPostPerPage(res.data.boards.pageable.pageSize);
        setCount(res.data.boards.totalElements);
        setCurrentPosts(res.data.boards.content);
      }
    });
  };

  useEffect(() => {
    postUserInfo()
      .then(res => {
        const {
          departmentId,
          departmentName,
          email,
          fileName,
          id,
          memberClassification,
          memberId,
          nickname,
          registrationDate,
          schoolId,
          schoolName,
        } = res.data;

        setUserInfo({
          departmentId,
          departmentName,
          email,
          fileName,
          id,
          memberClassification,
          memberId,
          nickname,
          registrationDate,
          schoolId,
          schoolName,
        });
        setSchoolName(res.data.schoolName);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    !!userInfo && handleSearchButton(selected, searched);
    return console.log(userInfo);
  }, [currentPage, category, schoolName]);

  return (
    <>
      <MainNavbar />
      <div className="board-main">
        <div className="board-top-div">
          <div className="board-top-text-div">
            <div className="board-school-name">
              <span>{schoolName} 게시판</span>
            </div>
            <div className='className="board-mobile-select-div"'>
              <select
                name="boardCategory"
                defaultValue="학과게시판 선택"
                className="board-select-category"
              >
                <option value="학과게시판 선택" disabled>
                  학과게시판 선택
                </option>
              </select>
            </div>
          </div>
          <div className="board-lists-div">
            <ul className="board-lists">
              <li
                id="ALL"
                className={category.toString() === 'ALL' ? 'board-li active' : 'board-li'}
                onClick={handleClickCategory}
              >
                전체 게시판
              </li>
              <li
                id="FREE"
                className={category.toString() === 'FREE' ? 'board-li active' : 'board-li'}
                onClick={handleClickCategory}
              >
                자유 게시판
              </li>
              <li
                id="CONSULTING"
                className={category.toString() === 'CONSULTING' ? 'board-li active' : 'board-li'}
                onClick={handleClickCategory}
              >
                취업/상담 게시판
              </li>
              <li
                id="TIP"
                className={category.toString() === 'TIP' ? 'board-li active' : 'board-li'}
                onClick={handleClickCategory}
              >
                TIP 게시판
              </li>
            </ul>
          </div>
        </div>
        <div className="board-bottom-div">
          <div className="board-table-div">
            <Desktop>
              <PCBoard
                currentPage={currentPage}
                category={category}
                bestBoardItems={bestBoardItems}
                hotBoardItems={hotBoardItems}
                currentPosts={currentPosts}
              />
            </Desktop>
            <Mobile>
              <MobileBoard
                currentPage={currentPage}
                category={category}
                bestBoardItems={bestBoardItems}
                hotBoardItems={hotBoardItems}
                currentPosts={currentPosts}
              />
            </Mobile>
          </div>
          <Paginate
            page={currentPage}
            count={count}
            setPage={handlePageChange}
            postPerPage={postPerPage}
          />
          <BoardSearch
            handleSearchButton={handleSearchButton}
            selected={selected}
            setSelected={setSelected}
            searched={searched}
            setSearched={setSearched}
          />
        </div>
      </div>
    </>
  );
};

export default Board;
