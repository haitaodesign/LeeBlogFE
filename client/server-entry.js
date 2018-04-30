import createApp from './create-app'

export default context => {
  return new Promise((resolve, reject) => {
    const {app, router} = createApp()
    router.push(context.url)
    router.onReady(() => {
      const mathedComponents = router.getMatchedComponents()
      if (!mathedComponents.length) {
        return reject(new Error('no component matched!'))
      }
      context.meta = app.$meta()
      resolve(app)
    })
  })
}
