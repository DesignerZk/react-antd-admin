import Login from '../presentational/login'
import Register from '../presentational/register'
import Statistics from '../presentational/statistics'
import Seting from '../presentational/set'
import List from '../presentational/list'
import MyUpload from '../presentational/upload'
import Add from '../presentational/add'
import Notify from '../components/notify'
import NotFound from '../components/notFound'
export const Routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/404',
        component: NotFound
    }
]
export const subRoutes = [
    {
        path: '/home/statistics',
        component: Statistics
    },
    {
        path: '/home/set',
        component: Seting
    },
    {
        path: '/home/list',
        component: List
    },
    {
        path: '/home/upload',
        component: MyUpload
    },
    {
        path: '/home/add',
        component: Add
    },
    {
        path: '/home/notify',
        component: Notify
    }
]