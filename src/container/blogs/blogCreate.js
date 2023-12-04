import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Progress, Spin, Input  } from 'antd';
import moment from 'moment';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilCheck from '@iconscout/react-unicons/icons/uil-check';
import UilEditAlt from '@iconscout/react-unicons/icons/uil-edit-alt';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import UilChartPie from '@iconscout/react-unicons/icons/uil-chart-pie';
import UilWebGridAlt from '@iconscout/react-unicons/icons/uil-web-grid-alt';
import UilClock from '@iconscout/react-unicons/icons/uil-clock';
import UilUserPlus from '@iconscout/react-unicons/icons/uil-user-plus';
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
import { blogsCreateData } from '../../redux/blogs/actionCreator';
import { categoriesGetData } from '../../redux/blogs/actionCreator';

function BlogCreate() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

//   const blog = useSelector((state) => state.blog.data);
//   const params = useParams();
//   useEffect(() => {
//       dispatch(filterSinglePage(parseInt(params.id, 10)));
//   }, [params.id, dispatch]);

//   console.log(blog)
    const author = sessionStorage.getItem('user_id');

    const { TextArea } = Input;

    const [value, setValue] = useState('');

    const [title, setTitle] = useState('');

    const [excerpt, setExcerpt] = useState('');

    const [status, setStatus] = useState('publish');

    const { category } = useSelector((state) => ({
      category: state.category.category,
   
    }));
    let current
  
    if(category.length>0){
      current = category.filter(elem=>{
       return elem.name == 'Tin tức'
      })[0].id
    }
  
    const handleCreateSubmit = ()=>{
      const values={
        title: title,
        status: status,
        excerpt: excerpt,
        content: value,
        author: author,
        categories: [current]
      }
      dispatch(blogsCreateData(values, () => {navigate('/admin/blogs/view')}));

    }

    useEffect(()=>{
      dispatch(categoriesGetData())
    },[dispatch])
    return (
      <ProjectDetailsWrapper>
        <PageHeader
          className="ninjadash-page-header-main"
          ghost
          title={
            <div key="1" className="project-header">
              <Heading as="h2">Tạo mới tin tức</Heading>
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
                <Cards title="Status">
                  <Radio.Group onChange={(e)=>{setStatus(e.target.value)}} value={status} >
                    <Radio value={'publish'}>Publish</Radio>
                    <Radio value={'future'}>Future</Radio>
                    <Radio value={'draft'}>Draft</Radio>
                    <Radio value={'pending'}>Pending</Radio>
                    <Radio value={'private'}>Private</Radio>
                  </Radio.Group>
                </Cards>
              </div>
              <div className="about-project-wrapper" style={{minHeight: "unset"}}>
                <Cards title="Blog Title">
                  <Input placeholder="Input title" value={title} onChange={(e)=>{
                      setTitle(e.target.value)
                  }} />
                </Cards>
              </div>
              <div className="about-project-wrapper" style={{minHeight: "unset"}}>
                <Cards title="Blog Content">
                  <ReactQuill theme="snow" value={value} onChange={setValue} />
                </Cards>
              </div>
              <div className="about-project-wrapper" style={{minHeight: "unset"}}>
                <Cards title="Excerpt">
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
