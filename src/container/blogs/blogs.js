import React, { lazy, useState, useEffect, Suspense } from 'react';
import { Routes, NavLink, Route, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AutoComplete } from 'antd';
import { blogsGetData } from '../../redux/blogs/actionCreator';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import { Row, Col, Spin, Select } from 'antd';
import { ProjectHeader, ProjectSorting } from './style';
import { Button } from '../../components/buttons/buttons';
import { PageHeader } from '../../components/page-headers/page-headers.js';
import { Main } from '../styled';
import { categoriesGetData } from '../../redux/blogs/actionCreator';

const List = lazy(() => import('./overview/list'));

function Blogs() {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => ({
    blogs: state.blogs.blogs,
    loading: state.blogs.loading,
    error: state.blogs.error,
  }));

  useEffect(() => {
    dispatch(blogsGetData());
    dispatch(categoriesGetData())

  }, [dispatch]);


  const navigate = useNavigate();

  const goto = () =>{
    navigate('/admin/blogs/create'); // Chuyển hướng đến '/new-page'
  }

  return <>
       <ProjectHeader>
        <PageHeader
          className="ninjadash-page-header-main"
          title="Tin tức"
          buttons={[
            <Button onClick={goto} key="1" type="primary" size="default">
              <UilPlus /> Tạo tin tức
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
                  {/* <AutoComplete  placeholder="Search projects" /> */}
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
                <Routes>
                  <Route path='/*' element={<List />} />
                </Routes>
              </Suspense>
            </div>
          </Col>
        </Row>
      </Main>
    </>;
}

export default Blogs;
