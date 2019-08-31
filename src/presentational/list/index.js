import React, { Component } from 'react'
import { getList, del } from '../../api'
import { Table, Card, Button, Modal, message } from 'antd'
export default class List extends Component {
  constructor(props) {
    super(props)
    var that = this
    this.state = {
      id: -1, // 记录当前的id
      count: 0, // 记录的总数
      pageSize: 5, // 每一页显示的数量
      visible: false, //确认删除的对话框是否是显示状态
      dataSoutce: [], //初始数据
      columns: [ // 显示栏
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age'
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <Button onClick={ that.remove.bind(that, record.key) }>删除</Button>
          ),
        }
      ]
    }
    this.add = this.add.bind(this)
    this.page = this.page.bind(this)
  }
  // 加载第一页的数据
  componentDidMount() {
    this.getData(1, this.state.pageSize)
  }
  remove=(id)=>{
    console.log(id)
    this.setState({
      id: id,
      visible: true
    })
  }
  handleOk=()=>{
    this.setState({
      loading:true
    },()=>{
      del(this.state.id).then((res)=>{
        if(res.data.status === 0){
           this.getData(1, this.state.count)
        }
     }).finally(()=>{
       setTimeout(()=>{
          
          this.setState({
            visible:false,
            loading:false
          })
          message.info("删除成功",1);
       },500) 
     })
    })
  }
  handleCancel=()=>{
    this.setState({
      visible:false
    })
  }
  // 调用getData，并且把数据库的数据赋给 dataSoutce
  getData(page, pageSize) {
    getList(page,pageSize).then(resp => {
      var list = resp.data.list.map(item => {
        return {
          key: item._id,
          name: item.name,
          age: item.age
        }
      })
      this.setState({
        dataSoutce: list,
        count: resp.data.count
      })
    })
  }
  add() {
    this.props.history.push('/home/add')
  }
  page(page, pageSize) {
    this.getData(page, pageSize)
 }
  render() {
    return (
      <div>
          <Card
            title="列表管理" 
            bordered={ false } 
            extra = { <Button type="primary" onClick = { this.add }>添加</Button>} 
          >
            <Table 
              dataSource={ this.state.dataSoutce } 
              columns={ this.state.columns }
              pagination={{ total: this.state.count, pageSize: this.state.pageSize, onChange: this.page }}
            />
          </Card>
          <Modal
            maskClosable={false} 
            title="确认操作"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel} 
            confirmLoading={this.state.loading}
          >
            <p>确认删除吗</p>
          
          </Modal>
      </div>
    )
  }
}
