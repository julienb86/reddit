import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Signup from './views/Signup'
import Home from './views/Home'
import Profile from './views/Profile'


Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/signup',
        component: Signup
    },
    {
        path : '/login',
        component : Login
    },
    {
        path : '/',
        component : Home
    },
    {
        path : '/profile/:id',
        component : Profile
    },  
]
})

export default router;