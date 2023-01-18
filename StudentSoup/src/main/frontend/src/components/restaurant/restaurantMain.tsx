import React from "react";
import { useState } from "react"
import { useHistory } from "react-router-dom";
import cn from "clsx";
import Filter from "../../img/filter.svg";
import Map from "../../img/map.svg";
import ViewCount from "../../img/viewCount.svg";
import Star from "../../img/star.svg";
import Like from "../../img/like.svg"


interface Category {
    id: string;
    name: string;
}

const RestaurantMain = () => {
    const history = useHistory();

    return (
        <div className="pt-[60px] bg-[#1E1E1E]/5">
            {/**/}
            <div className="w-[1039px] mx-auto">
                <div className="mb-[31px] flex justify-between">
                    <div className="font-semibold">
                        <span className="pr-2 text-[32px] text-[#FF611D]">'청운대학교'</span>
                        <span className="text-[32px] text-[#5A5A5A]">근처 인기 맛집 검색어</span>
                    </div>
                    <button
                        id='filter-button'
                        className="w-[110px] h-[39px] flex justify-center items-center gap-x-1 rounded-[23.5px] text-[20px] font-semibold text-[#FF611D] bg-white">
                            <img src={Filter} alt="" className=""/>
                            필터
                    </button>
                </div>
                <div className="w-[1039px] pb-[47px] mb-[58px] mx-auto rounded-[10px] drop-shadow-md bg-white">
                    <div className="w-[810px] mx-auto py-[31px] flex flex-wrap gap-x-[20px] gap-y-[32px]">
                        {/*TODO: 컴포넌트 반복문 리팩토링 할 예정 / 활성된 카테고리만 주황색바탕 흰글씨로 class 추가*/}
                        <input
                            type='button'
                            className={cn(
                                "px-[19px] py-[7px] border border-[#FF611D] rounded-[38px] cursor-pointer text-[#808080] bg-white",
                                "accent:text-white accent:bg-[#FF611D]",
                              )}
                            onClick={() => {
                            //나중에 카테고리별 정렬 기능 추가
                            }}
                            value='전체보기'
                        />
                        <input
                            type='button'
                            className="px-[19px] py-[7px] border border-[#FF611D] rounded-[38px] cursor-pointer text-[#808080] bg-white"
                            onClick={() => {
                            }}
                            value='한식'
                        />
                        <input
                            type='button'
                            className="px-[19px] py-[7px] border border-[#FF611D] rounded-[38px] cursor-pointer text-[#808080] bg-white"
                            onClick={() => {
                            }}
                            value='중식'
                        />
                        <input
                            type='button'
                            className="px-[19px] py-[7px] border border-[#FF611D] rounded-[38px] cursor-pointer text-[#808080] bg-white"
                            onClick={() => {
                            }}
                            value='양식'
                        />
                        <input
                            type='button'
                            className="px-[19px] py-[7px] border border-[#FF611D] rounded-[38px] cursor-pointer text-[#808080] bg-white"
                            onClick={() => {
                            }}
                            value='일식'
                        />
                        <input
                            type='button'
                            className="px-[19px] py-[7px] border border-[#FF611D] rounded-[38px] cursor-pointer text-[#808080] bg-white"
                            onClick={() => {
                            }}
                            value='세계음식'
                        />
                        <input
                            type='button'
                            className="px-[19px] py-[7px] border border-[#FF611D] rounded-[38px] cursor-pointer text-[#808080] bg-white"
                            onClick={() => {
                            }}
                            value='카페'
                        />
                        <input
                            type='button'
                            className="px-[19px] py-[7px] border border-[#FF611D] rounded-[38px] cursor-pointer text-[#808080] bg-white"
                            onClick={() => {
                            }}
                            value='브런치'
                        />
                        <input
                            type='button'
                            className="px-[19px] py-[7px] border border-[#FF611D] rounded-[38px] cursor-pointer text-[#808080] bg-white"
                            onClick={() => {
                            }}
                            value='주점'
                        />
                        <input
                            type='button'
                            className="px-[19px] py-[7px] border border-[#FF611D] rounded-[38px] cursor-pointer text-[#808080] bg-white"
                            onClick={() => {
                            }}
                            value='패스트푸드'
                        />
                        <input
                            type='button'
                            className="px-[19px] py-[7px] border border-[#FF611D] rounded-[38px] cursor-pointer text-[#808080] bg-white"
                            onClick={() => {
                            }}
                            value='기타'
                        />
                    </div>
                    <div className="w-[810px] mx-auto mb-[16px] flex justify-between">
                        <div className="text-[18px] text-[#262626]">청운대학교 근처 맛집(
                            <span className="text-[18px] text-[#FF611D]">234</span>
                            곳)
                        </div>
                        <div>
                            <span>현위치: </span>
                            <span>위치없음</span>
                        </div>
                    </div>
                    <div className="w-[810px] h-[247px] mx-auto mb-[44px] relative rounded-[10px] bg-gray-100">
                        지도
                        <button className="px-[17px] py-[8px] right-[22px] bottom-[28px] absolute flex gap-x-2 items-center rounded-[50px] drop-shadow-md text-bold text-white bg-[#FF611D]">
                            <img src={Map} alt="" className=""/>
                            지도 자세히
                        </button>
                    </div>
                    <div className="w-[810px] mx-auto grid grid-cols-2 gap-x-[46px] justify-center place-content-stretch">
                        <div> {/*onClick={}>*/}
                            <div className="w-[382px] h-[225px] rounded-[10px] bg-gray-100">
                                가게이미지
                            </div>
                            <div className="mt-[20px] text-[28px] text-[#262626]">
                                가게 이름 적는 곳 
                            
                                <span className="px-2 text-[28px] text-[#FF611D]">4.3</span>
                                <div className="text-[20px] text-[#696969]">
                                    제물포역/양식, 파스타, 피자, 리조또
                                </div>
                                <div className="flex gap-x-1 items-center text-[20px] text-[#262626]">
                                    <span>
                                        <img src={ViewCount} alt="" className=""/>
                                        조회수
                                    </span>
                                    <span>
                                        <img src={Star} alt="" className=""/>
                                        별점
                                    </span>
                                    <span>
                                        <img src={Like} alt="" className=""/>
                                        좋아요수
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/*임시로 두 번 반복 -> 나중에 반복문 작성해줄 예정*/}
                        <div> {/*onClick={}>*/}
                            <div className="w-[382px] h-[225px] rounded-[10px] bg-gray-100">
                                가게이미지
                            </div>
                            <div className="mt-[20px] text-[28px] text-[#262626]">
                                가게 이름 적는 곳 
                            
                                <span className="px-2 text-[28px] text-[#FF611D]">4.3</span>
                                <div className="text-[20px] text-[#696969]">
                                    제물포역/양식, 파스타, 피자, 리조또
                                </div>
                                <div className="flex gap-x-1 items-center text-[16px] text-[#262626]">
                                    <span>
                                        <img src={ViewCount} alt="" className=""/>
                                        조회수
                                    </span>
                                    <span>
                                        <img src={Star} alt="" className=""/>
                                        별점
                                    </span>
                                    <span>
                                        <img src={Like} alt="" className=""/>
                                        좋아요수
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="w-[807px] h-[60px] mt-[70px] mx-[116px] rounded-[5px] text-[16px] text-white bg-[#FF611D]">검색 결과 더보기</button>
                </div>
            </div>
        </div>
    );
}

export default RestaurantMain;