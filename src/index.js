import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import Store from './store' // 引入仓库
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'
// 依次引入 HashRouter(Hash模式) 路由, 重定向, Switch(有Switch标签则其中的<Route>在路径相同的情况下，只匹配第一个，这个可以避免重复匹配)
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
// 引入各组件路由
import { Routes } from './router'

ReactDOM.render(
<Provider store={ Store }>
    <HashRouter>
        <Switch>
            <Route path='/home' component={ App }/>
            {/* 引入的每一项路由映射到该项 */}
            {
                Routes.map(item => {
                    return <Route key={ item.path } path={ item.path } component={ item.component } />
                })
            }
            <Redirect from='/' to='/home' exact />
            {/* 如果用户输入的路径以上都匹配不到，返回404页面 */}
            <Redirect to='/404' />
        </Switch>
    </HashRouter>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
