import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Progress, Pagination, Tag } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { ProjectPagination, ProjectListTitle, ProjectListAssignees, ProjectList } from '../style';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { commandGetData } from '../../../redux/command/actionCreator'
import { useDispatch } from 'react-redux';
import { getUsersData } from '../../../redux/users/actionCreator';
import './list.css'


function ProjectLists(props) {
  let commands = useSelector((state) => state.commands.commands)
  
  const dispatch = useDispatch()

  const searchResult = commands.filter(elem=>{
    return elem.product_name.includes(props.search) || elem.user_phone.includes(props.search)
  })

  if(searchResult){
    commands = searchResult
  }


  useEffect(() => {
    dispatch(commandGetData())
    dispatch(getUsersData());
  }, [dispatch]);

  const dataSource = [];
  if (commands.length)
    commands.map((value) => {
      const { id, product_name, created, status, user_id, user_phone, total_invested, total_profit } = value;
      return dataSource.push({
        key: id,
        project: (
          <ProjectListTitle>
            <Heading as="h4">
              {product_name}
            </Heading>
          </ProjectListTitle>
        ),
        startDate: <span className="date-started">{created}</span>,
        person: <span className="date-started">{user_phone}</span>,
        status: <Tag className={status}>{status}</Tag>,
        invested: <span className='invested'>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total_invested)}</span>,
        profit: <span className='profit'>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total_profit)}</span>,
      
      });
    });

  const columns = [
    {
      title: 'Tên dự án',
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: 'Ngày đầu tư',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'Người đầu tư',
      dataIndex: 'person',
      key: 'person',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Số tiền đầu tư',
      dataIndex: 'invested',
      key: 'invested',
    },
    {
      title: 'Số tiền lợi nhuận',
      dataIndex: 'profit',
      key: 'profit',
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

export default ProjectLists;
