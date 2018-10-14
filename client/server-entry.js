import createApp from './create-app'

export default context => {
  return new Promise((resolve, reject) => {
    const {app, router, store} = createApp()
    router.push(context.url)
    router.onReady(() => {
      const mathedComponents = router.getMatchedComponents()
      if (!mathedComponents.length) {
        return reject(new Error('no component matched!'))
      }
      Promise.all(mathedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            route: router.currentRoute,
            store
          })
        }
      })).then((data) => {
        context.meta = app.$meta()
        context.state = store.state
        context.router = router
        resolve(app)
      })
    })
  })
}
