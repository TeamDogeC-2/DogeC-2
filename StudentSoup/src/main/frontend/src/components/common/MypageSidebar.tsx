import React, { forwardRef } from 'react';
import './mypageSidebar.scss';

interface MypageSidebarProps {
  isOpen: boolean;
  toggleSidebar: (e: any) => void;
}

const MypageSidebar = forwardRef<HTMLDivElement, MypageSidebarProps>(
  ({ isOpen, toggleSidebar }, ref) => {
    return (
      <div ref={ref} className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={toggleSidebar}>홈</li>
          <li onClick={toggleSidebar}>시간표</li>
          <li onClick={toggleSidebar}>나의 게시판/댓글</li>
          <li onClick={toggleSidebar}>나의 리뷰</li>
        </ul>
      </div>
    );
  },
);

MypageSidebar.displayName = 'MypageSidebar';

export default MypageSidebar;
