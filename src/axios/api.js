import axios from 'axios'

axios.defaults.baseURL = 'localhost:9528'
//userinfo
export const listUser = params => {
  return axios.post('/api/userinfo/loadPage', params)
}
export const addUser = form => {
  return axios.post('/api/userinfo/addUserinfo', form)
}
export const deleteUser = id => { 
  return axios.get('/api/userinfo/deleteUserinfo/' + id)
}

//admininfo
export const listAdmin = params => {
  return axios.post('/api/admininfo/loadPage', params)
}
export const addAdmin = form => {
  return axios.post('/api/admininfo/addAdmininfo', form)
}
export const deleteAdmin = id => { 
  return axios.get('/api/admininfo/deleteAdmininfo/' + id)
}

//singerinfo
export const listSinger = params => {
  return axios.post('/api/singerinfo/loadPage', params)
}
export const addSinger = form => {
  return axios.post('/api/singerinfo/addSingerinfo', form)
}
export const deleteSinger = id => {
  return axios.get('/api/singerinfo/deleteSingerinfo/'+id)
}

//songlist
export const listSonglist = params => {
  return axios.post('/api/songlist/loadPage', params)
}
export const addSonglist = form => {
  return axios.post('/api/songlist/addSonglist', form)
}
export const deleteSonglist = id => {
  return axios.get('/api/songlist/deleteSonglist/' + id)
}

//albuminfo
export const listAlbum = params => {
  return axios.post('/api/albuminfo/loadPage', params)
}
export const addAlbum = form => {
  return axios.post('/api/albuminfo/addAlbuminfo', form)
}
export const deleteAlbum = id => {
  return axios.get('/api/albuminfo/deleteAlbuminfo/' + id)
}

//songinfo
export const listSong = params => {
  return axios.post('/api/songinfo/loadPage', params)
}
export const addSong = form => {
  return axios.post('/api/songinfo/addSonginfo', form)
}
export const deleteSong = id => {
  return axios.get('/api/songinfo/deleteSonginfo/' + id)
}

//comment   (song)
export const listComment = params => {
  return axios.post('/api/comment/loadPage', params)
}
export const addComment = form => {
  return axios.post('/api/comment/addComment', form)
}
export const deleteComment = id => {
  return axios.get('/api/comment/deleteComment/' + id)
}

//cmt_songlist
export const listCmt_songlist = params => {
  return axios.post('/api/cmt_songlist/loadPage', params)
}
export const addCmt_songlist = form => {
  return axios.post('/api/cmt_songlist/addCmt_songlist', form)
}
export const deleteCmt_songlist = id => {
  return axios.get('/api/cmt_songlist/deleteCmt_songlist/' + id)
}

//cmt_album
export const listCmt_album = params => {
  return axios.post('/api/cmt_album/loadPage', params)
}
export const addCmt_album = form => {
  return axios.post('/api/cmt_album/addCmt_album', form)
}
export const deleteCmt_album = id => {
  return axios.get('/api/cmt_album/deleteCmt_album/' + id)
}

//notification
export const listNo = params => {
  return axios.post('/api/notification/loadPage', params)
}
export const addNo = form => {
  return axios.post('/api/notification/addNotification', form)
}
export const deleteNo = id => {
  return axios.get('/api/notification/deleteNotification/' + id)
}