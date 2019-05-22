import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Signup from './views/Signup'
import Home from './views/Home'
import Profile from './views/Profile'
import Articles from './views/Articles'
import Publish from './views/Publish'

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
    {
        path : '/publish',
        component : Publish
    },
    {
        path : '/articles',
        component : Articles
    }
]
});

export default router;