import React from 'react';
import { Desktop, Mobile } from '../../mediaQuery';
import './boardsearch.scss';

const BoardSearch = () => (
  <>
    <Desktop>
      <div className='board-container-div'>
        <div className="board-container">
          <select>
            <option>전체</option>
          </select>
          <input type="text" placeholder="글 제목, 내용, 해시태그를 적어주세요"></input>
          <button className="board-button">검색</button>
        </div>
        <button className="board-write-button">글쓰기</button>
      </div>
    </Desktop>
    <Mobile>
      <div className='board-mobile-div'>
        <div className="board-mobile-container">
          <select>
            <option>전체</option>
          </select>
          <input type="text" placeholder="글 제목, 내용, 해시태그를 적어주세요"></input>
          <button className="board-mobile-button">검색</button>
        </div>
      </div>
    </Mobile>
  </>
);

export default BoardSearch;
