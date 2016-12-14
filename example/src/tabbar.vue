<template>
  <div class="page tabbar">
    <weui-tabbar :tabs="tabs" :active="activeTab" @change="handleChange">
      <div class="page__header">
        <h1 class="header__title">Tab Bar</h1>
        <p class="header__desc">底部Tab bar</p>
      </div>
    </weui-tabbar>
  </div>
</template>

<script>
import {TabBar} from 'vweui'

export default {
  data () {
    return {
      tabs: {
        0: {
          imgUrl: '/static/images/icon_tabbar.png',
          imgAlt: '图片0',
          badgeCount: 8,
          displayDotBadge: false,
          label: '微信'
        },
        1: {
          imgUrl: '/static/images/icon_tabbar.png',
          imgAlt: '图片1',
          badgeCount: -1,
          displayDotBadge: false,
          label: '通讯录'
        },
        2: {
          imgUrl: '/static/images/icon_tabbar.png',
          imgAlt: '图片2',
          badgeCount: 0,
          displayDotBadge: true,
          label: '发现'
        },
        3: {
          imgUrl: '/static/images/icon_tabbar.png',
          imgAlt: '图片3',
          badgeCount: -1,
          displayDotBadge: false,
          label: '我'
        }
      },
      activeTab: '0'
    }
  },
  methods: {
    handleChange: function (key) {
      this.activeTab = key
    }
  },
  components: {
    'weui-tabbar': TabBar
  }
}
</script>

<style>
.page.tabbar {
  height: 100%;
}
</style>