/**
 * Created by lichb on 2016/7/25.
 */
import {AuthResource} from '../http/http.interceptors'

export default {
    login: user => {
        return AuthResource.get({id: user.password})
    },
    logout: () => {

    },
    getUserInfo: () => {

    }
}
