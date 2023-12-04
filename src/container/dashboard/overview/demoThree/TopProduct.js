import React, { useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BorderLessHeading, TableDefaultStyle } from '../../../styled';
import { getUsersData } from '../../../../redux/users/actionCreator';
import { withdrawGetData } from '../../../../redux/command/actionCreator';
import { commandGetData } from '../../../../redux/command/actionCreator';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import tableData from '../../../../demoData/table-data.json';
import './dash.css'

const { topProduct } = tableData;

const productColumns = [
  {
    title: 'Tên dự án',
    dataIndex: 'productname',
    key: 'prroductname',
  },
  {
    title: 'Người đầu tư',
    dataIndex: 'deals',
    key: 'deals',
  },
  {
    title: 'Ngày đầu tư',
    dataIndex: 'day',
    key: 'day',
  },
  {
    title: 'Giá trị ',
    dataIndex: 'amount',
    key: 'amount',
  },
];

const TopProduct = React.memo(() => {
  const [productTab, setProductTab] = useState('today');

  const dispatch = useDispatch();
  let commands = useSelector((state) => state.commands.commands)
  let {  users } = useSelector((state) => {
    return {
      users: state.users.data,
    };
  });
  let topObjects = [];

  // Sắp xếp mảng theo giá trị value giảm dần
  topObjects =  commands.sort((a, b) => Number(b.total_invested) - Number(a.total_invested));

  // Lấy 5 đối tượng có giá trị cao nhất
  topObjects = topObjects.slice(0, 6);

// Kết quả: mảng 5 đối tượng có giá trị cao nhất
  console.log(topObjects)

  useEffect(()=>{
    dispatch(getUsersData());
    dispatch(commandGetData());

  },[dispatch])

  /* Tab Activation */
  const handleTabActivation = (value, event) => {
    event.preventDefault();
    setProductTab(value);
  };

  const productTableData = [];

  topObjects.map((value) => {
    const { id, product_name, user_phone, total_invested, created} = value;
    return productTableData.push({
      key: id,
      productname: (
        <div className="ninjadash-info-element align-center-v">
          <span className="ninjadash-info-element__text">{product_name}</span>
        </div>
      ),
      deals : user_phone,
      day: created,
      amount: Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total_invested ) 
    });
  });

  return (
    <div className="full-width-table table-top">
      <BorderLessHeading>
        <Cards
          title="Top Product"
          size="large"
        >
          <TableDefaultStyle className="ninjadash-having-header-bg">
            <div className="ninjadash-top-product table-responsive">
              <Table columns={productColumns} dataSource={productTableData} pagination={false} />
            </div>
          </TableDefaultStyle>
        </Cards>
      </BorderLessHeading>
    </div>
  );
});

export default TopProduct;
