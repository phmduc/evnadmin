import { Button, Col, Form, Input, Row } from 'antd';
import React, { useCallback, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthFormWrap } from './style';
import { Checkbox } from '../../../../components/checkbox/checkbox';
import { login } from '../../../../redux/authentication/actionCreator';
import actions from '../../../../redux/authentication/actions';

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.auth.loading);
    let errorMessage = useSelector((state) => state.auth.error);

    useEffect(()=>{
      if(errorMessage){
        toast.error(errorMessage, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        dispatch(actions.clearErr())
      }
    },[errorMessage])


   
    const [form] = Form.useForm();
    
    const [state, setState] = useState({
      checked: null,
    });

    const handleSubmit = useCallback(
      (values) => {
        dispatch(login(values, () => navigate('/admin')));
      },
      [navigate, dispatch],
    );

    const onChange = (checked) => {
      setState({ ...state, checked });
    };


    
  return (
    <Row justify="center">
      <ToastContainer />
      <Col xxl={6} xl={8} md={12} sm={18} xs={24}>
        <AuthFormWrap>
          <div className="ninjadash-authentication-top">
            <h2 className="ninjadash-authentication-top__title">Sign in EVN</h2>
          </div>
          <div className="ninjadash-authentication-content">
            <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">
              <Form.Item
                name="phone"
                rules={[{ message: 'Please input your Phone number!', required: true }]}
                label="Phone number"
              >
                <Input placeholder="Phone number" />
              </Form.Item>
              <Form.Item name="password" label="Password">
                <Input.Password placeholder="Password" />
              </Form.Item>
              <div className="ninjadash-auth-extra-links">
              </div>
              <Form.Item>
                <Button className="btn-signin" htmlType="submit" type="primary" size="large">
                  {isLoading ? 'Loading...' : 'Sign In'}
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="ninjadash-authentication-bottom">
           
          </div>
        </AuthFormWrap>
      </Col>
    </Row>
  );
}

export default SignIn;
