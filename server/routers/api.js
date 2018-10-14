const Router = require('koa-router')

const apiRouter = new Router({prefix: '/api'})

apiRouter
  .get('/articles', async (ctx) => {
    const params = {
      current: 1,
      pageSize: 10
    }
    const articles = await ctx.api.getArticleList(params)
    ctx.body = articles
  })
module.exports = apiRouter
