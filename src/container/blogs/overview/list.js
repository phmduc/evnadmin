import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Row, Col, Table, Progress, Pagination, Tag } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { ProjectPagination, ProjectListTitle, ProjectListAssignees, ProjectList } from '../style';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { blogsDeleteData } from '../../../redux/blogs/actionCreator';
import { categoriesGetData } from '../../../redux/blogs/actionCreator';

function BlogsLists() {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blogs.blogs);
  const { category } = useSelector((state) => ({
    category: state.category.category,
 
  }));
  let current

  console.log(blog)

  if(category.length>0){
    current = category.filter(elem=>{
     return elem.name == 'Tin tức'
    })[0].id
  }


  useEffect(() => {
    dispatch(categoriesGetData())
   
  }, [blog, dispatch]);

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    setState({ ...state, current, pageSize });
  };

 

  const dataSource = [];
  if (blog && blog.length>0)
    blog.map((value) => {
      if(value.categories.some(elem=>{
        return elem == current;
      })){
      const { id, author , date, title: { rendered: titleRender }, excerpt: { rendered: excerptRender } } = value;
      return dataSource.push({
        key: id,
        blog: (
          <ProjectListTitle>
            <Heading as="h4">
              <Link to={`/admin/blogs/blogDetails/${id}`}>{titleRender}</Link>
            </Heading>
          </ProjectListTitle>
        ),
        Excerpt: <span className="date-started" dangerouslySetInnerHTML={{ __html: excerptRender }}></span>,
        Date: <span className="date-started">{moment(date).format("DD MMM YYYY")}</span>,
        Author: <span className="date-started"></span>,
        action: (
          <Dropdown
            className="wide-dropdwon"
            content={
              <>
                <Link to={`/admin/blogs/blogDetails/${id}`} >View</Link>
                <Link to="#">Edit</Link>
                <Link to="#" onClick={()=>{dispatch(blogsDeleteData(id,()=>{window.location.reload()}))}} >Delete</Link>

              </>
            }
          >
            <Link to="#">
              <UilEllipsisH />
            </Link>
          </Dropdown>
        ),
      });
    }
    });

  const columns = [
    {
      title: 'Blog',
      dataIndex: 'blog',
      key: 'blog',
    },
    {
      title: 'Excerpt',
      dataIndex: 'Excerpt',
      key: 'Excerpt',
    },
    {
      title: 'Date',
      dataIndex: 'Date',
      key: 'Date',
    },
    {
      title: 'Author',
      dataIndex: 'Author',
      key: 'Author',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  return (
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
        <ProjectPagination>
          {blog.length ? (
            <Pagination
              onChange={onHandleChange}
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              pageSize={10}
              defaultCurrent={1}
              total={40}
            />
          ) : null}
        </ProjectPagination>
      </Col>
    </Row>
  );
}

export default BlogsLists;
