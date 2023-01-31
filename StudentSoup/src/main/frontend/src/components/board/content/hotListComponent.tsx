import HeartIcon from '../../../img/board/icon_heart.png';

const HotListComponent = () => {
  return (
    <div className="my-[15px] w-[48%]">
      <div className="bg-white p-[11px] rounded-[5px] border border-solid border-[#bcbcbc]">
        <table className="w-full text-center">
          <colgroup>
            <col style={{ width: '70%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '15%' }} />
          </colgroup>
          <thead>
            <tr>
              <td colSpan={3}>
                <div className="text-[20px] text-left py-[13px] px-[13px] font-[600]">
                  <span className="text-orange">HOT</span> 게시글 🔥
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className=" py-[15px] px-[13px] border-t-[1px] border-solid border-[#BCBCBC]">
              <td className="text-start py-[15px] px-[13px]">
                [자유] 카카오 선물하기 <span className="text-orange">5</span>
              </td>
              <td className="flex py-[15px] px-[13px] gap-x-[5px]">
                <img src={HeartIcon} alt="heart" className="self-center" />
                123
              </td>
              <td className="py-[15px] px-[13px]">11:30</td>
            </tr>
            <tr className=" py-[15px] px-[13px] border-t-[1px] border-solid border-[#BCBCBC]">
              <td className="text-start py-[15px] px-[13px]">
                [자유] 카카오 선물하기 <span className="text-orange">5</span>
              </td>
              <td className="flex py-[15px] px-[13px] gap-x-[5px]">
                <img src={HeartIcon} alt="heart" className="self-center" />
                123
              </td>
              <td className="py-[15px] px-[13px]">11:30</td>
            </tr>
            <tr className=" py-[15px] px-[13px] border-t-[1px] border-solid border-[#BCBCBC]">
              <td className="text-start py-[15px] px-[13px]">
                [자유] 카카오 선물하기 <span className="text-orange">5</span>
              </td>
              <td className="flex py-[15px] px-[13px] gap-x-[5px]">
                <img src={HeartIcon} alt="heart" className="self-center" />
                123
              </td>
              <td className="py-[15px] px-[13px]">11:30</td>
            </tr>
            <tr className=" py-[15px] px-[13px] border-t-[1px] border-solid border-[#BCBCBC]">
              <td className="text-start py-[15px] px-[13px]">
                [자유] 카카오 선물하기 <span className="text-orange">5</span>
              </td>
              <td className="flex py-[15px] px-[13px] gap-x-[5px]">
                <img src={HeartIcon} alt="heart" className="self-center" />
                123
              </td>
              <td className="py-[15px] px-[13px]">11:30</td>
            </tr>
            <tr className=" py-[15px] px-[13px] border-t-[1px] border-solid border-[#BCBCBC]">
              <td className="text-start py-[15px] px-[13px]">
                [자유] 카카오 선물하기 <span className="text-orange">5</span>
              </td>
              <td className="flex py-[15px] px-[13px] gap-x-[5px]">
                <img src={HeartIcon} alt="heart" className="self-center" />
                123
              </td>
              <td className="py-[15px] px-[13px]">11:30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HotListComponent;
