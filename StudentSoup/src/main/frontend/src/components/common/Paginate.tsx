import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import './paginate.scss';

const Paginate = ({ page, count, setPage }: any) => {
  return (
    <>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={count}
        pageRangeDisplayed={5}
        prevPageText="<"
        nextPageText=">"
        onChange={setPage}
        hideFirstLastPages={true}
      />
    </>
  );
};

export default Paginate;
