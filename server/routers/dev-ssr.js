const Router = require('koa-router')
const axios = require('axios')
const MemoryFS = require('memory-fs')
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const VueServerRendererPlugin = require('vue-server-renderer')

const serverRender = require('./server-render')
const serverConfig = require('../../build/webpack.server.conf')

const serverComplier = webpack(serverConfig)

const mfs = new MemoryFS()

serverComplier.outputFileSystem = mfs

let bundle
serverComplier.watch({}, (error, stats) => {
  if (error) throw error
  stats = stats.toJson()
  stats.errors.forEach(error => {
    console.log(error)
  })
  stats.warnings.forEach(warn => {
    console.log(warn)
  })
  const bundlePath = path.join(serverConfig.output.path, 'vue-ssr-server-bundle.json')
  bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
  console.log('new bundle generated')
})

const handleSSR = async (ctx) => {
  if (!bundle) {
    ctx.body = 'please waiting!'
    return
  }

  const clientManifestResp = await axios.get(
    'http://127.0.0.1:8081/public/vue-ssr-client-manifest.json'
  )
  const clientManifest = clientManifestResp.data
  const template = fs.readFileSync(
    path.join(__dirname, '../server.template.ejs'),
    'utf-8'
  )

  const renderer = VueServerRendererPlugin
    .createBundleRenderer(bundle, {
      inject: false,
      clientManifest
    })

  await serverRender(ctx, renderer, template)
}

const router = new Router()
router.get('*', handleSSR)

module.exports = router
