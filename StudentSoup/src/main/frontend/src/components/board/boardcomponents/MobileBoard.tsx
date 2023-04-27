import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

interface State {
  value1: string;
  value2: number;
  value3: string;
}

const MobileBoard = (props: any) => {
  const { currentPage, category, bestBoardItems, hotBoardItems, currentPosts, memberId, nickname } =
    props;

  const navigate = useNavigate();

  const handleClickDetail = (e: any) => {
    e.stopPropagation();
    const value = e.target.id;
    const propsState: State = { value1: value, value2: memberId, value3: nickname };
    navigate('/board/detail', { state: propsState });
  };

  return (
    <div className="mobile-board-wrap">
      {currentPosts
        .filter((post: any) => post.authentication === 'Y')
        .map((post: any) => {
          return (
            <div
              id={post.boardId}
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
        ? bestBoardItems.map((post: any) => {
            return (
              <div
                id={post.boardId}
                key={post.boardId}
                onClick={handleClickDetail}
                className="board-table-div"
              >
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
        ? hotBoardItems.map((post: any) => {
            return (
              <div
                id={post.boardId}
                key={post.boardId}
                onClick={handleClickDetail}
                className="board-table-div"
              >
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
          .filter((post: any) => post.authentication === 'N')
          .map((post: any) => {
            return (
              <div
                id={post.boardId}
                key={post.boardId}
                onClick={handleClickDetail}
                className="board-table-div"
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
    </div>
  );
};

export default MobileBoard;
