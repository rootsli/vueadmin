//libraries
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueValidator from 'vue-validator'
import {sync} from 'vuex-router-sync'
import store from './vuex/store'
// import jQuery from 'jquery'
import '../node_modules/semantic-ui-css/semantic.min.css'
import semantic from 'semantic'
import routes from './router/routes'
import alias from './router/alias'
import * as filters from './filters'
import App from './App'
import {SET_MENU, SET_PROGRESS} from './vuex/types'
import ECharts from 'vue-echarts/src/components/ECharts.vue'

//全局注册echarts插件，也可以不在此处注册而直接在组件内部注册。具体请参考vue-echarts插件
Vue.component('chart', ECharts)

//Validator
Vue.use(VueValidator)

//Router
Vue.use(VueRouter)
const router = new VueRouter({
    history: false,
    linkActiveClass: 'active',
    saveScrollPosition: true
})
router.map(routes)
router.alias(alias)
router.beforeEach(transition => {
    if (transition.to.auth && !store.state.auth.token) {
        // transition.abort()
        transition.redirect('/login')
    } else {
        transition.next()
    }

    //触发进度条
    if (transition.to.name != 'login') {
        store.dispatch(SET_PROGRESS, {rate: 1})
    }
})
router.afterEach(transition => {
    store.dispatch(SET_MENU, {current: transition.to.parent})
    window.scrollTo(0, 0)
})

// Filters
Vue.filter('date', filters.dateFilter)

//router <-> vuex
sync(store, router)

router.start(App, 'app')

