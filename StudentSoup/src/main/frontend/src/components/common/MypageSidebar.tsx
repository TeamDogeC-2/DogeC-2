import React, { useState } from 'react';
import './mypageSidebar.scss';

interface MypageSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MypageSidebar: React.FC<MypageSidebarProps> = ({ isOpen, onToggle }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>홈</li>
        <li>시간표</li>
        <li>나의 게시판/댓글</li>
        <li>나의 리뷰</li>
      </ul>
    </div>
  );
};

export default MypageSidebar;
