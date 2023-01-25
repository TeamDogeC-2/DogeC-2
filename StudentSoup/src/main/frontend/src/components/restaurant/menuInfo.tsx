/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { ReactComponent as MenuHeart } from '../../img/MenuHeart.svg';
import { ReactComponent as MenuHeartactive } from '../../img/MenuHeartactive.svg';
import { ReactComponent as MoreInfo } from '../../img/moreicon.svg';

const menuInfo = () => {
  const state = useLocation<any>();
  const [likeCount, setlikeCount] = useState<number>();
  const restaurantNumber = state.state[0];
  const saveMemberId = sessionStorage.getItem('memberId');
  const url = `/restaurant/${restaurantNumber}/menus`;
  const [show, setShow] = useState<any>();
  const [size, setSize] = useState<number>(4);
  const [click, setClick] = useState<number>(0);
  const [totalsize, setTotalSize] = useState<any>();
  const [numbersize, setNumberSize] = useState<any>();
  useEffect(() => {
    axios
      .post(
        url,
        {
          restaurantId: restaurantNumber,
          memberId: saveMemberId,
        },
        {
          params: {
            size,
          },
        },
      )
      .then(res => {
        setNumberSize(res.data.numberOfElements);
        setTotalSize(res.data.totalElements);
        setShow(res.data.content);
      })
      .catch(err => {
        console.error(err);
      });
  }, [likeCount, size]);

  const handleHeartCount = async (e: any) => {
    const saveMenuId = e.target.id;
    if (!saveMemberId) {
      alert('로그인후 이용 가능한 기능입니다.');
    } else {
      await axios
        .post(`/restaurant/${restaurantNumber}/menu/like`, {
          restaurantMenuId: saveMenuId,
          memberId: saveMemberId,
        })
        .then(res => {
          setlikeCount(res.data.data.likedCount);
        });
    }

    // const findIndex = show.findIndex((e: any) => e.restaurantMenuId === 75);
    // /* id값으로 인덱스를 찾는 것까지는 동일하다 */

    // const copiedshow = [...show];
    // /* 새로운 변수를 선언해 기존의 배열을 복사하는 과정을 거쳐야 한다.
    // useState로 만든 변수는 set함수로만 값을 변경할 수 있기 때문이다. */

    // copiedshow[findIndex].likedCount = likeCount;
    // /* 복사한 배열에 수정할 값을 할당하고 */

    // setShow(copiedshow);
    /* setItems를 사용해 수정한 배열로 items를 업데이트 한다. */

    show.map((data: any) => {
      if (data.restaurantMenuId === saveMenuId) {
        data.likedCount = likeCount;
      }
    });
  };
  const handleClickButton = (e: any) => {
    setClick(click + 1);
    setSize(size + 4);
  };
  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener('scroll', handleScroll);
    return () => {
      // scroll event listener 해제
      window.removeEventListener('scroll', handleScroll);
    };
  });
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && click !== 0) {
      setClick(click + 1);
      setSize(size + 4);
    }
  };
  return (
    <>
      <div className="ml-[25px] mt-[10px] grid grid-cols-2">
        {show?.map((school: any) => (
          <div className="flex flex-row" id={school.restaurantMenuId} key={school.restaurantMenuId}>
            <div
              id={school.restaurantMenuId}
              key={school.restaurantMenuId}
              className="w-[172px] h-[164px] rounded-[5px] bg-[#FF2] mt-[12px] "
            >
              <div
                onClick={handleHeartCount}
                id={school.restaurantMenuId}
                className=" ml-[105px] mt-[5px] w-[58px] h-[27px] rounded-[15px] bg-[#FF611D] cursor-pointer z-[55]"
              >
                <div id={school.restaurantMenuId} className="flex flex-row ">
                  {school.like ? (
                    <svg
                      id={school.restaurantMenuId}
                      key={school.restaurantMenuId}
                      className="ml-[10px] mt-[7px]"
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.26787 1C2.46308 1 1 2.44845 1 4.23519C1 5.67763 1.57166 9.10086 7.20079 12.5619C7.40464 12.6873 7.66685 12.6873 7.8707 12.5619C13.4998 9.10086 14.0715 5.67763 14.0715 4.23519C14.0715 2.44845 12.6084 1 10.8036 1C8.99884 1 7.53575 2.96072 7.53575 2.96072C7.53575 2.96072 6.07267 1 4.26787 1Z"
                        stroke="white"
                        strokeWidth="1.30715"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      id={school.restaurantMenuId}
                      key={school.restaurantMenuId}
                      className="ml-[10px] mt-[7px]"
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.26787 1C2.46308 1 1 2.44845 1 4.23519C1 5.67763 1.57166 9.10086 7.20079 12.5619C7.40464 12.6873 7.66685 12.6873 7.8707 12.5619C13.4998 9.10086 14.0715 5.67763 14.0715 4.23519C14.0715 2.44845 12.6084 1 10.8036 1C8.99884 1 7.53575 2.96072 7.53575 2.96072C7.53575 2.96072 6.07267 1 4.26787 1Z"
                        stroke="white"
                        strokeWidth="1.30715"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}

                  <div
                    id={school.restaurantMenuId}
                    className="ml-[2.93px] mt-[2.4px] font-[400] text-[16px] leading-[22px] flex items-center text-[#FFFFFF]"
                  >
                    {school.likedCount}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="w-[157px] h-[16px] ml-[14px] mt-[30px] text-[20px] font-semibold leading-[28px] text-[#515151] leading-[28px] flex items-center">
                {school.restaurantMenuName}
              </div>
              <div className="ml-[14px] mt-[108px] font-bold text-[20px] leading-[28px] text-[#FF611D] flex items-center">
                {school.cost}원
              </div>
            </div>
          </div>
        ))}
        <div className=" mt-[25px] w-[687px] border-[1px] border-[#DEDEDE] bg-[#DEDEDE]"></div>
      </div>
      {click === 0 && totalsize > 4 ? (
        <div
          onClick={handleClickButton}
          className="mt-[14px] mb-[20px] ml-[649px] font-[400] text-[16px] leading-[22px] flex items-center cursor-pointer"
        >
          더보기
          <div className="ml-[5px] w-[14px] h-[14px] rounded-full border border-[#FF611D] bg-[#FF611D]">
            <MoreInfo className="ml-[2.22px] mt-[3.5px]" />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default menuInfo;
