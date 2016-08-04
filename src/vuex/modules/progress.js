/**
 * Created by lichb on 2016/7/25.
 */
import {SET_PROGRESS} from '../types'

const state = {
    rate: 0
}

const mutations = {
    [SET_PROGRESS](state, action){
        state.rate = action.rate
    }
}

export default {
    state,
    mutations
}
