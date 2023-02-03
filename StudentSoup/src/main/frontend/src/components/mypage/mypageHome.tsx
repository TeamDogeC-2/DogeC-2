import School from '../../img/school.png';
import Major from '../../img/major.png';
import Human from '../../img/circle_human.png';
import { useState, useRef, useEffect } from 'react';
import cn from 'clsx';
import axios from 'axios';
import WritingComponent from './content/writingComponent';
import ReplyComponent from './content/replyComponent';
import ReviewComponent from './content/reviewComponent';

interface propTypes {
  onClickMenu: Function;
}

const MypageHome = (props: any) => {
  const uploadImage = useRef<any>(null);
  const imageUploader = useRef<any>(null);

  const IMAGE_FILE_ID = String(sessionStorage.getItem('fileName'));

  const memberId = sessionStorage.getItem('memberId');
  const savedName = sessionStorage.getItem('nickname');
  const savedSchool = sessionStorage.getItem('schoolName');
  const savedDepart = sessionStorage.getItem('departmentName');
  const registrationDate = String(sessionStorage.getItem('registrationDate'));
  const [year, month, day] = registrationDate.split('-');

  const [content, setContent] = useState<String>('WRITING');
  const [showContent, setShowContent] = useState(false);
  const contentRef: any = useRef(null);

  const [id, setId] = useState<string>('home');
  const onClickMypageBoardReview = () => {
    setId('boardReview');
    props.onClickMenu('boardReview');
  };

  const formatDate = `${year}년 ${month}월 ${day}일`;

  const handleImageUpload = (e: any) => {
    const [file] = e.target.files;
    console.log(file);
    if (file) {
      const reader = new FileReader();
      const { current } = uploadImage;
      current.file = file;
      reader.onload = (e: any) => {
        current.src = e.target.result;
        sessionStorage.setItem('fileName', current.src);
      };
      reader.readAsDataURL(file);
      axios
        .post(
          '/members/edit/image',
          {
            memberId,
            multipartFile: file,
            content,
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    location.reload();
  };

  return (
    <div className="flex-[9] min-h-full z-[1] bg-[#1E1E1E]/5">
      <div className="w-full h-[259px] flex items-center justify-center bg-[#B0B0B0]"></div>
      <div className="flex flex-row w-full h-[100vh]">
        <div className="w-[451px] relative bottom-[140px]">
          <div className="flex flex-col items-center w-[319px] h-[425px] ml-[75px] mr-[57px] bg-white shadow-lg rounded-[5px] z-[2]">
            <div className="mt-[35px]">
              <img
                ref={uploadImage}
                src={IMAGE_FILE_ID}
                className='w-[122px] h-[122px] bg-[url("./img/circle_human.png")] rounded-full mb-[70px]'
              />
            </div>
            <div className="relative bottom-[60px]">
              <span className="text-[28px] leading-39px text-[#353535]">{savedName}</span>
            </div>
            <div className="flex flex-col relative bottom-[40px]">
              <div className="flex flex-row justify-center items-center">
                <div className="mr-[10px]">
                  <img src={School} alt="" />
                </div>
                <span className="text-[12px] leading-[17px] text-[#8D8D8D]">{savedSchool}</span>
              </div>
              <div className="flex flex-row items-center text-left">
                <div className="mr-[10px]">
                  <img src={Major} alt="" />
                </div>
                <span className="text-[12px] leading-[17px] text-[#8D8D8D]">{savedDepart}</span>
              </div>
            </div>
            <div className="w-[262px] h-[44px]">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
                className="hidden"
              />
              <button
                onClick={() => imageUploader.current.click()}
                className="w-full h-full bg-[#FF611D] text-white rounded-[11px] text-[15px] leading-[21px] relative bottom-[10px]"
              >
                내 프로필 편집
              </button>
            </div>
            <div>
              <span className="text-[10px] leading-[14px] text-[#8D8D8D]">
                가입일 : {formatDate}
              </span>
            </div>
          </div>
        </div>
        <div className="w-[635px] h-full flex flex-col">
          <div className='mt-[47px] text-[24px] text-[#353535]'>미리보기</div>
          {/* tap menus */}
          <div className="flex flex-row gap-x-[40px] mt-[36px] mb-[32px]">
            <button
              className={cn(
                'w-[95px] h-[34px] rounded-[38px] text-[16px] font-semibold',
                {
                  'text-white bg-[#FF611D]': content === 'WRITING',
                  'text-[#353535] bg-zinc-100': content !== 'WRITING',
                })}
              onClick={() => {
                setContent('WRITING');
              }}
              value="WRITING">
              작성 글
            </button>
            <button className={cn(
              'w-[95px] h-[34px] rounded-[38px] text-[16px] font-semibold',
              {
                'text-white bg-[#FF611D]': content === 'REPLY',
                'text-[#353535] bg-zinc-100': content !== 'REPLY',
              })}
              onClick={() => {
                setContent('REPLY');
              }}
              value="REPLY">
              작성 댓글
            </button>
            <button className={cn(
              'w-[95px] h-[34px] rounded-[38px] text-[16px] font-semibold',
              {
                'text-white bg-[#FF611D]': content === 'REVIEW',
                'text-[#353535] bg-zinc-100': content !== 'REVIEW',
              })}
              onClick={() => {
                setContent('REVIEW');
              }}
              value="REVIEW">
              작성 리뷰
            </button>
          </div>
          {/* tap contents */}
          <div className="w-[573px] h-[383px] py-1 overflow-hidden rounded-[5px] border border-[#E1E1E1] shadow-lg bg-white">
            <div className={cn(
              {
                hidden: content !== 'WRITING',
              }
            )}>
              <WritingComponent />
            </div>
            <div className={cn(
              {
                hidden: content !== 'REPLY',
              }
            )}>
              <ReplyComponent />
            </div>
            <div className={cn(
              {
                hidden: content !== 'REVIEW',
              }
            )}>
              <ReviewComponent />
            </div>
          </div>
          <button className='w-[573px] h-[52px] mt-[12px] text-white border rounded-[5px] border-[#E1E1E1] bg-[#FF611D]'
            onClick={onClickMypageBoardReview}>
            자세히 보러가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MypageHome;
