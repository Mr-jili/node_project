import axios from 'axios'
import Vue from 'vue'
import iView from 'iview'
import qs from 'qs'
Vue.use(iView)
const BASE_URL = 'http://192.168.101.142:8090'
const service = axios.create({
  baseURL: BASE_URL, // api的base_url
  timeout: 5000 // request timeout
  // headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}
})
axios.interceptors.response.use(function (response) {
  console.log(response)
  // 对响应数据做点什么
  const res = response.data
  if (res.code !== 0) {
    this.$Message({
      message: res.message,
      type: 'error',
      duration: 5 * 1000
    })
    return res
  } else {
    response.data.isLoading = false
    return response.data
  }
})

// axios.defaults.baseURL = 'http://192.168.101.142:8090'
// // axios.defaults.withCredentials = true // 允许跨域请求携带凭证
// axios.interceptors.response.use(function (res) {
//   return res.data
// })

export default service
