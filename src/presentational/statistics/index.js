import React, { Component } from 'react'
var echarts = require('echarts');

export default class Statistics extends Component {
  color16(){ // 十六进制颜色随机
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
    return color;
  }
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    // 绘制图表 
    myChart.setOption({
      title: {
          text: '统计'
      },
      tooltip: {},
      xAxis: {
          data: ['衬衫', '羊毛衫', '羊毛衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', '衬衫']
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [10, 20, 20, 20, 36, 10, 10, 20, 20]
      }]
  });
  }
  render() {
    return (
      <div style={{
        width: '100%'
      }}>
          <div id='main' style={{
            height: '400px',
            width: '90%'
          }}>
          </div>
      </div>
    )
  }
}
