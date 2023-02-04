import { ReactComponent as RightIcon } from '../../img/icon_right.svg';
import { ReactComponent as LeftIcon } from '../../img/icon_left.svg';
import { ReactComponent as LeftFillNoneIcon } from '../../img/icon_left_fillnone.svg';
import { ReactComponent as RightFillNoneIcon } from '../../img/icon_right_fillnone.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ReviewStarView from '../restaurant/reviewStarView';

const MypageBoardReview = () => {
  const boardUrl = '/mypage/board';
  const reviewUrl = '/mypage/restaurantReview';
  const memberId = sessionStorage.getItem('memberId');

  const [selected, setSelected] = useState<number>(1);
  const [page, setPage] = useState<number>(0);
  const [clickPage, setClickPage] = useState<number>(1);
  const [board, setBoard] = useState<any[]>();
  const [totalBoard, setTotalBoard] = useState<number>();
  const [totalReview, setTotalReview] = useState<number>();
  const [totalPage, setTotalPage] = useState<number>();
  const [clickNextPage, setClickNextPage] = useState<number>(0);
  const [lastPage, isLastPage] = useState<boolean>();
  const [restaurantReivew, setRestaurantReivew] = useState<any[]>();

  useEffect(() => {
    axios
      .post(
        boardUrl,
        {
          memberId,
        },
        {
          params: {
            page,
          },
        },
      )
      .then(function (response) {
        setBoard(response.data.content);
        setTotalBoard(response.data.totalElements);
        setTotalPage(response.data.totalPages);
        isLastPage(response.data.last);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [page]);

  useEffect(() => {
    axios
      .post(reviewUrl, {
        memberId,
      })
      .then(function (response) {
        console.log(response.data.content.writeDate);
        setRestaurantReivew(response.data.content);
        setTotalReview(response.data.totalElements);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const setPageNumbers = [...Array(totalPage)].map((v, i) => i + 1);
  const setPageNumbersArr = [];

  for (let i = 0; i < setPageNumbers.length; i += 5) {
    setPageNumbersArr.push(setPageNumbers.slice(i, i + 5));
  }

  const handlePageNumberClick = (e: any, idx: any) => {
    setSelected(idx);
    setPage(idx - 1);
    setClickPage(idx);
  };

  return (
    <div className="flex flex-[9] w-full h-[150vh] z-[1] bg-zinc-100">
      <div className="w-full h-[820px] ml-[60px]">
        <div className="mt-[45px]">
          <span className="text-[24px] leading-[33px] text-[#262626] font-bold">게시글</span>
        </div>
        <div className="flex flex-col w-[962px] h-auto mt-[30px]">
          <div className="flex flex-row h-[50px] border-[1px] border-[#BCBCBC] rounded-[5px]">
            <div className="w-[50%] border-r-[1px] border-[#BCBCBC] rounded-l-[5px] bg-white items-center justify-center flex">
              게시글({totalBoard})
            </div>
            <div className="w-[50%] rounded-r-[5px] bg-white items-center justify-center flex">
              댓글({totalReview})
            </div>
          </div>
          <div className="w-[962px] h-[225px] flex flex-col mt-[25px]">
            <div className="w-full h-[4px] border-[1px] border-[#FF611D] bg-[#FF611D]"></div>
            <div className="flex flex-row mt-[18px]">
              <div className="w-[30px] h-[19px] text-[16px] leading-[22px] text-[#353535] ml-[50px]">
                제목
              </div>
              <div className="ml-[400px] mr-[143px] text-[#353535]">작성일</div>
              <div className="w-[65px] h-[19px] ml-[40px] text-[16px] leading-[22px] text-[#353535]">
                조회수
              </div>
              <div className="w-[63px] h-[19px] ml-[70px] text-[16px] leading-[22px] text-[#353535]">
                좋아요
              </div>
            </div>
            <div className="w-full h-[2px] border-[1px] border-[#FF611D] bg-[#FF611D] mt-[19px]"></div>
            {board?.map(board => (
              <div key={board.boardId} className="text-[14px]">
                <div className="h-[50px] px-[34px] flex items-center text-[#353535] border-b border-[#D9D9D9]">
                  <span className="w-[60%] truncate text-[#909090]">{board.title}</span>
                  <span className="w-[30%] truncate text-[#909090]">{board.writeDate}</span>
                  <span className="w-[20%] text-center text-[#909090]">{board.viewCount}</span>
                  <span className="w-[20%] text-center text-[#909090]">{board.likedCount}</span>
                </div>
              </div>
            ))}
            {board?.length === 0 && (
              <div className="w-full h-[164px] font-bold text-[20px] leading-[28px] text-[#353535] flex items-center justify-center">
                작성된 게시글이 없습니다.
              </div>
            )}
            <div className="w-full h-[2px] bg-[#BCBCBC]"></div>
            <div className="absolute right-[400px] top-[620px]">
              <div className="flex flex-row mb-[55px]">
                {clickPage === 1 ? (
                  <LeftFillNoneIcon className="ml-[234px] mt-[55.63px]" />
                ) : (
                  <LeftIcon
                    onClick={() => {
                      setSelected(selected - 1);
                      setPage(page - 1);
                      setClickPage(clickPage - 1);
                      if (page % 5 === 0) {
                        setClickNextPage(clickNextPage - 1);
                      }
                    }}
                    className="ml-[234px] mt-[55.63px] cursor-pointer"
                  />
                )}
                {setPageNumbersArr[clickNextPage].map((school: any) => (
                  <>
                    <div
                      id={school}
                      key={school}
                      className={
                        selected === school
                          ? 'ml-[9.5px] mt-[43px] w-[38px] h-[38px] border border-[#FF611D] rounded-full cursor-pointer font-bold text-[#FF611D]'
                          : 'ml-[9.5px] mt-[43px] w-[38px] h-[38px] border border-[#B4B4B4] rounded-full cursor-pointer font-normal text-[#B4B4B4]'
                      }
                      onClick={e => {
                        handlePageNumberClick(e, school);
                      }}
                    >
                      <div id={school} className="mt-[4px] text-[20px] text-center">
                        {school}
                      </div>
                    </div>
                  </>
                ))}
                {lastPage ? (
                  <RightFillNoneIcon className="relative left-[15px] top-[53.63px]" />
                ) : (
                  <RightIcon
                    onClick={() => {
                      setSelected(selected + 1);
                      setPage(page + 1);
                      setClickPage(clickPage + 1);
                      if (clickPage % 5 === 0) {
                        setClickNextPage(clickNextPage + 1);
                      }
                    }}
                    className="relative left-[15px] top-[53.63px] cursor-pointer"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[962px] mt-[220px]">
          <div className="text-[24px] leading-[33px] font-bold text-[#262626]">리뷰</div>
          <div className="flex flex-row items-center justify-end">
            <div>
              <select className="w-[191px] h-[35px] text-[#939393] text-[16px] fw-400 leading-[21px] pl-[3px] border-[1px] border-[#BCBCBC] rounded-[3px]">
                <option value="0">전체</option>
                <option value="1">오늘</option>
                <option value="2">한달</option>
                <option value="3">6개월</option>
                <option value="4">1년</option>
              </select>
            </div>
          </div>
          <div className="mt-[13px]">
            <div className="w-full h-[3px] border-[1px] border-[#BCBCBC] bg-[#BCBCBC]"></div>
            <div className="flex flex-col max-h-[450px]">
              {restaurantReivew?.map(restaurantReivew => (
                <>
                  <div className="flex flex-row my-[19px]">
                    <div className="w-[20%]">
                      <img
                        src={`/image/${restaurantReivew.imageName}`}
                        className="w-[189px] h-[141px] border border-[#DDDDDD] rounded-[10px]"
                      />
                    </div>
                    <div className="w-[60%] flex flex-col ml-[40px]">
                      <div className="flex flex-row">
                        <div>평점</div>
                        <ReviewStarView {...restaurantReivew} school={restaurantReivew} />
                      </div>
                      <div>{restaurantReivew.content}</div>
                    </div>
                    <div className="w-[20%] flex flex-col items-center justify-center">
                      <div>{restaurantReivew.writeDate}</div>
                      <button className="w-[105px] h-[35px] bg-[#FF611D] rounded-[5px] text-white">
                        수정하기
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="w-full h-[3px] border-[#BCBCBC] bg-[#BCBCBC]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypageBoardReview;
