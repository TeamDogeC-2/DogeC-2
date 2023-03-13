import React, { useEffect, useState } from 'react';
import Background from '../common/Background';
import MainNavbar from '../common/MainNavbar';
import Pagination from 'react-js-pagination';
import './notice.scss';
import axios from 'axios';
import Paginate from '../common/Paginate';
import PostSearch from '../common/PostSearch';

const Notice = () => {
  useEffect(() => {
    axios
      .post('/boards?category=ANNOUNCEMENT', {
        schoolId: '1',
        memberId: '3',
        category: 'ANNOUNCEMENT',
        sorted: 0,
      })
      .then(res => {
        console.log(res);
      });
  }, []);

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
            </tbody>
          </table>
          <Paginate />
          <PostSearch />
        </div>
      </Background>
    </>
  );
};

export default Notice;
