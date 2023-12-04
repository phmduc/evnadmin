import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Progress, Pagination, Tag } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { ProjectPagination, ProjectListTitle, ProjectListAssignees, ProjectList } from '../style';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { withdrawGetData, approveGetData } from '../../../redux/command/actionCreator'
import { useDispatch } from 'react-redux';
import { getUsersData } from '../../../redux/users/actionCreator';
import './list.css'
import { toast } from 'react-toastify';


function Withdraw(props) {
  let withs = useSelector((state) => state.withs.withs)
  
  const dispatch = useDispatch()

  const searchResult = (withs.filter(elem=>{
    return elem.user_phone.includes(props.search) || elem.value.includes(props.search)
  }))

  if(searchResult){
    withs = searchResult
  }

  const handleApprove = (id, user_id)=>{
    const data = {
        order_id: id,
        status: 'completed',
        user_id: user_id
    }
    dispatch(approveGetData(data))
  }

  useEffect(() => {
    dispatch(withdrawGetData())
    dispatch(getUsersData());
  }, [dispatch]);

  const dataSource = [];
  if (withs.length)
    withs.map((values, index) => {
      const { id, created, status, user_id, user_phone, value } = values;
      return dataSource.push({
        key: id,
        stt: <span className="date-started">{index + 1}</span>,
        startDate: <span className="date-started">{created}</span>,
        person: <span className="date-started">{user_phone}</span>,
        status: <Tag className={status}>{status}</Tag>,
        value: <span className='value'>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)}</span>,
        action: (
          <Dropdown
            className="wide-dropdwon"
            content={
              <>
                {(status != 'completed') 
                ? 
                <Link onClick={()=>{handleApprove(id, user_id)}} to="#">Phê duyệt</Link>
                : 
                <span>Đã phê duyệt</span>
                }
              </>
            }
          >
            <Link to="#">
              <UilEllipsisH />
            </Link>
          </Dropdown>
        ),
      });
    });

  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
    },
    {
      title: 'Ngày rút',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'Người rút',
      dataIndex: 'person',
      key: 'person',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Số tiền rút',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  return (
    <Row gutter={25}>
      <Col xs={24}>
        <Cards headless>
          <ProjectList>
            <div className="table-responsive">
              <Table pagination={true} dataSource={dataSource} columns={columns} />
            </div>
          </ProjectList>
        </Cards>
      </Col>
     
    </Row>
  );
}

export default Withdraw;
