import React, { useEffect, useState } from 'react';
import { DesktopHeader, MobileHeader, Mobile } from '../../mediaQuery';
import { ReactComponent as ReviewStarIcon } from '../../img/mypageReviewStar.svg';
import {
  PreViewBoard,
  type PreViewBoardResponse,
  PreViewReply,
  type PreViewReplyResponse,
} from './data/MypageContents';
interface propTypes {
  handleSelectPage: (pagename: string) => void;
  memberId: number | undefined;
}
const MypagePreview = (props: propTypes) => {
  const [preViewBoardList, setPreViewBoardList] = useState<PreViewBoardResponse>();
  const [preViewReplyList, setPreviewReplyList] = useState<PreViewReplyResponse>();
  const onClickViewButton = () => {
    props.handleSelectPage('boardreply');
  };
  const onClickReviewButton = () => {
    props.handleSelectPage('review');
  };

  useEffect(() => {
    if (props?.memberId) {
      PreViewBoard(props.memberId)
        .then(res => {
          setPreViewBoardList(res);
        })
        .catch(err => {
          console.error(err);
        });
      PreViewReply(props.memberId).then(res => {
        setPreviewReplyList(res);
      });
    }
  }, []);

  return (
    <>
      <DesktopHeader>
        <div className="mypagemain-contents">
          <div className="mypagemain-boardcontainer">
            <div className="mypagemain-boardmain">
              <div className="mypagemain-boardmainname">최근 리뷰</div>
              <div onClick={onClickReviewButton} className="mypagemain-boardallview">
                전체보기
              </div>
            </div>
            <table className="mypagemain-boardtable">
              <thead>
                <tr>
                  <th>제목</th>
                  <th>조회수</th>
                  <th>평점</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>소래포구 화동옥 맛집</td>
                  <td>15</td>
                  <td className="mypagemain-reviewstar">
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                  </td>
                </tr>
                <tr>
                  <td>인하대 매운찜닭 맛집</td>
                  <td>7</td>
                  <td className="mypagemain-reviewstar">
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mypagemain-boardcontainer">
            <div className="mypagemain-boardmain">
              <div className="mypagemain-boardmainname">최근 게시글</div>
              <div onClick={onClickViewButton} className="mypagemain-boardallview">
                전체보기
              </div>
            </div>
            <table className="mypagemain-boardtable">
              <thead>
                <tr>
                  <th>제목</th>
                  <th>작성일</th>
                  <th>좋아요</th>
                </tr>
              </thead>
              <tbody>
                {preViewBoardList?.content?.map(board => (
                  <tr key={board.boardId}>
                    <td>{board.title}</td>
                    <td>{board.writeDate}</td>
                    <td>{board.likedCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mypagemain-boardcontainer">
            <div className="mypagemain-boardmain">
              <div className="mypagemain-boardmainname">최근 댓글</div>
              <div onClick={onClickViewButton} className="mypagemain-boardallview">
                전체보기
              </div>
            </div>
            <table className="mypagemain-boardtable">
              <thead>
                <tr>
                  <th>제목</th>
                  <th>작성일</th>
                  <th>좋아요</th>
                </tr>
              </thead>
              <tbody>
                {preViewReplyList?.content?.map(board => (
                  <tr key={board.boardId}>
                    <td>{board.content}</td>
                    <td>{board.writeDate}</td>
                    <td>{board.likedCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DesktopHeader>
      <MobileHeader>
        <div className="tablet-mypagemain-contents">
          <div className="tablet-mypagemain-boardcontainer">
            <div className="tablet-mypagemain-boardmain">
              <div className="tablet-mypagemain-boardmainname">최근 리뷰</div>
              <div onClick={onClickReviewButton} className="tablet-mypagemain-boardallview">
                전체보기
              </div>
            </div>
            <table className="tablet-mypagemain-boardtable">
              <thead>
                <tr>
                  <th>제목</th>
                  <th>조회수</th>
                  <th>평점</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>소래포구 화동옥 맛집</td>
                  <td>15</td>
                  <td className="tablet-mypagemain-reviewstar">
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                  </td>
                </tr>
                <tr>
                  <td>인하대 매운찜닭 맛집</td>
                  <td>7</td>
                  <td className="tablet-mypagemain-reviewstar">
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tablet-mypagemain-boardcontainer">
            <div className="tablet-mypagemain-boardmain">
              <div className="tablet-mypagemain-boardmainname">최근 게시글</div>
              <div onClick={onClickViewButton} className="tablet-mypagemain-boardallview">
                전체보기
              </div>
            </div>
            <table className="tablet-mypagemain-boardtable">
              <thead>
                <tr>
                  <th>제목</th>
                  <th>작성일</th>
                  <th>좋아요</th>
                </tr>
              </thead>
              <tbody>
                {preViewBoardList?.content?.map(board => (
                  <tr key={board.boardId}>
                    <td>{board.title}</td>
                    <td>{board.writeDate}</td>
                    <td>{board.likedCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="tablet-mypagemain-boardcontainer">
            <div className="tablet-mypagemain-boardmain">
              <div className="tablet-mypagemain-boardmainname">최근 댓글</div>
              <div onClick={onClickViewButton} className="tablet-mypagemain-boardallview">
                전체보기
              </div>
            </div>
            <table className="tablet-mypagemain-boardtable">
              <thead>
                <tr>
                  <th>제목</th>
                  <th>작성일</th>
                  <th>좋아요</th>
                </tr>
              </thead>
              <tbody>
                {preViewReplyList?.content?.map(board => (
                  <tr key={board.boardId}>
                    <td>{board.content}</td>
                    <td>{board.writeDate}</td>
                    <td>{board.likedCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </MobileHeader>
      <Mobile>
        <div className="mobile-mypagemain-contents">
          <div className="mobile-mypagemain-boardcontainer">
            <div className="mobile-mypagemain-boardmain">
              <div className="mobile-mypagemain-boardmainname">최근 리뷰</div>
              <div onClick={onClickReviewButton} className="mobile-mypagemain-boardallview">
                전체보기
              </div>
            </div>
            <table className="mobile-mypagemain-boardtable">
              <thead>
                <tr>
                  <th>제목</th>
                  <th>조회수</th>
                  <th>평점</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>소래포구 화동옥 맛집</td>
                  <td>15</td>
                  <td className="mobile-mypagemain-reviewstar">
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                  </td>
                </tr>
                <tr>
                  <td>인하대 매운찜닭 맛집</td>
                  <td>7</td>
                  <td className="mobile-mypagemain-reviewstar">
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                    <ReviewStarIcon />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mobile-mypagemain-boardcontainer">
            <div className="mobile-mypagemain-boardmain">
              <div className="mobile-mypagemain-boardmainname">최근 게시글</div>
              <div onClick={onClickViewButton} className="mobile-mypagemain-boardallview">
                전체보기
              </div>
            </div>
            <table className="mobile-mypagemain-boardtable">
              <thead>
                <tr>
                  <th>제목</th>
                  <th>작성일</th>
                  <th>좋아요</th>
                </tr>
              </thead>
              <tbody>
                {preViewBoardList?.content?.map(board => (
                  <tr key={board.boardId}>
                    <td>{board.title}</td>
                    <td>{board.writeDate}</td>
                    <td>{board.likedCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mobile-mypagemain-boardcontainer">
            <div className="mobile-mypagemain-boardmain">
              <div className="mobile-mypagemain-boardmainname">최근 댓글</div>
              <div onClick={onClickViewButton} className="mobile-mypagemain-boardallview">
                전체보기
              </div>
            </div>
            <table className="mobile-mypagemain-boardtable">
              <thead>
                <tr>
                  <th>제목</th>
                  <th>작성일</th>
                  <th>좋아요</th>
                </tr>
              </thead>
              <tbody>
                {preViewReplyList?.content?.map(board => (
                  <tr key={board.boardId}>
                    <td>{board.content}</td>
                    <td>{board.writeDate}</td>
                    <td>{board.likedCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default MypagePreview;
