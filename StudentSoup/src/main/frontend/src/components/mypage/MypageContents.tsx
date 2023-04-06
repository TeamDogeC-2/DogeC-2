import React, { useEffect, useState } from 'react';
import { DesktopHeader, MobileHeader, Mobile } from '../../mediaQuery';
import './mypageContents.scss';
import Paginate from '../common/Paginate';
import { DetailCount, type DetailCountResponse } from './data/MypageContents';
interface propTypes {
  memberId: number | undefined;
}
const MypageContents = (props: propTypes) => {
  const [content, setContent] = useState<string>('board');
  const [count, setCount] = useState(3);
  const [currentpage, setCurrentpage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(0);
  const [contentCount, setContentCount] = useState<DetailCountResponse>();
  const handlePageChange = (e: any) => {
    setCurrentpage(e);
  };
  useEffect(() => {
    if (props?.memberId) {
      DetailCount(props.memberId).then(res => {
        setContentCount(res);
      });
    }
  });
  return (
    <>
      <DesktopHeader>
        <div className="mypagecontents-container">
          <h2>게시글/댓글</h2>
          <div className="mypagecontents-bordercontainer">
            <div
              onClick={() => {
                setContent('board');
              }}
              className={
                content === 'board'
                  ? 'mypagecontents-borderbuttonboard mypagecontents-borderbuttonboardactive'
                  : 'mypagecontents-borderbuttonboard'
              }
            >
              게시글 ({contentCount?.boardWriteCount})
            </div>
            <div
              onClick={() => {
                setContent('reply');
              }}
              className={
                content === 'reply'
                  ? 'mypagecontents-borderbuttonreply mypagecontents-borderbuttonreplyactive'
                  : 'mypagecontents-borderbuttonreply'
              }
            >
              댓글 ({contentCount?.boardReplyWriteCount})
            </div>
          </div>
          {content === 'board' ? (
            <table className="mypagecontents-boardtable">
              <thead>
                <tr>
                  <th>제목</th>
                  <th>작성일</th>
                  <th>조회수</th>
                  <th>좋아요</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>한달에 10억원을번 비결</td>
                  <td>16:23</td>
                  <td>24</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>25</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>25</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>25</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>25</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>25</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <table className="mypagecontents-boardtable">
              <thead>
                <tr>
                  <th>내용</th>
                  <th>작성일</th>
                  <th>좋아요</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>댓글내용 한달에 10억원을번 비결</td>
                  <td>16:23</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>댓글내용 한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>댓글내용 한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>댓글내용 한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>댓글내용 한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>댓글내용 한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          )}
          <div className="mypagecontents-pagenation">
            <Paginate
              page={currentpage}
              count={count}
              setPage={handlePageChange}
              postPerPage={postPerPage}
            />
          </div>
        </div>
      </DesktopHeader>
      <MobileHeader>
        <div className="tablet-mypagecontents-container">
          <h2>게시글/댓글</h2>
          <div className="tablet-mypagecontents-bordercontainer">
            <div
              onClick={() => {
                setContent('board');
              }}
              className={
                content === 'board'
                  ? 'tablet-mypagecontents-borderbuttonboard tablet-mypagecontents-borderbuttonboardactive'
                  : 'tablet-mypagecontents-borderbuttonboard'
              }
            >
              게시글 ({contentCount?.boardWriteCount})
            </div>
            <div
              onClick={() => {
                setContent('reply');
              }}
              className={
                content === 'reply'
                  ? 'tablet-mypagecontents-borderbuttonreply tablet-mypagecontents-borderbuttonreplyactive'
                  : 'tablet-mypagecontents-borderbuttonreply'
              }
            >
              댓글 ({contentCount?.boardReplyWriteCount})
            </div>
          </div>
          {content === 'board' ? (
            <table className="tablet-mypagecontents-boardtable">
              <thead>
                <tr>
                  <th>제목</th>
                  <th>작성일</th>
                  <th>조회수</th>
                  <th>좋아요</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>한달에 10억원을번 비결</td>
                  <td>16:23</td>
                  <td>24</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>25</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>25</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>25</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>25</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>25</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <table className="tablet-mypagecontents-boardtable">
              <thead>
                <tr>
                  <th>내용</th>
                  <th>작성일</th>
                  <th>좋아요</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>댓글내용 한달에 10억원을번 비결</td>
                  <td>16:23</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>댓글내용 한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>댓글내용 한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>댓글내용 한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>댓글내용 한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>댓글내용 한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          )}
          <div className="tablet-mypagecontents-pagenation">
            <Paginate
              page={currentpage}
              count={count}
              setPage={handlePageChange}
              postPerPage={postPerPage}
            />
          </div>
        </div>
      </MobileHeader>
      <Mobile>
        <div className="mobile-mypagecontents-container">
          <h2>게시글/댓글</h2>
          <div className="mobile-mypagecontents-bordercontainer">
            <div
              onClick={() => {
                setContent('board');
              }}
              className={
                content === 'board'
                  ? 'mobile-mypagecontents-borderbuttonboard mobile-mypagecontents-borderbuttonboardactive'
                  : 'mobile-mypagecontents-borderbuttonboard'
              }
            >
              게시글 ({contentCount?.boardWriteCount})
            </div>
            <div
              onClick={() => {
                setContent('reply');
              }}
              className={
                content === 'reply'
                  ? 'mobile-mypagecontents-borderbuttonreply mobile-mypagecontents-borderbuttonreplyactive'
                  : 'mobile-mypagecontents-borderbuttonreply'
              }
            >
              댓글 ({contentCount?.boardReplyWriteCount})
            </div>
          </div>
          {content === 'board' ? (
            <table className="mobile-mypagecontents-boardtable">
              <thead>
                <tr>
                  <th>제목</th>
                  <th>작성일</th>
                  <th>조회수</th>
                  <th>좋아요</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>한달에 10억원을번 비결</td>
                  <td>16:23</td>
                  <td>24</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>25</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>25</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>25</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>25</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>25</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <table className="mobile-mypagecontents-boardtable">
              <thead>
                <tr>
                  <th>내용</th>
                  <th>작성일</th>
                  <th>좋아요</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>댓글내용 한달에 10억원을번 비결</td>
                  <td>16:23</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>댓글내용 한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>댓글내용 한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>댓글내용 한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>댓글내용 한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>댓글내용 한달에 천원을 번 비결</td>
                  <td>2023.01.12</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          )}
          <div className="mobile-mypagecontents-pagenation">
            <Paginate
              page={currentpage}
              count={count}
              setPage={handlePageChange}
              postPerPage={postPerPage}
            />
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default MypageContents;
