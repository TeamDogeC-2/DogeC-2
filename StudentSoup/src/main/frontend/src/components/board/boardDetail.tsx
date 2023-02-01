import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';

const boardDetail = () => {
  const [setNestedReply, isSetNestedReply] = useState<boolean>(false);
  const [countIndex, setCountIndex] = useState();
  const BestArr = [0, 1, 2];
  const ArrTest = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const nestedReplyArr = [0, 1, 2, 3, 4, 5];

  return (
    <>
      <MypageNavbar />
      <div className="w-full h-[103px]"></div>
      <div className="flex flex-row justify-center">
        <div className="mt-[15px] w-[296px] h-[60px] w-[296px] h-[60px] font-bold leading-[29px] text-[24px] items-center text-[#262626]">
          취업 상담 게시판
        </div>
        <div className="ml-[428px] mt-[7px] w-[77px] h-[44px] border-[0.8px] border-[#929292] rounded-[22px] bg-[#FFFFFF]">
          <div className="ml-[22.06px] mt-[8.62px] font-normal text-[16px] flex items-center text-[#929292]">
            목록
          </div>
        </div>
        <Link to="/boardWrite">
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
            <div className="ml-[41px] mt-[35px] w-[356px] h-[16px] text-[20px] font-medium flex items-center text-[#252525]">
              취업하려는데 어떻게 시작해야 될까...?
            </div>
            <div className="mt-[35px] h-[16px] font-normal text-[20px] leading-[28px] flex items-center text-[#FF611D]">
              6
            </div>
          </div>
          <div className="flex flex-row w-[400px] h-[17px] ml-[41px] mt-[21px]">
            <div className="font-normal text-[14px] text-[#A8A8A8]">
              비둘기 | 2023.02.11. 11:40 | 조회 1123 |
            </div>
            <BoardWriteIconHeart className="ml-[6px] mt-[6.4px]" />
            <div className="ml-[5.11px] font-normal text-[14px] text-[#A8A8A8]">6</div>
          </div>
          <div className="ml-[28px] mt-[22px] w-[884px] border-[1px] border-[#BCBCBC] bg-[#BCBCBC] "></div>
          <div className="w-[856px] ml-[41px] mt-[34px] font-normal text-[16px] text-left leading-[26px] text-[#636363]">
            뭘 부터 해야할지 도저히 감이 안 잡혀.... 이럴 땐 어떻게 해야 좋을지 정말 감이 안잡히네요
            ㅜㅠㅜㅜㅠㅠ 이제 곧 4학년 돼서 뭔가라도 준비해놔야하는 상황인데 어쩌저젖우자우우느누웅
            어쩌구저쩌구구구구구구 ㅜㅠㅜㅜㅠㅠ 이제 곧 4학년 돼서 뭔가라도 준비해놔야하는
            상황인데준비해놔야하는 상황인데준비해놔야하는 상황인데준비해놔야하는
            상황인데준비해놔야하는 상황인데준비해놔야하는 상황인데
          </div>
          <button className="ml-[398px] mt-[34px] w-[139px] h-[56px] border-[1px] rounded-[20px] bg-[#FF611D]">
            <div className="flex flex-row">
              <BoardWriteWhiteHeart className="ml-[21px] mt-[7px]" />
              <div className="ml-[6px] mb-[10px] w-auto h-[20px] font-normal text-[20px] text-[#FFFFFF]">
                추천 <span>22</span>
              </div>
            </div>
          </button>
          <div className="flex flex-row ml-[30px]">
            <div className="w-[423px] h-[23px] leading-[22px] mt-[72px] font-medium text-[16px] text-[#404040]">
              88개의 댓글
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
          {BestArr.map(data => (
            <>
              <div className="mt-[25px] grid grid-cols-[74px_60px_720px_100px]">
                <div className="row-span-2 ml-[38px] w-[40px] h-[40px] border-[1px] rounded-full bg-[#D9D9D9]"></div>
                <div className="row-span-2 ml-[18px] h-[23px] font-semibold text-[16px] leading-[22px] text-[#FF611D]">
                  BEST
                </div>
                <div className="flex flex-row">
                  <div className="h-[23px] ml-[2px] font-normal text-[16px] leading-[22px] text-[#404040]">
                    냠냠쿠키
                  </div>
                  <div className="ml-[8px] font-normal text-[14px] leading-[18px] text-[#919191]">
                    2023.02.11 11:50
                  </div>
                </div>
                <div className="flex flex-row ml-[3px] row-span-2">
                  <div className="text-[14px] text-[#989898]">수정</div>
                  <span className="ml-[4px] text-[14px] text-[#989898]">|</span>
                  <div className="ml-[4px] text-[14px] text-[#989898]">삭제</div>
                </div>
                <div className="ml-[2px] mt-[2px] w-[723px] h-auto font-normal text-[16px] leading-[21px] text-[#404040]">
                  곧 졸업 예정자인 사람으로써 조언을 하자면졸업 예정자인 사람으로써 조언을 졸업
                  예정자인 사람으로써 조언을 하자면졸업 예정자인 사람으로써 조언을곧 졸업 예정자인
                  사람으로써 조언을 하자면졸업 예정자인 사람으로써 조언을 졸업 예정자인 사람으로써
                  조언을 하자면졸업 예정자인 사람으로써 조언을을 하자면졸업 예정자인 사람으로써
                  조언을 졸업 예정자인 사람으로써 조언을 하자면졸업 예정자인 사람으로써 조언을을
                  하자면졸업 예정자인 사람으로써 조언을 졸업 예정자인 사람으로써 조언을 하자면졸업
                  예정자인 사람으로써 조언을을 하자면졸업 예정자인 사람으로써 조언을 졸업 예정자인
                  사람으로써 조언을 하자면졸업 예정자인 사람으로써 조언을을 하자면졸업 예정자인
                  사람으로써 조언을 졸업 예정자인 사람으로써 조언을 하자면졸업 예정자인 사람으로써
                  조언을을 하자면졸업 예정자인 사람으로써 조언을 졸업 예정자인 사람으로써 조언을
                  하자면졸업 예정자인 사람으로써 조언을을 하자면졸업 예정자인 사람으로써 조언을 졸업
                </div>
                <div className="flex flex-row ml-[853px] col-span-4 ">
                  <BoardWriteReplyHeart className="mt-[5px] ml-[13px]" />
                  <div className="ml-[6.03px] font-normal text-[16px] leading-[21px] text-[#898989]">
                    14
                  </div>
                </div>
                <div className="col-span-3 ml-[28px] mt-[5px] w-[884px] border-[1px] border-[#BCBCBC]"></div>
              </div>
            </>
          ))}
          {ArrTest.map(data => (
            <>
              <div key={data} className="mt-[25px] grid grid-cols-[96px_minmax(720px,_1fr)_100px]">
                <div className="ml-[38px] w-[40px] h-[40px] border-[1px] rounded-full bg-[#D9D9D9] row-span-2"></div>
                <div className="flex flex-row">
                  <div className="h-[23px] font-normal text-[16px] leading-[22px] text-[#404040]">
                    냠냠쿠키
                  </div>
                  <div className="ml-[8px] font-normal text-[14px] leading-[18px] text-[#919191]">
                    2023.02.11 11:50
                  </div>
                </div>
                <div className="flex flex-row ml-[18px]">
                  <div className="text-[14px] text-[#989898]">수정</div>
                  <span className="ml-[4px] text-[14px] text-[#989898]">|</span>
                  <div className="ml-[4px] text-[14px] text-[#989898]">삭제</div>
                </div>
                <div className="col-span-2 mt-[2px] w-[723px] h-auto font-normal text-[16px] leading-[21px] text-[#404040]">
                  곧 졸업 예정자인 사람으로써 조언을 하자면졸업 예정자인 사람으로써 조언을
                  하자면졸업 예정자인 사람으로써 조언을 하자면졸업 예정자인 사람으로써 조언을
                  하자면졸업 예정자인 사람으로써 조언을 하자면졸업 예정자인 사람으로써 조언을
                  하자면졸업 예정자인 사람으로써 조언을 하자면졸업 예정자인 사람으로써 조언을정자인
                  사람으로써 조언을 하자면졸업 예정자인 사람으로써 조언을 하자면졸업 예정자인
                  사람으로써 조언을 하자면졸업 예정자인 사람으로써 조언을 하자면졸업 예정자인
                  사람으로써 조언을 하자면졸업 예정자인 사람으로써 조언을
                </div>
                <div className="flex flex-row col-span-3">
                  <div className="ml-[96px] mt-[10px] font-normal text-[13px] leading-[17px] text-[#404040]">
                    답글작성
                  </div>
                  <BoardWriteReplyHeart className="ml-[719px] mt-[5px]" />
                  <div className="ml-[6.03px] font-normal text-[16px] leading-[21px] text-[#898989]">
                    14
                  </div>
                </div>
                <div className="col-span-3 ml-[28px] mt-[10px] w-[884px] border-[1px] border-[#BCBCBC]"></div>
              </div>
            </>
          ))}

          {nestedReplyArr.map(data => (
            <>
              <div className="mt-[25px] grid grid-cols-[74px_60px_720px_100px]">
                <BoardReplyIcon className="row-span-2 ml-[38px]" />
                <div className="row-span-2 w-[40px] h-[40px] border-[1px] rounded-full bg-[#D9D9D9]"></div>
                <div className="flex flex-row">
                  <div className="h-[23px] font-normal text-[16px] leading-[22px] text-[#404040]">
                    냠냠쿠키
                  </div>
                  <div className="ml-[8px] font-normal text-[14px] leading-[18px] text-[#919191]">
                    2023.02.11 11:50
                  </div>
                </div>
                <div className="flex flex-row row-span-2">
                  <div className="text-[14px] text-[#989898]">수정</div>
                  <span className="ml-[4px] text-[14px] text-[#989898]">|</span>
                  <div className="ml-[4px] text-[14px] text-[#989898]">삭제</div>
                </div>
                <div className="mt-[2px] w-[723px] h-auto font-normal text-[16px] leading-[21px] text-[#404040]">
                  곧 졸업 예정자인 사람으로써 조언을 하자면졸업 예정자인 사람으로써 조언을 졸업
                  예정자인 사람으로써 조언을 하자면졸업 예정자인 사람으로써 조언을
                </div>
                <div className="flex flex-row ml-[853px] col-span-4 ">
                  <BoardWriteReplyHeart className="mt-[5px] ml-[13px]" />
                  <div className="ml-[6.03px] font-normal text-[16px] leading-[21px] text-[#898989]">
                    14
                  </div>
                </div>
                <div className="col-span-3 ml-[28px] mt-[5px] w-[884px] border-[1px] border-[#BCBCBC]"></div>
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
