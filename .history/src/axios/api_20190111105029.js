import axios from 'axios'

axios.defaults.baseURL = 'localhost:8090'

export const listUser = params => {
    return axios.post('/api/userinfo/loadPage', params)
}