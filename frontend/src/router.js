import Vue from 'vue'
import Router from 'vue-router'
import Profile from './views/Profile'
import Articles from './views/Articles'
import Home from './views/Home'
import Homepage from './views/Homepage'

Vue.use(Router)

const router = new Router({


    routes :  [
        {
            path: '/',
            component : Home
        },
        {
            path: '/homepage',
            component : Homepage
        },
        {
            path: '/homepage/profile',
            component : Profile
        },
        {
            path: '/homepage/articles',
            component : Articles
        }
]

});

export default router;