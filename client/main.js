import Vue from 'vue'
import App from './App.vue'

import './assets/images/bg.jpeg'
import './assets/styles/test.scss'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)
