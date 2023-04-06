import axios from 'axios';
import React, { useState } from 'react';
import { postBoardNoticeSearch, postBoardServiceSearch } from '../../apis/auth/BoardAPI';
import { type PostSearchPropsType } from '../../interfaces/BoardTypes';
import './postsearch.scss';

const PostSearch = ({ pageTitle, setItems, setPostPerPage }: PostSearchPropsType) => {
  const [selected, setSelected] = useState('all');
  const [search, setSearch] = useState('');

  const selectBoxChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  const onClickSearch = async () => {
    if (pageTitle === '공지사항') {
      postBoardNoticeSearch(search).then(response => {
        setItems(response.data.content);
        setPostPerPage(response.data.pageable.pageSize);
      });
    } else if (pageTitle === '고객센터') {
      postBoardServiceSearch(search).then(response => {
        setItems(response.data.content);
        setPostPerPage(response.data.pageable.pageSize);
      });
    }
  };

  const handleOnKeyDownEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClickSearch();
    }
  };
  return (
    <>
      <div className="search-container">
        <select defaultValue={selected} onChange={selectBoxChange}>
          <option value="all">전체</option>
          <option value="title">제목</option>
        </select>
        <input
          type="search"
          placeholder="글 제목, 내용을 적어주세요"
          value={search}
          onChange={onChangeSearch}
          onKeyDown={handleOnKeyDownEnter}
        />
        <button className="search-button" onClick={onClickSearch}>
          검색
        </button>
      </div>
    </>
  );
};

export default PostSearch;
