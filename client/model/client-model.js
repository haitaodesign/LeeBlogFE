import axios from 'axios'
import { createError } from '@utils'
const QS = require('qs')
const request = axios.create({
  baseURL: 'http://localhost:3000/api',
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
    return handleRequest(await request.post('/articles', data))
  },
  async getArticleById (data) {
    return handleRequest(await request.post('/article/getArticleById', data))
  }

}
