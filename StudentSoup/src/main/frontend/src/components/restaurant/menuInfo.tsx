/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-misused-promises */

import { ReactComponent as MenuHeart } from '../../img/MenuHeart.svg';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const menuInfo = (props: any) => {
  const state = useLocation<any>();
  const saveMemberId = sessionStorage.getItem('memberId');
  const [like, isLike] = useState<number>();
  const [heart, setHeart] = useState<boolean>();
  const [menuId, setMenuId] = useState<any>();
  const [click, setClick] = useState<boolean>();
  const restaurantNumber = state.state[0];
  const schoolName = state.state[1];
  const Arr = props.content;
  const url = `/restaurant/${restaurantNumber}/menu/like`;
  const handleHeartCount = async (e: any) => {
    const saveMenuId = e.target.id;
    setClick(!click);
    setMenuId(e.target.id);

    axios
      .post(url, {
        restaurantMenuId: saveMenuId,
        memberId: saveMemberId,
      })
      .then(res => {
        setHeart(res.data.like);
      })
      .catch(err => {
        console.error(err);
      });
    alert('임시 하트 카운트 저장');
    location.reload();
  };
  return (
    <>
      <div className="ml-[25px] mt-[10px] grid grid-cols-2">
        {Arr?.map((school: any) => (
          <div className="flex flex-row" id={school.restaurantMenuId} key={school.restaurantMenuId}>
            <div
              key={school.restaurantMenuId}
              className="w-[172px] h-[164px] rounded-[5px] bg-[#FF2] mt-[12px]"
            >
              <div className=" ml-[105px] mt-[5px] w-[58px] h-[27px] rounded-[15px] bg-[#FF611D]">
                <div
                  onClick={handleHeartCount}
                  id={school.restaurantMenuId}
                  className="flex flex-row"
                >
                  <MenuHeart id={school.restaurantMenuId} className="ml-[10px] mt-[7px]" />
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
    </>
  );
};

export default menuInfo;
