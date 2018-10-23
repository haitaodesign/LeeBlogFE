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
  .post('/article/getArticleById', async (ctx) => {
    const article = await ctx.api.getArticleById(ctx.request.body)
    ctx.body = article
  })
module.exports = apiRouter
