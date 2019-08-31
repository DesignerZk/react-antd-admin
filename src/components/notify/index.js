import React, { Component } from 'react'
import { List, Avatar, Card, Button, Badge, Spin } from 'antd'
import { connect } from 'react-redux'
import actionCreator from '../../store/actionCreator'
@connect((state) => state, actionCreator)
class Notify extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <Card title="通知中心" bordered={ false } extra={ <Button onClick={ this.props.markAll.bind(this) }>标记为全部已读</Button> }>
                <Spin spinning={this.props.loading}>
                    <List
                        itemLayout="horizontal"
                        dataSource={ this.props.list }
                        renderItem={item => (
                        <List.Item extra={ <Button onClick={ this.props.markItem.bind(this, item.id) }>标记为已读</Button> }>
                            <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.title} <Badge dot={ !item.read }></Badge>
                            </a>}
                            description="Ant Design, a design language for background applications"
                            />
                        </List.Item>
                        )}
                    />
                </Spin>
            </Card>
        )
    }
}
export default Notify