import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Mock from 'mockjs'

export default {
    init() {
        let mock = new MockAdapter(axios)

        mock.onGet('/success').reply(200, {
            msg: 'success'
        });

        mock.onGet('/error').reply(500, {
            msg: 'failure'
        })


        mock.onPost('/api/userinfo/loadPage').reply(req => {
            return new Promise((resolve, reject) => {
                console.log(req.data)
                let data = req.data ? JSON.parse(req.data) : {
                    size: 30
                }
                let result = {
                    rows: [],
                    total: 10000
                }
                for (let i = 0; i < data.size; i++) {
                    let item = Mock.mock({
                        image: Mock.Random.image('240x240', '#ffcc33', '#FFF', 'jpg'),
                        album_name: Mock.Random.ctitle(5),
                        phone: Mock.Random.string('number', 18),
                        email: Mock.Random.emial()
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