import axios from 'axios'

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
if (process.browser) {
  axios.defaults.baseURL = '/api'
} else {
  axios.defaults.baseURL = 'http://' + host + ':' + port + '/api'
}

export default axios
