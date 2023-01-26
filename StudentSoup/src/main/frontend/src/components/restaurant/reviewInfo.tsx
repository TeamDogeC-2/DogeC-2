import React, { useState, useEffect } from 'react';
import { ReactComponent as SmallStar } from '../../img/reviewSmallStar.svg';
import { ReactComponent as MoreInfo } from '../../img/moreicon.svg';
import { ReactComponent as ReviewEdit } from '../../img/reviewedit.svg';
import { ReactComponent as ReviewWriteStar } from '../../img/reviewWriteStar.svg';
import cn from 'clsx';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const review = (props: any) => {
  const name = props.name;
  const totalStar = props.starLiked;
  const state = useLocation<any>();
  const restaurantNumber = state.state[0];
  const saveMemberId = sessionStorage.getItem('memberId');
  const url = `/restaurant/${restaurantNumber}/reviews`;
  const AVR_RATE = totalStar;
  const STAR_IDX_ARR = ['first', 'second', 'third', 'fourth', 'last'];
  const [starArr, setStarArr] = useState([0, 0, 0, 0, 0]);
  const [click, setClick] = useState<any>(2);
  const [reviewclick, isReviewClick] = useState<boolean>(false);
  const clickPage = (e: any) => {
    setClick(e);
  };
  const reviewButtonClick = () => {
    isReviewClick(!reviewclick);
    if (reviewclick) {
      if (confirm('게시글 작성을 취소하시겠습니까? (작성중이던 글은 삭제됩니다.)')) {
        isReviewClick(!reviewclick);
      } else {
        isReviewClick(reviewclick);
      }
    }
  };
  const calcStarRates = () => {
    const tempStarRatesArr = [0, 0, 0, 0, 0];
    let starVerScore = (AVR_RATE * 120) / 5;
    let idx = 0;
    while (starVerScore > 24) {
      tempStarRatesArr[idx] = 24;
      idx += 1;
      starVerScore -= 24;
    }
    tempStarRatesArr[idx] = starVerScore;
    return tempStarRatesArr;
  };
  useEffect(() => {
    setStarArr(calcStarRates);
  }, []);
  const [set, isSet] = useState<any>();
  useEffect(() => {
    axios
      .post(url, {
        restaurantId: restaurantNumber,
        memberId: saveMemberId,
      })
      .then(res => {
        isSet(res.data.content);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  const [textValue, setTextValue] = useState<any>('');
  const [count, setCount] = useState<number>(0);
  const [maxCount, setMaxCount] = useState<number>(400);
  const handleSetValue = (e: any) => {
    setTextValue(e.target.value);
    setCount(e.target.value.length);
    setMaxCount(maxCount);
  };

  const cancelReviewValue = (e: any) => {
    if (confirm('게시글 작성을 취소하시겠습니까? (작성중이던 글은 삭제됩니다.)')) {
      isReviewClick(!reviewclick);
    } else {
      isReviewClick(reviewclick);
    }
  };
  const handleReviewValue = (e: any) => {
    if (count < 10) {
      alert('10자 이상 입력해야 합니다.');
    } else {
      isReviewClick(!reviewclick);
    }
  };
  return (
    <>
      <div className="flex flex-row">
        <div className="ml-[28px] mt-[25px] w-[181px] h-[16px] font-bold text-[24px] leading-[33px] flex items-center">
          {name}
        </div>
        {STAR_IDX_ARR.map((item, idx) => {
          return (
            <span
              className="flex inline-flex items-center ml-[1px] mt-[12.4px]"
              key={`${item}_${idx}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="22px"
                viewBox="0 0 24 22"
                fill="#cacaca"
              >
                <clipPath id={`${item}StarClip`}>
                  <rect width={`${starArr[idx]}`} height="22" />
                </clipPath>
                <path
                  id={`${item}Star`}
                  d="M18.4751 13.8079C18.1745 14.0926 18.0364 14.5044 18.1048 14.9083L19.1366 20.4899C19.2236 20.963 19.0194 21.4417 18.6143 21.7151C18.2174 21.9988 17.6894 22.0328 17.2565 21.8059L12.1163 19.1853C11.9375 19.0922 11.7391 19.0423 11.536 19.0367H11.2215C11.1124 19.0525 11.0056 19.0866 10.9081 19.1388L5.76676 21.7719C5.51259 21.8967 5.22477 21.9409 4.94275 21.8967C4.25569 21.7696 3.79726 21.1298 3.90984 20.4547L4.94275 14.8731C5.01123 14.4659 4.87312 14.0518 4.57253 13.7625L0.381686 9.79185C0.0311914 9.45945 -0.0906691 8.96029 0.0694904 8.5099C0.225008 8.06065 0.621925 7.73279 1.10124 7.65905L6.86931 6.84109C7.30801 6.79685 7.69332 6.53592 7.89062 6.1502L10.4323 1.05643C10.4926 0.942983 10.5704 0.838612 10.6644 0.750123L10.7688 0.67071C10.8234 0.611718 10.8861 0.562936 10.9557 0.523229L11.0822 0.47785L11.2795 0.398438H11.7681C12.2045 0.442682 12.5886 0.697938 12.7894 1.07912L15.3647 6.1502C15.5504 6.52117 15.9114 6.7787 16.328 6.84109L22.0961 7.65905C22.5835 7.72712 22.9909 8.05611 23.1522 8.5099C23.3042 8.96482 23.1731 9.46399 22.8156 9.79185L18.4751 13.8079Z"
                />
                <use clipPath={`url(#${item}StarClip)`} href={`#${item}Star`} fill="#FFB21D" />
              </svg>
            </span>
          );
        })}
        <div className="ml-[11.11px] mt-[24px] w-[45px] h-[16px] font-bold text-[24px] leading-[33px] flex items-center text-[#FF611D]">
          {AVR_RATE}
        </div>
        <div className="ml-[5px] mt-[28px] w-[201px] h-[16px] font-[400] text-[14px] leading-[18px] flex items-center text-[#9F9F9F]">
          총 302명이 리뷰를 작성했어요.
        </div>
        <div
          onClick={reviewButtonClick}
          className="mt-[16px] mr-[36px] w-[177px] h-[38px] bg-[#FF611D] rounded-[22px] cursor-pointer"
        >
          <div className="flex flex-row">
            <ReviewEdit className="ml-[16px] mt-[12.39px]" />
            <button className="ml-[6.51px] mr-[17.46px] mt-[10.39px] w-[120px] h-[16px] leading-[20px] flex items-center fw-400 text-[14px] text-[#FFFFFF]">
              리뷰 작성하러 가기
            </button>
          </div>
        </div>
      </div>
      <div className="ml-[25px] mt-[20px] w-[687px] h-[1px] border border-[#D5D5D5] bg-[#D5D5D5] "></div>
      <div>
        <div className="flex flex-row">
          <div
            onClick={() => {
              clickPage(1);
            }}
            className={cn('ml-[21px] mt-[13px] w-[70px] h-[29px] border-[1px] rounded-[10px]', {
              'border-[#FF611D] text-[#FF611D]': click === 1,
              'border-[#9C9C9C] text-[#9C9C9C]': click !== 1,
            })}
          >
            <div className="ml-[11.5px] mt-[2px] font-[400] text-[16px] leading-[21px] flex items-center">
              최신순
            </div>
          </div>
          <div
            onClick={() => {
              clickPage(2);
            }}
            className={cn('ml-[7px] mt-[13px] w-[70px] h-[29px] border-[1px]  rounded-[10px]', {
              'border-[#FF611D] text-[#FF611D]': click === 2,
              'border-[#9C9C9C] text-[#9C9C9C]': click !== 2,
            })}
          >
            <div className="ml-[11.5px] mt-[2px] font-[400] text-[16px] leading-[21px] flex items-center">
              추천순
            </div>
          </div>
          <div className="mt-[20px] ml-[195px] mr-[26px] w-[351px] h-[16px] fw-400 text-[13px] leading-[17px] flex items-center text-[#9F9F9F]">
            ※홍보 및 비방 등 부적절한 평가는 평점 산정에서 제외될수있습니다.
          </div>
        </div>
        {reviewclick ? (
          <>
            <div className="mt-[77px] ml-[289px] h-[16px] font-normal text-[24px] leading-[33px] flex items-center">
              맛있게 드셨나요?
            </div>
            <div className="flex flex-row">
              {/* 여기 배열로 돌려야됨 */}
              <ReviewWriteStar className="ml-[273px] mt-[20px]" />
              <ReviewWriteStar className="ml-[4.15px] mt-[20px]" />
              <ReviewWriteStar className="ml-[4.15px] mt-[20px]" />
              <ReviewWriteStar className="ml-[4.15px] mt-[20px]" />
              <ReviewWriteStar className="ml-[4.15px] mt-[20px]" />
            </div>
            <div className="ml-[210px] mt-[19.56px]  h-[16px] font-normal text-[14px] leading-[18px] flex items-center text-[#9F9F9F]">
              고객님의 리뷰가 다른 고객들에게 도움이 될 수 있어요!
            </div>
            <div>
              <textarea
                className="w-[694px] h-[220px] ml-[25px] mt-[20px] resize-none border-[2px]"
                placeholder="업주와 다른 사용자들이 상처받지 않도록 좋은 표현과 주문하신 메뉴 및 매장 서비스에 대해서 작성해주세요. 유용한 팁도 남겨주시면 감사합니다:)"
                value={textValue}
                maxLength={399}
                onChange={e => {
                  handleSetValue(e);
                }}
              ></textarea>
              <div className="relative w-[150px] h-[20px] left-[573px] bottom-[40px] font-normal text-[16px] leading-[22px] text-[#5F5F5F]">
                {count}/400 (최소 10자)
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-[130px] h-[121px] ml-[25px] border-[1px] rounded-[5px] border-[#BCBCBC]"></div>
              <div className="w-[130px] h-[121px] ml-[11px] border-[1px] rounded-[5px] border-[#BCBCBC]"></div>
              <div className="w-[130px] h-[121px] ml-[11px] border-[1px] rounded-[5px] border-[#BCBCBC]"></div>
              <div className="w-[130px] h-[121px] ml-[11px] border-[1px] rounded-[5px] border-[#BCBCBC]"></div>
              <div className="w-[130px] h-[121px] ml-[11px] border-[1px] rounded-[5px] border-[#BCBCBC]"></div>
            </div>
            <div className="ml-[27px] mt-[12px] h-[21px] font-normal text-[16px] leading-[21px] text-[16px] text-[#9F9F9F]">
              사진은 최대 20MB 이하의 JPG, PNG, GIF 파일 10장까지 첨부 가능합니다.
            </div>
            <div className="flex flex-row">
              <div
                onClick={cancelReviewValue}
                className="ml-[25px] mt-[26px] w-[335px] h-[54px] border-[1px] rounded-[5px] border-[#CCCCCC] cursor-pointer"
              >
                <button className="ml-[136px] mt-[16px] h-[18px] font-normal text-[16px] leading-[22px] text-[#9F9F9F]">
                  취소하기
                </button>
              </div>
              <div
                onClick={handleReviewValue}
                className="ml-[17px] mt-[26px] w-[335px] h-[54px] border-[1px] rounded-[5px] border-[#FF611D] cursor-pointer"
              >
                <button className="ml-[136px] mt-[15.5px] h-[18px] font-normal text-[16px] leading-[22px] text-[#FF611D]">
                  등록하기
                </button>
              </div>
            </div>
          </>
        ) : (
          ''
        )}
        <div className="grid grid-cols-3">
          <div className="ml-[25px] mt-[18px] w-[220px] h-[312px] border-[1px] border-[#D2D2D2] shadow-[1px_1px_4px_rgba(0,0,0,0.07)] rounded-[5px]">
            <div className="w-[39px] h-[40px] ml-[13px] mt-[15px] border rounded-full border-[#CCCCCC] bg-[#CCCCCC]">
              <div className="ml-[44px] mt-[6px] w-[82px] h-[10px] font-[400] text-[12px] leading-[20px] flex items-center">
                냠냠쿠키
              </div>
              <SmallStar className="ml-[44px] mt-[5.23px]" />
              <div className="ml-[5px] mt-[23.12px] w-[180px] h-[120px] border border-[#DDDDDD] rounded-[10px] text-center bg-[#DDDDDD]">
                이미지
                <div className="ml-[147px] mt-[63px] w-[32px] h-[32px] border border-[rgba(0,0,0,0)] border-[#FFFFFF] rounded-br-[10px] bg-[rgba(0,0,0,0.4)]">
                  <div className="ml-[6px] mt-[4px] font-[400] text-[14px] leading-[22px] flex items-center text-[#FFFFFF]">
                    +4
                  </div>
                </div>
              </div>
              <div className="ml-[5px] mt-[11px] w-[184px] h-[62px] font-[400] text-[12px] leading-[16px] text-[#6B6B6B]">
                진짜진짜로 맛있어요 ㅠㅠ 치즈카츠의 치즈는 진짜 모짜렐라치즈 맛으로 고소하면서 쫙좍
                늘어나고 가츠동에 밥 양념이...
              </div>
              <div className="ml-[7px] mt-[18px] w-[55px] h-[16px] font-[400] text-[11px] leading-[14px] flex items-center text-[#A5A5A5]">
                2022.12.14
              </div>
            </div>
          </div>
          <div className="ml-[12px] mt-[18px] w-[220px] h-[312px] border-[1px] border-[#D2D2D2] shadow-[1px_1px_4px_rgba(0,0,0,0.07)] rounded-[5px]">
            <div className="w-[39px] h-[40px] ml-[13px] mt-[15px] border rounded-full border-[#CCCCCC] bg-[#CCCCCC]">
              <div className="ml-[44px] mt-[6px] w-[82px] h-[10px] font-[400] text-[12px] leading-[20px] flex items-center">
                냠냠쿠키
              </div>
              <SmallStar className="ml-[44px] mt-[5.23px]" />
              <div className="ml-[5px] mt-[23.12px] w-[180px] h-[120px] border border-[#DDDDDD] rounded-[10px] text-center bg-[#DDDDDD]">
                이미지
                <div className="ml-[147px] mt-[63px] w-[32px] h-[32px] border border-[rgba(0,0,0,0)] border-[#FFFFFF] rounded-br-[10px] bg-[rgba(0,0,0,0.4)]">
                  <div className="ml-[6px] mt-[4px] font-[400] text-[14px] leading-[22px] flex items-center text-[#FFFFFF]">
                    +2
                  </div>
                </div>
              </div>
              <div className="ml-[5px] mt-[11px] w-[184px] h-[62px] font-[400] text-[12px] leading-[16px] text-[#6B6B6B]">
                진짜진짜로 맛있어요 ㅠㅠ 치즈카츠의 치즈는 진짜 모짜렐라치즈 맛으로 고소하면서 쫙좍
                늘어나고 가츠동에 밥 양념이...
              </div>
              <div className="ml-[7px] mt-[18px] w-[55px] h-[16px] font-[400] text-[11px] leading-[14px] flex items-center text-[#A5A5A5]">
                2022.12.14
              </div>
            </div>
          </div>
          <div className="mt-[18px] w-[220px] h-[312px] border-[1px] border-[#D2D2D2] shadow-[1px_1px_4px_rgba(0,0,0,0.07)] rounded-[5px]">
            <div className="w-[39px] h-[40px] ml-[13px] mt-[15px] border rounded-full border-[#CCCCCC] bg-[#CCCCCC]">
              <div className="ml-[44px] mt-[6px] w-[82px] h-[10px] font-[400] text-[12px] leading-[20px] flex items-center">
                냠냠쿠키
              </div>
              <SmallStar className="ml-[44px] mt-[5.23px]" />
              <div className="ml-[5px] mt-[23.12px] w-[180px] h-[120px] border border-[#DDDDDD] rounded-[10px] text-center bg-[#DDDDDD]">
                이미지
                <div className="ml-[147px] mt-[63px] w-[32px] h-[32px] border border-[rgba(0,0,0,0)] border-[#FFFFFF] rounded-br-lg bg-[rgba(0,0,0,0.4)]">
                  <div className="ml-[6px] mt-[4px] font-[400] text-[14px] leading-[22px] flex items-center text-[#FFFFFF]">
                    +2
                  </div>
                </div>
              </div>
              <div className="ml-[5px] mt-[11px] w-[184px] h-[62px] font-[400] text-[12px] leading-[16px] text-[#6B6B6B]">
                진짜진짜로 맛있어요 ㅠㅠ 치즈카츠의 치즈는 진짜 모짜렐라치즈 맛으로 고소하면서 쫙좍
                늘어나고 가츠동에 밥 양념이...
              </div>
              <div className="ml-[7px] mt-[18px] w-[55px] h-[16px] font-[400] text-[11px] leading-[14px] flex items-center text-[#A5A5A5]">
                2022.12.14
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[13px] mb-[20px] ml-[649px] font-[400] text-[16px] leading-[22px] flex items-center cursor-pointer">
          더보기
          <div className="w-[14px] h-[14px] rounded-full border border-[#FF611D] bg-[#FF611D]">
            <MoreInfo className="ml-[2.22px] mt-[3.5px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default review;
