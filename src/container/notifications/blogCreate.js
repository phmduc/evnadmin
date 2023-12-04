import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Progress, Spin, Input, Select  } from 'antd';

import UilEditAlt from '@iconscout/react-unicons/icons/uil-edit-alt';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';

import { Link, NavLink, Routes, Route, useParams , useNavigate} from 'react-router-dom';
import { ProjectDetailsWrapper, TaskLists } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { filterSinglePage } from '../../redux/blogs/actionCreator';
import ReactQuill from 'react-quill';
import { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { getUsersData } from '../../redux/users/actionCreator';
import { createNotification } from '../../redux/notification/actionCreator';

function BlogCreate() {
  const dispatch = useDispatch();

   const [type, setType] = useState('');

   const [user_id, setUser] = useState('');

   const [excerpt, setExcerpt] = useState('');

  

   let {  users } = useSelector((state) => {
    return {
      users: state.users.data,
    };
  });

  let sorted
  if(users){
    sorted = users.map((elem)=>{
      return{
        label: elem.usermeta.phone,
        value: elem.user_id

      }
    })
  }
   console.log(type, user_id)

   const handleCreateSubmit = ()=>{
     const values={
       user_ids: user_id,
       type,
       content: excerpt
     }
     dispatch(createNotification(values))
   }

   useEffect(()=>{
      dispatch(getUsersData())

   },[dispatch])
    return (
      <ProjectDetailsWrapper>
        <PageHeader
          className="ninjadash-page-header-main"
          ghost
          title={
            <div key="1" className="project-header">
              <Heading as="h2">Tạo mới thông báo</Heading>
            </div>
          }
          buttons={[
            <div key="1" className="project-action">
              <Link key={1} to="#" onClick={handleCreateSubmit} className="project-edit">
                <UilEditAlt />
                Save
              </Link>
              <Link key={2} to="#" className="project-remove">
                <UilTrashAlt />
                Close
              </Link>
            </div>,
          ]}
        />
        <Main>
          <Row gutter={25}>
            <Col xs={24}>
              <div className="about-project-wrapper" style={{minHeight: "unset"}}>
                <Cards title="Chọn loại thông báo">
                  <Select
                      onChange={(e)=>{setType(e)}}
                      showSearch
                      style={{
                      width: '100%',
                      marginLeft: 0
                      }}
                      placeholder="Search to Select"
                      optionFilterProp="children"
                      filterOption={(input, option) => (option?.label ?? '').includes(input)}
                      filterSort={(optionA, optionB) =>
                      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                      }
                      options = {[
                        {
                          value: 'tax',
                          label: 'Thông báo thuế'
                        },
                        {
                          value: 'insurance',
                          label: 'Thông báo bảo hiểm'
                        },
                        {
                          value: 'warning',
                          label: 'Xác minh tài khoản nghi vấn'
                        },
                      ]}
                  />
                </Cards>
              </div>
              <div className="about-project-wrapper" style={{minHeight: "unset"}}>
                <Cards title="Chọn người nhận">
                   <Select
                      onChange={(e)=>{setUser(e)}}
                      showSearch
                      mode="multiple"
                      style={{
                      width: '100%',
                      marginLeft: 0
                      }}
                      placeholder="Search to Select"
                      optionFilterProp="children"
                      filterOption={(input, option) => (option?.label ?? '').includes(input)}
                      filterSort={(optionA, optionB) =>
                      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                      }
                        options={sorted ? sorted : []}
                  />
                </Cards>
              </div>
              <div className="about-project-wrapper" style={{minHeight: "unset"}}>
                <Cards title="Nội dung thông báo">
                  <ReactQuill theme="snow" placeholder="Excerpt..."  value={excerpt} onChange={setExcerpt} />
                </Cards>
              </div>
            </Col> 
          </Row>
        </Main>
      </ProjectDetailsWrapper>
    );
}

export default BlogCreate;
