import React, { useEffect, useState } from 'react';
import MypageNavbar from '../common/mypageNavbar';
import cn from 'clsx';
import axios from 'axios';
import { ReactComponent as BoardWriteIcon } from '../../img/BoardWriteIcon.svg';
import { ReactComponent as BoardWriteIconHeart } from '../../img/boardWriteIconHeart.svg';
import { ReactComponent as BoardWriteWhiteHeart } from '../../img/BoardWriteWhiteHeart.svg';
import { ReactComponent as BoardWriteReplyHeart } from '../../img/BoardWriteReplyHeart.svg';
import { ReactComponent as BoardReplyIcon } from '../../img/boardReplyIcon.svg';
import { ReactComponent as BoardScrollUp } from '../../img/boardScrollUpIcon.svg';
import { ReactComponent as BoardScrollDown } from '../../img/boardScroolDownIcon.svg';
import { Link, useHistory } from 'react-router-dom';

const boardDetail = () => {
  const [boardTitle, setBoardTitle] = useState<string>('');
  const [boardContent, setBoardContent] = useState<string>('');
  const [shownComments, setShownComments] = useState([]);
  const [boardNickName, setBoardNickName] = useState<string>('');
  const [boardDate, setBoardDate] = useState<any>();
  const [boardView, setBoardView] = useState<number>();
  const [boardLikedCount, setBoardLikedCount] = useState<number>();
  const [boardLiked, isBoardLiked] = useState<boolean>();
  const [boardReviewList, setBoardReviewList] = useState<any>([]);
  const [boardBestReviewList, setBoardBestReviewList] = useState<any>([]);
  const [openReply, isOpenReply] = useState<boolean>(false);
  const [findId, setFindId] = useState<number>();
  const [t, setT] = useState<string>('');
  const [s, setS] = useState<string>('');
  const saveMemberId = sessionStorage.getItem('memberId');
  // const url = `/board/${boardId}/${saveMemberId}`; 최종 데이터
  useEffect(() => {
    axios
      .post(`/board/152/${saveMemberId}`)
      .then(res => {
        setBoardTitle(res.data.title);
        setBoardContent(res.data.content);
        setBoardNickName(res.data.nickname);
        setBoardDate(res.data.writeDate);
        setBoardView(res.data.view);
        setBoardLikedCount(res.data.likedCount);
        isBoardLiked(res.data.like);
        setT(res.data.boardCategory);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`/boardReviews/152/${saveMemberId}`)
      .then(res => {
        console.log(res.data);
        setBoardReviewList(res.data.boardReviewList);
        setBoardBestReviewList(res.data.bestReviewList);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (t === 'FREE') {
      setS('자유게시판');
    } else if (t === 'CONSULTING') {
      setS('취업/상담게시판');
    } else if (t === 'TIP') {
      setS('팁게시판');
    } else if (t === 'NOTICE') {
      setS('공지사항');
    } else if (t === 'EMPLOYMENT') {
      setS('취업/상담게시판');
    }
  });

  const handleTest = (e: any) => {
    console.log(e.target.id);
    setFindId(e.target.id);
  };
  return (
    <>
      <MypageNavbar />
      <div className="w-full h-[103px]"></div>
      <div className="flex flex-row justify-center">
        <div className="mt-[15px] w-[296px] h-[60px] w-[296px] h-[60px] font-bold leading-[29px] text-[24px] items-center text-[#262626]">
          {s}
        </div>
        <div className="ml-[428px] mt-[7px] w-[77px] h-[44px] border-[0.8px] border-[#929292] rounded-[22px] bg-[#FFFFFF] cursor-pointer">
          <div
            onClick={() => {
              history.push('/board');
            }}
            className="ml-[22.06px] mt-[8.62px] font-normal text-[16px] flex items-center text-[#929292]"
          >
            목록
          </div>
        </div>
        <Link to="/board/write">
          <div className="ml-[14px] mt-[7px] w-[123px] h-[44px] border-[0.8px] border-[#FF611D] rounded-[22px] bg-[#FFFFFF] flex flex-row">
            <BoardWriteIcon className="ml-[22.06px] mt-[13.28px]" />
            <div className="ml-[9.2px] font-normal text-[16px] flex items-center text-[#FF611D]">
              글쓰기
            </div>
          </div>
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="w-[938px] h-auto border-[1px] border-[#BCBCBC] bg-[#FFFFFF] shadow-[0px_2px_10px_rgba(0,0,0,0.1)] rounded-[5px] content-center">
          <div className="flex flex-row">
            <div className="ml-[41px] mt-[35px] w-[850px] h-auto text-[20px] font-medium flex items-center text-[#252525]">
              {boardTitle}
            </div>
          </div>
          <div className="flex flex-row w-[400px] h-[17px] ml-[41px] mt-[21px]">
            <div className="font-normal text-[14px] text-[#A8A8A8]">
              {boardNickName} | {boardDate} | 조회 {boardView} |
            </div>
            <BoardWriteIconHeart className="ml-[6px] mt-[6.4px]" />
            <div className="ml-[5.11px] font-normal text-[14px] text-[#A8A8A8]">
              {boardLikedCount}
            </div>
          </div>
          <div className="ml-[28px] mt-[22px] w-[884px] border-[1px] border-[#BCBCBC] bg-[#BCBCBC] "></div>
          <div className="w-[856px] ml-[41px] mt-[34px] font-normal text-[16px] text-left leading-[26px] text-[#636363] mb-[20px]">
            {boardContent}
          </div>
          <div className="flex flex-row ml-[8px]">
            <div className="w-[180px] h-[180px] border-[1px] rounded-[5px] bg-[#A5A5A5]"></div>
            <div className="ml-[4px] w-[180px] h-[180px] border-[1px] rounded-[5px] bg-[#A5A5A5]"></div>
            <div className="ml-[4px] w-[180px] h-[180px] border-[1px] rounded-[5px] bg-[#A5A5A5]"></div>
            <div className="ml-[4px] w-[180px] h-[180px] border-[1px] rounded-[5px] bg-[#A5A5A5]"></div>
            <div className="ml-[4px] w-[180px] h-[180px] border-[1px] rounded-[5px] bg-[#A5A5A5]"></div>
          </div>
          <button className="ml-[398px] mt-[34px] w-[139px] h-[56px] border-[1px] rounded-[20px] bg-[#FF611D]">
            <div className="flex flex-row">
              <BoardWriteWhiteHeart className="ml-[21px] mt-[7px]" />
              <div className="ml-[6px] mb-[10px] w-auto h-[20px] font-normal text-[20px] text-[#FFFFFF]">
                추천 <span>{boardLikedCount}</span>
              </div>
            </div>
          </button>
          <div className="flex flex-row ml-[30px]">
            <div className="w-[423px] h-[23px] leading-[22px] mt-[72px] font-medium text-[16px] text-[#404040]">
              {boardReviewList.length}개의 댓글
            </div>
            <div className="ml-[397px] mt-[72px] h-[23px] font-semibold text-[16px] leading-[23px] text-[#989898]">
              수정
            </div>

            <div className="ml-[7px] mt-[72px] font-semibold text-[16px] leading-[23px] text-[#989898]">
              삭제
            </div>
          </div>
          <div className="flex flex-row">
            <textarea
              placeholder="댓글을 입력해주세요."
              className="ml-[28px] mt-[16px] w-[834px] h-[50px] resize-y border-[1px] rounded-[5px] border-[#C4C4C4]"
            ></textarea>
            <button className="mt-[16px] ml-[10px] w-[50px] h-[50px] bg-[#FF611D] rounded-[5px] text-[16px] font-normal text-[#FFFFFF]">
              등록
            </button>
          </div>
          {boardBestReviewList.map((data: any) => (
            <>
              <div key={data.boardReviewId} className="grid grid-cols-[74px_60px_720px_100px]">
                <div className="row-span-2 ml-[38px] mt-[20px] w-[40px] h-[40px] border-[1px] rounded-full bg-[#D9D9D9]"></div>
                <div className="row-span-2 ml-[18px] mt-[20px] h-[23px] font-semibold text-[16px] leading-[22px] text-[#FF611D]">
                  BEST
                </div>
                <div className="flex flex-row mt-[20px]">
                  <div className="h-[23px] ml-[2px] font-normal text-[16px] leading-[22px] text-[#404040]">
                    {data.nickname}
                  </div>
                  <div className="ml-[8px] font-normal text-[14px] leading-[18px] text-[#919191]">
                    {data.writeDate}
                  </div>
                </div>
                <div className="flex flex-row ml-[3px] row-span-2 mt-[20px]">
                  <div className="text-[14px] text-[#989898]">수정</div>
                  <span className="ml-[4px] text-[14px] text-[#989898]">|</span>
                  <div className="ml-[4px] text-[14px] text-[#989898]">삭제</div>
                </div>
                <div className="ml-[2px] mt-[2px] w-[723px] h-auto font-normal text-[16px] leading-[21px] text-[#404040]">
                  {data.content}
                </div>
                <div className="flex flex-row ml-[853px] col-span-4 ">
                  <BoardWriteReplyHeart className="mt-[2px] ml-[13px]" />
                  <div className="ml-[6.03px] font-normal text-[16px] leading-[21px] text-[#898989]">
                    {data.likeCount}
                  </div>
                </div>
                <div className="col-span-3 ml-[28px] mt-[5px] w-[884px] border-[1px] border-[#BCBCBC]"></div>
              </div>
            </>
          ))}
          {boardReviewList.map((data: any) => (
            <>
              <div
                key={data.boardReviewId}
                className="grid grid-cols-[96px_minmax(720px,_1fr)_100px]"
              >
                {data.seq && data.level === 0 ? (
                  <>
                    <div
                      key={data.boardReviewId}
                      className="ml-[38px] mt-[20px] w-[40px] h-[40px] border-[1px] rounded-full bg-[#D9D9D9] row-span-2"
                    ></div>
                    <div className="flex flex-row mt-[20px]">
                      <div className="h-[23px] font-normal text-[16px] leading-[22px] text-[#404040]">
                        {data.nickname}
                      </div>
                      <div className="ml-[8px] font-normal text-[14px] leading-[18px] text-[#919191]">
                        {data.writeDate}
                      </div>
                    </div>
                    <div className="flex flex-row ml-[19px] mt-[18px]">
                      <div className="text-[14px] text-[#989898]">수정</div>
                      <span className="ml-[4px] text-[14px] text-[#989898]">|</span>
                      <div className="ml-[4px] text-[14px] text-[#989898]">삭제</div>
                    </div>
                    <div className="col-span-2 mt-[2px] w-[723px] h-auto font-normal text-[16px] leading-[21px] text-[#404040]">
                      {data.content}
                    </div>
                    <div className="flex flex-row col-span-3">
                      {findId === data.boardReviewId ? (
                        <button
                          id={data.boardReviewId}
                          onClick={() => {
                            setFindId(0);
                          }}
                          className="ml-[96px] mt-[10px] font-normal text-[13px] leading-[17px] text-[#404040]"
                        >
                          답글작성 취소
                        </button>
                      ) : (
                        <button
                          id={data.boardReviewId}
                          onClick={() => {
                            setFindId(data.boardReviewId);
                          }}
                          className="ml-[96px] mt-[10px] font-normal text-[13px] leading-[17px] text-[#404040]"
                        >
                          답글작성
                        </button>
                      )}
                      {findId === data.boardReviewId ? (
                        ''
                      ) : (
                        <>
                          <BoardWriteReplyHeart className="ml-[725px] mt-[2px]" />
                          <div className="ml-[6.03px] mt-[1px] font-normal text-[16px] leading-[21px] text-[#898989]">
                            {data.likeCount}
                          </div>
                        </>
                      )}
                    </div>
                    {findId === data.boardReviewId && (
                      <>
                        <textarea
                          placeholder="댓글을 입력해주세요."
                          className="ml-[28px] mt-[16px] w-[834px] h-[50px] resize-y border-[1px] rounded-[5px] border-[#C4C4C4]"
                        ></textarea>
                        <button className="relative left-[760px] mt-[16px] ml-[10px] w-[50px] h-[50px] bg-[#FF611D] rounded-[5px] text-[16px] font-normal text-[#FFFFFF]">
                          등록
                        </button>
                      </>
                    )}
                    <div className="col-span-3 ml-[28px] mt-[10px] w-[884px] border-[1px] border-[#BCBCBC]"></div>
                  </>
                ) : (
                  ''
                )}
              </div>
              <div className="grid grid-cols-[74px_60px_720px_100px]">
                {data.seq && data.level === 1 ? (
                  <>
                    <div
                      key={data.boardReviewId}
                      className="mt-[23px] grid grid-cols-[74px_60px_720px_100px]"
                    >
                      <BoardReplyIcon className="row-span-2 ml-[38px]" />
                      <div className="row-span-2 w-[40px] h-[40px] border-[1px] rounded-full bg-[#D9D9D9]"></div>
                      <div className="flex flex-row">
                        <div className="h-[23px] font-normal text-[16px] leading-[22px] text-[#404040]">
                          {data.nickname}
                        </div>
                        <div className="ml-[8px] font-normal text-[14px] leading-[18px] text-[#919191]">
                          {data.writeDate}
                        </div>
                      </div>
                      <div className="flex flex-row row-span-2">
                        <div className="text-[14px] text-[#989898]">수정</div>
                        <span className="ml-[4px] text-[14px] text-[#989898]">|</span>
                        <div className="ml-[4px] text-[14px] text-[#989898]">삭제</div>
                      </div>
                      <div className="mt-[2px] w-[723px] h-auto font-normal text-[16px] leading-[21px] text-[#404040]">
                        {data.content}
                      </div>
                      <div className="flex flex-row ml-[853px] col-span-4 ">
                        <BoardWriteReplyHeart className="mt-[5px] ml-[13px]" />
                        <div className="ml-[6.03px] mt-[3px] font-normal text-[16px] leading-[21px] mb-[10px] text-[#898989]">
                          {data.likeCount}
                        </div>
                      </div>
                      <div className="col-span-3 ml-[28px] mt-[5px] w-[884px] border-[1px] border-[#BCBCBC]"></div>
                    </div>
                  </>
                ) : (
                  ''
                )}
              </div>
            </>
          ))}
          <div className="flex flex-row mt-[46px] mb-[66.62px] justify-center">
            <BoardScrollDown className="mr-[19.11px]" />
            <BoardScrollUp />
          </div>
        </div>
      </div>
    </>
  );
};

export default boardDetail;
