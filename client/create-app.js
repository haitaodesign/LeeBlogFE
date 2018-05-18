import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Meta from 'vue-meta'

import App from './App.vue'
import createStore from './store/store.js'
import createRouter from './router/index.js'
import Vuetify from 'vuetify'
import './assets/styles/main.styl'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Meta)

Vue.use(Vuetify)

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
