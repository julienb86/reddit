import Vue from 'vue'
import Router from 'vue-router'
import Profile from './views/Profile'
import Articles from './views/Articles'
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
/*                 path: 'articles',
                component : Articles,
                children : [
                    { */
                        path: 'marketing',
                        component: Marketing
                      },
                      {
                        path: 'HR',
                        component: HR
                      },
                      {
                        path: 'development',
                        component: Development
                      },
                      {
                        path: 'UI-UX',
                        component: UiUx
                      },
/*                 ]
            }, */

            
        ]
        }
]

});

export default router;