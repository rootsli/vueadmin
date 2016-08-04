/**
 * Created by lichb on 2016/7/25.
 */
import cookie from 'react-cookie'
import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_USER,
    USERINFO_SUCCESS,
    USERINFO_FAILURE
} from '../types'

const state = {
    token: cookie.load('token') || 'test_token',
    user: null, //存放用户基本信息
    errmsg:'请输入密码' //登录错误信息
}

const mutations = {
    [LOGIN_SUCCESS](state, action){
        state.token = action.token
        state.errmsg = '请输入密码'
    },
    [LOGIN_FAILED](state, action){
        state.errmsg = action.error || '请输入密码'
    },
    [LOGOUT_USER](state, action){
        state.token = cookie.load('token') || null
        state.user = null
        state.token = null
    },
    [USERINFO_SUCCESS](state, action){
        state.user = action.user
    },
    [USERINFO_FAILURE](state, action){
        state.user = null
    }
}

export default {
    state,
    mutations
}
