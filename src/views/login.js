import React from 'react'
import '../css/login.css'

import { withRouter } from 'react-router-dom'

import { Form, Icon, Input, Button, Checkbox } from 'antd';

class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: ''
    }
  }

  login = () => {
    console.log(this)
    this.props.history.replace('/view/employee')
  }

  render(){
    return(
      <Form className="login-form">
        <Form.Item>
          <Input 
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="账号">
          </Input>
        </Form.Item>
        <Form.Item>
          <Input 
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="密码">
          </Input>
        </Form.Item>
        <Form.Item>
          <Checkbox>记住账号</Checkbox>
          <Button type="primary" onClick={this.login} className="login-form-button">
            登录
          </Button>
          {/* <a href="">register now!</a> */}
        </Form.Item>
      </Form>
    )
  }
}

export default withRouter(Login)