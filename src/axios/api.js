import axios from 'axios'

axios.defaults.baseURL = 'localhost:9528'

export const listUser = params => {
  return axios.post('/api/userinfo/loadPage', params)
}
export const addUser = form => {
  return axios.post('/api/userinfo/addUserinfo', form)
}

export const listAdmin = params => {
  return axios.post('/api/admininfo/loadPage', params)
}

export const listSinger = params => {
  return axios.post('/api/singerinfo/loadPage', params)
}
export const listSonglist = params => {
  return axios.post('/api/songlistinfo/loadPage', params)
}
export const listAlbum = params => {
  return axios.post('/api/albuminfo/loadPage', params)
}