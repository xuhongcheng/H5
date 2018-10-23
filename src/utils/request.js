import axios from 'axios'
import querystring from 'querystring'
// create axios实例
const ajax = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000,// 请求超时时间
  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    return querystring.stringify(data)
  }],
})

// request 统一配置拦截器
ajax.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error) // for debug
  Promise.reject(error)
})

// respone 拦截器
ajax.interceptors.response.use(
  response => response.data,
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default ajax
