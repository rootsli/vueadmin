/**
 * Created by lichb on 2016/7/15.
 */
import Login from '../components/Login'
import Home from '../components/Home'
import Page1 from '../components/page1'
import Page2 from '../components/page2'
import Page3 from '../components/page3'

export default {
    '/': {
        name: 'login',
        auth: false,
        component: Login
    },
    '/home': {
        name: 'home',
        component: Home,
        subRoutes: {
            '/page1': {
                name: 'page1',
                auth: true,
                parent: 'menu1', //上一级菜单名
                component: Page1
            },
            '/page2': {
                name: 'page2',
                auth: true,
                parent: 'menu2',
                component: Page2
            },
            '/page3': {
                name: 'page3',
                auth: true,
                parent: 'menu1',
                component: Page3
            }
        }
    }
}
