import axios from 'axios'

axios.defaults.baseURL = 'localhost:9528'

export const listUser = params => {
  return axios.post('/api/userinfo/loadPage', params)
}
