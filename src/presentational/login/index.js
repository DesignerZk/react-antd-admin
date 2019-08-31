import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import { login } from '../../api'
@Form.create()
class NormalLoginForm extends Component {
  constructor() {
    super()
    this.state = {
      isChecked: false
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      login(values.username, values.password).then((res) => {
        // console.log(res)
        // 如果选中记住密码，存localStorage，否则存sessionStorage
        if (res.data.data.login) {
          if(!this.state.isChecked) {
            sessionStorage.setItem("token", res.data.data.token);
            sessionStorage.setItem("user", values.username);
            this.props.history.push("/")
          }
          if(this.state.isChecked) {
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("user", values.username);
            this.props.history.push("/")
          }
        }
      })
    });
  };
  toRegister() {
    this.props.history.push('/register')
  }
  ischecked() {
    this.setState({
      isChecked: !this.state.isChecked
    })
    console.log(11)
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card style={{
        position: 'fixed',
        width: '50%',
        marginLeft: '50%',
        marginTop: '30%',
        transform: 'translate(-50%, -50%)'
      }} title="欢迎您，管理员" bordered={ true } className="login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户的名字!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: this.state.isChecked,
              onChange: this.ischecked.bind(this),
            })(<Checkbox>记住密码</Checkbox>)}

            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            <span style={{
              marginLeft: '50px'
            }}>没有账号？ <span onClick={ this.toRegister.bind(this) } style={{
              textDecoration: 'underline'
            }}>去注册</span></span>

          </Form.Item>
        </Form>
      </Card>
    );
  }
}

export default NormalLoginForm;
