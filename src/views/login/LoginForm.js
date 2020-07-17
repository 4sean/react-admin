import React, { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
import { validate_pw} from '../../utils/validate'
import './index.scss'
import {Login} from '../../api/account';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  toggleForm = () => {

  }
  render() {
    const onFinish = values => {
      console.log('Received values of form: ', values);
      Login(values).then((res)=>{
        console.log(res);
        
      })
    };


    return (
      <div>
        <div className="form-header">
          <h4 className="column">登录</h4>
          <span onClick={this.toggleForm}>账号注册</span>
        </div>
        <div className="">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true, }}
            onFinish={onFinish}
          >
            <Form.Item name="username" rules={[
              { required: true, message: 'Please input your Username!' },
              { type: 'email', message: '邮箱格式不正确' }
            ]}>
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item name="password" rules={[
              { required: true, message: 'Please input your Password!' },
              { min: 6, message: '不能少于6位' },
              { pattern: validate_pw,message:'只数字'}
            ]}>
              <Input type="password" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password" />
            </Form.Item>
            <Form.Item name="code" rules={[
              {required:true,message:'验证码不能为空'},
              { min: 3, message: '不能少于6位' },
              { pattern: validate_pw, message: '只数字' }
            ]}>
              <Row gutter={13}>
                <Col span={15}>
                  <Input prefix={<LoginOutlined className="site-form-item-icon" />} placeholder="code" />
                </Col>
                <Col span={9}>
                  <Button type="danger" htmlType="submit" className="login-form-button" block>获取验证码</Button>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" block>登录</Button>
            </Form.Item>
          </Form>

        </div>
      </div>
    );
  }
}

export default LoginForm;