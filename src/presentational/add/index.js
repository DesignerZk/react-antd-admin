import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import { add } from '../../api'
@Form.create()
class AddForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.props.form)
        this.props.form.validateFields((err, values) => {
            // if (!err) {
            //     console.log('Received values of form: ', values);
            // }
            // console.log(values)
            add(values.name, values.age).then((resp) => {
                // console.log(resp.status)
                if (resp.status === 200) {
                    this.props.history.push("/home/list");
                }
            })
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '请输入录入的名字!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="name"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('age', {
                        rules: [{ required: true, message: '请输入录入的年龄!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="text"
                            placeholder="age"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        确认添加
            </Button>
                </Form.Item>
            </Form>

        );
    }
}

export default AddForm;
