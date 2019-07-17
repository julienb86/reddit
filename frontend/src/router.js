import Vue from 'vue'
import Router from 'vue-router'
import Profile from './views/Profile'
import Home from './views/Home'
import Homepage from './views/Homepage'
import Marketing from './views/Marketing'
import HR from './views/HR'
import Development from './views/Development'
import UiUx from './views/UiUx'



Vue.use(Router)

const router = new Router({
    mode: 'history',

    routes :  [
        {
            path: '/',
            name : 'home',
            component : Home
        },
        {
            path: '/homepage',
            name : 'homepage',
            component : Homepage,

        children: [
            {
              path: 'profile',
              name : 'profile',
              component: Profile
            },
            {
                        path: 'marketing',
                        name : 'marketing',
                        component: Marketing
                      },
                      {
                        path: 'HR',
                        name : 'HR',
                        component: HR
                      },
                      {
                        path: 'development',
                        name : 'development',
                        component: Development
                      },
                      {
                        path: 'UI-UX',
                        name : 'UiUx',
                        component: UiUx
                      },

            
        ]
        }
]

});

export default router;