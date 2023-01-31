import { useState } from 'react';
import cn from 'clsx';

interface PropsType {
  menu: string;
  range: RANGE;
  setRange: React.Dispatch<React.SetStateAction<RANGE>>;
}

export const enum RANGE {
  SCHOOL = 'SCHOOL',
  SUBJECT = 'SUBJECT',
}

const TitleComponent = (props: PropsType) => {
  const { menu, range, setRange } = props;

  return (
    <div className="flex justify-between">
      <div className="text-[24px] font-[700]">{menu}</div>
      <div className="flex">
        <div
          onClick={() => {
            setRange(RANGE.SCHOOL);
          }}
          className={cn(
            'cursor-pointer rounded-[45px] drop-shadow-sm  w-[110px] h-[36px] text-center border-solid border text-[16px] leading-[30px] mr-[13px]',
            {
              'bg-[#FF611D] text-[#fff] border-[#FF611D]': range === RANGE.SCHOOL,
              'bg-[#fff] border-[#BCBCBC] text-[#FF611D]': range !== RANGE.SCHOOL,
            },
          )}
        >
          {RANGE.SCHOOL}
        </div>
        <div
          onClick={() => {
            setRange(RANGE.SUBJECT);
          }}
          className={cn(
            'cursor-pointer rounded-[45px] drop-shadow-sm w-[110px] h-[36px] text-center border-solid border text-[16px] leading-[30px] mr-[13px]',
            {
              'bg-[#FF611D] text-[#fff] border-[#FF611D]': range === RANGE.SUBJECT,
              'bg-[#fff] border-[#BCBCBC] text-[#FF611D]': range !== RANGE.SUBJECT,
            },
          )}
        >
          {RANGE.SUBJECT}
        </div>
      </div>
    </div>
  );
};

export default TitleComponent;
