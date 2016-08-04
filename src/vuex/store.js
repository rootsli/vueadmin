/**
 * Created by lichb on 2016/7/25.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import middlewares from './middlewares'
import auth from './modules/auth'
import menu from './modules/menu'
import progress from './modules/progress'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.warnExpressionErrors = false

export default new Vuex.Store({
    modules: {
        auth,
        menu,
        progress
    },
    strict: debug,
    middlewares
})
