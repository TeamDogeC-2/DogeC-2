import React from 'react';

const MypageReviewModal = (props: any) => {
  return (
    <div
      onClick={() => props.onClickToggleModal()}
      className="w-full h-full bg-[rgba(0,0,0,0.1)] flex fixed top-0 right-0 justify-center items-center z-[55]"
    >
      <div className="w-[290px] h-[200.45px] absolute top-0 right-0 mr-[24px] mt-[108.89px] border-[1px] border-white bg-white rounded-[5px] z-[56]">
        <div className="border-t-[1px] h-[100px] border-[#515151] mt-[25px]">
          <div className="flex h-full items-center justify-center">
            <div className="flex flex-col items-center justify-center">s</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypageReviewModal;
