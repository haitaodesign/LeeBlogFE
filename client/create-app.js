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

Vue.use(Vuetify, { theme: {
  primary: '#2d8cf0',
  secondary: '#2b85e4',
  accent: '#5cadff',
  error: '#ed3f14',
  info: '#2d8cf0',
  success: '#19be6b',
  warning: '#ff9900'
}})

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
