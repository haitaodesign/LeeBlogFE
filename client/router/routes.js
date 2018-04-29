export default [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: '首页',
  component: () =>
    import('../views/home/home.vue')
}]
