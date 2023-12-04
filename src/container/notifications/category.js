import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Progress, Spin, Radio, Input } from 'antd';
import UilEditAlt from '@iconscout/react-unicons/icons/uil-edit-alt';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { Link, NavLink, Routes, Route, useParams } from 'react-router-dom';
import { ProjectDetailsWrapper, TaskLists } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { filterSinglePage } from '../../redux/blogs/actionCreator';
import ReactQuill from 'react-quill';

function Category() {
  const {TextArea} = Input;
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
      dispatch(filterSinglePage(parseInt(params.id, 10)));
  }, [params.id, dispatch]);

  if(1 > 0){
    return (
      <ProjectDetailsWrapper>
        <PageHeader
          className="ninjadash-page-header-main"
          ghost
          title={
            <div key="1" className="project-header">
              <Heading as="h2">View Post</Heading>
            </div>
          }
          buttons={[
            <div key="1" className="project-action">
              <Link key={1}  className="project-edit" 
              onClick={(e)=>{
                    e.preventDefault()
                }}>
                <UilEditAlt />
                Save
              </Link>
              <Link key={2} to="#" className="project-remove">
                <UilTrashAlt />
                Delete
              </Link>
            </div>,
          ]}
        />
        <Main>
          <Row gutter={25}>
            <Col xxl={8} xs={24}>
              {/* <div className="about-project-wrapper" style={{minHeight: "unset"}}>
                <Cards title="Blog Title">
                  <Input placeholder="Input title" defaultValue={titleRender} onChange={(e)=>{setUpdateTitle(e.target.value)}} />
                </Cards>
              </div>
              <div className="about-project-wrapper" style={{minHeight: "unset"}}>
                <Cards title="Blog Content">
                  <ReactQuill theme="snow"  value={updateContent ? updateContent : contentRender} onChange={(e)=>{ setUpdateContent(e)}} />
                </Cards>
              </div>
              <div className="about-project-wrapper" style={{minHeight: "unset"}}>
                <Cards title="Excerpt">
                  <ReactQuill theme="snow"  value={updateExcerpt ? updateExcerpt : excerptRender} onChange={(e)=>{setUpdateExcerpt(e)}} />
                </Cards>
              </div> */}
            </Col> 
          </Row>
        </Main>
      </ProjectDetailsWrapper>
    );
  } else{
    return <ProjectDetailsWrapper>
    </ProjectDetailsWrapper>
  }

 
}

export default Category;
