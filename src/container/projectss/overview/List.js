import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Progress, Pagination, Tag } from 'antd';
import { useSelector } from 'react-redux';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { ProjectPagination, ProjectListTitle, ProjectListAssignees, ProjectList } from '../style';
import { useDispatch } from 'react-redux';
import { projectGetData } from '../../../redux/command/actionCreator';
import './list.css'


function ProjectLists(props) {
  let projectss = useSelector((state) => state.projectss.pjs)
  
  const dispatch = useDispatch()

  const searchResult = projectss.filter(elem=>{
    return elem.title.includes(props.search) 
  })

  if(searchResult){
    projectss = searchResult
  }


  useEffect(() => {
    dispatch(projectGetData())
  }, [dispatch]);

  const dataSource = [];
  if (projectss.length)
    projectss.map((value) => {
      const { id, title, nhom_sp , nhom_thoi_gian, dbevn_product_min_invest, dbevn_product_percent,dbevn_product_time_invest  } = value;
      console.log(nhom_sp)
      return dataSource.push({
        key: id,
        project: (
          <ProjectListTitle>
            <Heading as="h4">
              {title}
            </Heading>
          </ProjectListTitle>
        ),
        startDate: <span className="date-started">{nhom_thoi_gian}</span>,
        person: <span className="date-started">{nhom_sp}</span>,
        status: <span className="date-started">{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dbevn_product_min_invest)}</span>,
        invested: <span className='invested'>{dbevn_product_percent}%</span>,
        profit: <span className='profit'>{dbevn_product_time_invest}</span>,
      
      });
    });

  const columns = [
    {
      title: 'Tên dự án',
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: 'Phiên',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'Nhóm sản phẩm',
      dataIndex: 'person',
      key: 'person',
    },
    {
      title: 'Đầu tư tối thiểu',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Tỷ số lợi nhuận',
      dataIndex: 'invested',
      key: 'invested',
    },
    {
      title: 'Thời gian đầu tư (phút)',
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
