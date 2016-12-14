<template>
  <div class="page actionsheet">
    <div class="page__header">
      <h1 class="header__title">Dialog</h1>
      <p class="header__desc">弹窗</p>
    </div>
    <div class="page__body page__body--spacing">
      <weui-button @click="toggleDialog">iOS Dialog 样式一</weui-button>
      <weui-button @click="toggleDialog2">iOS Dialog 样式二</weui-button>
      <weui-button @click="toggleDialogAndroid">Android Dialog 样式一</weui-button>
      <weui-button @click="toggleDialogAndroid2">Android Dialog 样式二</weui-button>
    </div>
    <weui-dialog
      :show="iOSDialogShow"
      :title="弹窗标题"
      :body-content="bodyText"
      :hide-dialog="toggleDialog"
      :primary-button="confirmButton"
      :secondary-button="cancelButton"
      @secondary-button-click="handleSecondaryClick"
      @primary-button-click="handlePrimaryClick"
    >
    </weui-dialog>
    <weui-dialog
      :show="iOSDialogShow2"
      :body-content="bodyText"
      :hide-dialog="toggleDialog2"
      :primary-button="confirmButton2"
      @primary-button-click="handlePrimaryClick"
    >
    </weui-dialog>
    <weui-dialog
      :is-android="true"
      :show="androidDialogShow"
      :title="弹窗标题"
      :body-content="bodyText"
      :hide-dialog="toggleDialogAndroid"
      :primary-button="confirmButton"
      :secondary-button="cancelButton"
      @secondary-button-click="handleSecondaryClick"
      @primary-button-click="handlePrimaryClick"
    >
    </weui-dialog>
    <weui-dialog
      :is-android="true"
      :show="androidDialogShow2"
      :body-content="bodyText"
      :hide-dialog="toggleDialogAndroid2"
      :primary-button="confirmButton2"
      @primary-button-click="handlePrimaryClick"
    >
    </weui-dialog>
  </div>
</template>

<script>
import {Button, Dialog} from 'vweui'
export default {
  data () {
    return {
      iOSDialogShow: false,
      iOSDialogShow2: false,
      androidDialogShow: false,
      androidDialogShow2: false,
      cancelButton: {
        key: 'cancel',
        value: '取消'
      },
      confirmButton: {
        key: 'ok',
        value: '确认'
      },
      confirmButton2: {
        key: 'ok',
        value: '知道啦'
      },
      bodyText: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'
    }
  },
  methods: {
    toggleDialog: function () {
      this.iOSDialogShow = !this.iOSDialogShow
    },
    toggleDialog2: function () {
      this.iOSDialogShow2 = !this.iOSDialogShow2
    },
    toggleDialogAndroid: function () {
      this.androidDialogShow = !this.androidDialogShow
    },
    toggleDialogAndroid2: function () {
      this.androidDialogShow2 = !this.androidDialogShow2
    },
    handlePrimaryClick: function (key) {
      console.log('你刚刚点击了:' + key)
    },
    handleSecondaryClick: function (key) {
      console.log('你刚刚点击了:' + key)
    }
  },
  components: {
    'weui-dialog': Dialog,
    'weui-button': Button
  }
}
</script>