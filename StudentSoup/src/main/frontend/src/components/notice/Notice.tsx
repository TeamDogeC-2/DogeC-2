import React, { useState } from 'react';
import Background from '../common/Background';
import MainNavbar from '../common/MainNavbar';
import Pagination from 'react-js-pagination';
import './notice.scss';

const Notice = () => {
  const [page, setPage] = useState(1);
  const handlePageChange = (page: any) => {
    setPage(page);
  };

  return (
    <>
      <MainNavbar />
      <Background>
        <div className="notice-container">
          <h1>공지사항</h1>
          <table>
            <thead>
              <tr>
                <th className="subject">제목</th>
                <th className="date-created">작성일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="subject-post">한 달에 10억원을 번 비결</td>
                <td className="date-created-post">23.01.12 16:23</td>
              </tr>

              <tr>
                <td className="subject-post">한 달에 10억원을 번 비결</td>
                <td className="date-created-post">23.01.12 16:23</td>
              </tr>
              <tr>
                <td className="subject-post">한 달에 10억원을 번 비결</td>
                <td className="date-created-post">23.01.12 16:23</td>
              </tr>
              <tr>
                <td className="subject-post">한 달에 10억원을 번 비결</td>
                <td className="date-created-post">23.01.12 16:23</td>
              </tr>
              <tr>
                <td className="subject-post">한 달에 10억원을 번 비결</td>
                <td className="date-created-post">23.01.12 16:23</td>
              </tr>
              <tr>
                <td className="subject-post">한 달에 10억원을 번 비결</td>
                <td className="date-created-post">23.01.12 16:23</td>
              </tr>
              <tr>
                <td className="subject-post">한 달에 10억원을 번 비결</td>
                <td className="date-created-post">23.01.12 16:23</td>
              </tr>
              <tr>
                <td className="subject-post">한 달에 10억원을 번 비결</td>
                <td className="date-created-post">23.01.12 16:23</td>
              </tr>
              <tr>
                <td className="subject-post">한 달에 10억원을 번 비결</td>
                <td className="date-created-post">23.01.12 16:23</td>
              </tr>
              <tr>
                <td className="subject-post">한 달에 10억원을 번 비결</td>
                <td className="date-created-post">23.01.12 16:23</td>
              </tr>
              <tr>
                <td className="subject-post">한 달에 10억원을 번 비결</td>
                <td className="date-created-post">23.01.12 16:23</td>
              </tr>
              <tr>
                <td className="subject-post">한 달에 10억원을 번 비결</td>
                <td className="date-created-post">23.01.12 16:23</td>
              </tr>
              <tr>
                <td className="subject-post">한 달에 10억원을 번 비결</td>
                <td className="date-created-post">23.01.12 16:23</td>
              </tr>
              <tr>
                <td className="subject-post">한 달에 10억원을 번 비결</td>
                <td className="date-created-post">23.01.12 16:23</td>
              </tr>
              <tr>
                <td className="subject-post">한 달에 10억원을 번 비결</td>
                <td className="date-created-post">23.01.12 16:23</td>
              </tr>
            </tbody>
          </table>
          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={50}
            pageRangeDisplayed={5}
            firstPageText=""
            prevPageText="<"
            nextPageText=">"
            onChange={handlePageChange}
            hideFirstLastPages={true}
          />
          <div>
            <select>
              <option>전체</option>
            </select>
            <input type="text" placeholder="글 제목, 내용, 해시태그를 적어주세요"></input>
            <button>검색</button>
          </div>
        </div>
      </Background>
    </>
  );
};

export default Notice;
