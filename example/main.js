import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './src/App'
import Button from './src/Button'
import ActionSheet from './src/ActionSheet'
import Dialog from './src/dialog'
import Message from './src/message'
import MessageSuccess from './src/message_success'
import MessageFail from './src/message_fail'
import Toast from './src/toast'
import NavBar from './src/navbar'
import TabBar from './src/tabbar'
import SearchBar from './src/searchbar'
import Cell from './src/cell'
import Uploader from './src/uploader'
import Gallery from './src/gallery'
import Article from './src/article'
import Badge from './src/badge'
import Footer from './src/footer'
import Icon from './src/icon'
import Loadmore from './src/loadmore'
import Panel from './src/panel'
import Preview from './src/preview'
import Progress from './src/progress'
import Slider from './src/slider'
import './assets/style/weui.css'
import './assets/style/main.css'
import '../dist/css/veui.css'

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
  { path: '/preview', component: Preview },
  { path: '/progress', component: Progress },
  { path: '/slider', component: Slider },
  { path: '/', component: App }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for routes: routes
})

new Vue({
  router
}).$mount('#app')
