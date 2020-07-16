import React, { Component } from 'react';
import './index.scss'


import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formType:'login'
    }
  }
  render() {
   
    return (
      <div className="form-wrap">
        <div>
          {this.state.formType == 'login'?
            <LoginForm></LoginForm>:
            <RegisterForm></RegisterForm>
          }
        </div>
      </div>
    );
  }
}

export default Login;