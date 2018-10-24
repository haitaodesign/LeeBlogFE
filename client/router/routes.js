export default [{
  path: '/',
  redirect: '/articles'
}, {
  path: '/articles',
  name: '文章',
  meta: {
  },
  component: () =>
    import('../views/articles')
}, {
  path: '/articles/:_id',
  name: '文章详情页',
  component: () =>
    import('../views/articleDetail')
}]
