import { useEffect, useState } from 'react';
import MainNavbar from '../common/MainNavbar';
import './board.scss';
import BoardSearch from '../common/BoardSearch';
import Paginate from '../common/Paginate';

export interface NoticePostsDataType {
  authentication: string;
  boardCategory: string;
  boardId: number;
  likedCount: number;
  nickname: string;
  reviewCount: string;
  tag: string;
  title: string;
  view: number;
  writeDate: string;
}

const Board = () => {
  const [category, setCategory] = useState<string>('ALL');

  const [items, setItems] = useState<NoticePostsDataType[]>([]);
  const [count, setCount] = useState(0);
  const [currentpage, setCurrentpage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(0);

  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState<NoticePostsDataType[]>([]);

  const handleClickCategory = (e: any) => {
    setCategory(e.target.id);
  };

  const handlePageChange = (e: any) => {
    setCurrentpage(e);
  };

  useEffect(() => {
    setCount(items.length);
    setIndexOfLastPost(currentpage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(items.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentpage, items, indexOfFirstPost, indexOfLastPost, postPerPage]);
  return (
    <div>
      <MainNavbar />
      <div className="board-main">
        <div className="board-top-div">
          <div className="board-top-text-div">
            <span className="board-school-name">청운대학교 게시판</span>
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
                id="CONSULT"
                className={category.toString() === 'CONSULT' ? 'board-li active' : 'board-li'}
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
            <table className="board-table">
              <thead>
                <tr>
                  <th className="board-title">제목</th>
                  <th className="board-writer">작성자</th>
                  <th className="board-write-date">작성일</th>
                  <th className="board-view-count">조회수</th>
                  <th className="board-like-count">좋아요</th>
                </tr>
              </thead>
              <tbody>
                {/* {posts.map(post => (
                  <tr key={post.title}>
                    {post.comments >= 5 && (
                      <td className="best-cell">
                        <span>best</span>
                      </td>
                    )} */}
                <tr>
                  <td className="board-title">title</td>
                  <td className="board-writer">author</td>
                  <td className="board-write-date">creationDate</td>
                  <td className="board-view-count">views</td>
                  <td className="board-like-count">likes</td>
                </tr>
                {/* </tr>
                ))} */}
              </tbody>
            </table>
          </div>
          <Paginate
            page={currentpage}
            count={count}
            setPage={handlePageChange}
            postPerPage={postPerPage}
          />
          <BoardSearch />
        </div>
      </div>
    </div>
  );
};

export default Board;
