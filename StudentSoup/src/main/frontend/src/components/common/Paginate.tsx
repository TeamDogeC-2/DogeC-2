import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import './paginate.scss';

const Paginate = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page: any) => {
    setPage(page);
  };
  return (
    <>
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
    </>
  );
};

export default Paginate;
