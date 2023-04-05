import React, { useEffect, useState } from 'react';
import Background from '../common/Background';
import MainNavbar from '../common/MainNavbar';
import './notice.scss';
import Paginate from '../common/Paginate';
import PostSearch from '../common/PostSearch';
import Table from '../common/Table';
import { postBoardNotice } from '../../apis/auth/BoardAPI';
import { type NoticePostsDataType } from '../../interfaces/BoardTypes';

export const Notice = () => {
  const [items, setItems] = useState<NoticePostsDataType[]>([]);
  const [count, setCount] = useState(0);
  const [currentpage, setCurrentpage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(0);

  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState<NoticePostsDataType[]>([]);

  const handlePageChange = (e: any) => {
    setCurrentpage(e);
  };

  useEffect(() => {
    postBoardNotice().then(response => {
      setItems(response.data.content);
      setPostPerPage(response.data.pageable.pageSize);
    });
  }, []);

  useEffect(() => {
    setCount(items.length);
    setIndexOfLastPost(currentpage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(items.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentpage, items, indexOfFirstPost, indexOfLastPost, postPerPage]);

  return (
    <>
      <Background>
        <MainNavbar />
        <div className="notice-container">
          <h1>공지사항</h1>
          <div className="notice-table-wrap">
            {items.length !== 0 ? (
              <Table headings={['title', 'writeDate']} data={currentPosts} />
            ) : (
              <div>
                <h3>검색결과가 없습니다.</h3>
                <span>
                  검색어의 철자가 정확한지 확인해주세요. <br /> 비슷한 다른 검색어를 입력해보세요.
                </span>
              </div>
            )}
          </div>
          <Paginate
            page={currentpage}
            count={count}
            setPage={handlePageChange}
            postPerPage={postPerPage}
          />
          <PostSearch items={items} setItems={setItems} setPostPerPage={setPostPerPage} />
        </div>
      </Background>
    </>
  );
};

export default Notice;
