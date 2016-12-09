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
import TabBar from './example/tabbar'
import SearchBar from './example/searchbar'
import Cell from './example/cell'
import Uploader from './example/uploader'
import Gallery from './example/gallery'
import Article from './example/article'
import Badge from './example/badge'
import Footer from './example/footer'
import Icon from './example/icon'
import Loadmore from './example/loadmore'
import Panel from './example/panel'
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
  { path: '/tabbar', component: TabBar },
  { path: '/searchbar', component: SearchBar },
  { path: '/cell', component: Cell },
  { path: '/uploader', component: Uploader },
  { path: '/gallery', component: Gallery },
  { path: '/article', component: Article },
  { path: '/badge', component: Badge },
  { path: '/footer', component: Footer },
  { path: '/icon', component: Icon },
  { path: '/loadmore', component: Loadmore },
  { path: '/panel', component: Panel },
  { path: '/', component: App }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for routes: routes
})

new Vue({
  router
}).$mount('#app')
