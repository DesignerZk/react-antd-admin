import React from 'react';
import Admin from './components/admin'
import './App.css';
import { subRoutes } from './router'
import { Route, Redirect } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* 如果sessionStorage或者localStorage 没有token，从定向到登录页 */}
      {
        sessionStorage.getItem("token") || localStorage.getItem("token") ?
        <Admin>
            {
               subRoutes.map((item)=>{
                 return <Route path={item.path} key={item.path} component={item.component} />
               })
            }
            <Redirect from="/home" to="/home/list" />
        </Admin>: <Redirect to="/login" />
      }
    </div>
  );
}

export default App;
