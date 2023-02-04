import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import cn from 'clsx';
import SearchIcon from '../../../img/search_icon.svg';
import Arrow from '../../../img/board/icon_selectbox_arrow.png';
import { RANGE } from './titleComponent';
import useBoardData, { DepartmentType } from '../data/useBoardData';

interface PropsType {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  range: RANGE;
}

const keywordList = [
  { label: '제목', value: 'title' },
  { label: '글쓴이', value: 'nickname' },
  { label: '내용', value: 'content' },
];
const sortList = ['추천순', '최신순', '조회순', '댓글순'];

const SearchComponent = (props: PropsType) => {
  const [showKeywords, setShowKeywords] = useState(false);
  const [showSorts, setShowSorts] = useState(false);
  const [showSubjects, setShowSubjects] = useState(false);

  const [keyword, setKeyword] = useState('전체');
  const [sort, setSort] = useState('전체');
  const [subject, setSubject] = useState('학과');

  const [subjectList, setSubjectList] = useState<DepartmentType[]>([]);

  const keywordRef: any = useRef(null);
  const sortRef: any = useRef(null);
  const subjectRef: any = useRef(null);

  const { range, searchValue, setSearchValue } = props;

  const { getDepartmentList } = useBoardData();

  /**
   * 컴포넌트 특정 영역 외 클릭 감지를 위해 사용
   * */
  useEffect(() => {
    const handleOutside = (e: any) => {
      if (keywordRef.current && !keywordRef.current.contains(e.target)) setShowKeywords(false);
    };
    document.addEventListener('mousedown', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
    };
  }, [keywordRef]);

  useEffect(() => {
    const handleOutside = (e: any) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) setShowSorts(false);
    };
    document.addEventListener('mousedown', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
    };
  }, [sortRef]);

  useEffect(() => {
    const handleOutside = (e: any) => {
      if (subjectRef.current && !subjectRef.current.contains(e.target)) setShowSubjects(false);
    };
    document.addEventListener('mousedown', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
    };
  }, [subjectRef]);

  return (
    <div className="flex justify-between mt-[26px]">
      <div className="flex bg-white border border-solid border-[#BCBCBC] rounded-[5px]">
        <img src={SearchIcon} alt="" className="w-[19px] ml-[13px]" />
        <input
          placeholder="글 제목, 내용, 해시태그를 적어주세요"
          className="w-[444px] h-[46px] p-[13px] text-[16px] rounded-[5px] focus:outline-none"
        />
      </div>

      {/* Keyword */}
      <div ref={keywordRef} className="relative">
        <div
          onClick={() => {
            setShowKeywords(prev => !prev);
          }}
          className="cursor-pointer flex items-center justify-between bg-white text-[#A4A4A4] p-[10px] w-[137px] h-[46px] rounded-[5px] border border-solid border-[#BCBCBC]"
        >
          {keyword}
          <span>
            <img src={Arrow} alt="selectbox" />
          </span>
        </div>
        {showKeywords && (
          <div className="flex flex-col absolute border border-solid border-[#BCBCBC] rounded-[5px] w-[137px] bg-[#E9E9E9] text-[#7B7B7B] top-[52px]">
            {_.map(keywordList, (item, index) => {
              return (
                <div
                  onClick={() => {
                    setKeyword(item.label);
                    setShowKeywords(false);
                  }}
                  key={index}
                  className={cn(
                    'py-[7px] px-[12px] cursor-pointer hover:bg-[#dddddd] first-of-type:rounded-t-[5px] last-of-type:rounded-b-[5px]',
                    {
                      ['border-t-[1px] border-solid border-[#BCBCBC]']: index !== 0,
                    },
                  )}
                >
                  {item.label}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Sort */}
      <div ref={sortRef} className="relative">
        <div
          onClick={() => {
            setShowSorts(prev => !prev);
          }}
          className="cursor-pointer flex items-center justify-between bg-white text-[#A4A4A4] p-[10px] w-[137px] h-[46px] rounded-[5px] border border-solid border-[#BCBCBC]"
        >
          {sort}
          <span>
            <img src={Arrow} alt="selectbox" />
          </span>
        </div>
        {showSorts && (
          <div className="flex flex-col absolute border border-solid border-[#BCBCBC] rounded-[5px] w-[137px] bg-[#E9E9E9] text-[#7B7B7B] top-[52px]">
            {_.map(sortList, (item, index) => {
              return (
                <div
                  onClick={() => {
                    setSort(item);
                    setShowSorts(false);
                  }}
                  key={index}
                  className={cn(
                    'py-[7px] px-[12px] cursor-pointer hover:bg-[#dddddd] first-of-type:rounded-t-[5px] last-of-type:rounded-b-[5px]',
                    {
                      ['border-t-[1px] border-solid border-[#BCBCBC]']: index !== 0,
                    },
                  )}
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Subject */}
      {range === RANGE.SUBJECT ? (
        <div ref={subjectRef} className="relative">
          <div
            onClick={() => {
              setShowSubjects(prev => !prev);
              if (!showSubjects) {
                getDepartmentList(data => {
                  setSubjectList(data);
                });
              }
            }}
            className="cursor-pointer flex items-center justify-between bg-white text-[#A4A4A4] p-[10px] w-[165px] h-[46px] rounded-[5px] border border-solid border-[#BCBCBC]"
          >
            {subject}
            <span>
              <img src={Arrow} alt="selectbox" />
            </span>
          </div>
          {showSubjects && (
            <div className="flex flex-col absolute border border-solid border-[#BCBCBC] rounded-[5px] w-[165px] bg-[#E9E9E9] text-[#7B7B7B] top-[52px]">
              {_.map(subjectList, (item, index) => {
                return (
                  <div
                    onClick={() => {
                      setSubject(item.departmentName);
                      setShowSubjects(false);
                    }}
                    key={index}
                    className={cn(
                      'py-[7px] px-[12px] cursor-pointer hover:bg-[#dddddd] first-of-type:rounded-t-[5px] last-of-type:rounded-b-[5px]',
                      {
                        ['border-t-[1px] border-solid border-[#BCBCBC]']: index !== 0,
                      },
                    )}
                  >
                    {item.departmentName}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <div className="relative">
          <div className="cursor-[no-drop] flex items-center justify-between bg-[#ddd] p-[10px] w-[165px] h-[46px] rounded-[5px] border border-solid border-[#BCBCBC]"></div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
