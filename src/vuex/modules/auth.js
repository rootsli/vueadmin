/**
 * Created by lichb on 2016/7/25.
 */
import cookie from 'react-cookie'
import {
    LOGIN_SUCCESS,
    USERINFO_SUCCESS,
    USERINFO_FAILURE,
    LOGOUT_USER
} from '../types'

const state = {
    token: cookie.load('token') || 'test_token',
    user: null
}

const mutations = {
    [LOGIN_SUCCESS](state, action){
        state.token = action.token
    },
    [USERINFO_SUCCESS](state, action){
        state.user = action.user
    },
    [USERINFO_FAILURE](state, action){
        state.user = null
    },
    [LOGOUT_USER](state, action){
        state.token = cookie.load('token') || null
        state.user = null
        state.token = null
    }
}

export default {
    state,
    mutations
}
