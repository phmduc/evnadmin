import UilAngleDown from '@iconscout/react-unicons/icons/uil-angle-down';
import UilBell from '@iconscout/react-unicons/icons/uil-bell';
import UilDollarSign from '@iconscout/react-unicons/icons/uil-dollar-sign';
import UilSetting from '@iconscout/react-unicons/icons/uil-setting';
import UilSignout from '@iconscout/react-unicons/icons/uil-signout';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import UilUsersAlt from '@iconscout/react-unicons/icons/uil-users-alt';
import { Avatar } from 'antd';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { InfoWraper, NavAuth, UserDropDwon } from './auth-info-style';
import Message from './Message';
import Notification from './Notification';
import Search from './Search';
import Settings from './settings';
import { logOut } from '../../../redux/authentication/actionCreator';
import { Dropdown } from '../../dropdown/dropdown';
import Heading from '../../heading/heading';
import { Popover } from '../../popup/popup';



const AuthInfo = React.memo(() => {
  const dispatch = useDispatch();
  
  const [state, setState] = useState({
    flag: 'en',
  });

  const [username, setName] = useState('');
  const [role, setRole] = useState('');


  useEffect(()=>{
     setName( sessionStorage.getItem('username'));
     setRole( sessionStorage.getItem('role'));
  },[])

  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { flag } = state;

  const SignOut = (e) => {
    e.preventDefault();
    dispatch(logOut(() => navigate('/')));
  };

  const userContent = (
    <UserDropDwon>
      <div className="user-dropdwon">
        <figure className="user-dropdwon__info">
          <figcaption>
            <Heading as="h5">{username}</Heading>
            <p>{role}</p>
          </figcaption>
        </figure>
        <ul className="user-dropdwon__links">
          <li>
            <Link to="#">
              <UilUser /> Profile
            </Link>
          </li>
          <li>
            <Link to="#">
              <UilSetting /> Settings
            </Link>
          </li>
          <li>
            <Link to="#">
              <UilDollarSign /> Billing
            </Link>
          </li>
          <li>
            <Link to="#">
              <UilUsersAlt /> Activity
            </Link>
          </li>
          <li>
            <Link to="#">
              <UilBell /> Help
            </Link>
          </li>
        </ul>
        <Link className="user-dropdwon__bottomAction" onClick={SignOut} to="#">
          <UilSignout /> Sign Out
        </Link>
      </div>
    </UserDropDwon>
  );

  const onFlagChangeHandle = (value, e) => {
    e.preventDefault();
    setState({
      ...state,
      flag: value,
    });
    i18n.changeLanguage(value);
  };

  const country = (
    <NavAuth>
      <Link onClick={(e) => onFlagChangeHandle('en', e)} to="#">
        <img src={require('../../../static/img/flag/en.png')} alt="" />
        <span>English</span>
      </Link>
      <Link onClick={(e) => onFlagChangeHandle('esp', e)} to="#">
        <img src={require('../../../static/img/flag/esp.png')} alt="" />
        <span>Spanish</span>
      </Link>
      <Link onClick={(e) => onFlagChangeHandle('ar', e)} to="#">
        <img src={require('../../../static/img/flag/ar.png')} alt="" />
        <span>Arabic</span>
      </Link>
    </NavAuth>
  );

  return (
    <InfoWraper>
      {/* <Search />
      <Message />
      <Notification /> */}
      <div className="ninjadash-nav-actions__item ninjadash-nav-actions__language">
        <Dropdown placement="bottomRight" content={country} trigger="click">
          <Link to="#" className="ninjadash-nav-action-link">
            <img src={require(`../../../static/img/flag/${flag}.png`)} alt="" />
          </Link>
        </Dropdown>
      </div>
      <div className="ninjadash-nav-actions__item ninjadash-nav-actions__author">
        <Popover placement="bottomRight" content={userContent} action="click">
          <Link to="#" className="ninjadash-nav-action-link">
            <span className="ninjadash-nav-actions__author--name">{username}</span>
            <UilAngleDown />
          </Link>
        </Popover>
      </div>
    </InfoWraper>
  );
});

export default AuthInfo;
