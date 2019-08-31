import React, { Component } from "react";
import { Upload, Icon } from "antd";
import axios from 'axios';
export default class upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: ""
    };
  }
  request = ({ file }) => {
    var data = new FormData;
    data.append("Token", "b8d09cad22f3197a3fb7db7552df411754bbf8c5:pcsMsgIwsVsbM7OydaRImlD8lN0=:eyJkZWFkbGluZSI6MTU2NzA0Nzc2NywiYWN0aW9uIjoiZ2V0IiwidWlkIjoiNjk1NzUwIiwiYWlkIjoiMTYxOTI5OSIsImZyb20iOiJmaWxlIn0=")
    data.append("file", file);
    axios.post("http://up.imgapi.com/", data).then((res) => {
      if (res.status === 200) {
        this.setState({
          imageUrl: res.data.linkurl
        })
      }
    })
  }
  render() {
    let { imageUrl } = this.state;
    return (
      <div>
        <Upload style={{ width: '100px', height: '100px', border: "1px dashed #ccc", display: 'block' }} customRequest={this.request} showUploadList={false}>
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: '100px', height: '100px' }} />
          ) : (
              <div style = {{
                textAlign: 'center',
                lineHeight: '100px',
                cousor: 'pointer'
              }}>请上传文件</div>
            )}
        </Upload>
      </div>
    );
  }
}
