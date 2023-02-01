import Menu from '../../img/menu.jpg';
import CheckRight from '../../img/check_right.png';

import CheckSquareIcon from '../../img/board/icon_check_square.png';
import UserIcon from '../../img/board/icon_users.png';
import ChatIcon from '../../img/board/icon_chat.png';
import DocumentIcon from '../../img/board/icon_document.png';
import CheckSquareActiveIcon from '../../img/board/icon_check_square_active.png';
import UserActiveIcon from '../../img/board/icon_users_active.png';
import ChatActiveIcon from '../../img/board/icon_chat_active.png';
import DocumentActiveIcon from '../../img/board/icon_document_active.png';

import cn from 'clsx';
import { BORDER_MENU } from './boardMain';
import _ from 'lodash';

interface propTypes {
  menu: BORDER_MENU;
  setMenu: React.Dispatch<React.SetStateAction<BORDER_MENU>>;
}

const BoardSidebar = (props: propTypes) => {
  const { menu, setMenu } = props;

  const menuList = [
    { value: BORDER_MENU.ALL, imgPath: DocumentIcon, activeImgPath: DocumentActiveIcon },
    { value: BORDER_MENU.FREE, imgPath: ChatIcon, activeImgPath: ChatActiveIcon },
    { value: BORDER_MENU.CONSULTING, imgPath: UserIcon, activeImgPath: UserActiveIcon },
    { value: BORDER_MENU.TIP, imgPath: CheckSquareIcon, activeImgPath: CheckSquareActiveIcon },
    { value: BORDER_MENU.NOTICE, imgPath: DocumentIcon, activeImgPath: DocumentActiveIcon },
  ];

  const onClickBoardMenu = (currentMenu: BORDER_MENU) => {
    setMenu(currentMenu);
  };

  return (
    <div className="flex-[3] w-[354px] h-[120vh] items-center justify-center flex-col shadow-2xl z-[2]">
      <ul className="text-[20px] leading-[28px]">
        <li className="mb-[65px]">
          <div className="flex items-center w-full h-[54px] font-bold pt-[35px]">
            <img src={Menu} alt="" className="w-[15.5px] h-[11.64px] ml-[40px] mr-[13.47px]" />
            <span className="w-full">Menu</span>
          </div>
        </li>

        {_.map(menuList, (item, index) => {
          const { value, imgPath, activeImgPath } = item;
          const isActive = menu === value;

          return (
            <li className="mb-[20px]" key={index}>
              <div
                className={cn('flex items-center w-full h-[54px] mt-[26px] cursor-pointer', {
                  ['bg-[#F5F5F5]']: isActive,
                  ['']: !isActive,
                })}
                onClick={() => {
                  onClickBoardMenu(value);
                }}
              >
                <img
                  src={isActive ? activeImgPath : imgPath}
                  alt="all"
                  className="w-[16px] h-[15px] ml-[40px] mr-[13px]"
                />
                <span
                  className={cn('w-full font-medium', {
                    ['text-[#FF611D]']: isActive,
                    ['']: !isActive,
                  })}
                >
                  {value}
                </span>
                <img
                  src={isActive ? '' : CheckRight}
                  alt=""
                  className="w-[7px] h-[10px] mr-[26px]"
                />
                <div
                  className={cn('w-[4px] h-[54px]', {
                    ['bg-[#FF611D]']: isActive,
                    ['']: !isActive,
                  })}
                ></div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BoardSidebar;
