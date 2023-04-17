import react, { useEffect, useState } from 'react';
import MainNavbar from '../common/MainNavbar';
import './board.scss';
import BoardSearch from '../common/BoardSearch';
import Paginate from '../common/Paginate';
import { Desktop, Mobile } from '../../mediaQuery';
import { postBoards } from '../../apis/auth/BoardAPI';
import PCBoard from './boardcomponents/PcBoard';
import MobileBoard from './boardcomponents/MobileBoard';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Board = () => {
  const [category, setCategory] = useState<string>('ALL');
  const [schoolName, setSchoolName] = useState<string>('');

  const [bestBoardItems, setBestBoardItems] = useState<any[]>([]);
  const [hotBoardItems, setHotBoardItems] = useState<any[]>([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(0);
  const [currentPosts, setCurrentPosts] = useState<any[]>([]);
  const [selected, setSelected] = useState<string>('');
  const [searched, setSearched] = useState<string>('');
  const [sorted, setSorted] = useState<number>(0);

  const navigate = useNavigate();
  const location = useLocation();
  const userInformation = { ...location.state };

  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
  });

  const handleClickCategory = (e: any) => {
    setCategory(() => e.target.id);
    setCurrentPage(1);
    setSelected('');
    setSearched('');
  };

  const handlePageChange = (e: React.SetStateAction<number>) => {
    setCurrentPage(e);
  };

  const handleSearchButton = (selected: string, searched: string, sorted: number = 0) => {
    postBoards(
      userInformation.schoolId,
      userInformation.memberId,
      userInformation.departmentId,
      selected,
      searched,
      category,
      sorted,
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
    if (localStorage.getItem('access-token') === null) {
      navigate('/');
      Toast.fire({
        icon: 'error',
        title: '로그인이 필요한 서비스입니다.',
      });
    }

    setSchoolName(userInformation.schoolName);
  }, []);

  useEffect(() => {
    handleSearchButton(selected, searched, sorted);
  }, [currentPage, category, schoolName, sorted]);

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
                setSorted={setSorted}
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
