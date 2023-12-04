import React, { useState, lazy, Suspense } from 'react';
import { Row, Col, Pagination, Skeleton, Popconfirm } from 'antd';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { Link, Routes, Route, NavLink } from 'react-router-dom';
import { UsercardWrapper, UserCarrdTop } from '../pages/style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CardToolbox } from '../styled';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Table } from 'antd';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersData } from '../../redux/users/actionCreator';
import { useEffect } from 'react';
import { deleteUser } from '../../redux/users/actionCreator';
import { TableWrapper } from '../styled';
import { UserTableStyleWrapper } from '../pages/style';   
import Heading from '../../components/heading/heading';

function Users() {

  const [render, setRen] =useState(false)
  const dispatch = useDispatch();
  
  let {  users } = useSelector((state) => {
    return {
      users: state.users.data,
    };
  });

  const [search, setSearch] = useState('')
  useEffect(()=>{
    dispatch(getUsersData())
  },[dispatch, render])

  const handleSearch = (searchText) => {
    setSearch(searchText)
};

  const confirm = (id)=>{
    dispatch(deleteUser(id))
    setRen(true)
  }

  const searchResult = users.filter(elem=>{
    return elem.usermeta.phone.includes(search) 
  })

  if(searchResult){
    users =  searchResult;
  }
  const sortedItems = users.sort((a, b) => {
    if (
      Number(a.user_id) > Number(b.user_id)
    ) {
      return -1;
    }
    if (
      Number(a.user_id) < Number(b.user_id)

    ) {
      return 1;
    }
    return 0;
  });


    let usersTableData= []
    users.map((user) => {
    const { user_id,usermeta:{phone, refcode, inivationcode, rank, wallet, wallet_can_cash,  wallet_buyed, wallet_cashed, verify, status } } = user;
    return usersTableData.push({
      key: user_id,
      user: (
        <div className="user-info">
          <figcaption>
            <Heading className="user-name" as="h6">
              <Link to={`/admin/user/${user_id}`}>
                {phone}
              </Link>
            </Heading>
          </figcaption>
        </div>
      ),
      invite:  
        <div className="user-info">
          <figcaption>
            <Heading className="user-name" as="h6">
                {refcode ? refcode : 'Chưa cập nhật'} 
            </Heading>
          </figcaption>
        </div>,
      invitation:  
      <div className="user-info">
        <figcaption>
          <Heading className="user-name" as="h6">
              {inivationcode} 
          </Heading>
        </figcaption>
      </div>,
      rank:  
      <div className="user-info">
        <figcaption>
          <Heading className="user-name" as="h6">
              {rank ? rank : 'VIP 0'} 
          </Heading>
        </figcaption>
      </div>,
      wall:  
      <div className="user-info">
        <figcaption>
          <Heading className="user-name" as="h6">
            {`${ Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(wallet ) }/${ Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(wallet_can_cash) }`}
          </Heading>
        </figcaption>
      </div>,
      
      verify: 
      <div className="user-info">
        <figcaption>
          <Heading className="user-name" as="h6">
              {verify ? verify : 'Chưa xác minh'} 
          </Heading>
        </figcaption>
      </div>,
      status: 
      <div className="user-info">
        <figcaption>
          <Heading className="user-name" as="h6">
              {status == 'active' ? 'Đang hoạt động' : 'Đã khoá'} 
          </Heading>
        </figcaption>
      </div>,
      action: (
        <div className="table-actions">
          <Link className="btn-icon" type="info" to={`/admin/user/${user_id}`} shape="circle">
            <UilEdit />
          </Link>
          <Popconfirm
            placement="right"
            title='Xác nhận xoá user?'
            description='Bạn có chắc xoá user này?'
            onConfirm={()=>confirm(user_id)}
            okText="Có"
            cancelText="Huỷ"
          >
            <Button><UilTrashAlt />
              </Button>
          </Popconfirm>
        </div>
      ),
    });
  });

  const usersTableColumns = [
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Mã mời',
      dataIndex: 'invite',
      key: 'invite',
    },
     {
      title: 'Mã người mời',
      dataIndex: 'invitation',
      key: 'invitation',
    },
    {
      title: 'Hạng TV',
      dataIndex: 'rank',
      key: 'rank',
    },
    {
      title: 'Tài sản / có thể rút',
      dataIndex: 'wall',
      key: 'wall',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Xác minh tên thật',
      dataIndex: 'verify',
      key: 'verify',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
    },
  ];


  return (
    <>
      <CardToolbox>
        <UserCarrdTop>
          <PageHeader
            className="ninjadash-page-header-main "
            ghost
            title="Users Card"
            subTitle={
              <>
                <span className="title-counter">{users.length} Users </span>
                <AutoComplete
                  onSearch={handleSearch}
                  // dataSource={notData}
                  placeholder="Tìm kiếm bằng số điện thoại"
                  width="100%"
                  patterns
                />
              </>
            }
            buttons={[
              <Button className="btn-add_new" size="default" type="primary" key="1">
                <Link to="/admin/users/add-user/info">
                  <UilPlus /> Add New User
                </Link>
              </Button>,
             
            ]}
          />
        </UserCarrdTop>
      </CardToolbox>
      <Main >
        <UsercardWrapper>
          <Row gutter={25}>
            <>
              <Cards headless>
                <UserTableStyleWrapper>
                  <TableWrapper className="table-responsive userjs">
                    <Table
                      dataSource={usersTableData}
                      columns={usersTableColumns}
                      // pagination={{
                      //   defaultPageSize: 5,
                      //   total: usersTableData.length,
                      //   showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                      // }}
                    />
                  </TableWrapper>
                </UserTableStyleWrapper>
              </Cards>
              {/* <Col xs={24}>
                <div className="user-card-pagination">
                  <Pagination
                    showSizeChanger
                    defaultCurrent={6}
                    total={500}
                  />
                </div>
              </Col> */}
            </>
          </Row>
        </UsercardWrapper>
      </Main>
    </>
  );
}

export default Users;
