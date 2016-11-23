import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './example/App'
import Button from './example/Button'
import ActionSheet from './example/ActionSheet'
import './assets/style/weui.css'
import './assets/style/main.css'

Vue.use(VueRouter)

const routes = [
  { path: '/button', component: Button },
  { path: '/actionsheet', component: ActionSheet },
  { path: '/', component: App }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for routes: routes
})

new Vue({
  router
}).$mount('#app')
