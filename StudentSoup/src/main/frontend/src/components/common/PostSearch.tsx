import React from 'react';
import useInput from '../../hooks/useInput';
import './postsearch.scss';

const PostSearch = () => {
  const [search, onChangeSearch, setSearch] = useInput('');

  return (
    <>
      <div className="search-container">
        <select defaultValue="all">
          <option value="all" selected>
            전체
          </option>
          <option value="title">제목</option>
          <option value="content">내용</option>
        </select>
        <input
          type="search"
          placeholder="글 제목, 내용을 적어주세요"
          value={search}
          onChange={onChangeSearch}
        />
        <button className="search-button">검색</button>
      </div>
    </>
  );
};

export default PostSearch;
