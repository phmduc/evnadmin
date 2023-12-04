import {
  UilAirplay,
  UilArrowGrowth,
  UilAt,
  UilBagAlt,
  UilBookAlt,
  UilBookOpen,
  UilBookReader,
  UilCalendarAlt,
  UilChartBar,
  UilChat,
  UilCheckSquare,
  UilCircle,
  UilClipboardAlt,
  UilClock,
  UilCompactDisc,
  UilCreateDashboard,
  UilDatabase,
  UilDocumentLayoutLeft,
  UilEdit,
  UilEnvelope,
  UilExchange,
  UilExclamationOctagon,
  UilFileShieldAlt,
  UilHeadphones,
  UilIcons,
  UilImages,
  UilLayerGroup,
  UilMap,
  UilPresentation,
  UilQuestionCircle,
  UilSearch,
  UilServer,
  UilSetting,
  UilSquareFull,
  UilTable,
  UilUsdCircle,
  UilUsersAlt,
  UilWindowSection,
} from '@iconscout/react-unicons';
import { Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import propTypes from 'prop-types';
import { NavTitle } from './Style';
import { changeLayoutMode } from '../redux/themeLayout/actionCreator';

function MenuItems({ toggleCollapsed }) {
  const { t } = useTranslation();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const { topMenu } = useSelector((state) => {
    return {
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  });

  const dispatch = useDispatch();

  const path = '/admin';

  const pathName = window.location.pathname;
  const pathArray = pathName ? pathName.split(path) : [];
  const mainPath = pathArray.length > 1 ? pathArray[1] : '';
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = (keys) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = (item) => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  const changeLayout = (mode) => {
    dispatch(changeLayoutMode(mode));
  };
  const darkmodeActivated = () => {
    document.body.classList.add('dark-mode');
  };
  const darkmodeDiactivated = () => {
    document.body.classList.remove('dark-mode');
  };

  const items = [

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}`}>
        {t('Dashboard')}
      </NavLink>,
      'dashboard',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}`}>
          <UilCreateDashboard />
        </NavLink>
      ),
    ),
   
   
    getItem(t('Tin tức'), 'blogs', !topMenu && <UilEnvelope />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/blogs/view`}>
          {t('Danh sách tin tức')}
        </NavLink>,
        'Danh sách tin tức',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/blogs/create`}>
          {t('Thêm mới')}
        </NavLink>,
        'Thêm mới',
        null,
      ),
    ]),
    
    getItem(t('Thông báo nền tảng'), 'notifys', !topMenu && <UilEnvelope />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/blogs/notifications/view`}>
          {t('Danh sách bài viết')}
        </NavLink>,
        'Danh sách bài viết',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/blogs/notifications/create/`}>
          {t('Thêm mới')}
        </NavLink>,
        'Thêm mới Thông Báo',
        null,
      ),
    ]),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/project/view`}>
        {t('Lệnh giao dịch')}
      </NavLink>,
      'projectList',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/demo-3`}>
          <UilBagAlt />
        </NavLink>
      ),
      
    ),
    getItem(t('Rút tiền'), 'icons', !topMenu && <UilIcons />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/project/view/withdraw`}>
          {t('Danh sách lệnh rút')}
        </NavLink>,
      'lệnh rút',
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/project/create`}>
          {t('Tạo lệnh rút')}
        </NavLink>,
      'tạo rút',

      ),
    ]),
    
    getItem(t('Nạp tiền'), 'iconss', !topMenu && <UilIcons />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/project/view/deposit`}>
          {t('Danh sách lệnh nạp')}
        </NavLink>,
      'lệnh nạp',

      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/project/deposit/create`}>
          {t('Tạo lệnh nạp')}
        </NavLink>,
      'tạo nạp',

      ),
    ]),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/command/view`}>
        {t('Danh sách dự án')}
      </NavLink>,
      'dứ án',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/demo-3`}>
          <UilBagAlt />
        </NavLink>
      ),
    ),
    getItem(t('Người dùng'), 'users', !topMenu && <UilUsersAlt />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/users/dataTable`}>
          {t('Danh sách người dùng')} 
        </NavLink>,
        'user-dataTable',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/users/add-user/info`}>
          {t('Thêm người dùng')}
        </NavLink>,
        'addUser',
        null,
      ),
     
    ]),
 
  
   
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/pages/settings`}>
        {t('settings')}
      </NavLink>,
      'settings',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/pages/settings`}>
          <UilSetting />
        </NavLink>
      ),
    ),

 
 
   
  
  ];

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<UilEllipsisV />}
      openKeys={openKeys}
      items={items}
    />
  );
}

MenuItems.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
