import axios from './index'
//注册
export function register(username,email,password) {
  return axios.post('/register');
}