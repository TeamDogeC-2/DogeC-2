import React, { useEffect, useState } from 'react';
import { postBoardCategory } from '../../apis/auth/BoardAPI';
import { type BoardDataType } from '../../interfaces/BoardTypes';
import NoticeAndService from '../common/NoticeAndService';
import Swal from 'sweetalert2';

const CustomerService = () => {
  const [items, setItems] = useState<BoardDataType[]>([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(0);

  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);

  const serviceHeader: string[] = ['title', 'nickname', 'writeDate', 'view'];

  const handlePageChange = (e: React.SetStateAction<number>) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    postBoardCategory('CUSTOMERSERVICE', currentPage, 12)
      .then(response => {
        setItems(response.data.content);
        setPostPerPage(response.data.pageable.pageSize);
      })
      .catch(() => {
        Swal.fire(
          '서버 통신 실패',
          '고객센터 목록 불러오기를 실패하였습니다. 다시 시도해 주세요.',
          'error',
        );
      });
  }, []);

  useEffect(() => {
    setCount(items.length);
    setIndexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
  }, [currentPage, indexOfFirstPost, indexOfLastPost, postPerPage]);

  return (
    <NoticeAndService
      items={items}
      setItems={setItems}
      currentPage={currentPage}
      count={count}
      handlePageChange={handlePageChange}
      postPerPage={postPerPage}
      setPostPerPage={setPostPerPage}
      pageTitle="고객센터"
      tableHeader={serviceHeader}
    />
  );
};

export default CustomerService;
