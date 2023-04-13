import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

const MobileBoard = (props: any) => {
  const { currentPage, category, bestBoardItems, hotBoardItems, currentPosts } = props;
  return (
    <div className="mobile-board-wrap">
      {currentPage === 1 && category === 'ALL'
        ? bestBoardItems.map((post: any) => {
            return (
              <>
                <div key={post.boardId} className="board-table-div best-post">
                  <div className="board-underline">
                    <span className="best-cell">BEST</span>
                    <span>[{post.tag}]</span>
                    <span
                      className={post.authentication === 'Y' ? 'authentication-post' : undefined}
                    >
                      {post.title}
                    </span>
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
              </>
            );
          })
        : null}
      {currentPage === 1 && category === 'ALL'
        ? hotBoardItems.map((post: any) => {
            return (
              <>
                <div key={post.boardId} className="board-table-div best-post">
                  <div className="board-underline">
                    <span className="best-cell">
                      HOT <FontAwesomeIcon icon={faFire} />
                    </span>
                    <span>[{post.tag}] </span>
                    <span
                      className={post.authentication === 'Y' ? 'authentication-post' : undefined}
                    >
                      {post.title}
                    </span>
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
              </>
            );
          })
        : null}
      {!!currentPosts &&
        currentPosts.map((post: any) => {
          return (
            <>
              <div key={post.boardId} className="board-table-div">
                <div className="board-underline">
                  <span>[{post.tag}]</span>
                  <span className={post.authentication === 'Y' ? 'authentication-post' : undefined}>
                    {post.title}
                  </span>
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
            </>
          );
        })}
    </div>
  );
};

export default MobileBoard;
