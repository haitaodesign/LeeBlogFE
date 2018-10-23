import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import './assets/styles/normalize.styl'
import './assets/styles/main.styl'
import createStore from './store/store.js'
import createRouter from './router/index.js'
import App from './App.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/styles/github-markdown.css'
Vue.use(iView)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Meta)

export default () => {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return {app, router, store}
}
