import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Signup from './views/Signup'


Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/signup',
        component: Signup
    },
    {
        path : '/login',
        component : Login
    }]
})

export default router;