import _ from 'lodash';
import { useState } from 'react';
import cn from 'clsx';
import SearchIcon from '../../../img/search_icon.svg';
import Arrow from '../../../img/board/icon_selectbox_arrow.png';

const keywordList = ['제목', '글쓴이', '내용'];
const sortList = ['추천순', '최신순', '조회순', '댓글순'];
const subjectList = ['1', '2'];

const SearchComponent = () => {
  const [showKeywords, setShowKeywords] = useState(false);
  const [showSorts, setShowSorts] = useState(false);
  const [showSubjects, setShowSubjects] = useState(false);

  const [keyword, setKeyword] = useState('전체');
  const [sort, setSort] = useState('전체');
  const [subject, setSubject] = useState('학과');

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
      <div className="relative">
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
                    setShowKeywords(false);
                    setKeyword(item);
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

      {/* Sort */}
      <div className="relative">
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
                    setShowSorts(false);
                    setSort(item);
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
      <div className="relative">
        <div
          onClick={() => {
            setShowSubjects(prev => !prev);
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
                    setShowSubjects(false);
                    setSubject(item);
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
    </div>
  );
};

export default SearchComponent;
