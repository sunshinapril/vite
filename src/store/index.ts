import { createStore, createLogger } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import common from './modules/common';
const storeKey = '__COMMON_REBUILD_STORE__';
const debug = process.env.NODE_ENV !== 'production';
// 给vuex添加持久化
const plugins = [
    createPersistedState({
        storage: window.sessionStorage,
        key: storeKey,
        reducer(vuexState: any) {
            return {
                common: vuexState.common
            }
        }
    })
];
debug ? plugins.push(createLogger()) : null;
export default createStore({
  modules: {
    common
  },
  plugins,
  strict: debug
});