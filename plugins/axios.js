import axios from 'axios'

export default ({ app, store, redirect }) => {
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000

  if (process.browser) {
    axios.defaults.baseURL = '/api'
  } else {
    axios.defaults.baseURL = 'http://' + host + ':' + port + '/api'
  }

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
