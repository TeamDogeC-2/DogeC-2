import React, { useEffect, useState } from 'react';
import { type PostSearchPropsType } from '../../interfaces/BoardTypes';
import './postsearch.scss';

const PostSearch = ({
  pageTitle,
  setCurrentPage,
  handlePostBoardApi,
  userInformation,
}: PostSearchPropsType) => {
  const [selected, setSelected] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const handleClickList = () => {
    console.log('클릭됨');

    setSelected('all');
    setSearch('');
    setCurrentPage(1);
    postBoardApi('');
  };

  const selectBoxChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  const postBoardApi = (search: string) => {
    handlePostBoardApi(search);
  };

  const onClickSearch = () => {
    postBoardApi(search);
  };

  const handleOnKeyDownEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      return onClickSearch();
    }
  };

  return (
    <>
      <div className="board-control-wrap">
        <button onClick={handleClickList}>목록</button>
        {userInformation.memberClassification === 'STUDENT' ? (
          pageTitle === '공지사항' ? null : (
            <button>글쓰기</button>
          )
        ) : null}
        {userInformation.memberClassification === 'ADMIN' ? (
          <>
            <button>글쓰기</button>
            <button>게시판 관리</button>
          </>
        ) : null}
      </div>
      <div className="search-container">
        <select key={selected} defaultValue={selected} onChange={selectBoxChange}>
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
