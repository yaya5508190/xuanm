import axios from './axios'

let isInit = false
export default ({ app, store, redirect }) => {
  if (!isInit) {
    isInit = true
    axios.interceptors.response.use((response) => {
      return response
    }, (error) => {
      if (error.response) {
        if (error.response.status === 403) {
          console.log('禁止访问')
          redirect('/admin/login')
        } else if (error.response.status === 500) {
          console.log('请求失败')
        }
      }
      return Promise.reject(error.response)
    })
  }
}
