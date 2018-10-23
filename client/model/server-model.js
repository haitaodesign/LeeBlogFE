const createApi = require('../../server/api')
const api = createApi()

export default {
  getArticleList (data) {
    return api.getArticleList(data)
  },
  getArticleById (data) {
    return api.getArticleById(data)
  }
}
