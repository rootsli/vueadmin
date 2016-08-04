/**
 * Created by lichb on 2016/7/25.
 */
import cookie from 'react-cookie'
import auth from '../services/auth-service'
import * as types from './types'

export const login = (store, user) => {
    auth.login(user).then(response => {
        cookie.save('token', response.data.token)
        store.dispatch(types.LOGIN_SUCCESS, {token: token})
        store.router.go({path: '/home/page1'})
    }, error => { //登录失败
        store.router.go({path: '/home/page2'})
    });
}
