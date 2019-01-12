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
    mock.onPost('/api/userinfo/loadPage').reply(req => {
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
            user_id: Mock.Random.string('number', 18),
            email: Mock.Random.email()
          })
          result.rows.push(item)
        }
        setTimeout(() => {
          resolve([200, result])
        })
      })
    })

    mock.onPost('api/userinfo/addUserinfo').reply(req => {
      console.log("1111111111111")
      console.log(req)
      return new Promise((resolve,reject) => {
        const data = req.data ? JSON.parse(req.data) : {}

        const result = {}
        if (data.nick_name){
          result.success = true
          result.message = '保存成功'
        }else{
          result.success = false
          result.message = '姓名是必填参数'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })

    mock.onGet(/\/api\/userinfo\/deleteUserinfo\/\w+/).reply(req => {
      console.log("deleteUserinfo")
      console.log(req)
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
    mock.onPost('/api/admininfo/loadPage').reply(req => {
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
      console.log("1111111111111")
      console.log(req)
      return new Promise((resolve,reject) => {
        const data = req.data ? JSON.parse(req.data) : {}

        const result = {}
        if (data.nick_name){
          result.success = true
          result.message = '保存成功'
        }else{
          result.success = false
          result.message = '姓名是必填参数'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    mock.onGet(/\/api\/admininfo\/deleteAdmininfo\/\w+/).reply(req => {
      console.log("deleteAdmininfo")
      console.log(req)
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
    mock.onPost('/api/singerinfo/loadPage').reply(req => {
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
          })
          result.rows.push(item)
        }
        setTimeout(() => {
          resolve([200, result])
        })
      })
    })
    mock.onPost('api/singerinfo/addSingerinfo').reply(req => {
      console.log("1111111111111")
      console.log(req)
      return new Promise((resolve,reject) => {
        const data = req.data ? JSON.parse(req.data) : {}

        const result = {}
        if (data.singer_name){
          result.success = true
          result.message = '保存成功'
        }else{
          result.success = false
          result.message = '姓名是必填参数'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    mock.onGet(/\/api\/singerinfo\/deleteSingerinfo\/\w+/).reply(req => {
      console.log("deleteSingerinfo")
      console.log(req)
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
    mock.onPost('/api/songlist/loadPage').reply(req => {
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
          })
          result.rows.push(item)
        }
        setTimeout(() => {
          resolve([200, result])
        })
      })
    })
    mock.onPost('api/songlist/addSonglist').reply(req => {
      console.log("1111111111111")
      console.log(req)
      return new Promise((resolve,reject) => {
        const data = req.data ? JSON.parse(req.data) : {}

        const result = {}
        if (data.songlist_name){
          result.success = true
          result.message = '保存成功'
        }else{
          result.success = false
          result.message = '姓名是必填参数'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    mock.onGet(/\/api\/songlist\/deleteSonglist\/\w+/).reply(req => {
      console.log("deleteSonglist")
      console.log(req)
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
    mock.onPost('/api/albuminfo/loadPage').reply(req => {
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
            album_id: Mock.Random.string('number', 18),
            singer_id: Mock.Random.string('number', 18),
          })
          result.rows.push(item)
        }
        setTimeout(() => {
          resolve([200, result])
        })
      })
    })
    mock.onPost('api/albuminfo/addAlbuminfo').reply(req => {
      console.log("1111111111111")
      console.log(req)
      return new Promise((resolve,reject) => {
        const data = req.data ? JSON.parse(req.data) : {}

        const result = {}
        if (data.album_name){
          result.success = true
          result.message = '保存成功'
        }else{
          result.success = false
          result.message = '姓名是必填参数'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    mock.onGet(/\/api\/albuminfo\/deleteAlbuminfo\/\w+/).reply(req => {
      console.log("deleteAlbuminfo")
      console.log(req)
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
    mock.onPost('/api/songinfo/loadPage').reply(req => {
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
            song_id: Mock.Random.string('number', 18),
            singer_id: Mock.Random.string('number', 18),
          })
          result.rows.push(item)
        }
        setTimeout(() => {
          resolve([200, result])
        })
      })
    })
    mock.onPost('api/songinfo/addSonginfo').reply(req => {
      console.log("1111111111111")
      console.log(req)
      return new Promise((resolve,reject) => {
        const data = req.data ? JSON.parse(req.data) : {}

        const result = {}
        if (data.song_name){
          result.success = true
          result.message = '保存成功'
        }else{
          result.success = false
          result.message = '姓名是必填参数'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    mock.onGet(/\/api\/songinfo\/deleteSonginfo\/\w+/).reply(req => {
      console.log("song")
      console.log(req)
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
    mock.onPost('/api/comment/loadPage').reply(req => {
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
            song_id: Mock.Random.string('number', 18),
          })
          result.rows.push(item)
        }
        setTimeout(() => {
          resolve([200, result])
        })
      })
    })
    mock.onPost('api/comment/addComment').reply(req => {
      console.log("1111111111111")
      console.log(req)
      return new Promise((resolve,reject) => {
        const data = req.data ? JSON.parse(req.data) : {}

        const result = {}
        if (data.comment_id){
          result.success = true
          result.message = '保存成功'
        }else{
          result.success = false
          result.message = '姓名是必填参数'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    mock.onGet(/\/api\/comment\/deleteComment\/\w+/).reply(req => {
      console.log("songcomment")
      console.log(req)
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
    mock.onPost('/api/cmt_songlist/loadPage').reply(req => {
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
          })
          result.rows.push(item)
        }
        setTimeout(() => {
          resolve([200, result])
        })
      })
    })
    mock.onPost('api/cmt_songlist/addCmt_songlist').reply(req => {
      console.log("1111111111111")
      console.log(req)
      return new Promise((resolve,reject) => {
        const data = req.data ? JSON.parse(req.data) : {}

        const result = {}
        if (data.comment_id){
          result.success = true
          result.message = '保存成功'
        }else{
          result.success = false
          result.message = '姓名是必填参数'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    mock.onGet(/\/api\/cmt_songlist\/deleteCmt_songlist\/\w+/).reply(req => {
      console.log("songlist comment")
      console.log(req)
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
    mock.onPost('/api/cmt_album/loadPage').reply(req => {
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
            album_id: Mock.Random.string('number', 18),
          })
          result.rows.push(item)
        }
        setTimeout(() => {
          resolve([200, result])
        })
      })
    })
    mock.onPost('api/cmt_album/addCmt_album').reply(req => {
      console.log("1111111111111")
      console.log(req)
      return new Promise((resolve,reject) => {
        const data = req.data ? JSON.parse(req.data) : {}

        const result = {}
        if (data.comment_id){
          result.success = true
          result.message = '保存成功'
        }else{
          result.success = false
          result.message = '姓名是必填参数'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    mock.onGet(/\/api\/cmt_album\/deleteCmt_album\/\w+/).reply(req => {
      console.log("album comment")
      console.log(req)
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
    mock.onPost('/api/notification/loadPage').reply(req => {
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
          })
          result.rows.push(item)
        }
        setTimeout(() => {
          resolve([200, result])
        })
      })
    })
    mock.onPost('api/notification/addNotification').reply(req => {
      console.log("1111111111111")
      console.log(req)
      return new Promise((resolve,reject) => {
        const data = req.data ? JSON.parse(req.data) : {}

        const result = {}
        if (data.notification_id){
          result.success = true
          result.message = '保存成功'
        }else{
          result.success = false
          result.message = '姓名是必填参数'
        }
        setTimeout(() => {
          resolve([200,result])
        })
      })

    })
    mock.onGet(/\/api\/notification\/deleteNotification\/\w+/).reply(req => {
      console.log("album comment")
      console.log(req)
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
