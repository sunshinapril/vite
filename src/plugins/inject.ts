//  全局注入变量，语法糖相对于2.x做了更改
import request from '../core/request';
import api from '../core/Apis';

export default {
  install(Vue, options) {
    Vue.config.globalProperties.$http = request;
    Vue.config.globalProperties.$api = api;
  }
};
