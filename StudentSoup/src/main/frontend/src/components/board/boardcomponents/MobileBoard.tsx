import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { type BoardDataType, type BoardPropsType } from '../../../interfaces/BoardTypes';
import { useNavigate } from 'react-router-dom';

interface State {
  value1: string;
  value2: number;
  value3: string;
  value4: number;
  value5: string;
}

const MobileBoard = (props: BoardPropsType) => {
  const {
    currentPage,
    category,
    bestBoardItems,
    hotBoardItems,
    currentPosts,
    memberId,
    nickname,
    schoolId,
    schoolName,
  } = props;

  const navigate = useNavigate();

  const handleClickDetail = (e: any) => {
    e.stopPropagation();
    const value = e.target.id;
    const propsState: State = {
      value1: value,
      value2: memberId,
      value3: nickname,
      value4: schoolId,
      value5: schoolName,
    };
    navigate(`/board/detail/${propsState.value1}`, { state: propsState });
  };

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
              <div
                id={post.boardId.toString()}
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
        ? hotBoardItems.map((post: BoardDataType) => {
            return (
              <div
                id={post.boardId.toString()}
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
          .filter((post: BoardDataType) => post.authentication === 'N')
          .map((post: BoardDataType) => {
            return (
              <div
                id={post.boardId.toString()}
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
