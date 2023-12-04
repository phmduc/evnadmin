import React, { lazy,  Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Spin, Select, Form, Input } from 'antd';
import { Routes, NavLink, Route, Link } from 'react-router-dom';
import CreateProject from './overview/CreateProject';
import { ProjectHeader, ProjectSorting } from './style';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { filterProjectByStatus, sortingProjectByCategory } from '../../redux/project/actionCreator';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { BasicFormWrapper } from '../styled';
 import { Cards } from '../../components/cards/frame/cards-frame';
 import { useEffect, useState } from 'react';
 import { getUsersData } from '../../redux/users/actionCreator';
 import { withdrawCommand } from '../../redux/command/actionCreator';
const Grid = lazy(() => import('./overview/Grid'));
const List = lazy(() => import('./overview/List'));

function Project() {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.headerSearchData);
  const [form] = Form.useForm();
  const [id, setId] = useState('')
  const [money, setMoney] = useState('')

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

  const handleSubmit = ()=>{
    if(Number(money) >0){
    const data={
      user_id: id,
      value: money,
    }
    dispatch(withdrawCommand(data))
    }
  }
  useEffect(()=>{
    dispatch(getUsersData())
  },[dispatch])


  return (
    <>
      <ProjectHeader>
        <PageHeader
          className="ninjadash-page-header-main"
          ghost
          title="Tạo lệnh"
       
        />
      </ProjectHeader>
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <ProjectSorting>
              <div className="project-sort-bar">
              </div>
            </ProjectSorting>
            <div>
              <Cards headless
             
              >
                <Suspense
                  fallback={
                    <div className="spin">
                      <Spin />
                    </div>
                  }
                >
                  <BasicFormWrapper>
                    <Form form={form} name="createProject" onFinish={handleSubmit} >
                      <Form.Item name="user" label="Chọn user"  >
                          <Select
                              onChange={(e)=>{setId(e)}}
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
                               options={sorted ? sorted : []}
                          />
                       </Form.Item>
                      <Form.Item name="money" label="Nhập số tiền rút">
                        <Input placeholder="Số tiền rút" value={money} onChange={(e)=>{setMoney(e.target.value)}} />
                      </Form.Item>
                      <Button style={{'float': 'right'}} htmlType="submit" type="primary">
                        Save
                      </Button>
                    </Form>
                    </BasicFormWrapper>
                </Suspense>
              </Cards>
        
            </div>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Project;
