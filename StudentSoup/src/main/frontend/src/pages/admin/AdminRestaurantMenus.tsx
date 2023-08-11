import React, { useEffect, useState } from 'react';
import './adminrestaurantmenus.scss';
import AdminNavbar from './AdminNavbar';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from 'apis/utils/AxiosInterceptor';
import AdminMenuModal from './AdminMenuModal';
interface MenuType {
  cost: number;
  fileName: string | null;
  like: boolean;
  likedCount: number;
  restaurantMenuCategory: string;
  restaurantMenuId: number;
  restaurantMenuName: string;
}
const AdminRestaurantMenus = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const restaurantId = location.state?.restaurantId;
  const [menus, setMenus] = useState<MenuType[]>([]);
  const getMenus = () => {
    axiosInstance
      .get(`/admin/${restaurantId}/restaurantMenus`)
      .then(res => {
        setMenus(res.data[0]);
      })
      .catch(err => {
        console.error(err);
      });
  };
  useEffect(() => {
    getMenus();
  }, [restaurantId]);

  const handleAddMenuClick = () => {
    setIsOpen(true); // 버튼 클릭시 모달 열기
  };

  const handleCloseModal = () => {
    setIsOpen(false); // 모달 닫기
    getMenus();
  };

  return (
    <div className="adminpage-maincontainer">
      <AdminMenuModal isOpen={isOpen} onClose={handleCloseModal} restaurantId={restaurantId} />
      <AdminNavbar />
      <div className="adminpage-menu-header">
        <h2>음식점 목록</h2>
      </div>
      <div className="adminpage-add-menu-container">
        <button onClick={handleAddMenuClick} className="adminpage-add-menu-button">
          메뉴 추가
        </button>
      </div>
      <table className="adminrestaurantmenus-table">
        <thead>
          <tr>
            <th>음식 사진</th>
            <th>메뉴 이름</th>
            <th>메뉴 카테고리</th>
            <th>가격</th>
            <th>좋아요 수</th>
          </tr>
        </thead>
        <tbody>
          {menus.map(menu => (
            <tr key={menu.restaurantMenuId}>
              <td>
                <img src={`/image/${menu.fileName}` ?? ''} />
              </td>
              <td>{menu.restaurantMenuName}</td>
              <td>{menu.restaurantMenuCategory}</td>
              <td>{menu.cost}원</td>
              <td>{menu.likedCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminRestaurantMenus;
