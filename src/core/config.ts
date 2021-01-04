import { AxiosResponse, AxiosRequestConfig } from 'axios';
import qs from 'qs';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'http://103.28.213.215:9090',
  // 请求后的数据处理
  transformResponse: [
    function (data: AxiosResponse) {
      return data;
    }
  ],
  // 查询对象序列化函数
  paramsSerializer: function (params: any) {
    return qs.stringify(params);
  },
  // 请求超时时间
  timeout: 3000,
  // 跨域是否带token
  withCredentials: false,
  responseType: 'json',
  // xsrf 设置
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  validateStatus: function (status: number) {
    return status >= 200 && status < 300;
  }
};
export default axiosConfig;
