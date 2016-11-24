import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './example/App'
import Button from './example/Button'
import ActionSheet from './example/ActionSheet'
import Dialog from './example/dialog'
import Message from './example/message'
import MessageSuccess from './example/message_success'
import MessageFail from './example/message_fail'
import Toast from './example/toast'
import NavBar from './example/navbar'
import './assets/style/weui.css'
import './assets/style/main.css'

Vue.use(VueRouter)

const routes = [
  { path: '/button', component: Button },
  { path: '/actionsheet', component: ActionSheet },
  { path: '/dialog', component: Dialog },
  { path: '/message', component: Message },
  { path: '/message_success', component: MessageSuccess },
  { path: '/message_fail', component: MessageFail },
  { path: '/toast', component: Toast },
  { path: '/navbar', component: NavBar },
  { path: '/', component: App }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for routes: routes
})

new Vue({
  router
}).$mount('#app')
