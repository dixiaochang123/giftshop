import Vue from 'vue'
import axios from 'axios'

// 创建一个axios实例
const service = axios.create({
  baseURL:baseUrl,
  // withCredentials: true,
  timeout: 3600000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    
    return Promise.reject(error)
  }
)

export default service
