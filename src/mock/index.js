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
    mock.onPost('/api/songlistinfo/loadPage').reply(req => {
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

    mock.onPost('api/userinfo/addUserinfo').reply(req => {
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
  }
}
