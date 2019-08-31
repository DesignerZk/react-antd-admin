import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import { reg } from '../../api'
@Form.create()
class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    //   reg(values.username, values.password).then((resp) => {
    //       console.log(resp)
    //     if (resp.data.data.status) {
    //       sessionStorage.setItem("token", resp.data.data.token);
    //       sessionStorage.setItem("user", values.username);
    //       this.props.history.push("/")
    //     }
    //   })
    // console.log(values)
        reg(values.username, values.password).then(resp => {
            if(resp.data.status === 200) {
                alert('123')
            }
        })
    });
  };
  toLogin() {
    this.props.history.push('/login')
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
      }} title="欢迎注册" bordered={ true } className="login">
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
              initialValue: true,
            })(<Checkbox>记住密码</Checkbox>)}

            <Button type="primary" htmlType="submit" className="login-form-button">
              注册
            </Button>
            <span style={{
              marginLeft: '50px'
            }}>已有账号？ <span onClick={ this.toLogin.bind(this) } style={{
              textDecoration: 'underline'
            }}>去登录</span></span>

          </Form.Item>
        </Form>
      </Card>
    );
  }
}

export default NormalLoginForm;
