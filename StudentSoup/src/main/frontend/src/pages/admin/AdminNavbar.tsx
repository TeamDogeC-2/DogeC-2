import React, { useState } from 'react';
import './adminnavbar.scss';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleMenuClick = (menu: string | null) => {
    if (selectedMenu === menu) {
      setSelectedMenu(null);
    } else {
      setSelectedMenu(menu);
    }
  };

  const handleAddRestaurantClick = () => {
    navigate('/admin/restaurant');
  };

  return (
    <div className="adminpage-navbar">
      <div onClick={() => handleMenuClick(null)}>회원관리</div>
      <div onClick={() => handleMenuClick(null)}>학교관리</div>
      <div onClick={() => handleMenuClick(null)}>학과관리</div>
      <div onClick={() => handleMenuClick('음식점 관리')}>
        음식점 관리
        {selectedMenu === '음식점 관리' && (
          <div className="sub-menu">
            <div onClick={handleAddRestaurantClick}>음식점 등록</div>
            <div>음식점 조회</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNavbar;
