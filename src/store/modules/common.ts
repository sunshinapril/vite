import {
    SET_USERINFO,
} from './../mutation-types';
import $httpSupply from '../../core/Apis/Supply'
const state = {
    // 用户信息
    userInfo: [],
};

const mutations = {
    [SET_USERINFO](state, userInfo) {
        state.userInfo = userInfo || [];
    }
};

const getters = {};

const actions = {
    async getUserInfo({commit}, name: string) {
        const data = await $httpSupply.getTradeByInd(name);
        commit(SET_USERINFO, data);
        return data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
