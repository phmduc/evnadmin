import React, { lazy, useState, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Spin, Select } from 'antd';
import { Routes, NavLink, Route, Link } from 'react-router-dom';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilApps from '@iconscout/react-unicons/icons/uil-apps';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import CreateProject from './overview/CreateProject';
import { ProjectHeader, ProjectSorting } from './style';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { filterProjectByStatus, sortingProjectByCategory } from '../../redux/project/actionCreator';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import Withdraw from './overview/withdraw';
import Deposit from './overview/deposit';

const List = lazy(() => import('./overview/List'));

function Project() {

  const dispatch = useDispatch();

  const [search, setSearch] = useState('')

  const handleSearch = (searchText) => {
      setSearch(searchText)
  };



  return (
    <>
      <ProjectHeader>
        <PageHeader
          className="ninjadash-page-header-main"
          ghost
          title="Danh sách lệnh"
      
        />
      </ProjectHeader>
      <Main className='commands'>
        <Row gutter={25}>
          <Col xs={24}>
            <ProjectSorting>
              <div className="project-sort-bar">
                <div className="project-sort-search">
                  <AutoComplete onSearch={handleSearch} placeholder="Search projects" patterns />
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
                  <Route index element={<List search={search} />} />
                  <Route path='/withdraw/*' element={<Withdraw search={search} />} />
                  <Route path='/deposit/*' element={<Deposit search={search} />} />


                </Routes>
              </Suspense>
            </div>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Project;
