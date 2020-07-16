import React, { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const onFinish = values => {
      console.log('Received values of form: ', values);
    };
    return ( 
      <div>
        <div className="form-header">
          <h4 className="column">注册</h4>
          <span>登录</span>
        </div>
        <div className="">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{remember: true,}}
            onFinish={onFinish}
          >
            <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!', },]}>
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!', },]}>
              <Input type="password" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!', },]}>
              <Input type="password" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password" />
            </Form.Item>
            <Form.Item>
              <Row gutter={13}>
                <Col span={15}>
                  <Input type="password" prefix={<LoginOutlined className="site-form-item-icon" />} placeholder="code" />
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
 
export default RegisterForm
;