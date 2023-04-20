import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { type BoardDataType, type BoardPropsType } from '../../../interfaces/BoardTypes';

const MobileBoard = (props: BoardPropsType) => {
  const { currentPage, category, bestBoardItems, hotBoardItems, currentPosts } = props;

  return (
    <div className="mobile-board-wrap">
      {currentPosts
        .filter((post: BoardDataType) => post.authentication === 'Y')
        .map((post: BoardDataType) => {
          return (
            <div
              id={post.boardId.toString()}
              key={post.boardId}
              className="board-table-div authentication-post"
            >
              <div className="board-underline">
                <span>[{post.tag}]</span>
                <span>{post.title}</span>
                <span className="board-review-count">{post.reviewCount}</span>
              </div>
              <div className="board-info">
                <div className="board-info-left">
                  <p>{post.nickname}</p>
                  <p>조회수</p>
                  <p>{post.view}</p>
                  <p>좋아요수</p>
                  <p>{post.likedCount}</p>
                </div>
                <div className="board-info-right">
                  <p>{post.writeDate}</p>
                </div>
              </div>
            </div>
          );
        })}
      {currentPage === 1 && category === 'ALL'
        ? bestBoardItems.map((post: BoardDataType) => {
            return (
              <div id={post.boardId.toString()} key={post.boardId} className="board-table-div">
                <div className="board-underline">
                  <span className="best-cell">BEST</span>
                  <span>[{post.tag}]</span>
                  <span>{post.title}</span>
                  <span className="board-review-count">{post.reviewCount}</span>
                </div>
                <div className="board-info">
                  <div className="board-info-left">
                    <p>{post.nickname}</p>
                    <p>조회수</p>
                    <p>{post.view}</p>
                    <p>좋아요수</p>
                    <p>{post.likedCount}</p>
                  </div>
                  <div className="board-info-right">
                    <p>{post.writeDate}</p>
                  </div>
                </div>
              </div>
            );
          })
        : null}
      {currentPage === 1 && category === 'ALL'
        ? hotBoardItems.map((post: BoardDataType) => {
            return (
              <div id={post.boardId.toString()} key={post.boardId} className="board-table-div">
                <div className="board-underline">
                  <span className="best-cell">
                    HOT <FontAwesomeIcon icon={faFire} />
                  </span>
                  <span>[{post.tag}] </span>
                  <span>{post.title}</span>
                  <span className="board-review-count">{post.reviewCount}</span>
                </div>
                <div className="board-info">
                  <div className="board-info-left">
                    <p>{post.nickname}</p>
                    <p>조회수</p>
                    <p>{post.view}</p>
                    <p>좋아요수</p>
                    <p>{post.likedCount}</p>
                  </div>
                  <div className="board-info-right">
                    <p>{post.writeDate}</p>
                  </div>
                </div>
              </div>
            );
          })
        : null}
      {!!currentPosts &&
        currentPosts
          .filter((post: BoardDataType) => post.authentication === 'N')
          .map((post: BoardDataType) => {
            return (
              <div id={post.boardId.toString()} key={post.boardId} className="board-table-div">
                <div className="board-underline">
                  <span>[{post.tag}]</span>
                  <span>{post.title}</span>
                  <span className="board-review-count">{post.reviewCount}</span>
                </div>
                <div className="board-info">
                  <div className="board-info-left">
                    <p>{post.nickname}</p>
                    <p>조회수</p>
                    <p>{post.view}</p>
                    <p>좋아요수</p>
                    <p>{post.likedCount}</p>
                  </div>
                  <div className="board-info-right">
                    <p>{post.writeDate}</p>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default MobileBoard;
