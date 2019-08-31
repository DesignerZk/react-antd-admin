import React from 'react'
import './admin.css'
import { quit } from '../../api'
import { Layout, Menu, Breadcrumb, Icon, Avatar, Dropdown, Badge } from 'antd';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;
var mapState =(state)=>({
  length: state.list.filter((item) => !item.read).length
})
@connect(mapState)
@withRouter
class Admin extends React.Component {
  state = {
    collapsed: false,
  };
  goPage({ item, key }) {
       console.log(key)
    if(key==="/home/quit") {
      quit().then(resp => {
        if(resp.data.status === 0) {
          sessionStorage.clear()
          this.props.history.push('/login')
        }
      })
    }
    else {
      this.props.history.push(key)
    }
  }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  menu = () => {
      return (
      <Menu>
        <Menu.Item key="/home/notify" onClick={ this.goPage.bind(this) }>
          <span>
            通知中心 <Badge dot={ true }></Badge>
          </span>
        </Menu.Item>
        <Menu.Item key="/home/set" onClick={ this.goPage.bind(this) }>
          <span>
            设置
          </span>
        </Menu.Item>
        <Menu.Item key="/home/quit" onClick={ this.goPage.bind(this) }>
          <span>
            退出
          </span>
        </Menu.Item>
      </Menu>
    )
  }
  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" selectedKeys={[ this.props.location.pathname ]} mode="inline">
            <div style={{
              width: '100%',
              display: 'flex',
              height: '200px',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'warp'
            }}>
              <Avatar icon='user' style={{
                width: '74px',
                height: '74px',
                border: '2px solid #fff',
                fontSize: '56px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px'
              }}>Admin</Avatar>
              <p id='AdminUsername' style={{
                width: '200px',
                height: '40px',
                lineHeight: '20px',
                textAlign: 'center'
              }}>您好!<br />
              <span style={{
                marginTop: '20px'
              }}>
              { sessionStorage.getItem('user') || localStorage.getItem('user') }
              </span>
              </p>
            </div>
            <Menu.Item key="/home/statistics" onClick={ this.goPage.bind(this) }>
              <Icon type="pie-chart" />
              <span>在线统计</span>
            </Menu.Item>
            <Menu.Item key="/home/list" onClick={ this.goPage.bind(this) }>
              <Icon type="ordered-list" />
              <span>列表管理</span>
            </Menu.Item>
            <Menu.Item key="/home/upload" onClick={ this.goPage.bind(this) }>
              <Icon type="cloud-upload" />
              <span>上传</span>
            </Menu.Item>
            <Menu.Item key="/home/set" onClick={ this.goPage.bind(this) }>
              <Icon type="setting" />
              <span>设置</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
        <Header style={{
          margin: '0 15px 0 15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* <div className="logo" /> */}
          <h3 style={{
            color: '#fff'
          }}><span></span>XX管理系统</h3>
          <Menu style={{
            backgroundColor: ''
          }}>
            <Dropdown overlay={ this.menu }>
              <span className="ant-dropdown-link" style={{
                backgroundColor: '#fff',
                padding: '2px 6px',
                color: '#001529',
                borderRadius: '3px',
                cursor: 'pointer'
              }}>
                通知中心&nbsp;&nbsp; <Icon type="down" />
                <Badge count={ this.props.length } offset={[
                  -9, -14
                ]}
                style={{
                  transform: 'scale(0.8)',
                  position: "absolute"
                }} />
              </span>
            </Dropdown>
          </Menu>
        </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* <Breadcrumb.Item>在线统计</Breadcrumb.Item>
              <Breadcrumb.Item>人员</Breadcrumb.Item> */}
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {/* 每一个子组件 */}
              { this.props.children }
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2019 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin