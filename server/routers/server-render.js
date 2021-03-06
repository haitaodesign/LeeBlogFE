const ejs = require('ejs')
module.exports = async (ctx, renderer, template) => {
  ctx.header['Content-Type'] = 'text/html'
  const context = {
    url: ctx.path
  }
  try {
    const appString = await renderer.renderToString(context)
    const {
      title
    } = context.meta.inject()
    const html = ejs.render(template, {
      appString,
      style: context.renderStyles(),
      scripts: context.renderScripts(),
      title: title.text(),
      initalState: context.renderState()
    })
    ctx.body = html
  } catch (error) {
    console.log('render error', error)
    throw error
  }
}
