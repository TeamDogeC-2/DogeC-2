import React from 'react';
import Background from './Background';
import MainNavbar from './MainNavbar';
import Paginate from './Paginate';
import PostSearch from './PostSearch';
import Table from './Table';
import './noticeandservice.scss';
import { type NoticeAndServiceProps } from '../../interfaces/BoardTypes';

const NoticeAndService = ({
  items,
  setItems,
  currentPage,
  count,
  handlePageChange,
  postPerPage,
  setPostPerPage,
  pageTitle,
  tableHeader,
}: NoticeAndServiceProps) => {
  return (
    <>
      <Background>
        <MainNavbar />
        <div className="notice-service-container">
          <h1>{pageTitle}</h1>
          <div className="notice-service-table-wrap">
            {items.length !== 0 ? (
              <Table headings={tableHeader} data={items} />
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
            page={currentPage}
            count={count}
            setPage={handlePageChange}
            postPerPage={postPerPage}
          />
          <PostSearch
            pageTitle={pageTitle}
            setItems={setItems}
            setPostPerPage={setPostPerPage}
            currentPage={currentPage}
          />
        </div>
      </Background>
    </>
  );
};

export default NoticeAndService;
