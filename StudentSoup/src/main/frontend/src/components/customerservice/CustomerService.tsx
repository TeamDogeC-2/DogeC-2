import React, { useEffect, useState } from 'react';
import { postBoardCategory } from '../../apis/auth/BoardAPI';
import { type BoardDataType } from '../../interfaces/BoardTypes';
import NoticeAndService from '../common/NoticeAndService';

const CustomerService = () => {
  const [items, setItems] = useState<BoardDataType[]>([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(0);

  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPosts, setCurrentPosts] = useState<BoardDataType[]>([]);

  const serviceHeader: string[] = ['title', 'authentication', 'writeDate', 'view'];

  const handlePageChange = (e: React.SetStateAction<number>) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    postBoardCategory('CUSTOMERSERVICE').then(response => {
      setItems(response.data.content);
      setPostPerPage(response.data.pageable.pageSize);
    });
  }, []);

  useEffect(() => {
    setCount(items.length);
    setIndexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(items.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage, items, indexOfFirstPost, indexOfLastPost, postPerPage]);

  return (
    <NoticeAndService
      items={items}
      setItems={setItems}
      currentPosts={currentPosts}
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
