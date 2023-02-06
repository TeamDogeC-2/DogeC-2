import axios from 'axios';
import React, { useState } from 'react';
import { ReactComponent as BoardWriteReplyHeart } from '../../img/BoardWriteReplyHeart.svg';

const boardBestReplyHeart = (data: any) => {
  const [replyLikeCount, setReplyLikeCount] = useState<number>();
  const [replyLike, isReplyLike] = useState<boolean>(data.like);
  const [like, isLike] = useState<boolean>(false);
  const saveMemberId = sessionStorage.getItem('memberId');
  const saveMemberName = sessionStorage.getItem('nickname');
  const handleReplyLikeCount = (e: any) => {
    const boardReplyId = e.target.id;
    axios
      .post(`/boardReply/${boardReplyId}/${saveMemberId}/like`)
      .then(res => {
        setReplyLikeCount(res.data.data.likeCount);
        isReplyLike(res.data.data.like);
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
    isReplyLike(!replyLike);
    isLike(!like);
  };

  const handleDeleteReply = (e: any) => {
    const boardReplyId = e.target.id;
    console.log(boardReplyId);
    console.log(saveMemberId);
    if (confirm('정말로 댓글을 삭제하시겟습니까?')) {
      axios
        .delete(`/boardReply/${boardReplyId}/${saveMemberId}`)
        .then(res => {
          console.log(res.data);
          alert('댓글이 삭제되었습니다.');
          location.reload();
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      /* empty */
    }
  };
  return (
    <>
      <div key={data.boardReplyId} className="grid grid-cols-[74px_60px_720px_100px]">
        {data.memberProfileImageName ? (
          <img
            src={`/image/${data.memberProfileImageName}`}
            className="row-span-2 ml-[38px] mt-[20px] w-[40px] h-[40px] border-[1px] rounded-full bg-[#D9D9D9]"
          />
        ) : (
          <div className="row-span-2 ml-[38px] mt-[20px] w-[40px] h-[40px] border-[1px] rounded-full bg-[#D9D9D9]"></div>
        )}

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
          {saveMemberName === data.nickname ? (
            <>
              {data.active === 'N' ? (
                <></>
              ) : (
                <>
                  <div className="text-[14px] text-[#989898]">수정</div>
                  <span className="ml-[4px] text-[14px] text-[#989898]">|</span>
                  <div
                    onClick={handleDeleteReply}
                    id={data.boardReplyId}
                    className="ml-[4px] text-[14px] text-[#989898] cursor-pointer"
                  >
                    삭제
                  </div>
                </>
              )}
            </>
          ) : (
            ''
          )}
        </div>
        <div className="ml-[2px] mt-[2px] w-[723px] h-auto font-normal text-[16px] leading-[21px] text-[#404040]">
          {data.content}
        </div>
        <div className="flex flex-row ml-[853px] col-span-4 ">
          {data.active === 'N' ? (
            <></>
          ) : (
            <>
              {replyLike ? (
                <svg
                  id={data.boardReplyId}
                  onClick={handleReplyLikeCount}
                  className="mt-[2px] ml-[13px]"
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="#FF611D"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id={data.boardReplyId}
                    d="M4.49271 1C2.56374 1 1 2.5481 1 4.45778C1 5.99947 1.61099 9.65822 7.62742 13.3574C7.8453 13.4914 8.12555 13.4914 8.34343 13.3574C14.3598 9.65822 14.9708 5.99947 14.9708 4.45778C14.9708 2.5481 13.4071 1 11.4781 1C9.54918 1 7.98542 3.09563 7.98542 3.09563C7.98542 3.09563 6.42168 1 4.49271 1Z"
                    stroke="#FF661D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  id={data.boardReplyId}
                  onClick={handleReplyLikeCount}
                  className="mt-[2px] ml-[13px]"
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id={data.boardReplyId}
                    d="M4.49271 1C2.56374 1 1 2.5481 1 4.45778C1 5.99947 1.61099 9.65822 7.62742 13.3574C7.8453 13.4914 8.12555 13.4914 8.34343 13.3574C14.3598 9.65822 14.9708 5.99947 14.9708 4.45778C14.9708 2.5481 13.4071 1 11.4781 1C9.54918 1 7.98542 3.09563 7.98542 3.09563C7.98542 3.09563 6.42168 1 4.49271 1Z"
                    stroke="#898989"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <div className="ml-[6.03px] font-normal text-[16px] leading-[21px] text-[#898989]">
                {like ? replyLikeCount : data.likeCount}
              </div>
            </>
          )}
        </div>
        <div className="col-span-3 ml-[28px] mt-[5px] w-[884px] border-[1px] border-[#BCBCBC]"></div>
      </div>
    </>
  );
};

export default boardBestReplyHeart;
