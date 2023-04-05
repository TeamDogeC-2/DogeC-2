import axios from 'axios';
import React, { useState } from 'react';
import { postBoardNoticeSearch } from '../../apis/auth/BoardAPI';
import { type PostSearchPropsType } from '../../interfaces/BoardTypes';
import './postsearch.scss';

const PostSearch = ({ items, setItems, setPostPerPage }: PostSearchPropsType) => {
  const [select, setSelect] = useState('');
  const [search, setSearch] = useState('');

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  const selectBoxChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  const onClickSearch = async () => {
    postBoardNoticeSearch(search).then(response => {
      setItems(response.data.content);
      setPostPerPage(response.data.pageable.pageSize);
    });
  };

  return (
    <>
      <div className="search-container">
        <select defaultValue="all" onChange={selectBoxChange}>
          <option value="all">전체</option>
          <option value="title">제목</option>
        </select>
        <input
          type="search"
          placeholder="글 제목, 내용을 적어주세요"
          value={search}
          onChange={onChangeSearch}
        />
        <button className="search-button" onClick={onClickSearch}>
          검색
        </button>
      </div>
    </>
  );
};

export default PostSearch;
