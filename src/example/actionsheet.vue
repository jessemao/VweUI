<template>
  <div class="page actionsheet">
    <div class="page__header">
      <h1 class="header__title">ActionSheet</h1>
      <p class="header__desc">上拉单</p>
    </div>
    <div class="page__body page__body--spacing">
      <weui-button @click="toggleActionSheet">点击弹出上拉单</weui-button>
      <weui-button @click="toggleActionSheetAndroid">点击Android选项</weui-button>
    </div>
    <weui-actionsheet
      :show="actionSheetShow"
      :menus="actionSheetMenus"
      :action="actionSheetAction"
      :hide-action-sheet="toggleActionSheet"
      :transparent="false"
      @on-menu-click="handleMenuClick" @on-action-click="handleActionClick">
    </weui-actionsheet>
    <weui-actionsheet
      :is-android="true"
      :show="actionSheetShowAndroid"
      :menus="actionSheetMenus"
      :action="actionSheetAction"
      :hide-action-sheet="toggleActionSheetAndroid"
      :transparent="false"
      @on-menu-click="handleMenuClickAndroid" @on-action-click="handleActionClickAndroid">
    </weui-actionsheet>
  </div>
</template>

<script>
import Button from 'components/button'
import ActionSheet from 'components/actionsheet'

export default {
  data () {
    return {
      actionSheetShow: false,
      actionSheetShowAndroid: false,
      actionSheetMenus: {
        menu1: '示例菜单',
        menu2: '示例菜单',
        menu3: '示例菜单',
        menu4: '示例菜单'
      },
      actionSheetAction: {
        key: 'cancel',
        value: '取消'
      }
    }
  },
  methods: {
    handleMenuClick: function (key) {
      console.log('你刚刚点击了:' + key)
    },
    handleActionClick: function (key) {
      console.log('你点击了操作项，Actionsheet要关闭了')
    },
    toggleActionSheet: function () {
      this.actionSheetShow = !this.actionSheetShow
    },
    handleMenuClickAndroid: function (key) {
      console.log('你刚刚点击了:' + key)
    },
    handleActionClickAndroid: function (key) {
      console.log('你点击了操作项，Actionsheet要关闭了')
    },
    toggleActionSheetAndroid: function () {
      this.actionSheetShowAndroid = !this.actionSheetShowAndroid
    }
  },
  components: {
    'weui-actionsheet': ActionSheet,
    'weui-button': Button
  }
}
</script>