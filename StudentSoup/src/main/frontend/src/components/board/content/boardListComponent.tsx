import _ from 'lodash';
import HeartIcon from '../../../img/board/icon_heart.png';
import ReactPaginate from 'react-paginate';

export interface BoardListType {
  authentication: string;
  boardCategory: string;
  tag: string;
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
  totalPages: number;
  boardCategory: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const BoardListComponent = (props: PropsType) => {
  const { list, boardCategory, page, setPage, totalPages } = props;

  const handlePageChange = (event: any) => {
    setPage(event.selected);
  };

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
                    {item.authentication === 'Y' && <span className="text-[#FF611D]">[BEST]</span>}{' '}
                    [{item.tag}] {item.title}{' '}
                    <span className="text-[#FF611D]">{item.reviewCount}</span>
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
        </table>
        <div>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageChange}
            pageRangeDisplayed={5}
            forcePage={page}
            pageCount={totalPages}
            previousLabel="<"
            previousClassName="text-orange mx-[5px]"
            nextClassName="text-orange mx-[5px]"
            className="flex justify-center my-[18px]" // ul 태그 스타일
            activeLinkClassName="border border-solid border-[#FF611C] text-orange" // 클릭된 a 태그 스타일
            pageLinkClassName="inline-block text-[14px] text-center mx-[5px] w-[23px] h-[23px] border border-[#B4B4B4] rounded-full cursor-pointer font-normal text-[#B4B4B4]" // a 태그 스타일
          />
        </div>
      </div>
    </div>
  );
};

export default BoardListComponent;
