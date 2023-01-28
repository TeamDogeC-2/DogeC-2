import SearchIcon from '../../../img/search_icon.svg';

const SearchComponent = () => {
  return (
    <div className="flex justify-between mt-[26px]">
      {/* <img src={SearchIcon} alt="" /> */}
      <input
        className="w-[457px] h-[46px] p-[13px] text-[16px] border border-solid border-[#BCBCBC] rounded-[5px]"
        placeholder="글 제목, 내용, 해시태그를 적어주세요"
      />
      <div className="cursor-pointer bg-white text-[#A4A4A4] p-[10px] w-[137px] h-[46px] rounded-[5px] border border-solid border-[#BCBCBC]">
        전체
      </div>
      <div className="cursor-pointer bg-white text-[#A4A4A4] p-[10px] w-[137px] h-[46px] rounded-[5px] border border-solid border-[#BCBCBC]">
        전체
      </div>
      <div className="cursor-pointer bg-white text-[#A4A4A4] p-[10px] w-[165px] h-[46px] rounded-[5px] border border-solid border-[#BCBCBC]">
        학과
      </div>
    </div>
  );
};

export default SearchComponent;
