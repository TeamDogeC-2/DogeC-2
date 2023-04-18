import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './restaurantHeartInfo.scss';
import empty_heart from '../../img/empty_heart.svg';
import heart from '../../img/heart.svg';

interface Props {
  memberId: number | undefined;
  restaurantId: number;
  menuList: any;
  menu: any;
}

const RestaurantHeartInfo = ({ memberId, restaurantId, menuList, menu }: Props) => {
  const navigate = useNavigate();
  const [like, isLike] = useState<boolean>(menu.like);
  const [clicklike, isClickLike] = useState<boolean>();
  const [likeCount, setlikeCount] = useState<number>(menu.likedCount);

  const handleHeartCount = async (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    const saveMenuId = e.target.parentElement.parentElement.id;
    console.log(menuList);
    console.log(e);
    if (!memberId) {
      if (confirm('로그인후 이용가능한 기능입니다. 로그인하시겠습니까?')) {
        navigate('/login');
      } else {
        /* empty */
      }
    } else {
      await axios
        .post(`/restaurant/${restaurantId}/menu/like`, {
          restaurantMenuId: saveMenuId,
          memberId,
        })
        .then(res => {
          isLike(res.data.data.like);
          setlikeCount(res.data.data.likedCount);
          console.log(res.data);
        });
      isClickLike(!clicklike);
      isLike(!like);
    }
  };
  return (
    <div
      className="restaurant-detail-bottom-menu-heart-div"
      id={menuList.restaurantMenuId}
      key={menuList.restaurantMenuId}
      onClick={handleHeartCount}
    >
      {like ? (
        <img
          src={heart}
          alt=""
          id={menuList.restaurantMenuId}
          className="restaurant-detail-bottom-menu-heart"
        />
      ) : (
        <img
          src={empty_heart}
          alt=""
          id={menuList.restaurantMenuId}
          className="restaurant-detail-bottom-menu-heart"
        />
      )}

      <p id={menuList.restaurantMenuId}>{clicklike ? likeCount : menu.likedCount}</p>
    </div>
  );
};

export default RestaurantHeartInfo;
