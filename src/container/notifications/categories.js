import React, { lazy, useState, useEffect, Suspense } from 'react';
import { Routes, NavLink, Route, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { AutoComplete } from 'antd';
import {categoriesGetData } from '../../redux/blogs/actionCreator';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import { Row, Col, Spin, Select, Table } from 'antd';
import { ProjectHeader, ProjectSorting } from './style';
import { Button } from '../../components/buttons/buttons';
import { PageHeader } from '../../components/page-headers/page-headers.js';
import { Main } from '../styled';
import { ProjectListTitle } from './style';
import Heading from '../../components/heading/heading';
import { Dropdown } from '../../components/dropdown/dropdown';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import { Cards } from '../../components/cards/frame/cards-frame';
import { ProjectPagination, ProjectListAssignees, ProjectList } from './style';
import CreateProject from './overview/CreateProject';


const List = lazy(() => import('./overview/list'));

function Categories() {
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch();
  const { category, loading, error } = useSelector((state) => ({
    category: state.category.category,
    loading: state.category.loading,
    error: state.category.error,
  }));

  useEffect(() => {
    dispatch(categoriesGetData());
  }, []);

  const navigate = useNavigate();

  const showModal = () => {
    setVisible(true)
  };

  const onCancel = () => {
    setVisible(false)
  };

  const dataSource = [];
  if (category.length)
    category.map((value) => {
      const { id, name, count } = value;
      return dataSource.push({
        key: id,
        name: (
          <ProjectListTitle>
            <Heading as="h4">
              <Link to={`/admin/blogs/category/${id}`}>{name}</Link>
            </Heading>
          </ProjectListTitle>
        ),
        count: <span className="date-started">{count}</span>,
        // status: <Tag className={status}>{status}</Tag>,
        // completion: (
        //   <div className="project-list-progress">
        //     <Progress percent={status === 'complete' ? 100 : percentage} strokeWidth={5} className="progress-primary" />
        //     <p>12/15 Task Completed</p>
        //   </div>
        // ),
        action: (
          <Dropdown
            className="wide-dropdwon"
            content={
              <>
                <Link to={`/admin/blogs/blogDetails/${id}`} >View</Link>
                <Link to="#">Edit</Link>
                {/* <Link to="#" onClick={()=>{dispatch(blogsDeleteData(id,()=>{window.location.reload()}))}} >Delete</Link> */}

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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  return <>
       <ProjectHeader>
        <PageHeader
          className="ninjadash-page-header-main"
          title="Categories"
          subTitle={<>{category ? category.length : '0'} Danh mục</>}
          buttons={[
            <Button onClick={showModal} key="1" type="primary" size="default">
                <UilPlus /> Create Category
            </Button>,
          ]}
        />
      </ProjectHeader>
      <Main>
            <Row gutter={25}>
            <Col xs={24}>
            <ProjectSorting>
                <div className="project-sort-bar">
                    <div className="project-sort-search">
                    <AutoComplete  placeholder="Search projects" />
                    </div>
                </div>
                </ProjectSorting>
                <div>
                <Suspense
                    fallback={
                    <div className="spin">
                        <Spin />
                    </div>
                    }
                >
                    <Row gutter={25}>
                        <Col xs={24}>
                            <Cards headless>
                            <ProjectList>
                                <div className="table-responsive">
                                <Table pagination={false} dataSource={dataSource} columns={columns} />
                                </div>
                            </ProjectList>
                            </Cards>
                        </Col>
                        <Col xs={24} className="pb-30">
                            
                        </Col>
                    </Row>
              </Suspense>
            </div>
          </Col>
        </Row>
      </Main>
      <CreateProject onCancel={onCancel} visible={visible} />

    </>;
}

export default Categories;
