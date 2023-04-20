import axios from 'axios';
import React, { useState } from 'react';
import { postBoardCategory } from '../../apis/auth/BoardAPI';
import { type PostSearchPropsType } from '../../interfaces/BoardTypes';
import './postsearch.scss';
import Swal from 'sweetalert2';

const PostSearch = ({ pageTitle, setItems, setPostPerPage, currentPage }: PostSearchPropsType) => {
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
      postBoardCategory('ANNOUNCEMENT', currentPage, 12, search)
        .then(response => {
          setItems(response.data.content);
          setPostPerPage(response.data.pageable.pageSize);
        })
        .catch(() => {
          Swal.fire(
            '서버 통신 실패',
            '공지사항 목록 불러오기를 실패하였습니다. 다시 시도해 주세요.',
            'error',
          );
        });
    } else if (pageTitle === '고객센터') {
      postBoardCategory('CUSTOMERSERVICE', currentPage, 12, search)
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
