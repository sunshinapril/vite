import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import config from './config';
import Cookies from 'universal-cookie';
import { Ajax } from 'src/shim';

export const cookies = new Cookies({});

interface Item {
  url: string;
  cancel: () => void;
}

const pending: Array<Item> = [];
const CancelToken = axios.CancelToken;
const removePending = (config: AxiosRequestConfig) => {
  for (const p in pending) {
    if (pending.hasOwnProperty(p)) {
      const list = pending[p];
      if (list.url === config.url + '&request_type=' + config.method) {
        list.cancel();
        pending.splice(+p, 1);
      }
    }
  }
};
const service = axios.create(config);
// 添加请求拦截器
service.interceptors.request.use(
  config => {
    removePending(config);
    config.cancelToken = new CancelToken(c => {
      pending.push({
        url: config.url + '&request_type=' + config.method,
        cancel: c
      });
    });
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
  res => {
    removePending(res.config);
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

/**
 * axios请求错误统一处理函数
 */
function errorHandler(error: AxiosError): Ajax.AjaxResponse {
  if (error.response) {
    return {
      success: false,
      message: error.response.data.message,
      code: 50000,
      data: null
    };
  }
  return {
    success: false,
    code: 40400,
    data: null,
    message: error.message
  };
}

/**
 * 封装了几个通用的请求函数
 */
export default {
  get: function (url: string, params: any) {
    // const accessToken = cookies.get('token');
    // if (!accessToken) {
    //   throw new Error('登录已失效，请重新登录');
    // }
    // params添加到url中
    return service
      .get(url, {
        params
        // headers: {
        //   accessToken,
        // },
      })
      .then((res: Ajax.AxiosResponse) => {
        return res.data;
      })
      .catch(errorHandler);
  },
  del: function (url: string, params: any) {
    const accessToken = cookies.get('token');
    if (!accessToken) {
      throw new Error('登录已失效，请重新登录');
    }
    return service
      .delete(url, {
        params,
        headers: {
          accessToken
        }
      })
      .then((res: Ajax.AxiosResponse) => {
        return res.data;
      })
      .catch(errorHandler);
  },
  // 无需token
  fetch: function (url: string, data: any) {
    return service
      .post(url, data)
      .then((res: Ajax.AxiosResponse) => {
        return res.data;
      })
      .catch(errorHandler);
  },
  post: function (url: string, data: any, params: any) {
    const accessToken = cookies.get('token');
    if (!accessToken) {
      throw new Error('登录已失效，请重新登录');
    }
    // data添加到请求体body中
    return service
      .post(url, data, {
        params,
        headers: {
          accessToken
        }
      })
      .then((res: Ajax.AxiosResponse) => {
        return res.data;
      })
      .catch(errorHandler);
  },
  put: function (url: string, data: any, params: any) {
    const accessToken = cookies.get('token');
    if (!accessToken) {
      throw new Error('登录已失效，请重新登录');
    }
    return service
      .put(url, data, {
        params,
        headers: {
          accessToken
        }
      })
      .then((res: Ajax.AxiosResponse) => {
        return res.data;
      })
      .catch(errorHandler);
  }
};
