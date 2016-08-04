/**
 * Created by lichb on 2016/7/22.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from './host.config'

Vue.use(VueResource)
Vue.http.options.crossOrigin = true
Vue.http.options.credentials = true

Vue.http.options.xhr = {withCredentials: false}
Vue.http.options.root = '/root'

Vue.http.headers.common['bbb'] = 'bbb'

Vue.http.interceptors.push((request, next) => {
    //这里对请求体进行处理
    if (request.method != 'GET') {
        request.headers = request.headers || {}
        request.headers.Authorization = 'Bearer YXBpOnBhc3N3b3Jk'
    }

    // 里可以对响应的结果进行处理
    next((response) => {
        if (response.status === 404) {
            // signOut()
            // window.location.pathname = '/login'
            console.log('http 404')
        }
    });
});

//服务接口声明
export const AuthResource = Vue.resource(API_ROOT + '/login')
