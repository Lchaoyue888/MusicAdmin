import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Mock from 'mockjs'

export default {
  init() {
    const mock = new MockAdapter(axios)

    mock.onGet('/success').reply(200, {
      msg: 'success'
    })

    mock.onGet('/error').reply(500, {
      msg: 'failure'
    })
//userinfo
    mock.onPost('/api/userinfo/findall').reply(req => {
      return new Promise((resolve, reject) => {
        console.log(req.data)
        const data = req.data ? JSON.parse(req.data) : {
          size: 30
        }
        const result = {
          rows: [],
          total: 10000
        }
        for (let i = 0; i < data.size; i++) {
          const item = Mock.mock({
            user_nickname: Mock.Random.cname(),
            user_real_name: Mock.Random.cname(),
            user_sex: Mock.Random.cname(),
            user_country: Mock.Random.cname(),
            user_city : Mock.Random.cname(),
            user_intro : Mock.Random.cname(),
            avatar_url : Mock.Random.url(),
            user_province : Mock.Random.cname(),
            user_credit : Mock.Random.string('number',5),
            user_phone_number: Mock.Random.string('number', 18),
            user_id: Mock.Random.string('number', 11),
            user_email: Mock.Random.email()
          })
          result.rows.push(item)
        }
        setTimeout(() => {
          resolve([200, result])
        })
      })
    })

    mock.onPost('api/userinfo/addUserinfo').reply(req => {
      // console.log("1111111111111")
      // console.log(req)
      return new Promise((resolve,reject) => {
        const data = req.data ? JSON.parse(req.data) : {}

        const result = {}
        if (data.user_nickname){//设置必填参数提示
          result.success = true
          result.message = '保存成功'
        }else{
          result.success = false
          result.message = '昵称是必填参数'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })

    mock.onGet(/\/api\/userinfo\/deleteUserinfo\/\w+/).reply(req => {
      // console.log("deleteUserinfo")
      // console.log(req)
      return new Promise((resolve,reject) => {
        // const data = req.data ? JSON.parse(req.data) : {}
        const result = {
          success : true,
          message : '删除成功'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
//admininfo
    mock.onPost('/api/admininfo/findall').reply(req => {
      return new Promise((resolve, reject) => {
        console.log(req.data)
        const data = req.data ? JSON.parse(req.data) : {
          size: 30
        }
        const result = {
          rows: [],
          total: 10000
        }
        for (let i = 0; i < data.size; i++) {
          const item = Mock.mock({
            nick_name: Mock.Random.cname(),
            true_name: Mock.Random.cname(),
            phone: Mock.Random.string('number', 18),
            admin_id: Mock.Random.string('number', 18),
            email: Mock.Random.email()
          })
          result.rows.push(item)
        }
        setTimeout(() => {
          resolve([200, result])
        })
      })
    })
    mock.onPost('api/admininfo/addAdmininfo').reply(req => {
      // console.log("1111111111111")
      // console.log(req)
      return new Promise((resolve,reject) => {
        const data = req.data ? JSON.parse(req.data) : {}

        const result = {}
        if (data.nick_name){
          result.success = true
          result.message = '保存成功'
        }else{
          result.success = false
          result.message = '昵称是必填参数'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    mock.onGet(/\/api\/admininfo\/deleteAdmininfo\/\w+/).reply(req => {
      // console.log("deleteAdmininfo")
      // console.log(req)
      return new Promise((resolve,reject) => {
        // const data = req.data ? JSON.parse(req.data) : {}
        const result = {
          success : true,
          message : '删除成功'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
//singerinfo
    mock.onPost('/api/artistinfo/findall').reply(req => {
      return new Promise((resolve, reject) => {
        console.log('11111111')
        const data = req.data ? JSON.parse(req.data) : {
          size: 30
        }
        const result = {
          rows: [],
          total: 10000
        }
        for (let i = 0; i < data.size; i++) {
          const item = Mock.mock({
            singer_name: Mock.Random.cname(),
            singer_id: Mock.Random.string('number', 18),
            singer_intro: Mock.Random.cname(),
            singer_label: Mock.Random.cname(),
            img_url : Mock.Random.url()
          })
          result.rows.push(item)
        }
        setTimeout(() => {
          resolve([200, result])
        })
      })
    })
    mock.onPost('api/artistinfo/addArtistinfo').reply(req => {
      // console.log("1111111111111")
      // console.log(req)
      return new Promise((resolve,reject) => {
        const data = req.data ? JSON.parse(req.data) : {}

        const result = {}
        if (data.singer_name){
          result.success = true
          result.message = '保存成功'
        }else{
          result.success = false
          result.message = '歌手名是必填参数'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    mock.onGet(/\/api\/artistinfo\/deleteArtistinfo\/\w+/).reply(req => {
      // console.log("deleteSingerinfo")
      // console.log(req)
      return new Promise((resolve,reject) => {
        // const data = req.data ? JSON.parse(req.data) : {}
        const result = {
          success : true,
          message : '删除成功'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
//songlist
    mock.onPost('/api/songlist/findall').reply(req => {
      return new Promise((resolve, reject) => {
        console.log('11111111')
        const data = req.data ? JSON.parse(req.data) : {
          size: 30
        }
        const result = {
          rows: [],
          total: 10000
        }
        for (let i = 0; i < data.size; i++) {
          const item = Mock.mock({
            songlist_name: Mock.Random.cname(),
            songlist_id: Mock.Random.string('number', 18),
            user_id: Mock.Random.string('number', 18),
            imgUrl : Mock.Random.url(),
            songlist_label : Mock.Random.cname(),
            song_number : Mock.Random.string('number',3),
            songlist_time : Mock.Random.cname(),
            description : Mock.Random.cname(),
            commentThread : Mock.Random.cname()
          })
          result.rows.push(item)
        }
        setTimeout(() => {
          resolve([200, result])
        })
      })
    })
    mock.onPost('api/songlist/addSonglist').reply(req => {
      // console.log("1111111111111")
      // console.log(req)
      return new Promise((resolve,reject) => {
        const data = req.data ? JSON.parse(req.data) : {}

        const result = {}
        if (data.songlist_name){
          result.success = true
          result.message = '保存成功'
        }else{
          result.success = false
          result.message = '歌单名是必填参数'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    mock.onGet(/\/api\/songlist\/deleteSonglist\/\w+/).reply(req => {
      // console.log("deleteSonglist")
      // console.log(req)
      return new Promise((resolve,reject) => {
        // const data = req.data ? JSON.parse(req.data) : {}
        const result = {
          success : true,
          message : '删除成功'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
//albuminfo
    mock.onPost('/api/albuminfo/findall').reply(req => {
      return new Promise((resolve, reject) => {
        console.log('11111111')
        const data = req.data ? JSON.parse(req.data) : {
          size: 30
        }
        const result = {
          rows: [],
          total: 10000
        }
        for (let i = 0; i < data.size; i++) {
          const item = Mock.mock({
            album_name: Mock.Random.cname(),
            album_date: Mock.Random.cname(),
            album_label: Mock.Random.cname(),
            album_pic: Mock.Random.url(),
            commentThread: Mock.Random.cname(),
            size: Mock.Random.cname(),
            comment_thread: Mock.Random.cname(),
            album_id: Mock.Random.string('number', 16),
            singer_id: Mock.Random.string('number', 16)
          })
          result.rows.push(item)
        }
        setTimeout(() => {
          resolve([200, result])
        })
      })
    })
    mock.onPost('api/albuminfo/addAlbuminfo').reply(req => {
      // console.log("1111111111111")
      // console.log(req)
      return new Promise((resolve,reject) => {
        const data = req.data ? JSON.parse(req.data) : {}

        const result = {}
        if (data.album_name){
          result.success = true
          result.message = '保存成功'
        }else{
          result.success = false
          result.message = '专辑名是必填参数'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    mock.onGet(/\/api\/albuminfo\/deleteAlbuminfo\/\w+/).reply(req => {
      // console.log("deleteAlbuminfo")
      // console.log(req)
      return new Promise((resolve,reject) => {
        // const data = req.data ? JSON.parse(req.data) : {}
        const result = {
          success : true,
          message : '删除成功'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    //songinfo
    mock.onPost('/api/songinfo/findall').reply(req => {
      return new Promise((resolve, reject) => {
        console.log('11111111')
        const data = req.data ? JSON.parse(req.data) : {
          size: 30
        }
        const result = {
          rows: [],
          total: 10000
        }
        for (let i = 0; i < data.size; i++) {
          const item = Mock.mock({
            song_name: Mock.Random.cname(),
            duration: Mock.Random.cname(),
            popularity: Mock.Random.cname(),
            comment_thread: Mock.Random.cname(),
            song_label: Mock.Random.cname(),
            song_label: Mock.Random.cname(),
            song_url: Mock.Random.url(),
            pic_url: Mock.Random.url(),
            lrc_url: Mock.Random.url(),
            down_url: Mock.Random.url(),
            album_id: Mock.Random.string('number', 18),
            song_id: Mock.Random.string('number', 18),
            singer_id: Mock.Random.string('number', 18)
          })
          result.rows.push(item)
        }
        setTimeout(() => {
          resolve([200, result])
        })
      })
    })
    mock.onPost('api/songinfo/addSonginfo').reply(req => {
      // console.log("1111111111111")
      // console.log(req)
      return new Promise((resolve,reject) => {
        const data = req.data ? JSON.parse(req.data) : {}

        const result = {}
        if (data.song_name){
          result.success = true
          result.message = '保存成功'
        }else{
          result.success = false
          result.message = '歌名是必填参数'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    mock.onGet(/\/api\/songinfo\/deleteSonginfo\/\w+/).reply(req => {
      // console.log("song")
      // console.log(req)
      return new Promise((resolve,reject) => {
        // const data = req.data ? JSON.parse(req.data) : {}
        const result = {
          success : true,
          message : '删除成功'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    //comment    (song)
    mock.onPost('/api/comment/findall').reply(req => {
      return new Promise((resolve, reject) => {
        console.log('11111111')
        const data = req.data ? JSON.parse(req.data) : {
          size: 30
        }
        const result = {
          rows: [],
          total: 10000
        }
        for (let i = 0; i < data.size; i++) {
          const item = Mock.mock({
            comment_id: Mock.Random.string('number',18),
            report_number: Mock.Random.string('number',18),
            likedcount: Mock.Random.string('number',18),
            user_id: Mock.Random.string('number', 18),
            song_id: Mock.Random.string('number', 18),
            comment_content: Mock.Random.cname(),
            comment_time: Mock.Random.cname(),
            parentCommentId: Mock.Random.cname(),
            parent_comment_id: Mock.Random.cname()
          })
          result.rows.push(item)
        }
        setTimeout(() => {
          resolve([200, result])
        })
      })
    })
    mock.onPost('api/comment/addComment').reply(req => {
      // console.log("1111111111111")
      // console.log(req)
      return new Promise((resolve,reject) => {
        const data = req.data ? JSON.parse(req.data) : {}

        const result = {}
        if (data.comment_id){
          result.success = true
          result.message = '保存成功'
        }else{
          result.success = false
          result.message = 'ID是必填参数'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    mock.onGet(/\/api\/comment\/deleteComment\/\w+/).reply(req => {
      // console.log("songcomment")
      // console.log(req)
      return new Promise((resolve,reject) => {
        // const data = req.data ? JSON.parse(req.data) : {}
        const result = {
          success : true,
          message : '删除成功'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    //cmt_songlist
    mock.onPost('/api/cmt_songlist/findall').reply(req => {
      return new Promise((resolve, reject) => {
        console.log('11111111')
        const data = req.data ? JSON.parse(req.data) : {
          size: 30
        }
        const result = {
          rows: [],
          total: 10000
        }
        for (let i = 0; i < data.size; i++) {
          const item = Mock.mock({
            comment_id: Mock.Random.string('number',18),
            user_id: Mock.Random.string('number', 18),
            songlist_id: Mock.Random.string('number', 18),
            report_number: Mock.Random.string('number',18),
            likedcount: Mock.Random.string('number',18),
            comment_content: Mock.Random.cname(),
            comment_time: Mock.Random.cname(),
            parentCommentId: Mock.Random.cname(),
            parent_comment_id: Mock.Random.cname(),
          })
          result.rows.push(item)
        }
        setTimeout(() => {
          resolve([200, result])
        })
      })
    })
    mock.onPost('api/cmt_songlist/addCmt_songlist').reply(req => {
      // console.log("1111111111111")
      // console.log(req)
      return new Promise((resolve,reject) => {
        const data = req.data ? JSON.parse(req.data) : {}

        const result = {}
        if (data.comment_id){
          result.success = true
          result.message = '保存成功'
        }else{
          result.success = false
          result.message = 'ID是必填参数'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    mock.onGet(/\/api\/cmt_songlist\/deleteCmt_songlist\/\w+/).reply(req => {
      // console.log("songlist comment")
      // console.log(req)
      return new Promise((resolve,reject) => {
        // const data = req.data ? JSON.parse(req.data) : {}
        const result = {
          success : true,
          message : '删除成功'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    //cmt_album
    mock.onPost('/api/cmt_album/findall').reply(req => {
      return new Promise((resolve, reject) => {
        console.log('11111111')
        const data = req.data ? JSON.parse(req.data) : {
          size: 30
        }
        const result = {
          rows: [],
          total: 10000
        }
        for (let i = 0; i < data.size; i++) {
          const item = Mock.mock({
            comment_id: Mock.Random.string('number',18),
            report_number: Mock.Random.string('number',18),
            likedcount: Mock.Random.string('number',18),
            user_id: Mock.Random.string('number', 18),
            album_id: Mock.Random.string('number', 18),
            comment_content: Mock.Random.cname(),
            comment_time: Mock.Random.cname(),
            parentCommentId: Mock.Random.cname(),
            parent_comment_id: Mock.Random.cname(),
          })
          result.rows.push(item)
        }
        setTimeout(() => {
          resolve([200, result])
        })
      })
    })
    mock.onPost('api/cmt_album/addCmt_album').reply(req => {
      // console.log("1111111111111")
      // console.log(req)
      return new Promise((resolve,reject) => {
        const data = req.data ? JSON.parse(req.data) : {}

        const result = {}
        if (data.comment_id){
          result.success = true
          result.message = '保存成功'
        }else{
          result.success = false
          result.message = 'ID是必填参数'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    mock.onGet(/\/api\/cmt_album\/deleteCmt_album\/\w+/).reply(req => {
      // console.log("album comment")
      // console.log(req)
      return new Promise((resolve,reject) => {
        // const data = req.data ? JSON.parse(req.data) : {}
        const result = {
          success : true,
          message : '删除成功'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    //notification
    mock.onPost('/api/notification/findall').reply(req => {
      return new Promise((resolve, reject) => {
        console.log('11111111')
        const data = req.data ? JSON.parse(req.data) : {
          size: 30
        }
        const result = {
          rows: [],
          total: 10000
        }
        for (let i = 0; i < data.size; i++) {
          const item = Mock.mock({
            notification_id: Mock.Random.string('number',18),
            admin_id: Mock.Random.string('number', 18),
            notification_head: Mock.Random.cname(),
            notification_content: Mock.Random.cname(),
            notification_time: Mock.Random.cname(),
          })
          result.rows.push(item)
        }
        setTimeout(() => {
          resolve([200, result])
        })
      })
    })
    mock.onPost('api/notification/addNotification').reply(req => {
      // console.log("1111111111111")
      // console.log(req)
      return new Promise((resolve,reject) => {
        const data = req.data ? JSON.parse(req.data) : {}

        const result = {}
        if (data.notification_id){
          result.success = true
          result.message = '保存成功'
        }else{
          result.success = false
          result.message = 'ID是必填参数'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    mock.onGet(/\/api\/notification\/deleteNotification\/\w+/).reply(req => {
      // console.log("album comment")
      // console.log(req)
      return new Promise((resolve,reject) => {
        // const data = req.data ? JSON.parse(req.data) : {}
        const result = {
          success : true,
          message : '删除成功'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
  }
 
}
