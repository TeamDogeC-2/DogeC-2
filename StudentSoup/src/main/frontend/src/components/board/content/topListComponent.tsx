const TopListComponent = () => {
  return (
    <div className="my-[15px] w-[48%]">
      <div className="bg-white p-[11px] rounded-[5px] border border-solid border-[#bcbcbc]">
        <table className="w-full text-center">
          <colgroup>
            <col style={{ width: '80%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '10%' }} />
          </colgroup>
          <thead>
            <div className="text-[20px] text-left py-[13px] px-[13px] font-[600]">
              실시간 인기 게시글 <span className="text-orange">BEST</span>
            </div>
          </thead>
          <tbody>
            <tr className=" py-[15px] px-[13px] border-b-[1px] border-solid border-[#BCBCBC]">
              <td className="text-start py-[15px] px-[13px]">
                카카오 선물하기 <span className="text-orange">5</span>
              </td>
              <td className="py-[15px] px-[13px]">123</td>
              <td className="py-[15px] px-[13px]">11:30</td>
            </tr>
            <tr className=" py-[15px] px-[13px] border-b-[1px] border-solid border-[#BCBCBC]">
              <td className="text-start py-[15px] px-[13px]">
                카카오 선물하기 <span className="text-orange">5</span>
              </td>
              <td className="py-[15px] px-[13px]">123</td>
              <td className="py-[15px] px-[13px]">11:30</td>
            </tr>
            <tr className=" py-[15px] px-[13px] border-b-[1px] border-solid border-[#BCBCBC]">
              <td className="text-start py-[15px] px-[13px]">
                카카오 선물하기 <span className="text-orange">5</span>
              </td>
              <td className="py-[15px] px-[13px]">123</td>
              <td className="py-[15px] px-[13px]">11:30</td>
            </tr>
            <tr className=" py-[15px] px-[13px] border-b-[1px] border-solid border-[#BCBCBC]">
              <td className="text-start py-[15px] px-[13px]">
                카카오 선물하기 <span className="text-orange">5</span>
              </td>
              <td className="py-[15px] px-[13px]">123</td>
              <td className="py-[15px] px-[13px]">11:30</td>
            </tr>
            <tr className=" py-[15px] px-[13px] border-b-[1px] border-solid border-[#BCBCBC]">
              <td className="text-start py-[15px] px-[13px]">
                카카오 선물하기 <span className="text-orange">5</span>
              </td>
              <td className="py-[15px] px-[13px]">123</td>
              <td className="py-[15px] px-[13px]">11:30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopListComponent;
