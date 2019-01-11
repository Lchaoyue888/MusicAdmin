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
            email: Mock.Random.email()
          })
          result.rows.push(item)
        }
        setTimeout(() => {
          resolve([200, result])
        })
      })
    })
  }
}
