import vue from 'vue'
import Axios from 'axios'

var instance = Axios.create({
    baseURL: '',
    timeout: 1000,
    "Content-Type": "application/json;charset=UTF-8"
    // headers: 'Access-Control-Allow-Origin'
  });
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  export default instance
// // 挂载到vue原型上
vue.prototype.$axios = instance
 
 
