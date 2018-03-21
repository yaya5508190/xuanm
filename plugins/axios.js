import axios from 'axios'

if (process.browser) {
  axios.defaults.baseURL = '/api'
} else {
  axios.defaults.baseURL = 'http://localhost:3000/api'
}

export default axios
