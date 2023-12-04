import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Row, Col, Table, Progress, Pagination, Tag, Checkbox } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { ProjectPagination, ProjectListTitle, ProjectListAssignees, ProjectList } from '../style';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { blogsDeleteData } from '../../../redux/blogs/actionCreator';
import { categoriesGetData } from '../../../redux/blogs/actionCreator';
import { readNotificationList } from '../../../redux/notification/actionCreator';
import { readNotificationHide } from '../../../redux/notification/actionCreator';

function BlogsLists() {
  const dispatch = useDispatch();
  const [ren, setren] = useState(false)
  const { notification } = useSelector((state) => ({
    notification: state.notification.data,
  }));



  useEffect(() => {
    dispatch(readNotificationList());

  }, [dispatch, ren]);
  const dataSource = [];
  if (notification && notification.length > 0)
    notification.map((value) => {
      const { id, created, type, content, user_id, user_phone, trash } = value;
      return dataSource.push({
        key: id,
        id: <span className="date-started">{id}</span>,
        date: <span className="date-started">{created}</span>,
        content: (
          <ProjectListTitle>
            <Heading as="h4">{content}</Heading>
          </ProjectListTitle>
        ),
        user: <span className="date-started">{user_phone}</span>,
        type: (
          <span className="date-started">
            {type == 'tax' ? (
              <span className={type}>Thông báo thuế</span>
            ) : type == 'insurance' ? (
              <span className={type}>Thông báo bảo hiểm</span>
            ) : type == 'deposit' ? (
              <span className={type}>Nạp tiền</span>
            ) : type == 'cash' ? (
              <span className={type}>Rút tiền</span>
            ) : type == 'verified' ? (
              <span className={type}>Xác minh thành công </span>
            ) : type == 'locked' ? (
              <span className={type}>Tài khoản bị khoá</span>
            ) : type == 'unlocked' ? (
              <span className={type}>Mở khoá tài khoản</span>
            ) : (
              <span className={type}>Thông báo đầu tư</span>
            )}
          </span>
        ),

        action: (type == 'insurance' || type == 'tax') ? (trash == '0') ?
          (<Checkbox onChange={(e)=>{
            dispatch(readNotificationHide(id, ()=>{setren(!ren)}))
          }}>Ẩn</Checkbox>)
         : (trash == '1') ? (<Checkbox checked>Ẩn</Checkbox>) : '' : '' ,
      });
    });

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
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
            <div className="table-responsive notify">
              <Table pagination={true} dataSource={dataSource} columns={columns} />
            </div>
          </ProjectList>
        </Cards>
      </Col>
    </Row>
  );
}

export default BlogsLists;
