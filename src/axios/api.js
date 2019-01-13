import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'



//songinfo
export const listSong = params => {
  return axios.get('/api/songinfo/findall_page?currentPage='+params.currentPage+'&pageSize='+params.pageSize)
}
export const addSong = form => {
  return axios.post('/api/songinfo/addSonginfo?song_id='+form.song_id+'&song_name='+form.song_name+'&singer_id='+form.singer_id+'&album_id='+form.album_id)
}
export const deleteSong = id => {
  return axios.delete('/api/songinfo/deleteSonginfo?song_id=' + id)
}
export const updateSong = form => {
  return axios.put('/api/songinfo/updateSonginfo?song_id='+form.song_id+'&song_name='+form.song_name+'&singer_id='+form.singer_id+'&album_id='+form.album_id)
}

//admininfo
export const listAdmin = params => {
  return axios.post('/api/admininfo/findall', params)
}
export const addAdmin = form => {
  return axios.post('/api/admininfo/addAdmininfo', form)
}
export const deleteAdmin = id => { 
  return axios.get('/api/admininfo/deleteAdmininfo/' + id)
}

//userinfo
export const listUser = params => {
  return axios.get('/api/userinfo/findall_page?currentPage='+params.currentPage+'&pageSize='+params.pageSize)
}
export const addUser = form => {
  return axios.post('/api/userinfo/addUserinfo?user_id='+form.user_id+'&user_nickname='+form.user_nickname+'&user_real_name='+form.user_real_name+'&user_phone_number='+form.user_phone_number+'&user_email='+form.user_email)
}
export const deleteUser = id => { 
  return axios.delete('/api/userinfo/deleteUserinfo?user_id=' + id)
}
export const updateUser = form => {
  return axios.put('/api/userinfo/updateUserinfo?user_id='+form.user_id+'&user_nickname='+form.user_nickname+'&user_real_name='+form.user_real_name+'&user_phone_number='+form.user_phone_number+'&user_email='+form.user_email)
}
export const searchUser = name => {
  return axios.get('/api/userinfo/fingbyuser_nickname?user_nickname='+name)
}

//singerinfo
export const listSinger = params => {
  return axios.get('/api/artistinfo/findsingerall_page?currentPage='+params.currentPage+'&pageSize='+params.pageSize)
}
export const addSinger = form => {
  return axios.post('/api/artistinfo/addArtistinfo?singer_id='+form.singer_id+'&singer_name='+form.singer_name+'&singer_label='+form.singer_label)
}
export const deleteSinger = id => {
  return axios.delete('/api/artistinfo/deleteArtistinfo?singer_id='+id)
}
export const updateSinger = form =>{
  return axios.put('/api/artistinfo/updateArtistinfo?singer_id='+form.singer_id+'&singer_name='+form.singer_name+'&singer_label='+form.singer_label)
}

//songlist
export const listSonglist = params => {
  return axios.get('/api/songlist/findall_page?currentPage='+params.currentPage+'&pageSize='+params.pageSize)
}
export const addSonglist = form => {
  return axios.post('/api/songlist/addSonglist?songlist_id='+form.songlist_id+'&songlist_name='+form.songlist_name+'&user_id='+form.user_id+'&songlist_label='+form.songlist_label+'&description='+form.description)
}
export const deleteSonglist = id => {
  return axios.delete('/api/songlist/deleteSonglist?songlist_id=' + id)
}
export const updateSonglist = form =>{
  return axios.put('/api/songlist/updateSonglist?songlist_id='+form.songlist_id+'&songlist_name='+form.songlist_name+'&user_id='+form.user_id+'&songlist_label='+form.songlist_label+'&description='+form.description)
}

//albuminfo
export const listAlbum = params => {
  return axios.get('/api/albuminfo/findalbuminfoall_page?currentPage='+params.currentPage+'&pageSize='+params.pageSize)
}
export const addAlbum = form => {
  return axios.post('/api/albuminfo/addAlbuminfo?album_id='+form.album_id+'&album_name='+form.album_name+'&singer_id='+form.singer_id+'&album_date='+form.album_date)
}
export const deleteAlbum = id => {
  return axios.delete('/api/albuminfo/deleteAlbuminfo?album_id=' + id)
}
export const updateAlbum = form =>{
  return axios.put('/api/albuminfo/updateAlbuminfo?album_id='+form.album_id+'&album_name='+form.album_name+'&singer_id='+form.singer_id+'&album_date='+form.album_date)
}

//comment   (song)
export const listComment = params => {
  return axios.get('/api/comment/findall?currentPage='+params.currentPage+'&pageSize='+params.pageSize)
}
export const addComment = form => {
  return axios.post('/api/comment/addComment?comment_id='+form.comment_id+'&user_id='+form.user_id+'&song_id='+form.song_id+'&songlist_id='+form.songlist_id+'&comment_content='+form.comment_content+'&comment_time='+form.comment_time)
}
export const deleteComment = params => {
  return axios.delete('/api/comment/deleteComment?comment_id=' + params.c_id+'&song_id='+params.s_id)
}
export const updateComment = form =>{
  return axios.put('/api/comment/updateComment?comment_id='+form.comment_id+'&user_id='+form.user_id+'&song_id='+form.song_id+'&songlist_id='+form.songlist_id+'&comment_content='+form.comment_content+'&comment_time='+form.comment_time)
}

//cmt_songlist
export const listCmt_songlist = params => {
  return axios.get('/api/cmt_songlist/findall?currentPage='+params.currentPage+'&pageSize='+params.pageSize)
}
export const addCmt_songlist = form => {
  return axios.post('/api/cmt_songlist/addCmt_songlist?comment_id='+form.comment_id+'&user_id='+form.user_id+'&songlist_id='+form.songlist_id+'&comment_content='+form.comment_content+'&comment_time='+form.comment_time)
}
export const deleteCmt_songlist = params => {
  return axios.delete('/api/cmt_songlist/deleteCmt_songlist?comment_id=' + params.c_id+'&songlist_id='+params.s_id)
}
export const updateCmt_songlist = form =>{
  return axios.put('/api/cmt_songlist/updateCmt_songlist?comment_id='+form.comment_id+'&user_id='+form.user_id+'&songlist_id='+form.songlist_id+'&comment_content='+form.comment_content+'&comment_time='+form.comment_time)
}

//cmt_album
export const listCmt_album = params => {
  return axios.get('/api/cmt_album/findall?currentPage='+params.currentPage+'&pageSize='+params.pageSize)
}
export const addCmt_album = form => {
  return axios.post('/api/cmt_album/addCmt_album?comment_id='+form.comment_id+'&user_id='+form.user_id+'&album_id='+form.album_id+'&comment_content='+form.comment_content+'&comment_time='+form.comment_time)
}
export const deleteCmt_album = params => {
  return axios.delete('/api/cmt_album/deleteCmt_album?comment_id=' + params.c_id+'&album_id='+params.s_id)
}
export const updateCmt_album = form =>{
  return axios.put('/api/cmt_album/updateCmt_album?comment_id='+form.comment_id+'&user_id='+form.user_id+'&album_id='+form.album_id+'&comment_content='+form.comment_content+'&comment_time='+form.comment_time)
}

//notification
export const listNo = params => {
  return axios.get('/api/notification/findNotification_page?currentPage='+params.currentPage+'&pageSize='+params.pageSize)
}
export const addNo = form => {
  return axios.post('/api/notification/addNotification?notification_id='+ form.notification_id+'&admin_id='+form.admin_id+'&notification_head='+form.notification_head+'&notification_content='+form.notification_content+'&notification_time='+form.notification_time)
}
export const deleteNo = id => {
  return axios.delete('/api/notification/deleteNotification?notification_id=' + id)
}
export const updateNo = form =>{
return axios.put('/api/notification/updateNotification?notification_id='+ form.notification_id+'&admin_id='+form.admin_id+'&notification_head='+form.notification_head+'&notification_content='+form.notification_content+'&notification_time='+form.notification_time)
}

