import axios from 'axios'

// 对axios 进行二次封装
var instance = axios.create({
    baseURL: '/hd',
    headers: {'content-type':'application/json'} // 请求头
})

// 发出请求
instance.interceptors.request.use((config) => {
    if(sessionStorage.getItem('token')) {
        config.headers['token'] = sessionStorage.getItem('token')
    }
    return config
})

// 接受响应
instance.interceptors.response.use((res)=>{
    if(res.data.message) {  //token 验证失败
        window.location.href='/login'
    }
    return res
})

// 列表数据
export const getList = (page, pageSize) => {
    return instance.get('/pagelist', { params: { page,pageSize }});
}

// 登录
export const login = (username, password) => {
    return instance.post('/users/login', { username,password })
}
export const reg = (username, password) => {
    return instance.post('/users/reg', { username,password })
}

// 添加
export const add = (name, age) =>{
    return instance.post('/add', { name, age })
}
// 删除
export const del = (id) => {
    return instance.post('/del', { id })
}
// 退出
export const quit = () => {
    return instance.post('/users/quit')
}