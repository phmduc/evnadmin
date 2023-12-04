import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Progress, Spin, Radio, Input, Select } from 'antd';
import moment from 'moment';
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
import { blogsUpdateData } from '../../redux/blogs/actionCreator';
import { categoriesGetData } from '../../redux/blogs/actionCreator';

function BlogDetails() {
  const {TextArea} = Input;
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog.data);
  const { category } = useSelector((state) => ({
    category: state.category.category,
  }));
  const params = useParams();

  const options = [];

  if(category){
    category.forEach(elem=>{
      options.push({
        label: elem.name,
        value: elem.id,
      });
    })
  }
  const handleChange = (value) => {
    setUpdateCategories(value)
  };
  useEffect(() => {
      dispatch(categoriesGetData());
      dispatch(filterSinglePage(parseInt(params.id, 10)));
  }, [params.id, dispatch]);
  const [updateTitle, setUpdateTitle] = useState('')
  const [updateContent, setUpdateContent] = useState('')
  const [updateStatus, setUpdateStatus] = useState('')
  const [updateCategories, setUpdateCategories] = useState([])
  const [updateExcerpt, setUpdateExcerpt] = useState('')

  if(blog.length > 0){
    const { id, author , status, date, title: { rendered: titleRender }, excerpt: { rendered: excerptRender }, content: { rendered: contentRender }, categories } = blog[0];
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
                    const values = {}
                    if(updateTitle) {
                      values.title = updateTitle
                    }
                    if(updateContent) {
                      values.content = updateContent
                    }
                    if(updateStatus) {
                      values.status = updateStatus
                    }
                    if(updateExcerpt) {
                      values.excerpt = updateExcerpt
                    }
                    if(updateCategories){
                      values.categories = updateCategories
                    }
                    dispatch(blogsUpdateData(id, values, ()=>{window.location.reload()} ))
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
            <Col xs={24}>
              <div className="about-project-wrapper" style={{minHeight: "unset"}}>
                <Cards title="Status">
                  <Radio.Group  value={updateStatus ? updateStatus : status} onChange={(e)=>{setUpdateStatus(e.target.value)}} >
                    <Radio value={'publish'}>Publish</Radio>
                    <Radio value={'future'}>Future</Radio>
                    <Radio value={'draft'}>Draft</Radio>
                    <Radio value={'pending'}>Pending</Radio>
                    <Radio value={'private'}>Private</Radio>
                  </Radio.Group>
                </Cards>
              </div>
           
              <div className="about-project-wrapper" style={{minHeight: "unset"}}>
                <Cards title="Tiêu đề">
                  <Input placeholder="Input title" defaultValue={titleRender} onChange={(e)=>{setUpdateTitle(e.target.value)}} />
                </Cards>
              </div>
              <div className="about-project-wrapper" style={{minHeight: "unset"}}>
                <Cards title="Nội dung">
                  <ReactQuill theme="snow"  value={updateContent ? updateContent : contentRender} onChange={(e)=>{ setUpdateContent(e)}} />
                </Cards>
              </div>
              <div className="about-project-wrapper" style={{minHeight: "unset"}}>
                <Cards title="Mô tả ngắn">
                  <ReactQuill theme="snow"  value={updateExcerpt ? updateExcerpt : excerptRender} onChange={(e)=>{setUpdateExcerpt(e)}} />
                </Cards>
              </div>
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

export default BlogDetails;
