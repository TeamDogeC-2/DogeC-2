import HeartIcon from '../../../img/board/icon_heart.png';

const BoardListComponent = () => {
  return (
    <div className="my-[15px]">
      <div className="bg-white p-[11px] rounded-[5px] border border-solid border-[#bcbcbc]">
        <table className="w-full text-center">
          <colgroup>
            <col style={{ width: '60%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '10%' }} />
          </colgroup>
          <thead>
            <tr className="text-[15px]">
              <td className="text-start py-[15px] px-[13px]">제목</td>
              <td className="py-[15px] px-[13px]">닉네임</td>
              <td className="py-[15px] px-[13px]">날짜</td>
              <td className="py-[15px] px-[13px]">조회</td>
              <td className="py-[15px] px-[13px]">추천</td>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#F3F3F3] py-[15px] px-[13px] border-b-[1px] border-solid border-[#BCBCBC]">
              <td className="text-start text-[#FF611D] py-[15px] px-[13px] border-l-[4px] border-solid border-[#FF611D]">
                [공지] 게시판 커뮤니티 이용 안내
              </td>
              <td className="py-[15px] px-[13px]">갈매기</td>
              <td className="py-[15px] px-[13px]">11:30</td>
              <td className="py-[15px] px-[13px]">12345</td>
              <td className="flex py-[15px] px-[13px] gap-x-[5px] justify-center">
                <img src={HeartIcon} alt="heart" className="self-center" />
                123
              </td>
            </tr>
            <tr className=" py-[15px] px-[13px] border-b-[1px] border-solid border-[#BCBCBC]">
              <td className="text-start py-[15px] px-[13px]">
                카카오 선물하기 <span className="text-[#FF611D]">5</span>
              </td>
              <td className="py-[15px] px-[13px]">갈매기</td>
              <td className="py-[15px] px-[13px]">11:30</td>
              <td className="py-[15px] px-[13px]">12345</td>
              <td className="flex py-[15px] px-[13px] gap-x-[5px] justify-center">
                <img src={HeartIcon} alt="heart" className="self-center" />
                123
              </td>
            </tr>
            <tr className=" py-[15px] px-[13px] border-b-[1px] border-solid border-[#BCBCBC]">
              <td className="text-start py-[15px] px-[13px]">
                카카오 선물하기 <span className="text-[#FF611D]">5</span>
              </td>
              <td className="py-[15px] px-[13px]">갈매기</td>
              <td className="py-[15px] px-[13px]">11:30</td>
              <td className="py-[15px] px-[13px]">12345</td>
              <td className="flex py-[15px] px-[13px] gap-x-[5px] justify-center">
                <img src={HeartIcon} alt="heart" className="self-center" />
                123
              </td>
            </tr>
            <tr className=" py-[15px] px-[13px] border-b-[1px] border-solid border-[#BCBCBC]">
              <td className="text-start py-[15px] px-[13px]">
                카카오 선물하기 <span className="text-[#FF611D]">5</span>
              </td>
              <td className="py-[15px] px-[13px]">갈매기</td>
              <td className="py-[15px] px-[13px]">11:30</td>
              <td className="py-[15px] px-[13px]">12345</td>
              <td className="flex py-[15px] px-[13px] gap-x-[5px] justify-center">
                <img src={HeartIcon} alt="heart" className="self-center" />
                123
              </td>
            </tr>
            <tr className=" py-[15px] px-[13px] border-b-[1px] border-solid border-[#BCBCBC]">
              <td className="text-start py-[15px] px-[13px]">
                카카오 선물하기 <span className="text-[#FF611D]">5</span>
              </td>
              <td className="py-[15px] px-[13px]">갈매기</td>
              <td className="py-[15px] px-[13px]">11:30</td>
              <td className="py-[15px] px-[13px]">12345</td>
              <td className="flex py-[15px] px-[13px] gap-x-[5px] justify-center">
                <img src={HeartIcon} alt="heart" className="self-center" />
                123
              </td>
            </tr>
            <tr className=" py-[15px] px-[13px] border-b-[1px] border-solid border-[#BCBCBC]">
              <td className="text-start py-[15px] px-[13px]">
                카카오 선물하기 <span className="text-[#FF611D]">5</span>
              </td>
              <td className="py-[15px] px-[13px]">갈매기</td>
              <td className="py-[15px] px-[13px]">11:30</td>
              <td className="py-[15px] px-[13px]">12345</td>
              <td className="flex py-[15px] px-[13px] gap-x-[5px] justify-center">
                <img src={HeartIcon} alt="heart" className="self-center" />
                123
              </td>
            </tr>
          </tbody>
          <tfoot>{/* TODO: 페이지네이션 */}</tfoot>
        </table>
      </div>
    </div>
  );
};

export default BoardListComponent;
