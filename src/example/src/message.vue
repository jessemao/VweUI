<template>
  <div class="page message">
    <div class="page__header">
      <h1 class="header__title">Message</h1>
      <p class="header__desc">提示页</p>
    </div>
    <div class="page__body page__body--spacing">
      <weui-button-area>
        <router-link to="message_success" class="router-link">
          <weui-button>成功提示页</weui-button>
        </router-link>
        <router-link to="message_fail" class="router-link">
          <weui-button>失败提示页</weui-button>
        </router-link>
      </weui-button-area>
    </div>
  </div>
</template>

<script>
import Button from 'components/button'
import ButtonArea from 'components/button_area'
export default {
  components: {
    'weui-button': Button,
    'weui-button-area': ButtonArea
  }
}
</script>

<style>
.router-link .weui-btn {
  margin: 3px auto;
}
</style>