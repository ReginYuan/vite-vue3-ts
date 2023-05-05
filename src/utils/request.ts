import axios from "axios";
import { Toast } from "vant";

let baseURL = '/api'

const server = axios.create({
  baseURL,
  timeout: 10000
})

//请求发起之前的拦截器
server.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('token')
    if (token) {
      config.params = {
        'token': token
      }
    }
    return config
  },
  error => Promise.reject(error)
)

// 相应拦截器
server.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status !== 200) {
      return Promise.reject(new Error(res.success || 'Error'))
    } else {
      if (res.code == 200) {
        return res.result
      } else {
        new Toast(res.success)
      }
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default server
