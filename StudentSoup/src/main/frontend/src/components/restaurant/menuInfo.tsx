import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MenuItem from './menuItem';
import { ReactComponent as MoreInfo } from '../../img/moreicon.svg';

const menuInfo = () => {
  const state = useLocation<any>();
  const restaurantNumber = state.state[0];
  const saveMemberId = sessionStorage.getItem('memberId');
  const url = `/restaurant/${restaurantNumber}/menus`;
  const [MenuList, setMenuList] = useState<any>();
  const [size, setSize] = useState<number>(4);
  const [moreButtonClick, setMoreButtonClick] = useState<number>(0);
  const [totalsize, setTotalSize] = useState<any>();

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
        setTotalSize(res.data.totalElements);
        setMenuList(res.data.content);
      })
      .catch(err => {
        console.error(err);
      });
  }, [size]);

  const handleClickButton = () => {
    setMoreButtonClick(moreButtonClick + 1);
    setSize(size + 4);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && moreButtonClick !== 0) {
      setMoreButtonClick(moreButtonClick + 1);
      setSize(size + 4);
    }
  };
  return (
    <>
      <div className="ml-[25px] mt-[10px] grid grid-cols-2">
        {MenuList?.map((school: any) => (
          <div className="flex flex-row" id={school.restaurantMenuId} key={school.restaurantMenuId}>
            <div
              id={school.restaurantMenuId}
              className="w-[172px] h-[164px] rounded-[5px] bg-[#FF2] mt-[12px] "
            >
              <MenuItem {...school} school={school} />
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
      {moreButtonClick === 0 && totalsize > 4 ? (
        <div
          onClick={handleClickButton}
          className="mt-[14px] mb-[20px] ml-[649px] font-[400] text-[16px] leading-[22px] flex items-center cursor-pointer"
        >
          더보기
          <div className="w-[14px] h-[14px] rounded-full border border-[#FF611D] bg-[#FF611D]">
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
