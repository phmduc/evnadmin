import React, { useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BorderLessHeading, TableDefaultStyle } from '../../../styled';
import { getUsersData } from '../../../../redux/users/actionCreator';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import tableData from '../../../../demoData/table-data.json';

const { activeUserData } = tableData;

const sellerColumns = [
  {
    title: 'Số điện thoại',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Rank',
    dataIndex: 'company',
    key: 'company',
  },

  {
    title: 'Tổng số tiền đầu tư/ Tổng tiền rút ',
    dataIndex: 'revenue',
    key: 'revenue',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
  },
];



const ActiveUser = React.memo(() => {

  const dispatch = useDispatch()
  const [userTab, setUserTab] = useState('today');


  let {  users } = useSelector((state) => {
    return {
      users: state.users.data,
    };
  });

  const verifiedUsers = users.filter(item => item.usermeta.verify === "Đã xác minh");
  const topVerifiedUsers = verifiedUsers.slice(0, 6);

  useEffect(()=>{
    dispatch(getUsersData());

  },[dispatch])

  console.log(users)
  /* Tab Activation */
  const handleTabActivation = (value, e) => {
    e.preventDefault();
  };

  const userTableData = [];

 topVerifiedUsers.map((value) => {
    const { user_id,usermeta:{phone,  rank,  wallet_buyed, wallet_cashed, verify } } = value;
    return userTableData.push({
      key : user_id,
      username: (
        <div className="ninjadash-info-element align-center-v">
          <span className="ninjadash-info-element__text">{phone}</span>
        </div>
      ),
      company: rank,
      revenue: `${ Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(wallet_buyed ) }/${ Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(wallet_cashed) }`,
      status: <span className={`status blocked`}>{verify}</span>,
    });
  });

  return (
    <div className="full-width-table usertop">
      <BorderLessHeading>
        <Cards
          title="Active User"
          size="large"
        >
          <TableDefaultStyle className="ninjadash-having-header-bg">
            <div className="table-responsive">
              <Table columns={sellerColumns} dataSource={userTableData} pagination={false} />
            </div>
          </TableDefaultStyle>
        </Cards>
      </BorderLessHeading>
    </div>
  );
});

export default ActiveUser;
