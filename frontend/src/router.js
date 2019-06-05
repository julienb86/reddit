import Vue from 'vue'
import Router from 'vue-router'
import Profile from './views/Profile'
import Articles from './views/Articles'
import Home from './views/Home'
import Homepage from './views/Homepage'

Vue.use(Router)

const router = new Router({
    mode: 'history',

    routes :  [
        {
            path: '/',
            component : Home
        },
        {
            path: '/homepage',
            component : Homepage,

        children: [
            {
              path: 'profile',
              component: Profile
            },
            {
                path: '/articles',
                component : Articles
            }
        ]
        }
]

});

export default router;