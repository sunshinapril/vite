import { Router } from 'vue-router';
import { Store } from 'vuex';
// 用于添加自定义全局变量
declare module '@vue/runtime-core' {
  interface RootState {
    version: string;
  }

  interface ComponentCustomProperties {
    $router: Router;
    $http: any;
    $api: any;
    $store: Store<RootState>;
  }
}
// 自定义全局声明
declare namespace Ajax {
  // axios 返回数据
  export interface AxiosResponse {
    data: AjaxResponse;
  }

  // 请求接口数据
  export interface AjaxResponse {
    code: number;
    data: any;
    message: string;
    success: boolean;
  }
}
