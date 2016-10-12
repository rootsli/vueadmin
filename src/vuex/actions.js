/**
 * Created by lichb on 2016/7/25.
 */
import cookie from 'react-cookie'
import auth from '../services/auth-service'
import * as types from './types'

//登录
export const login = (store, user) => {
    auth.login(user).then(response => {
        cookie.save('token', response.data.token)
        store.dispatch(types.LOGIN_SUCCESS, {token: token})
        store.router.go({path: '/home/list'})
    }, error => { //登录失败
        user.password = ''
        store.dispatch(types.LOGIN_FAILED, {error: '密码错误，请重新输入。'})
        store.router.go({path: '/home/list'})
    });
}

//设置进度
export const setProgress = (store, rate) => {
    store.dispatch(types.SET_PROGRESS, {rate: rate})
}
