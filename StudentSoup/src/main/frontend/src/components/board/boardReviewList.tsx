import React, { useState } from 'react';
import { ReactComponent as BoardWriteReplyHeart } from '../../img/BoardWriteReplyHeart.svg';
import { ReactComponent as BoardReplyIcon } from '../../img/boardReplyIcon.svg';
import axios from 'axios';

const boardReviewList = (data: any) => {
  const [reply, setReply] = useState<number>(0);
  const [level, setLevel] = useState<number>(0);
  const [findId, setFindId] = useState<number>();
  const saveMemberId = sessionStorage.getItem('memberId');
  const [rereplyTextValue, setReReplyTextValue] = useState<string>('');
  const handleSetContentValue = (e: any) => {
    setReReplyTextValue(e.target.value);
  };
  const handleReReply = (e: any) => {
    axios
      .put('/boardReply', {
        boardId: 192,
        memberId: saveMemberId,
        content: rereplyTextValue,
        level: 1,
        seq: reply,
      })
      .then(res => {
        alert('성공');
        location.reload();
      })
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <>
      <div key={data.boardReplyId} className="grid grid-cols-[96px_minmax(720px,_1fr)_100px]">
        {data.seq && data.level === 0 ? (
          <>
            <div
              key={data.boardReplyId}
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
              {findId === data.boardReplyId ? (
                <button
                  id={data.boardReplyId}
                  onClick={() => {
                    setFindId(0);
                    setReply(0);
                    setLevel(0);
                    setReReplyTextValue('');
                  }}
                  className="ml-[96px] mt-[10px] font-normal text-[13px] leading-[17px] text-[#404040]"
                >
                  답글작성 취소
                </button>
              ) : (
                <button
                  id={data.boardReplyId}
                  value={data.seq}
                  onClick={() => {
                    setFindId(data.boardReplyId);
                    setReply(data.seq);
                    setLevel(1);
                  }}
                  className="ml-[96px] mt-[10px] font-normal text-[13px] leading-[17px] text-[#404040]"
                >
                  답글작성
                </button>
              )}
              {findId === data.boardReplyId ? (
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
            {findId === data.boardReplyId && (
              <>
                <textarea
                  onChange={e => {
                    handleSetContentValue(e);
                  }}
                  placeholder="댓글을 입력해주세요."
                  className="ml-[28px] mt-[16px] w-[834px] h-[50px] resize-y border-[1px] rounded-[5px] border-[#C4C4C4]"
                ></textarea>
                <button
                  onClick={handleReReply}
                  className="relative left-[760px] mt-[16px] ml-[10px] w-[50px] h-[50px] bg-[#FF611D] rounded-[5px] text-[16px] font-normal text-[#FFFFFF]"
                >
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
              key={data.boardReplyId}
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
  );
};

export default boardReviewList;
