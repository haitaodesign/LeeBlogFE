import Vue from 'vue'
import App from './App.vue'

const root = document.createElement('div');
document.body.appendChild(root)

import './assets/images/bg.jpeg'
import './assets/styles/test.scss'

new Vue({
    render: (h) => h(App)
}).$mount(root)