interface PropsType {
  menu: string;
}

const TitleComponent = (props: PropsType) => {
  const { menu } = props;

  return (
    <div className="flex justify-between">
      <div className="text-[24px] font-[700]">{menu}</div>
      <div className="flex">
        <div className="cursor-pointer rounded-[45px] drop-shadow-sm bg-[#fff] w-[110px] h-[36px] text-center border-solid border border-[#BCBCBC] text-[#FF611D] text-[16px] leading-[30px] mr-[13px]">
          SCHOOL
        </div>
        <div className="cursor-pointer rounded-[45px] drop-shadow-sm bg-[#FF611D] w-[110px] h-[36px] text-center border-solid border border-[#FF611D] text-[#fff] text-[16px] leading-[30px]">
          SUBJECT
        </div>
      </div>
    </div>
  );
};

export default TitleComponent;
