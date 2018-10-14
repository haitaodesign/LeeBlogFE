const axios = require('axios')
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

const createError = (code, resp) => {
  const err = new Error(resp.message)
  err.code = code
  return err
}

const handleRequest = ({ status, data, ...rest }) => {
  if (status === 200) {
    return data.data
  } else {
    throw createError(status, rest)
  }
}

module.exports = () => {
  return {
    async getArticleList (data) {
      return handleRequest(await request.post('/articles', data))
    }
  }
}
