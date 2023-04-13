import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

const PCBoard = (props: any) => {
  const { currentPage, category, bestBoardItems, hotBoardItems, currentPosts } = props;
  return (
    <table className="board-table">
      <thead>
        <tr>
          <th className="board-title">제목</th>
          <th className="post-information">
            <div className="board-writer">작성자</div>
            <div className="board-write-date">작성일</div>
            <div className="board-view-count">조회수</div>
            <div className="board-like-count">좋아요</div>
          </th>
        </tr>
      </thead>
      <tbody>
        {currentPage === 1 && category === 'ALL'
          ? bestBoardItems.map((post: any) => {
              return (
                <tr key={post.boardId} className="best-post">
                  <td className="board-title">
                    <span className="best-cell">BEST</span>[{post.tag}]&nbsp;
                    <span
                      className={post.authentication === 'Y' ? 'authentication-post' : undefined}
                    >
                      {post.title}
                    </span>
                  </td>
                  <td className="post-information">
                    <div className="board-writer">{post.nickname}</div>
                    <div className="board-write-date">{post.writeDate}</div>
                    <div className="board-view-count">{post.view}</div>
                    <div className="board-like-count">{post.likedCount}</div>
                  </td>
                </tr>
              );
            })
          : null}
        {currentPage === 1 && category === 'ALL'
          ? hotBoardItems.map((post: any) => {
              return (
                <tr key={post.boardId} className="best-post">
                  <td className="board-title">
                    <span className="best-cell">
                      HOT &nbsp;
                      <FontAwesomeIcon icon={faFire} />
                    </span>
                    [{post.tag}]&nbsp;
                    <span
                      className={post.authentication === 'Y' ? 'authentication-post' : undefined}
                    >
                      {post.title}
                    </span>
                  </td>
                  <td className="post-information">
                    <div className="board-writer">{post.nickname}</div>
                    <div className="board-write-date">{post.writeDate}</div>
                    <div className="board-view-count">{post.view}</div>
                    <div className="board-like-count">{post.likedCount}</div>
                  </td>
                </tr>
              );
            })
          : null}
        {!!currentPosts &&
          currentPosts.map((post: any) => {
            return (
              <tr key={post.boardId} className="board-wrap">
                {post.comments >= 5 && (
                  <td className="best-cell">
                    <span>best</span>
                  </td>
                )}
                <td className="board-title">
                  [{post.tag}]&nbsp;
                  <span className={post.authentication === 'Y' ? 'authentication-post' : undefined}>
                    {post.title}
                  </span>
                </td>
                <td className="post-information">
                  <div className="board-writer">{post.nickname}</div>
                  <div className="board-write-date">{post.writeDate}</div>
                  <div className="board-view-count">{post.view}</div>
                  <div className="board-like-count">{post.likedCount}</div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default PCBoard;
