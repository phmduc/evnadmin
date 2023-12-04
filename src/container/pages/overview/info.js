import React, { useState } from 'react';
import { Row, Col, Form, Input, Upload, Select } from 'antd';
import { Link } from 'react-router-dom';
import UilCamera from '@iconscout/react-unicons/icons/uil-camera';
import { BasicFormWrapper } from '../../styled';
import { Button } from '../../../components/buttons/buttons';
import Heading from '../../../components/heading/heading';
import { createUser } from '../../../redux/users/actionCreator';
import { useDispatch } from 'react-redux';

const { Option } = Select;
function Info() {
  const dispatch = useDispatch()


  const [form] = Form.useForm();
  const handleSubmit = (values) => {
    dispatch(createUser(values));
    form.resetFields();
  };

  return (
    <Row justify="center">
      <Col xxl={10} xl={14} md={16} xs={24}>
        <div className="user-info-form">
          
          <BasicFormWrapper>
            <Form style={{ width: '100%' }} form={form} name="info" onFinish={handleSubmit}>
              <Heading className="form-title" as="h4">
                Personal Information
              </Heading>
              <Form.Item name="phone" label="Số điện thoại">
                <Input placeholder="Số điện thoại" />
              </Form.Item>
              <Form.Item label="Mật khẩu" name="password">
                <Input type='password' placeholder="Nhập mật khẩu" />
              </Form.Item>
              <Form.Item label="Xác nhận mật khẩu" name="confirm_password">
                <Input type='password' placeholder="Nhập lại mật khẩu" />
              </Form.Item>
              <Form.Item label="Mã mời" name="invitation_code">
                <Input placeholder="Nhập mã mời" />
              </Form.Item>
              <Form.Item>
                <div className="add-user-bottom text-right">
                  <Button
                    className="ant-btn ant-btn-light"
                    onClick={() => {
                      return form.resetFields();
                    }}
                  >
                    Reset
                  </Button>
                  <Button htmlType="submit" type="primary">
                    Save
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </BasicFormWrapper>
        </div>
      </Col>
    </Row>
  );
}

export default Info;
