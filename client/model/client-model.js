import axios from 'axios'
import { createError } from '@utils'
const QS = require('qs')
const env = process.env.NODE_ENV
const request = axios.create({
  baseURL: env === 'development' ? 'http://localhost:88/api' : 'https://www.leehaitao.com/api',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: function (data) {
    return QS.stringify(data)
  }
})

const handleRequest = ({ status, data, ...rest }) => {
  if (status === 200) {
    return data
  } else {
    throw createError(status, rest)
  }
}

export default {
  async getArticleList (data) {
    return handleRequest(await request.post('/articles', { page: 1 }))
  },
  async getArticleById (data) {
    return handleRequest(await request.post('article/getArticleById', data))
  }

}
