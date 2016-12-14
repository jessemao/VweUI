<template>
  <div class="page">
    <div class="page__header">
      <h1 class="header__title">VeUI</h1>
      <p class="header__desc">Vue.js 2.0 for WeUI</p>
    </div>
    <div class="page__body">
      <div v-for="cate in categories">
        <p class="subtitle">{{cate.title}}</p>
        <grid :data="cate.items"></grid>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {Grid} from 'vweui'
export default {
  data () {
    return {
      categories: [
        {
          title: '表单',
          items: [
            {
              text: 'Button',
              url: 'button',
              image: '/static/images/icon_nav_button.png'
            },
            {
              text: 'Input',
              url: 'input',
              image: '/static/images/icon_nav_cell.png'
            },
            {
              text: 'Slider',
              url: 'slider',
              image: '/static/images/icon_nav_progress.png'
            },
            {
              text: 'Uploader',
              url: 'uploader',
              image: '/static/images/icon_nav_form.png'
            }
          ]
        },
        {
          title: '基础组件',
          items: [
            {
              text: 'Article',
              url: 'article',
              image: '/static/images/icon_nav_article.png'
            },
            {
              text: 'Badge',
              url: 'badge',
              image: '/static/images/icon_nav_button.png'
            },
            {
              text: 'Footer',
              url: 'footer',
              image: '/static/images/icon_nav_button.png'
            },
            {
              text: 'Gallery',
              url: 'gallery',
              image: '/static/images/icon_nav_icons.png'
            },
            {
              text: 'Grid',
              url: '/',
              image: '/static/images/icon_nav_layout.png'
            },
            {
              text: 'Icons',
              url: 'icon',
              image: '/static/images/icon_nav_icons.png'
            },
            {
              text: 'Loadmore',
              url: 'loadmore',
              image: '/static/images/icon_nav_flow.png'
            },
            {
              text: 'Panel',
              url: 'panel',
              image: '/static/images/icon_nav_panel.png'
            },
            {
              text: 'Preview',
              url: 'preview',
              image: '/static/images/icon_nav_panel.png'
            },
            {
              text: 'Progress',
              url: 'progress',
              image: '/static/images/icon_nav_progress.png'
            }
          ]
        },
        {
          title: '操作反馈',
          items: [
            {
              text: 'Actionsheet',
              url: 'actionsheet',
              image: '/static/images/icon_nav_actionsheet.png'
            },
            {
              text: 'Dialog',
              url: 'dialog',
              image: '/static/images/icon_nav_dialog.png'
            },
            {
              text: 'Message',
              url: 'message',
              image: '/static/images/icon_nav_msg.png'
            },
            {
              text: 'Toast',
              url: 'toast',
              image: '/static/images/icon_nav_toast.png'
            }
          ]
        },
        {
          title: '导航相关',
          items: [
            {
              text: 'Navbar',
              url: 'navbar',
              image: '/static/images/icon_nav_nav.png'
            },
            {
              text: 'Tabbar',
              url: 'tabbar',
              image: '/static/images/icon_nav_tab.png'
            }
          ]
        },
        {
          title: '搜索相关',
          items: [
            {
              text: 'SearchBar',
              url: 'searchbar',
              image: '/static/images/icon_nav_search_bar.png'
            }
          ]
        }
      ]
    }
  },
  components: {
    Grid
  }
}
</script>
<style>
.subtitle {
  padding: 5px;
  color: #3cc51f;
  font-size: 15px;
  text-align: center;
}
</style>