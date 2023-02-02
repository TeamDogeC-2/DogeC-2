import axios from 'axios';
import React from 'react';
import MypageNavbar from '../common/mypageNavbar';

const boardWrite = () => {
  return (
    <>
      <MypageNavbar />
      <div className="flex flex-row mt-[103px] justify-center">
        <div className="mr-[295px] w-[296px] h-[60px] font-bold text-[24px] leading-[29px] flex items-center">
          게시글 쓰기
        </div>
        <select className="w-[165px] h-[46px] bg-[#FFFFFF] shadow-[2px_2px_6px_rgba(0,0,0,0.05)] border-[1px] rounded-[5px] text-[#A4A4A4] cursor-pointer focus:text-[#A4A4A4]">
          <option
            className="font-normal text-[16px] leading-[22px] flex items-center text-[#A4A4A4]"
            value="null"
          >
            학과 선택
          </option>
          <option value="1">학과 1</option>
          <option value="2">학과 2</option>
        </select>
        <select className="ml-[16px] w-[165px] h-[46px] bg-[#FFFFFF] shadow-[2px_2px_6px_rgba(0,0,0,0.05)] border-[1px] rounded-[5px] text-[#A4A4A4] cursor-pointer focus:text-[#A4A4A4]">
          <option value="null">전체</option>
          <option value="1">자유게시판</option>
          <option value="2">취업게시판</option>
          <option value="3">상담게시판</option>
          <option value="4">팁게시판</option>
        </select>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col w-[938px] h-auto bg-[#FFFFFF] border-[1px] shadow-[2px_2px_6px_rgba(0,0,0,0.05)]">
          <input
            placeholder="제목"
            type="text"
            className="w-[936px] h-[40px] resize-none border-[#C4C4C4] border-[1px]"
          ></input>
          <div className="w-[936px] h-[124px] bg-[#F0F0F0] border-x-[1px] border-[#C4C4C4]">
            <div className="ml-[26px] mt-[28px] w-[744px] h-[41px] font-normal text-[14px] leading-[26px] items-center text-[#6D6D6D]">
              <span>글 작성하기 이전, 상단에 있는 카테고리를 클릭하여 </span>
              <span className="underline underline-offset-2">
                주제에 맞는 카테고리를 선택하여 게시글을 작성
              </span>
              <span>해주시길 바랍니다. 건강한 게시판 운영을 위해 </span>
              <span className="underline underline-offset-2">
                불법사진,혹은 상대를 향한 명예훼손 혹은 폭언등에 대한 작성은 불가 및 이용이
                제한됩니다.
              </span>
              <td className="mt-[5px] underline underline-offset-2 font-semibold flex items-center text-[16px] leading-[26px] text-[#CF2424]">
                이용규칙 더보러가기
              </td>
            </div>
          </div>
          <textarea
            placeholder="내용"
            className="h-[374px] border-[1px] border-[#BCBCBC]"
          ></textarea>
          <div className="h-[93px] flex flex-row bg-[#F0F0F0] rounded-[1px] border-x-[1px] border-b-[1px] border-[#BCBCBC]">
            <div className="ml-[26px] mt-[37px] font-semibold text-[16px] leading-[26px] items-center text-[#6D6D6D]">
              사진첨부
            </div>
            <div className="ml-[12px] mt-[36px] w-[79px] h-[29px] border-[1px] border-[#FF611D] bg-[#FFFFFF] rounded-[5px]">
              <div className="ml-[6.5px] font-semibold text-[16px] leading-[26px] text-[#FF661D]">
                사진첨부
              </div>
            </div>
            <div className="mt-[37px] ml-[13px] font-normal text-[16px] leading-[26px] text-[#6D6D6D]">
              0/5
            </div>
            <div className="mt-[39px] ml-[15px] font-medium text-[16px] leading-[21px] text-[#9F9F9F]">
              사진은 최대 4MB 이하의 JPG, PNG, GIF 파일 5장까지 첨부 가능합니다.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-[17px] mb-[79px] justify-center">
        <div className="w-[469px] h-[67px] rounded-l-lg border-r-[0.5px] border-y-[1px] border-l-[1px] bg-[#FFFFFF] border-[#BCBCBC] shadow-[2px_2px_6px_rgba(0,0,0,0.05)] text-[#9F9F9F] font-semibold leading-[22px]">
          <div className="ml-[194px] mt-[22px]">취소하기</div>
        </div>
        <div className="w-[469px] h-[67px] rounded-r-lg border-r-[1px] border-y-[1px] bg-[#FFFFFF] border-[#BCBCBC] shadow-[2px_2px_6px_rgba(0,0,0,0.05)] text-[#FF611D] font-semibold leading-[22px]">
          <div className="ml-[194px] mt-[22px]">작성하기</div>
        </div>
      </div>
    </>
  );
};

export default boardWrite;
