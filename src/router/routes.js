/**
 * Created by lichb on 2016/7/15.
 */
import Login from '../components/Login'
import Home from '../components/Home'
import List from '../components/List'
import Form from '../components/Form'
import Page1 from '../components/Page1'
import Page2 from '../components/Page2'
import BaseChart from '../components/charts/BaseChart'

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
            '/list': {
                name: 'list',
                auth: true,
                parent: 'basicEditor', //上一级菜单名
                component: List
            },
            '/form': {
                name: 'form',
                auth: true,
                parent: 'basicEditor',
                component: Form
            },
            '/baseChart': {
                name: 'baseChart',
                auth: true,
                parent: 'chartEditor',
                component: BaseChart
            },
            '/map': {
                name: 'map',
                auth: true,
                parent: 'chartEditor',
                component: Page2
            },
            '/other1': {
                name: 'other1',
                auth: true,
                parent: 'other',
                component: Page1
            }
            ,
            '/other2': {
                name: 'other2',
                auth: true,
                parent: 'other',
                component: Page2
            }
        }
    }
}
