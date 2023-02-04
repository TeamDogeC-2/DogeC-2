import _ from 'lodash';
import HeartIcon from '../../../img/board/icon_heart.png';

export interface BoardListType {
  authentication: string;
  boardCategory: string;
  boardId: number;
  likedCount: number;
  nickname: string;
  title: string;
  view: number;
  writeDate: string;
  reviewCount: number;
}

interface PropsType {
  list: BoardListType[];
  boardCategory: string;
}

const BoardListComponent = (props: PropsType) => {
  const { list, boardCategory } = props;

  return (
    <div className="my-[15px]">
      <div className="bg-white p-[11px] rounded-[5px] border border-solid border-[#bcbcbc]">
        <table className="w-full text-center">
          <colgroup>
            <col style={{ width: '50%' }} />
            <col style={{ width: '20%' }} />
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
            {_.map(list, (item, index) => {
              if (item.boardCategory === '공지사항' && boardCategory === 'ANNOUNCEMENT') {
                return (
                  <tr
                    key={index}
                    className=" py-[15px] px-[13px] border-b-[1px] border-solid border-[#BCBCBC]"
                  >
                    <td className="text-start text-[#FF611D] py-[15px] px-[13px]">
                      [공지] <span className="text-black">{item.title}</span>
                    </td>
                    <td className="py-[15px] px-[13px]">{item.nickname}</td>
                    <td className="py-[15px] px-[13px]">{item.writeDate}</td>
                    <td className="py-[15px] px-[13px]">{item.view}</td>
                    <td className="flex py-[15px] px-[13px] gap-x-[5px] justify-center">
                      <img src={HeartIcon} alt="heart" className="self-center" />
                      {item.likedCount}
                    </td>
                  </tr>
                );
              }
              if (item.boardCategory === '공지사항') {
                return (
                  <tr
                    key={index}
                    className="bg-[#F3F3F3] py-[15px] px-[13px] border-b-[1px] border-solid border-[#BCBCBC]"
                  >
                    <td className="text-start text-[#FF611D] py-[15px] px-[13px] border-l-[4px] border-solid border-[#FF611D]">
                      [공지] {item.title}
                    </td>
                    <td className="py-[15px] px-[13px]">{item.nickname}</td>
                    <td className="py-[15px] px-[13px]">{item.writeDate}</td>
                    <td className="py-[15px] px-[13px]">{item.view}</td>
                    <td className="flex py-[15px] px-[13px] gap-x-[5px] justify-center">
                      <img src={HeartIcon} alt="heart" className="self-center" />
                      {item.likedCount}
                    </td>
                  </tr>
                );
              }
              return (
                <tr
                  key={index}
                  className=" py-[15px] px-[13px] border-b-[1px] border-solid border-[#BCBCBC]"
                >
                  <td className="text-start py-[15px] px-[13px]">
                    {item.title} <span className="text-[#FF611D]">{item.reviewCount}</span>
                  </td>
                  <td className="py-[15px] px-[13px]">{item.nickname}</td>
                  <td className="py-[15px] px-[13px]">{item.writeDate}</td>
                  <td className="py-[15px] px-[13px]">{item.view}</td>
                  <td className="flex py-[15px] px-[13px] gap-x-[5px] justify-center">
                    <img src={HeartIcon} alt="heart" className="self-center" />
                    {item.likedCount}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            {/* TODO: 페이지네이션 */}
            {/* <div className="flex flex-row mb-[55px]">
              {clickPage === 1 ? (
                <LeftFillNoneIcon className="ml-[234px] mt-[55.63px]" />
              ) : (
                <LeftIcon
                  onClick={() => {
                    setSelected(selected - 1);
                    setPage(page - 1);
                    setClickPage(clickPage - 1);
                    if (page % 5 === 0) {
                      setClickNextPage(clickNextPage - 1);
                    }
                  }}
                  className="ml-[234px] mt-[55.63px] cursor-pointer"
                />
              )}
              {setPageNumbersArr[clickNextPage].map((school: any) => (
                <>
                  <div
                    id={school}
                    key={school}
                    className={
                      selected === school
                        ? 'ml-[9.5px] mt-[43px] w-[38px] h-[38px] border border-[#FF611D] rounded-full cursor-pointer font-bold text-[#FF611D]'
                        : 'ml-[9.5px] mt-[43px] w-[38px] h-[38px] border border-[#B4B4B4] rounded-full cursor-pointer font-normal text-[#B4B4B4]'
                    }
                    onClick={e => {
                      handlePageNumberClick(e, school);
                    }}
                  >
                    <div id={school} className="mt-[4px] text-[20px] text-center">
                      {school}
                    </div>
                  </div>
                </>
              ))}
              {lastPage ? (
                <RightFillNoneIcon className="relative left-[15px] top-[53.63px]" />
              ) : (
                <RightIcon
                  onClick={() => {
                    setSelected(selected + 1);
                    setPage(page + 1);
                    setClickPage(clickPage + 1);
                    if (clickPage % 5 === 0) {
                      setClickNextPage(clickNextPage + 1);
                    }
                  }}
                  className="relative left-[15px] top-[53.63px] cursor-pointer"
                />
              )}
            </div> */}
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default BoardListComponent;
