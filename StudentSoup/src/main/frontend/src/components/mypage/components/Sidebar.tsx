import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faHome,
  faCalendarAlt,
  faUserEdit,
  faComment,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './sidebar.scss';

interface SidebarProps {
  handleSelectPage?: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ handleSelectPage }) => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/mypage');
    handleSelectPage?.('preview');
  };
  const handleBoardReplyClick = () => {
    navigate('/mypage');
    handleSelectPage?.('boardreply');
  };
  const handleReviewClick = () => {
    navigate('/mypage');
    handleSelectPage?.('review');
  };

  return (
    <div className="sidebar">
      <button className="menu-icon">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className="sidebar-menu">
        <div className="menu-item" onClick={handleHomeClick}>
          <FontAwesomeIcon icon={faHome} className="icon" />홈
        </div>
        <li onClick={() => navigate('/mypage/scheduler')}>
          <FontAwesomeIcon icon={faCalendarAlt} /> 시간표
        </li>
        <li onClick={handleBoardReplyClick}>
          <FontAwesomeIcon icon={faComment} /> 나의 게시판/댓글
        </li>
        <li onClick={handleReviewClick}>
          <FontAwesomeIcon icon={faStar} /> 나의 리뷰
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
