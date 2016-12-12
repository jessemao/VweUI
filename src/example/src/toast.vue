<template>
  <div class="page toast">
    <div class="page__header">
      <h1 class="header__title">Toast</h1>
      <p class="header__desc">弹窗式提醒</p>
    </div>
    <div class="page__body page__body--spacing">
      <weui-button @click="toggleToast">成功提示</weui-button>
      <weui-button @click="toggleToast2">加载中提示</weui-button>
    </div>
    <weui-toast :show="showToast" :loading-type="false" bodyContent="已完成"></weui-toast>
    <weui-toast :show="showToast2" :loading-type="true">
      <p>加载中</p>
    </weui-toast>
  </div>
</template>

<script>
import Button from 'components/button'
import Toast from 'components/toast'
export default {
  data () {
    return {
      showToast: false,
      showToast2: false
    }
  },
  methods: {
    toggleToast: function () {
      this.showToast = true
      setTimeout(() => {
        this.showToast = false
      }, 2000)
    },
    toggleToast2: function () {
      this.showToast2 = true
      setTimeout(() => {
        this.showToast2 = false
      }, 2000)
    }
  },
  components: {
    'weui-toast': Toast,
    'weui-button': Button
  }
}
</script>